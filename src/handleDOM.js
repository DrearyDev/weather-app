import { fetchData } from "./fetchData";

/*----------------------------------------------------------------------------------------------
default view will use the ip address as location and get the weather for the
two past days along with the current day and two future days.
----------------------------------------------------------------------------------------------*/

const container = document.querySelector('.container');
const mainContainer = document.querySelector('.container > .main-container');
const cardContainer = document.querySelector('.container > .card-container');

const degreeLabel = document.querySelector('.switch .slider > .label');
const degreeInput = document.querySelector('.switch > input');

let data;
let degrees;
let symbol;

degreeInput.checked = false;
degreeLabel.innerText = '℃';
degrees = 'Celsius';
symbol = '℃';

function changeDegrees() {
    degreeInput.checked === true ? degreeInput.checked = false : degreeInput.checked = true;

    if (degreeInput.checked) {
        degreeLabel.innerText = '℉';
        symbol = '℉';
        degrees = 'Farenheit';
    } else {
        degreeLabel.innerText = '℃';
        symbol = '℃';
        degrees = 'Celsius';
    };

    const updateTempData = (() => {
        let tempDivs = document.querySelectorAll('.temp-data');
        console.log(tempDivs);

        tempDivs.forEach(div => {

            let children = [...div.children];

            children.forEach(ele => {
                let index = ele.parentElement.dataAttribute;

                if (ele.classList.contains('average')) {
                    ele.innerHTML = `Average: <br> ${data[index]['avgTemp' + degrees]} ${symbol}`;
                } else if (ele.classList.contains('high')) {
                    ele.innerHTML = `High: <br> ${data[index]['maxTemp' + degrees]} ${symbol}`;
                } else if (ele.classList.contains('low')) {
                    ele.innerHTML = `Low: <br> ${data[index]['minTemp' + degrees]} ${symbol}`;
                };
            });
        });
    })();
};


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
    data = await Promise.resolve(fetchData('auto:ip'))
    console.log(data);

    for (let i in data) {
        if (Number(i) !== 2) {

            let div = document.createElement('div');
            div.classList.add('card');
    
            let mainData = document.createElement('div');
            mainData.classList.add('main-data');
    
            let day = document.createElement('p');
            day.classList.add('date');
            let datearr = data[i].day.split('-');
            day.innerText = `${getMonth(datearr[1])} ${datearr[2]} ${datearr[0]}`;
    
            let icon = document.createElement('img');
            icon.src = 'https:' + data[i].icon;
            icon.setAttribute('draggable', 'false');
    
            let condition = document.createElement('p');
            condition.innerText = data[i].condition;
    
            let tempData = document.createElement('div');
            tempData.dataAttribute = Number(i);
            tempData.classList.add('temp-data');
    
            let avgTemp = document.createElement('p');
            avgTemp.classList.add('average');
            avgTemp.innerHTML = `Average: <br> ${data[i]['avgTemp' + degrees]} ${symbol}`;
    
            let maxTemp = document.createElement('p');
            maxTemp.classList.add('high');
            maxTemp.innerHTML = `High: <br> ${data[i]['maxTemp' + degrees]} ${symbol}`;

            let minTemp = document.createElement('p');
            minTemp.classList.add('low');
            minTemp.innerHTML = `Low: <br> ${data[i]['minTemp' + degrees]} ${symbol}`;
    
            let rainChance = document.createElement('p');
            rainChance.classList.add('rain-chance');
            rainChance.innerText = `Chance of Rain: ${data[i].chanceOfRain}%`;
    
            let snowChance = document.createElement('p');
            snowChance.classList.add('snow-chance');
            snowChance.innerText = `Chance of Snow: ${data[i].chanceOfSnow}%`;
    
            tempData.appendChild(avgTemp);
            tempData.appendChild(maxTemp);
            tempData.appendChild(minTemp);
            tempData.appendChild(rainChance);
            tempData.appendChild(snowChance);
    
            mainData.appendChild(day);
            mainData.appendChild(icon);
            mainData.appendChild(condition);
    
            div.appendChild(mainData);
            div.appendChild(tempData);
            
            cardContainer.appendChild(div);
        } else {
            mainContainer.style.border = '1px solid var(--FG-COLOR)';

            let mainData = document.createElement('div');
            mainData.classList.add('main-data')

            let location = document.createElement('h1');
            location.classList.add('location');
            location.innerText = data[i].country + ', ' + data[i].city;
            
            let date = document.createElement('h2');
            date.classList.add('date');
            let datearr = data[i].day.split('-');
            date.innerText = `${getMonth(datearr[1])} ${datearr[2]} ${datearr[0]}`;

            let icon = document.createElement('img');
            icon.setAttribute('draggable', 'false');
            icon.src = 'https:' + data[i].icon;

            let condition = document.createElement('h3');
            condition.innerText = data[i].condition;

            let tempData = document.createElement('div');
            tempData.dataAttribute = Number(i);
            tempData.classList.add('temp-data');

            let averageTemp = document.createElement('h3');
            averageTemp.classList.add('average');
            averageTemp.innerHTML = `Average: <br> ${data[i]['avgTemp' + degrees]} ${symbol}`;

            let highTemp = document.createElement('h3');
            highTemp.classList.add('high');
            highTemp.innerHTML = `High: <br> ${data[i]['maxTemp' + degrees]} ${symbol}`;

            let lowTemp = document.createElement('h3');
            lowTemp.classList.add('low');
            lowTemp.innerHTML = `Low: <br> ${data[i]['minTemp' + degrees]} ${symbol}`;

            let rainChance = document.createElement('h4');
            rainChance.classList.add('rain-chance');
            rainChance.innerText = `Chance of Rain: ${data[i].chanceOfRain}%`;

            let snowChance = document.createElement('h4');
            snowChance.classList.add('snow-chance');
            snowChance.innerText = `Chance of Snow: ${data[i].chanceOfSnow}%`;

            tempData.appendChild(averageTemp);
            tempData.appendChild(highTemp);
            tempData.appendChild(lowTemp);
            tempData.appendChild(rainChance);
            tempData.appendChild(snowChance);

            mainData.appendChild(location);
            mainData.appendChild(date);
            mainData.appendChild(icon);
            mainData.appendChild(condition);

            mainContainer.appendChild(mainData);
            mainContainer.appendChild(tempData);
        };
    };
};

export { defaultView, changeDegrees };