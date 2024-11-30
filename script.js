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

function dropDown(e) {
    let entry = e.target.nextElementSibling;
    if (entry.style.display === 'block') {
        entry.style.display = 'none';
    } else {
        entry.style.display = 'block';
    }
};

let headings = document.getElementsByClassName('entryHeading');

for (heading of headings) {
    heading.addEventListener('click', dropDown);
};





// DIFFERENT CONTENT-LOADING IDEAS AND EXPERIMENTATION

const prologue = document.getElementById('prologue');
const barrens = document.getElementById('barrens');


// THIS IS THE HARD-CODED WAY OF DOING THIS, WITH NO FETCH REQUEST
/*
const prologue = [
    "Here is a paragraph.",
    "$And here is a \"second\" paragraph.",
    "I'm adding a third paragraph. How 'bout that?"
]

for(let i = 0; i < prologue.length; i++) {
    if(prologue[i][0] == '$') {
        let quote = document.createElement('blockquote');
        quote.textContent = prologue[i].slice(1);
        gabagool.appendChild(quote);
    } else {
        let paragraph = document.createElement('p');
        paragraph.textContent = prologue[i];
        gabagool.appendChild(paragraph);
    }
};
*/

// THIS IS THE WAY OF DOING THIS WITH A FETCH REQUEST

fetch('https://severedthumb.studio/prologue')
    .then((res) => res.json())
    .then((res) => {
        for(let i = 0; i < res.length; i++) {
            if(res[i][0] == '$') {
                let quote = document.createElement('blockquote');
                quote.textContent = res[i].slice(1);
                prologue.appendChild(quote);
            } else {
                let paragraph = document.createElement('p');
                paragraph.textContent = res[i];
                prologue.appendChild(paragraph);
            }
        }
    });


fetch('https://severedthumb.studio/barrens')
.then((res) => res.json())
.then((res) => {
    for(let i = 0; i < res.length; i++) {
        if(res[i][0] == '$') {
            let quote = document.createElement('blockquote');
            quote.textContent = res[i].slice(1);
            barrens.appendChild(quote);
        } else {
            let paragraph = document.createElement('p');
            paragraph.textContent = res[i];
            barrens.appendChild(paragraph);
        }
    }
})