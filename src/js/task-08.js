
const loginForm = document.querySelector('.login-form')
loginForm.addEventListener('submit', onFormSubmit)


function onFormSubmit(event) {
  event.preventDefault()
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value.trim() === '' || password.value.trim() === '') {
    return alert('Please fill in all the fields! M.Jackson');
  } else {
    const data = {};
    console.log({ email: email.value, password: password.value })
     event.currentTarget.reset();
   
  }
}
