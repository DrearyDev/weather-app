import { fetchData } from "./fetchData";

/*----------------------------------------------------------------------------------------------
default view will use the ip address as location and get the weather for the
two past days along with the current day and two future days.
----------------------------------------------------------------------------------------------*/

const container = document.querySelector('.container');

async function defaultView() {

    let data = await Promise.resolve(fetchData('auto:ip'))
    console.log(data);


};

export { defaultView };