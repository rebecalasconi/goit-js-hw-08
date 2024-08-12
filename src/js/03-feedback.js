"use strict";
import lodash from "lodash.throttle";

let emailInput = document.querySelector(`input[name=email]`);
let messageInput = document.querySelector(`textarea[name=message]`);
const button = document.querySelector(`button[type=submit]`);

emailInput.addEventListener("input", updateValue);
messageInput.addEventListener("input", updateValue);
let email =  emailInput.textContent;
let message =  messageInput.textContent;


 
function updateValue(e) {
    if (e.target === emailInput ) {
    email = e.currentTarget.value;
 }  else  {
    message = e.currentTarget.value;
 }
    let data = `${email}, ${message}`; 
    localStorage.setItem("feedback-form-state", data);

    throt_fun();
};

let throt_fun = _.throttle(updateValue(), 500);

//
function pageRefresh() {
    let nameFromLocalStorage = localStorage.getItem("feedback-form-state");
    let array = nameFromLocalStorage.split(",");
    
    if(localStorage) {
    email.textContent = array[0];
    message.textContent = array[1];
    }
};

