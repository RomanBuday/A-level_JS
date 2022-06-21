"Use strict";

const arr = [1, 1, 2, 2, 3];
const arr2 = [1, 1, 2, 2, 3, 4];

Array.prototype.getUnique = function(arr) {
    const newArr = Array.from(new Set(arr));
    return newArr;
};

console.log(arr.getUnique(arr2));

//--------------------------------------------------

const obj = {
    a: 1, 
    b: 2, 
    c: 3, 
    d: false, 
    e: 0,
};

obj.getKeySum = function() {
    let out = 0;
    Object.values(this).forEach((item)=> {
        if(item ==  true) {
            out += item;
        }
    });
    console.log(out);
};

obj.reverseKey = function() {
    
};

console.log(obj);