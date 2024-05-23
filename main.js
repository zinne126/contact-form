const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");
const firstName = document.getElementById("first-name");
const lasttName = document.getElementById("last-name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const consent = document.getElementById("consent");
const sumbitBtn = document.getElementById("sumbit-btn");

const queryType = document.querySelector('input[name="query-type"]:checked');

const formAlert = document.querySelectorAll("form-alert");
let isValid = true;

sumbitBtn.addEventListener("click", function (e) {
  e.defaultPrevented;
  console.log("hi");
});
