import fetchData from "./modules/fetchData.js";
import displayData from "./modules/displayData.js";
import {setDate, displayMessage} from "./modules/utils.js";

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-form input');
const resultDOM = document.querySelector('.search-result');
const returnBtn = document.querySelector('.return');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const value = input.value;
    input.value = '';
    displayMessage(`Searching <span>${value}</span>...`);
    const data = await fetchData(value);
    console.log(data);
    if (data.message) {
        displayMessage(`Sorry, no result for <span>${value}</span>...`, 'alert');
    } else {
        displayData(data);
        setDate();
        resultDOM.classList.add('show');
    }
});

returnBtn.addEventListener('click', () => {
    displayMessage('Welcome to our weather app! Want to know what the weather is like today?');
    resultDOM.classList.remove('show');
});

