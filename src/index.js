import './css/styles.css';
import _debounce from 'lodash.debounce';
import { fetchCountries, onError } from './fetchCountries';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 500;
const refs = {
    search: document.getElementById('search-box'),
    countryInfo: document.getElementById('countryInfo'),
}

refs.search.addEventListener('input', _debounce(searchByCountryName, DEBOUNCE_DELAY));


function searchByCountryName(evt) {
 const query = evt.target.value;
 fetchCountries(query.trim()).then((data) => {
  
    if(data.length > 10) {
        Notiflix.Notify.warning('Too many matches found. Please enter a more specific name.');
    } else if(data.status === 404) {
        onError();
    };

    const markup = data.reduce(
        (markup, country) => markup + createMarkup(country), "");
    
    updateNewsList(markup);

 })
//  .catch(setTimeout(onError, 1000));


};

function createMarkup({name: {official}, capital, population, flags: {svg}, languages}) {
   
    return `
    <div class ="country-card">
    <div class ="flag-name-wrap">
    <img src=${svg} class="article-img" width=40 height=20>
    <h2 class="country-title">${official}</h2>
    </div>
    <p class="country-Capital"><span class="span-text">Capital:</span> ${capital}</p>
    <p class="country-Population"><span class="span-text">Population:</span> ${population}</p>
    
    <p class="country-Languages"><span class="span-text">Languages:</span> ${Object.values(languages)}</p>

    </div>
    `
}


function updateNewsList(markup) {
refs.countryInfo.innerHTML = markup;
}