import Notiflix from 'notiflix';
const URL = 'https://restcountries.com/v3.1/name/';

function fetchCountries(name) {
    return fetch(`${URL}/${name}`)
    .then(r => r.json())

}


function onError() {
    Notiflix.Notify.failure('Oops, there is no country with that name');
}

function toManyMatchesFound() {
    Notiflix.Notify.warning('Too many matches found. Please enter a more specific name.');
}

export {fetchCountries, onError, toManyMatchesFound};


// function createMarkup({name: {official}, capital, population, flags: {svg}, languages}) {
   
//     return `
//     <div class ="country-card">
//     <div class ="flag-name-wrap">
//     <img src=${svg} class="article-img" width=40 height=20>
//     <h2 class="country-title">${official}</h2>
//     </div>
//     <p class="country-Capital"><span class="span-text">Capital:</span> ${capital}</p>
//     <p class="country-Population"><span class="span-text">Population:</span> ${population}</p>
    
//     <p class="country-Languages"><span class="span-text">Languages:</span> ${Object.values(languages)}</p>
//     </div>
//     `
// }

// function updateNewsList(markup) {
// refs.countryInfo.innerHTML = markup;
// }