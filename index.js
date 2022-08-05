import FetchWrapper from "./FetchWrapper.js"

const btn = document.querySelector(".dice-btn");
const adviceNumber = document.querySelector(".advice-number");
const advice = document.querySelector(".advice");
const API = new FetchWrapper("https://api.adviceslip.com");


btn.addEventListener("click", () => {

API.get("/advice").then(data => {

    console.log(data.slip)
adviceNumber.textContent = `Advice #${data.slip.id}`
advice.textContent = `${data.slip.advice}`

})
})