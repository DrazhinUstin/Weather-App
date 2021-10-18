const displayData = (data) => {
    // Destructure data
    const {name, sys: {country}, main: {temp, feels_like, humidity, pressure}, weather: [{description, icon}], clouds: {all}, wind: {speed}} = data;
    // Add data to the DOM
    const nameDOM = document.querySelector('.search-result h2');
    nameDOM.textContent = `${name}, ${country}`;
    const imageDOM = document.querySelector('.temperature img');
    imageDOM.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    const tempDOM = document.querySelector('.temperature h2');
    tempDOM.textContent = `${Math.round(temp)}°C`;
    const feelingsDOM = document.querySelector('.feelings');
    feelingsDOM.innerHTML = `Feels like: <span class="feels-like">${Math.round(feels_like)}°C</span>, <span>${description}</span>`;
    const humidityDOM = document.querySelector('.humidity span');
    humidityDOM.textContent = `${humidity}%`;
    const pressureDOM = document.querySelector('.pressure span');
    pressureDOM.textContent = `${pressure} hPa`;
    const cloudsDOM = document.querySelector('.clouds span');
    cloudsDOM.textContent = `${all}%`;
    const windDOM = document.querySelector('.wind span');
    windDOM.textContent = `${speed} m/s`;
};

export default displayData;