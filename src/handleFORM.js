//

import { renderWeather } from "./handleDOM";

const select = document.querySelector('form select');
const input = document.querySelector('form input');
const errMsg = document.querySelector('form span.err');
input.value = '';

function displayError() {
    input.setCustomValidity('Please Enter Valid Value');
    errMsg.innerText = input.validationMessage;
};

function removeError() {
    input.setCustomValidity('');
    errMsg.innerText = input.validationMessage;
};

function usZipValidation(value) {
    // make sure value is real us zip before sending api request
    let isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value);
    return isValidZip;
};

function canadianPostalValidation(value) {
    // make sure value is real canadian postal code before sending api request
    let isValidCode = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(value);
    return isValidCode;
};

function validate() {
    let valid = true;

    if (select.value === 'us-zip') {
        valid = usZipValidation(input.value);
    } else if (select.value === 'ca-postal') {
        valid = canadianPostalValidation(input.value);
    };

    if (valid) {
        removeError();
        renderWeather(input.value);
    } else {
        displayError();
    };

    return valid;
};

export { validate };