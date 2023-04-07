
// selecting the links to change the page
let colorNamePage = document.querySelector('.colorName-page');
let hexCodePage = document.querySelector('.hexCode-page');

// selecting the Boxes
let colorNameBox = document.querySelector('#colorNameWrapper');
let hexCodeBox = document.querySelector('#hexCodeWrapper');

// selecting the text to change the background type
let colorNameChanger = document.querySelector('.colorNameChanger');
let hexCodeChanger = document.querySelector('.hexCodeChanger');


let colorNameBtn = document.querySelector('.colorNameBtn');
let hexCodeBtn = document.querySelector('.hexCodeBtn');
var parentColorName = colorNameBtn.parentElement.parentElement;
var parentHexCode = hexCodeBtn.parentElement.parentElement;

// var act = colorName.nextElementSibling.setAttribute("class", "active");


colorNamePage.addEventListener("click", () => {
    if (colorNameBox.style.display != "block") {
        colorNameBox.style.display = "block";
        hexCodeBox.style.display = "none";
        
        // changes the background color
        parentColorName.style.backgroundColor = colorNameChanger.textContent;
    }
    colorNamePage.classList.toggle('active')
    hexCodePage.classList.toggle('active')
})

hexCodePage.addEventListener("click", () => {
    if (hexCodeBox.style.display != "block") {
        hexCodeBox.style.display = "block";
        colorNameBox.style.display = "none";
        
        // changes the background color
        parentHexCode.style.backgroundColor = hexCodeChanger.textContent;
    }
    colorNamePage.classList.toggle('active')
    hexCodePage.classList.toggle('active')
})


const colorNames = ["Silver", "Gray", "Red", "Maroon", "Yellow", "Olive", "Lime", "Green", "Aqua", "Teal", "Blue", "Navy", "Fuchsia", "Purple", "IndianRed", "MediumOrchid", "PaleGreen", "DarkCyan", "SteelBlue", "DeepSkyBlue", "SandyBrown", "Chocolate", "Sienna"];


colorNameBtn.addEventListener("click", () => {
    const randomColorName = getRandomColorName();
    parentColorName.style.backgroundColor = colorNames[randomColorName];
    colorNameChanger.textContent = colorNames[randomColorName];
});



const hexCodeColors = ["#000080", "#00008B", "#0000CD", "#0000FF", "#006400", "#008000", "#008080", "#008B8B", "#00BFFF", "#00CED1", "#00FA9A", "#00FF00", "#00FF7F", "#00FFFF", "#00FFFF", "#191970", "#1E90FF", "#20B2AA", "#228B22", "#2E8B57", "#2F4F4F", "#2F4F4F", "#32CD32", "#3CB371", "#40E0D0", "#4169E1", "#4682B4", "#483D8B", "#48D1CC", "#4B0082", "#556B2F", "#5F9EA0", "#6495ED", "#663399", "#66CDAA", "#696969", "#696969", "#6A5ACD", "#6B8E23", "#708090", "#708090", "#778899", "#778899"];


hexCodeBtn.addEventListener("click", () => {
    const randomHexValue = getRandomHexValue();
    parentHexCode.style.backgroundColor = hexCodeColors[randomHexValue];
    hexCodeChanger.textContent = hexCodeColors[randomHexValue];
});



function getRandomHexValue() {
  return Math.floor(Math.random() * hexCodeColors.length);
}

function getRandomColorName() {
  return Math.floor(Math.random() * colorNames.length);
}