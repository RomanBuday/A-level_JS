"Use strict";

 document.addEventListener('DOMContentLoaded', function () {
    const getUrl = new URL('https://api.github.com/search/users');
    const searchButton = document.querySelector('.search__btn');
    const searchInput = document.querySelector('.search__input');
    const tabWrap = document.querySelector('#tab__wrapper');    
    const arr = [];

    const findUser = async() => {
        try {
            const {value} = searchInput;
            const text = value.split(" ").join("");
            getUrl.searchParams.set('q', text);

            if (text.length < 3) {
                throw new Error("Empty search field");
            }
        
            const resp = await fetch(getUrl);
            if (!resp.ok) {
                throw new Error("User not found");
            }

            const data = await resp.json();
            console.log("data", data);

            data.forEach((el, index) => {
                generateTabs(
                    data[index].id,
                    data[index].avatar_url, 
                    data[index].login, 
                    data[index].score, 
                    data[index].type);
                });
        } catch (error) {
            alert(error.message);       
        }
    };

    searchButton.addEventListener("click", findUser);   
});

