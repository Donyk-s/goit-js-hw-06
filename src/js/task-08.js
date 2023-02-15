
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
    const formData = new FormData(event.currentTarget);
    // console.log(formData);
    formData.forEach((value, name) => {
       console.log(`onFormSubmit -> name`,name)
      console.log(`onFormSubmit -> value`, value)
      event.currentTarget.reset();
    })
  }
}

