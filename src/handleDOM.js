import { fetchData } from "./fetchData";

/*----------------------------------------------------------------------------------------------
default view will use the ip address as location and get the weather for the
two past days along with the current day and two future days.
----------------------------------------------------------------------------------------------*/

const container = document.querySelector('.container');
const mainContainer = document.querySelector('.top');
const cardContainer = document.querySelector('.container > .card-container');

const location = document.querySelector('.location');
const date = document.querySelector('.date');
const icon = document.querySelector('.icon');
const condition = document.querySelector('.condition');
const averageTemp = document.querySelector('.average');
const highTemp = document.querySelector('.high');
const lowTemp = document.querySelector('.low');
const rainChance = document.querySelector('.rain-chance');
const snowChance = document.querySelector('.snow-chance');

function getMonth(num) {
    let number = Number(num) - 1;

    let months = [
        'Janurary',
        'Feburary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    return months[number];
};

async function defaultView() {

    let data = await Promise.resolve(fetchData('auto:ip'))
    console.log(data);

    for (let i in data) {
        if (Number(i) !== 2) {

            let div = document.createElement('div');
            div.classList.add('card');
    
            let mainData = document.createElement('div');
            mainData.classList.add('main-data');
    
            let country = document.createElement('h1');
            country.innerText = data[i].country + ', ' + data[i].city;
    
            let day = document.createElement('p');
            let datearr = data[i].day.split('-');
            day.innerText = `${getMonth(datearr[1])} ${datearr[2]} ${datearr[0]}`;
    
            let icon = document.createElement('img');
            icon.src = 'https:' + data[i].icon;
            icon.setAttribute('draggable', 'false');
    
            let condition = document.createElement('p');
            condition.innerText = data[i].condition;
    
            let tempData = document.createElement('div');
            tempData.classList.add('temp-data');
    
            let avgTemp = document.createElement('p');
            avgTemp.innerText = `Average: ${data[i].avgTempCelsius}℃ / ${data[i].avgTempFarenheit}℉`;
    
            let maxTemp = document.createElement('p');
            maxTemp.innerText = `High: ${data[i].maxTempCelsius}℃ / ${data[i].maxTempFarenheit}℉`;

            let minTemp = document.createElement('p');
            minTemp.innerText = `Low: ${data[i].minTempCelsius}℃ / ${data[i].minTempFarenheit}℉`;
    
            let rainChance = document.createElement('p');
            rainChance.innerText = `Chance of Rain: ${data[i].chanceOfRain}%`;
    
            let snowChance = document.createElement('p');
            snowChance.innerText = `Chance of Snow: ${data[i].chanceOfSnow}%`;
    
            tempData.appendChild(avgTemp);
            tempData.appendChild(maxTemp);
            tempData.appendChild(minTemp);
            tempData.appendChild(rainChance);
            tempData.appendChild(snowChance);
    
            // mainData.appendChild(country);
            mainData.appendChild(day);
            mainData.appendChild(icon);
            mainData.appendChild(condition);
    
            div.appendChild(mainData);
            div.appendChild(tempData);
            
            cardContainer.appendChild(div);
        } else {
            mainContainer.style.border = '1px solid var(--FG-COLOR)';

            location.innerText = data[i].country + ', ' + data[i].city;
            
            let datearr = data[i].day.split('-');
            date.innerText = `${getMonth(datearr[1])} ${datearr[2]} ${datearr[0]}`;

            icon.src = 'https:' + data[i].icon;

            condition.innerText = data[i].condition;

            averageTemp.innerHTML = `Average: <br> ${data[i].avgTempCelsius}℃ / ${data[i].avgTempFarenheit}℉`;

            highTemp.innerHTML = `High: <br> ${data[i].maxTempCelsius}℃ / ${data[i].maxTempFarenheit}℉`;

            lowTemp.innerHTML = `Low: <br> ${data[i].minTempCelsius}℃ / ${data[i].minTempFarenheit}℉`;

            rainChance.innerText = `Chance of Rain: ${data[i].chanceOfRain}%`;

            snowChance.innerText = `Chance of Snow: ${data[i].chanceOfSnow}%`;
        };
    };
};

export { defaultView };