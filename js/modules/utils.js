const setDate = () => {
    const dateDOM = document.querySelector('.date');
    const formatter = new Intl.DateTimeFormat('en', {
        year: "numeric",
        month: "long",
        day: '2-digit',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
    });
    dateDOM.textContent = formatter.format(new Date());
};

const displayMessage = (message, className) => {
    const messageDOM = document.querySelector('.message-area p');
    messageDOM.parentElement.classList.remove('alert');
    if (className) messageDOM.parentElement.classList.add(className);
    messageDOM.innerHTML = message;
};

const hidePreloader = () => {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => preloader.classList.add('hide'), 200);
};

export {setDate, displayMessage, hidePreloader};
