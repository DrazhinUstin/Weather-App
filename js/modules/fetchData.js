import {displayMessage} from "./utils.js";

const API_KEY = '47aa3f162d5a14753c3f3f801bf2f2bc';

const fetchData = async (city, geo) => {
    let url;
    if (city) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    } else {
        const {latitude, longitude} = geo;
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
    }
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;    
    } catch (error) {
        displayMessage('Sorry, something went wrong...', 'alert');
        console.log(error);
    }
};

export default fetchData;