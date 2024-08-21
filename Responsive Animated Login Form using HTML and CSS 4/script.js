const wrapper = document.querySelector(".wrapper");
const signUplink = document.querySelector(".signUp-link");
const signInlink = document.querySelector(".signIn-link");

signUplink.addEventListener("click", () => {
  wrapper.classList.add("animate-signIn");
  wrapper.classList.remove("animate-signUp");
});

signInlink.addEventListener("click", () => {
  wrapper.classList.add("animate-signUp");
  wrapper.classList.remove("animate-signIn");
});
