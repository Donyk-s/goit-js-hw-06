const input = document.querySelector('#validation-input')
const inputDataLength = input.value.length
console.log(inputDataLength)
function onInputBlur() { 
    
};
function onInputValue() { 
   
};
const dataLength = input.getAttribute('data-length') 
const inputlength = input.dataset.length;
console.log(inputlength)
input.addEventListener('input', onInputValue)

input.addEventListener('blur', (Event) => {
    if (dataLength == input.value.length) {
   
        input.classList.add('valid');
    input.classList.remove("invalid")    
} else {
        input.classList.add('invalid');
        input.classList.remove("valid")
    }
});






