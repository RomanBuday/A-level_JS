document.addEventListener('DOMContentLoaded', function () {
    const out = document.querySelector('.app-main__list'),
        baseUrl = 'https://api.github.com/users',
        searchTitle = document.querySelector('.app-header__title'),
        searchInp = document.querySelector('.app-header__input'),
        searchBtn = document.querySelector('.app-header__btn');
    let inpDate = '';
  
    searchBtn.addEventListener('click', e => {
        searchTitle.classList.toggle('hideEl');
        searchBtn.classList.toggle('act');
        if (searchInp.classList.contains('hideEl')) {
            searchInp.classList.remove('hideEl');
            searchInp.classList.add('inpWidth');
        } else {
            searchInp.classList.add('hideEl');
            searchInp.classList.remove('act');
        }
    });
  
    searchBtn.addEventListener('click', () => {
        if (searchBtn.classList.contains('act')) {
            if (searchInp.value.length > 3) {
                inpDate = searchInp.value;
                init(inpDate);
                searchInp.value = '';
            }
        }
    });
  
    function init(value) {
        const url = `https://api.github.com/search/users?q=${value}`;
        document.querySelectorAll('.app-item').forEach(e => e.remove());
        const a = findUser(url);
        a.then(e => toHtml(e.items[0]));
    }
  
    function createItem(data) {
        return `
            <li class="app-main__item app-item">
                <img src="${data.avatar_url}" loading="lazy" alt="logo user profile" class="app-item__img">
                <div class="app-item-info">
                    <h3 class="app-item-info__title">${data.login}</h3>
                    <div class="app-item-info__score">score ${data.score}</div>
                </div>
            </li>`;
    }

    function toHtml(data) {
        out.insertAdjacentHTML('afterbegin', createItem(data)); 
    }
});
  
const findUser = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    return await data;
};