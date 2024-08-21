const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");
const menu = document.querySelector(".menu");
const head = document.querySelector("header");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

menu.addEventListener("click", () => {
  menu.classList.remove("active");
});

function showMenu() {
  menu.addEventListener("click", () => {
    menu.classList.add("active");
    head.classList.remove("active");
  });
}

function hideMenu() {
  menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    head.classList.toggle("active");
  });
}

function hidetag() {
  menu.classList.remove("active");
  head.classList.remove("active");
}
