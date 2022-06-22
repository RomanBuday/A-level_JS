"Use strict";

const arr = [1, 1, 2, 2, 3];
const arr2 = [1, 1, 2, 2, 3, 4];

Array.prototype.getUnique = function()  {
    const set =  new Set(this);
    const arr = [];
    for(let item of set) {
        arr.push(item);
    }
    return arr;

};
console.log(arr2.getUnique());

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
holderDiv.style.width = "calc (100% - 10px)";
holderDiv.style.border = "5px solid black";
holderDiv.style.borderRadius = "20px 20px 0 0";
holderDiv.style.flexWrap = "Wrap";


var item1 = document.createElement("div");
var itemText = document.createTextNode("1");
item1.appendChild(itemText);
item1.className = 'item';
holderDiv.appendChild(item1);
item1.style.flexDirection = "column";
item1.style.justifyContent = "center";
item1.style.minHeight = "100px";
item1.style.textAlign = "center";
item1.style.backgroundColor = "#f00";
item1.style.width = "50%";
item1.style.borderTopLeftRadius = "15px";
item1.style.flexGrow = "2";


var item2 = document.createElement("div");
var itemText = document.createTextNode("2");
item2.appendChild(itemText);
item2.className = 'item';
holderDiv.appendChild(item2);
item2.style.flexDirection = "column";
item2.style.justifyContent = "center";
item2.style.minHeight = "100px";
item2.style.textAlign = "center";
item2.style.backgroundColor = "#afeeee";
item2.style.order = "2";
item2.style.flexGrow = "1";


var item3 = document.createElement("div");
var itemText = document.createTextNode("3");
item3.appendChild(itemText);
item3.className = 'item';
holderDiv.appendChild(item3);
item3.style.flexDirection = "column";
item3.style.justifyContent = "center";
item3.style.minHeight = "100px";
item3.style.textAlign = "center";
item3.style.order = "1";
item3.style.backgroundColor = "#00f";
item3.style.flexGrow = "1";


var item4 = document.createElement("div");
var itemText = document.createTextNode("4");
item4.appendChild(itemText);
item4.className = 'item';
holderDiv.appendChild(item4);
item4.style.flexDirection = "column";
item4.style.justifyContent = "center";
item4.style.minHeight = "100px";
item4.style.textAlign = "center";
item4.style.order = "3";
item4.style.backgroundColor = "#0f0";
item4.style.flexGrow = "1";


var item5 = document.createElement("div");
var itemText = document.createTextNode("5");
item5.appendChild(itemText);
item5.className = 'item';
holderDiv.appendChild(item5);
item5.style.flexDirection = "column";
item5.style.justifyContent = "center";
item5.style.minHeight = "100px";
item5.style.textAlign = "center";
item5.style.backgroundColor = "#ffa500";
item5.style.width = "50%";
item5.style.borderTopRightRadius = "15px";
item5.style.flexGrow = "2";