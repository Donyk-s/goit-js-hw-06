
const loginForm = document.querySelector('.login-form')
loginForm.addEventListener('submit', onFormSubmit)

const nameEmail = loginForm.elements.email
const inputDataLength = nameEmail.value.length

// console.log(inputDataLength)

// console.log(loginForm)
function onFormSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    console.log(formData)
    formData.forEach((value, key) => {
         console.log('onFormSubmit -> key', key)
        console.log('onFormSubmit -> value', value)
       
if (inputDataLength == "") {
    alert(`what is your email?", "M.Jackson?`)
} return
    })
}

loginForm.addEventListener('click', () => loginForm.reset());
