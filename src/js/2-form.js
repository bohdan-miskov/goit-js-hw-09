const formData = {
  email: '',
  message: '',
};

const formFeedBack = document.querySelector('.feedback-form');
populateField();

formFeedBack.addEventListener('input', saveField);
formFeedBack.addEventListener('submit', submitForm);

function populateField() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data !== null) {
    formFeedBack.elements.email.value = data.email;
    formFeedBack.elements.message.value = data.message;
    formData.email = data.email;
    formData.message = data.message;
  }
}

function saveField(event) {
  const emailInput = formFeedBack.elements.email;
  const messageInput = formFeedBack.elements.message;

  if (event.target === emailInput) {
    formData.email = emailInput.value.trim();
  }

  if (event.target === messageInput) {
    formData.message = messageInput.value.trim();
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function submitForm(event) {
  event.preventDefault();

  if (
    formFeedBack.elements.email.value.trim() === '' ||
    formFeedBack.elements.message.value.trim() === ''
  ) {
    alert('Fill please all fields');
    return;
  }
  formFeedBack.reset();
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
}
