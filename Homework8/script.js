"Use strict";

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8],
    area =  document.querySelector(".area"),
    reset = document.querySelector(".reset");


for (let i = 0; i < 9; i++) {
    area.innerHTML += '<div class="field"></div>';
}     

let fields = document.querySelectorAll(".field");

function start() {  
    for (let i = 0; i < fields.length; i++) {
        fields[i].index = i;
        fields[i].addEventListener('click', function() {
            if (i % 2 == 0) {
                this.innerHTML = 'X';
            } else {
                this.innerHTML = '0';
            }
            i++;
            checkWin();
        });         
    }
}
    
start(); 

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
        } else if(j == 8) {
            alert('Pare!');
        }
    }
} 

reset.addEventListener('click', function reset() {
    for(let i = 0; i < fields.length; i++) {
        fields[i].innerHTML = '';
    }
});
 