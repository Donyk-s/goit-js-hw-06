function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyColor = document.querySelector("body");
const resultSpan = document.querySelector(".color");
const changeBtnColor = document.querySelector(".change-color");

changeBtnColor.addEventListener("click", onChangeColor);
function onChangeColor (event){
  let hexColor = [getRandomHexColor()]
  bodyColor.style.backgroundColor = hexColor;
  resultSpan.textContent = hexColor;
  console.log(hexColor);
}  
  
// 2 варіаент
// const textColor = document.querySelector('.color');
// const changeColorBtn = document.querySelector('.change-color');
// const body = document.body;

// const changeColor = () => {
//   textColor.textContent = body.style.backgroundColor = getRandomHexColor();
// };
// 3 варіант
// const changeColor = () => {
//   textColor.textContent = getRandomHexColor();
//   body.style.backgroundColor = textColor.textContent;
// };