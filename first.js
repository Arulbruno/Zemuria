let orifir={a:1,b:{c:2}};
let copy=structuredClone(orifir);
copy.b.c=3;
console.log(orifir.b.c); 
console.log(copy.b.c);

// structuredClone performs a deep copy of an object, 
// ensuring that nested objects are duplicated rather than merely referenced.
// Changes to the cloned object do not affect the original object, 
// as demonstrated by the outputs of the console.log statements.