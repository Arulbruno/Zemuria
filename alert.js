function showToast(type,message){
    const toastContainer=document.getElementById('toast-container');
    const toast=document.createElement('div');
    toast.classList.add('toast',type);

    toast.innerHTML=' <span>${message}</span> <button onclick="closeToast(this)">Close</button>';
    toastContainer.appendChild(toast);

    setTimeout(()=>{
        toast.classList.add('show');
    },100);
    setTimeout(()=>{
        toast.classList.remove('show');
        setTimeout(()=>{
            toast.remove();
        },500);
    },5000);
}
function closeToast(button){
    const toast=button.parentElement;
    toast.classList.remove('show');
    setTimeout(()=>{
        toast.remove();
    },500);
}
// This showToast function displays a toast notification with a specific message and type. 
// It creates the toast element, appends it to the container, and animates its appearance. 
// After 5 seconds, the toast automatically hides and then is removed from the DOM