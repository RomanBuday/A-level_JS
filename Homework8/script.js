"Use strict";

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8],
    area =  document.querySelector(".area"),
    reset = document.querySelector(".reset");


for (let i = 0; i < 9; i++) {
    area.innerHTML += '<div class="field"></div>';
}     

let fields = document.querySelectorAll(".field");

for(let i = 0; i < fields.length; i++) {
    fields[i].index = i;
    fields[i].addEventListener('click', function(event) {
    fields[event.target.index].innerHTML = 'X';
    delete arr[(arr.indexOf(event.target.index))];

    function compareRandom(a, b) {
        return Math.random() - 0.5;
    }

    arr.sort(compareRandom);
    fields[arr[0]].innerHTML = 'O';
    checkWin();
    arr.shift();     
    });      
}

function checkWin() {
    const winArr = [
        [0, 1, 2],
        [0, 3 ,6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8], 
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
    ];    

    for (let j = 0; j < winArr.length; j++) {
        let win = winArr[j];

        if (fields[win[0]].innerHTML == fields[win[1]].innerHTML &&
            fields[win[1]].innerHTML == fields[win[2]].innerHTML && 
            fields[win[0]].innerHTML != '') 
            {
            alert(fields[win[0]].innerHTML + ' WIN!');
        }
    }
} 

reset.addEventListener('click', function reset() {
    for(let i = 0; i < fields.length; i++) {
        fields[i].innerHTML = '';
    }
});
 