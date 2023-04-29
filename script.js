// "strict";

/* This Block of code is for changing the background image */
const switch_btn = document.getElementById("switch");
const root = document.documentElement.style;

const second_url = [
    `url("../assets/images/bkgs/children-buttom.png")`,
    `url("../assets/images/bkgs/circular-background.png")`,
];

let current = 0;
switch_btn.onclick = () => {
    current = current === second_url.length - 1 ? 0 : current + 1;
    //TODO: Maybe add transitions
    root.setProperty("--bkg-img-url", second_url[current]);
};

/* This Block of code is for  Playing the sound */
