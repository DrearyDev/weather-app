import { currentDate, pastDates, futureDates } from "./handleDates";

async function fetchData(query) {
    let pdates = pastDates();
    let fdates = futureDates();
    let weatherData = [];

    const pushData = (object, location) => {
        let country = location.country;
        let city = location.name;

        let day = object.date;
        let icon = object.day.condition.icon;
        let condition = object.day.condition.text;
        let avgTempCelsius = object.day.avgtemp_c;
        let maxTempCelsius = object.day.maxtemp_c;
        let minTempCelsius = object.day.mintemp_c;
        let avgTempFarenheit = object.day.avgtemp_f;
        let maxTempFarenheit = object.day.maxtemp_f;
        let minTempFarenheit = object.day.mintemp_f;
        let chanceOfRain = object.day.daily_chance_of_rain;
        let chanceOfSnow = object.day.daily_chance_of_snow;

        weatherData.push({
            country,
            city,
            day,
            icon,
            condition,
            avgTempCelsius,
            maxTempCelsius,
            minTempCelsius,
            avgTempFarenheit,
            maxTempFarenheit,
            minTempFarenheit,
            chanceOfRain,
            chanceOfSnow
        });
    };

    let plinks = [];
    let clink = `https://api.weatherapi.com/v1/forecast.json?key=04751a96d37d46faac2201108242001&q=${query}`;
    let flinks = [];

    for (let i = 0; i < 2; i++) {
        plinks.push(`https://api.weatherapi.com/v1/history.json?key=04751a96d37d46faac2201108242001&q=${query}&dt=${pdates[i].year}-${pdates[i].month}-${pdates[i].day}`);
        flinks.push(`https://api.weatherapi.com/v1/forecast.json?key=04751a96d37d46faac2201108242001&q=${query}&dt=${fdates[i].year}-${fdates[i].month}-${fdates[i].day}`);
    };

    let promise1 = fetch(plinks[0], {mode:'cors'});
    let promise2 = fetch(plinks[1], {mode:'cors'});
    let promise3 = fetch(clink, {mode:'cors'});
    let promise4 = fetch(flinks[0], {mode:'cors'});
    let promise5 = fetch(flinks[1], {mode:'cors'});

    await Promise.all([promise1, promise2, promise3, promise4, promise5])
    .then(async (results) => {
        for (let i in results) {
            await Promise.resolve(results[i].json())
            .then((resolved) => {
                pushData(resolved.forecast.forecastday[0], resolved.location);
            });
        };
    })
    .catch((err) => console.log(err));

    return weatherData;
};

export { fetchData };