import { defaultData } from "./fetchData";

/*----------------------------------------------------------------------------------------------
default view will use the ip address as location and get the weather for the
two past days along with the current day and two future days.
----------------------------------------------------------------------------------------------*/

function defaultView() {
    console.log(defaultData());
};

export { defaultView };