const root = document.querySelector(':root');
const rootStyle = getComputedStyle(root);

let bgColor = rootStyle.getPropertyValue('--main-bg-color');
let fgColor = rootStyle.getPropertyValue('--main-fg-color');

const modeButton = document.querySelector('.modeButton');

modeButton.addEventListener('click', () => {
    if (modeButton.getAttribute('nd') == 'night') {
        root.style.setProperty('--main-bg-color', fgColor);
        root.style.setProperty('--main-fg-color', bgColor);
        modeButton.setAttribute('nd', 'day');
    } else if (modeButton.getAttribute('nd') == 'day') {
        root.style.setProperty('--main-bg-color', bgColor);
        root.style.setProperty('--main-fg-color', fgColor);
        modeButton.setAttribute('nd', 'night');
    }
});