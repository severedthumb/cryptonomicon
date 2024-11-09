// DAY MODE & NIGHT MODE CODE

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



// CHAPTER DROP-DOWN CODE

const chapter = document.querySelector('.chapter');
const chapterH = chapter.firstElementChild;
const chapterP = chapterH.nextElementSibling;

chapterH.addEventListener('click', () => {
    if (chapterP.style.display === 'block') {
        chapterP.style.display = 'none';
    } else {
        chapterP.style.display = 'block';

        let text = chapterP.innerHTML;

        chapterP.innerHTML = '';

        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                chapterP.innerHTML = chapterP.innerHTML + text[i];
            }, i * 5)
        }
    }
})





/* CHAPTER 1s AND 0s EFFECT

const chapterP = document.querySelector('.chapterP');

let stringy = '';

chapterP.innerHTML = '';

for (let i = 0; i < 600; i++) {
    setTimeout(() => {
        chapterP.innerHTML = chapterP.innerHTML + Math.round(Math.random());
    }, i * 5);
}

*/