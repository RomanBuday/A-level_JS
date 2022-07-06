"Use strict";

document.addEventListener('DOMContentLoaded', function () {
    const app = document.querySelector('#App');
    const arr = [];
    const getUrl = 'https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6';

    createCart();

    async function getTabs(url, fn) {
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        data.forEach((el, index) => {
            generateTabs(
                data[index].image_url, 
                data[index].name, 
                data[index].description, 
                data[index].id, 
                data[index].abv, 
                data[index].ph);
            });
        fn();
    }
  
    getTabs(getUrl, selectId);
  
    function createTab(img, title, descr, id, abv, ph) {
        return `
            <div class="wrapper" id="${id}">
                <div class="wrapper__top">
                    <img class="wrapper__top_img" src="${img}" alt="">
                    <div class="info">
                        <h3 class="info__title">${title}</h3>
                        <p class="info__descr">${descr}</p>
                        <ul class="info__list">
                            <li class="info__item"><span>ID</span>${id}<span></span></li>
                            <li class="info__item"><span>ABV</span>${abv}<span></span></li>
                            <li class="info__item"><span>PH</span>${ph}<span></span></li>
                        </ul>
                    </div>
                </div>

                <input class="wrapper__bottom_btn" type="button" value="Get ID">
            </div>
        `;
    }

    function generateTabs(img, title, descr, id, abv, ph) {
        app.insertAdjacentHTML('beforeend', createTab(img, title, descr, id, abv, ph)); 
    }
  
    function selectId(){
        document.querySelectorAll('.wrapper__bottom_btn').forEach(el => {
            el.addEventListener('click', ()=> {
            console.log(el.parentElement.id);
            addStorage(el.parentElement.id);
            });
        });
    }

    function addStorage(id){
        arr.push(id);
        localStorage.setItem('ID', arr);
        getStorageData();
    }

    function getStorageData(){
        if(localStorage.getItem('ID')) {
            document.querySelector('.card__title span').textContent = localStorage.getItem('ID');
        } else {
            document.querySelector('.card__title span').textContent = 0;
        }
        clearStorage();
    } 
    
    getStorageData();
  
    function createCart(){
        const html =  `
            <div class="card">
                <h2 class="card__title">Your selected items <span></span></h2>
                <input class="card__clear" type="button" value="Clear">
            </div>
        `;
        app.insertAdjacentHTML('beforeend', html); 
    }

    function clearStorage(){
        document.querySelector('.card__clear').addEventListener('click', ()=> {
            localStorage.removeItem('ID');
            getStorageData();
        });
    }
});