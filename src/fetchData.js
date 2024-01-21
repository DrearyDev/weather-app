import { currentDate, pastDates, futureDates } from "./handleDates";


function defaultData() {
    let pdates = pastDates();
    let fdates = futureDates();
    let weatherData = [];

    let plinks = [];
    let clink = `https://api.weatherapi.com/v1/current.json?key=04751a96d37d46faac2201108242001&q=auto:ip`;
    let flinks = [];

    for (let i = 0; i < 2; i++) {
        plinks.push(`https://api.weatherapi.com/v1/history.json?key=04751a96d37d46faac2201108242001&q=auto:ip&dt=${pdates[i].year}-${pdates[i].month}-${pdates[i].day}`);
        flinks.push(`https://api.weatherapi.com/v1/forecast.json?key=04751a96d37d46faac2201108242001&q=auto:ip&dt=${fdates[i].year}-${fdates[i].month}-${fdates[i].day}`);
    };

    let promise1 = fetch(plinks[0], {mode:'cors'});
    let promise2 = fetch(plinks[1], {mode:'cors'});
    let promise3 = fetch(clink, {mode:'cors'});
    let promise4 = fetch(flinks[0], {mode:'cors'});
    let promise5 = fetch(flinks[1], {mode:'cors'});

    Promise.all([promise1, promise2, promise3, promise4, promise5])
    .then(async (results) => {
        for (let i in results) {
            let parsed = await results[i].json()
            weatherData.push(parsed);
        };
    })
    .catch((err) => console.log(err));


    // Promise.all([promise1, promise2, promise3, promise4, promise5])
    // .then(function(responses) {
    //     const loop = async () => {
    //         for (let i in responses) {
    //             let tmp = await responses[i].json();
    //             weatherData.push(tmp);
    //         };
    //     };
    //     loop();
    // })
    // .catch(function(err) {
    //     console.log(err);
    // });


    // getting all API data and pushing it in order of date
    // fetch(plinks[0], {mode:'cors'})
    // .then((response) => response.json())
    // .then((response) => weatherData.push(response))
    // .then(() => {
    //     fetch(plinks[1], {mode:'cors'})
    //     .then((response) => response.json())
    //     .then((response) => weatherData.push(response))
    //     .then(() => {
    //         fetch(clink, {mode:'cors'})
    //         .then((response) => response.json())
    //         .then((response) => weatherData.push(response))
    //         .then(() => {
    //             fetch(flinks[0], {mode:'cors'})
    //             .then((response) => response.json())
    //             .then((response) => weatherData.push(response))
    //             .then(() => {
    //                 fetch(flinks[1], {mode:'cors'})
    //                 .then((response) => response.json())
    //                 .then((response) => weatherData.push(response))
    //             })
    //         })
    //     })
    // })
    // .catch(function(err) {
    //     console.log(err);
    // });

    return weatherData;
};

export { defaultData };