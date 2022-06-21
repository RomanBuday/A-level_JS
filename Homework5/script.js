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
        if(item == true) {
            out += item;
        }
    });
    console.log(out);
};

obj.reverseKey = function() {
    const result = {};
    Object.entries(obj).forEach(([key, value]) => {
      result[value] = key;
    });
};

console.log(obj.getKeySum());
console.log(obj.reverseKey());


//---------------------------------------------------------

let holderDiv = document.querySelector("div.holder");
holderDiv.setAttribute("style", "margin: 10px");


var item1 = document.createElement("div");
var itemText = document.createTextNode("1");
item1.appendChild(itemText);
item1.className = 'item';
holderDiv.appendChild(item1);
//item1.setAttribute("style", "margin-top: 30px");

var item2 = document.createElement("div");
var itemText = document.createTextNode("2");
item2.appendChild(itemText);
item2.className = 'item';
holderDiv.appendChild(item2);

var item3 = document.createElement("div");
var itemText = document.createTextNode("3");
item3.appendChild(itemText);
item3.className = 'item';
holderDiv.appendChild(item3);

var item4 = document.createElement("div");
var itemText = document.createTextNode("4");
item4.appendChild(itemText);
item4.className = 'item';
holderDiv.appendChild(item4);

var item5 = document.createElement("div");
var itemText = document.createTextNode("5");
item5.appendChild(itemText);
item5.className = 'item';
holderDiv.appendChild(item5);