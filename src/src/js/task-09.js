function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const widget = document.querySelector(".widget")
const BgColor = document.querySelector(".color")
const BtnColor = document.querySelector(".change-color")
BtnColor.addEventListener('clik',(Event) => {
 let newBgCol = widget.style.backgroundColor = getRandomHexColor()
  BgColor.textContent = getRandomHexColor()
})  
  

