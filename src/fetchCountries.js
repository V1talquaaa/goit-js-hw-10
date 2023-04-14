import Notiflix from 'notiflix';
const URL = 'https://restcountries.com/v3.1/name/';
function fetchCountries(name) {
    return fetch(`${URL}/${name}`)
    .then(r => r.json())
    // .then((r) => console.log(r))
    // .catch(err => console.error(err));
}

export {fetchCountries, onError};


// Notiflix.Notify.failure('Oops, there is no country with that name')

function onError() {
    Notiflix.Notify.failure('Oops, there is no country with that name');
}