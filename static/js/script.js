"use strict";

const users = document.querySelectorAll(".user");

function randomRgba() {
        let o = Math.round, r = Math.random, s = 255;
        return `rgba(${o(r() * s)},${o(r() * s)},${r().toFixed(1)})`;
}

for (let user of users) {
        console.log(user);
        let img = user.firstElementChild;
        let randomColor = randomRgba();
        img.style = `background-color: ${randomColor};`;
}
