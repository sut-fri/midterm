const key = document.querySelector(".ull-container a");
const effect = document.querySelector("body");
const lamb = document.querySelector("#lamb");
const br2 = document.querySelector(".br2");
const br3 = document.querySelector(".br3");
const br4 = document.querySelector(".br4");

key.addEventListener("mouseenter", () => {
    effect.style.background = "#A02334";
    lamb.style.color = "#FCFAEE";
    if (br2) br2.style.color = "#FCFAEE";
    if (br3) br3.style.color = "#FCFAEE";
    if (br4) br4.style.color = "#FCFAEE";
});

key.addEventListener("mouseleave", () => {
    effect.style.background = "";
    lamb.style.color = "";
    if (br2) br2.style.color = "";
    if (br3) br3.style.color = "";
    if (br4) br4.style.color = "";
});
