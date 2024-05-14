import '../css/styles.css'

const form = document.querySelector('.feedback-form')

form.addEventListener('input', handleInput)

const formData = {
    email: '',
    message: '',
    clear() {
      this.email = '';
      this.message = '';
    },
}

document.addEventListener('DOMContentLoaded', populateText);

function handleInput(event) {
    const key = event.target.name
    const value = event.target.value.trim();
    
    formData[key] = value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateText() {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (!data) {
        return;
    }

    const { email, message } = form.elements;

    email.value = data.email;
    message.value = data.message;
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

  
    if (formData.email === '' || formData.message === '') {
        return alert('Please fill in all fields');
    }

    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    formData.clear();
    form.reset();
};