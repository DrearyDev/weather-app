import { currentDate, pastDates } from "./handleDates";


async function defaultData() {
    //https://api.weatherapi.com/v1/history.json?key=04751a96d37d46faac2201108242001&q=auto:ip&dt=2024-01-19
    //https://api.weatherapi.com/v1/forecast.json?key=04751a96d37d46faac2201108242001&q=auto:ip&days=3
    let cdate = currentDate() 
    let pdates = pastDates();
    let weatherData = [];

    for (let i = 0; i < pdates.length; i++) {
        let year = pdates[i].year;

        let month = pdates[i].month;
        month++;
        if (month < 10) { month = '0' + month };

        let day = pdates[i].day;
        if (day < 10) { day = '0' + day };

        let pDatesLink = `https://api.weatherapi.com/v1/history.json?key=04751a96d37d46faac2201108242001&q=auto:ip&dt=${year}-${month}-${day}`;
        console.log(pDatesLink);
    };

    return weatherData;
};

export { defaultData };