// "strict";

/* This Block of code is for changing the background image */
const switch_btn = document.getElementById("switch");
const root = document.documentElement.style;

const second_url = [
    `url("../assets/images/bkgs/chalkboard-with-kids.png")`,
    `url("../assets/images/bkgs/letters-green.png")`,
    // `url("../assets/images/bkgs/muslim-teacher.png")`,
    `url("../assets/images/bkgs/circular-background.png")`,
    `url("../assets/images/bkgs/children-buttom.png")`,
    `url("../assets/images/bkgs/board-empty.png")`,
    `url("../assets/images/bkgs/empty-scholl-bkg.png")`,
    `url("../assets/images/bkgs/centered-chalkboard.png")`,
];

let current = 0;
switch_btn.onclick = () => {
    current = current === second_url.length - 1 ? 0 : current + 1;
    //TODO: Maybe add transitions
    root.setProperty("--bkg-img-url", second_url[current]);
};
