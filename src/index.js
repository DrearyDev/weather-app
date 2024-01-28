'use strict';
// https://api.weatherapi.com/v1/current.json?key=04751a96d37d46faac2201108242001&q=Paris
// https://api.weatherapi.com/v1/forecast.json?key=04751a96d37d46faac2201108242001&q=Paris&days=3
// https://api.weatherapi.com/v1/current.json?key=04751a96d37d46faac2201108242001&q=auto:ip
// https://api.weatherapi.com/v1/history.json?key=04751a96d37d46faac2201108242001&q=auto:ip&dt=2023-08-10
import './style.css';
import { currentDate, pastDates, futureDates } from './handleDates.js';
import { defaultView, changeDegrees } from './handleDOM.js';

// run view with users ip address as location by default
defaultView();

const toggleSwitch = document.querySelector('.switch');
toggleSwitch.addEventListener('click', (e) => {
    changeDegrees();

    e.preventDefault();
    return false;
});


const dialog = document.querySelector('dialog');
const dialogBtn = document.querySelector('.open-dialog');
dialogBtn.addEventListener('click', (e) => {
    dialog.showModal();
});

const exitBtn = document.querySelector('.exit-btn');
exitBtn.addEventListener('click', (e) => {
    dialog.close();
});