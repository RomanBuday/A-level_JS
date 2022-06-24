"Use strict";
let element = document.createElement("p");
element.innerText = "Click on me";
document.body.append(element);

let picture = document.createElement("img");
picture.style.width = "100px";
picture.src = "https://klike.net/uploads/posts/2020-04/1587719791_1.jpg"; 

element.addEventListener("click", (event) => {
    document.body.appendChild(picture);
    if(picture.style.display == "none") {
        picture.style.display = "block";
        picture.style.width = "100px";
    }
});

picture.addEventListener("mouseover", (event) => {
    picture.style.width = "200px";
    picture.style.transition = "width 3s";
});

picture.addEventListener("click", (event) => {
    picture.style.display = "none";
});

//---------------------------------------------------------------------------------

const arr = [1, 2, 3, 0, 4, 5, 6];

let sumArr = 0;

arr.reduceRight(function(sum, value) {
	if (value == 0) {
		sumArr = sum;
	} 
	return sum + value;
});

console.log(sumArr);    

//---------------------------------------------------------------------------------

const arr2 = arr;

let sumArr2 = 0;
let newArr = [];

for (let i = 0; i < arr2.length; i++) {
    sumArr2 += arr[i];
    newArr.push(arr[i]);

    if(sumArr2 > 10) {
        break;
    }
}

console.log(newArr.length, newArr);

//-----------------------------------------------------

let input = document.createElement("input");
document.body.appendChild(input);

let button = document.createElement("button");
button.innerText = "Add text from input";
document.body.appendChild(button);

button.addEventListener("click", (event) => {
    let inputEnteredText = document.querySelector("input").value;

    if(inputEnteredText.length !== 0) {
        console.log(inputEnteredText);
    } 
    else {
        console.log("field is empty");
    }
});

//----------------------------------------------------------------------

// let aElem = document.querySelector('a');

// let aLink = aElem.getAttribute('href');

// aElem.addEventListener("mouseover", (event) => {
//         aElem.text = aElem.text + " (" + aLink + ")";
//     },
//     {
//         once: true,
//     }
// );

let aElem = document.querySelectorAll('a');
for (let i = 0; i < aElem.length; i++) {
	aElem[i].addEventListener('mouseover', ReffOnMouseOver);
}
 
function ReffOnMouseOver() {
	this.innerHTML = this.innerHTML + ' (' + this.href + ')';
	this.removeEventListener('mouseover', ReffOnMouseOver);
}

//-----------------------------------------------------------------------

let buttonForFade = document.createElement("button");
buttonForFade.innerHTML = "This button fade away on click";
document.body.appendChild(buttonForFade);

buttonForFade.addEventListener("click", (event) => {
    buttonForFade.style.display = 'none';
});

//----------------------------------------------------------------------

//Это задание не делаем

// const form = document.querySelector("form");

// const formButton = form.querySelector("button");

// const inputName = document.querySelector("[name='name']");
// const inputAge = document.querySelector("[name='age']");
// const checkbox = document.querySelector("[type='checkbox']");

// const validateInputsForCheckbox = () => {
//   console.log("Validate checkbox function was called");
//   if (inputName.value.length > 0 && inputAge.value > 18) {
//     checkbox.removeAttribute("disabled");
//   } else {
//     checkbox.setAttribute("disabled", "");
//   }
// };

// form.onsubmit = (e) => {
//   console.log("Submitted");
//   e.preventDefault();

//   if (checkbox.checked == false) {
//     alert("Вы не согласились на условия использования");
//     return;
//   }
//   console.log("Пользователь согласился");

//   const formData = {
//     username: inputName.value,
//     age: inputAge.value,
//     isAgree: checkbox.checked,
//   };
// };

// const nameChangeHandler = (event) => {
//   validateInputsForCheckbox();
// };

// const ageChangeHandler = (event) => {
//   validateInputsForCheckbox();
// };

// inputName.addEventListener("input", nameChangeHandler);
// inputAge.addEventListener("input", ageChangeHandler);



// inputAge.addEventListener("keydown", (event) => {
//     if(event.keyCode < 48 || event.keyCode > 57) {
//         inputAge.value = "";
//     }
// });

//-------------------------------------------------------------------

function logDataAttr(event) { 
    let el = Object.entries(event.target.dataset); 
    
    if(el.length === 0) {
        console.log('У этого элемента 0 дата аттрибутов');
    } 
    else { 
        console.log(`У этого элемента ${el.length} дата атрибутов)}`); 
        el.forEach(item => console.log(`Аттрибут ${item[0]} - ${item[1]}`)); 
    } 
} 