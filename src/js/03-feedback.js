"use strict";
import throttle from 'lodash.throttle';
// const throttle = require('lodash.throttle');

let emailInput = document.querySelector(`input[name=email]`);
let messageInput = document.querySelector(`textarea[name=message]`);
const button = document.querySelector(`button[type=submit]`);

emailInput.addEventListener("input", updateValue);
messageInput.addEventListener("input", updateValue);
let email =  emailInput.textContent;
let message =  messageInput.textContent;
    
 document.addEventListener('input', _.throttle(handleThrottling, 60000));
 
function updateValue(e) {
    if (e.target === emailInput ) {
    email = e.currentTarget.value;
 }  else  {
    message = e.currentTarget.value;
 }
    let data = `${email}, ${message}`; 
    localStorage.setItem("feedback-form-state", data);
};


window.addEventListener('DOMContentLoaded', pageRefresh);

function pageRefresh() {
    let nameFromLocalStorage = localStorage.getItem("feedback-form-state");
    let array = nameFromLocalStorage.split(" "); 
    email = array[0];
    message = array[1];
    };

pageRefresh();