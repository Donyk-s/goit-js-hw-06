const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')
input.addEventListener('input', (Event) => {
    if (Event.currentTarget.value.trim() === "") {
        output.textContent = 'Anonymous'
    } else {
        output.textContent = Event.currentTarget.value
   }
    
})

