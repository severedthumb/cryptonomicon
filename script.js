const root = document.querySelector(':root');
const rootStyle = getComputedStyle(root);

let bgColor = rootStyle.getPropertyValue('--main-bg-color');
let fgColor = rootStyle.getPropertyValue('--main-fg-color');

const modeButton = document.querySelector('.modeButton');
const mbSlider = document.querySelector('.mbSlider');

modeButton.addEventListener('click', () => {
    if (modeButton.getAttribute('nd') == 'night') {
        root.style.setProperty('--main-bg-color', fgColor);
        root.style.setProperty('--main-fg-color', bgColor);
        modeButton.setAttribute('nd', 'day');
        modeButton.style.backgroundColor = bgColor;
        mbSlider.style.left = '25px';
    } else if (modeButton.getAttribute('nd') == 'day') {
        root.style.setProperty('--main-bg-color', bgColor);
        root.style.setProperty('--main-fg-color', fgColor);
        modeButton.setAttribute('nd', 'night');
        mbSlider.style.left = '5px';
        modeButton.style.backgroundColor = fgColor;
    }
});


const chapterP = document.querySelector('.chapterP');

let stringy = '';


/*
for (let i = 0; i < 600; i++) {
    stringy = stringy + Math.round(Math.random());
    chapterP.innerHTML = stringy;
};
*/


chapterP.innerHTML = '';

for (let i = 0; i < 600; i++) {
    setTimeout(() => {
        chapterP.innerHTML = chapterP.innerHTML + Math.round(Math.random());
    }, i * 5);
}
