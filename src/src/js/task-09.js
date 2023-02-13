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
  resultSpan.textContentt = hexColor;
  console.log(hexColor);
}  
  

