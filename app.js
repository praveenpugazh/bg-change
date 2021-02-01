const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const mainDiv = document.querySelector(".main");
const btn = document.getElementById('btn');
const txtColor = document.querySelector(".color");

btn.addEventListener('click', () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomNum()];
    }
    txtColor.textContent = hexColor;
    mainDiv.style.backgroundColor = hexColor;
})
console.log(mainDiv);

function randomNum() {
    return Math.floor(Math.random() * hex.length);
}