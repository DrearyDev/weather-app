import { defaultData } from "./fetchData";

/*----------------------------------------------------------------------------------------------
default view will use the ip address as location and get the weather for the
two past days along with the current day and two future days.
----------------------------------------------------------------------------------------------*/

async function defaultView() {
    let weatherData = await defaultData()
    console.log(weatherData);
};

export { defaultView };