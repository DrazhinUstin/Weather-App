import fetchData from "./fetchData.js";
import displayData from "./displayData.js";
import {setDate, displayMessage} from "./utils.js";

const setupSearch = () => {

    const intro = document.querySelector('.intro');
    const form = document.querySelector('.search-form');
    const input = document.querySelector('.search-form input');
    const clearBtn = document.querySelector('.clear-btn');
    const returnBtn = document.querySelector('.return');
    const geolocationBtn = document.querySelector('.geolocation');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const value = input.value;
        input.value = '';
        input.blur();
        displayMessage(`Searching <span>${value}</span>...`);
        const data = await fetchData(value);
        if (data.message) {
            displayMessage(`Sorry, no result for <span>${value}</span>...`, 'alert');
        } else {
            displayData(data);
            setDate();
            intro.classList.add('show-result');
        }
    });
    
    clearBtn.addEventListener('click', () => {
        input.value = '';
        input.focus();
    });
    
    returnBtn.addEventListener('click', () => {
        input.value = '';
        displayMessage('Welcome to weather app! Want to get information about weather?');
        intro.classList.remove('show-result');
    });
    
    geolocationBtn.addEventListener('click', () => {
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    });
    
    const geoSuccess = async (position) => {
        displayMessage('Search by geolocation in progress...');
        const {coords: {latitude, longitude}} = position;
        const data = await fetchData(null, {latitude, longitude});
        if (data.message) {
            displayMessage(`Sorry, no result for latitude:<span>${latitude}</span>, longitude:<span>${longitude}</span>...`, 'alert');
        } else {
            displayData(data);
            setDate();
            intro.classList.add('show-result');
        }
    };
    
    const geoError = (error) => {
        displayMessage(`User denied Geolocation`, 'alert');
        console.log(error);
    };

};

export default setupSearch;