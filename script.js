const key = document.querySelector(".ull-container a");
const effect = document.querySelector("body");
const lamb = document.querySelector('#lamb');
const br = document.querySelector('.br');

key.addEventListener("mouseenter", () => {
    effect.style.background = "#A02334";
    lamb.style.color = "#FCFAEE";
    br.style.color = "#FCFAEE";
});

key.addEventListener("mouseleave", () => {
    effect.style.background = "";
    lamb.style.color = "";
    br.style.color = "";
});