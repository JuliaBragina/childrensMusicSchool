const applicantForm = document.querySelector('.popupFeedback__form');
const inputs = applicantForm.querySelectorAll('.popupFeedback__input');
const message = document.querySelector('.popupFeedback__message');
document.querySelector('.popupFeedback__buttonForm').disabled = true;

function checkValidity(event) {
  const formNode = event.target.form;
  const isValid = formNode.checkValidity();
  document.querySelector('.popupFeedback__buttonForm').disabled = !isValid;
};

applicantForm.addEventListener('input', checkValidity);

function handlerSendData(event) {
  event.preventDefault();
  if(Array.from(serializeForm(applicantForm).entries())) {
    message.textContent = 'Выше сообщение успешно отправлено. Скоро мы свяжемся с Вами!';
    applicantForm.reset();
    document.querySelector('.popupFeedback__buttonForm').disabled = true;
  } else {
    message.textContent = 'Произошла ошибка, повтори звпрос позже.';
  }
};
  
applicantForm.addEventListener('submit', handlerSendData);

function serializeForm(formNode) {
  return new FormData(formNode);
};

function handleInput(event) {
  event.target.previousElementSibling.classList.add('popupFeedback__label_active');
}

function handleBlur(event) {
  const input = event.target;
  const label = input.previousElementSibling;
  const hint = input.nextElementSibling;
  if (input.value === '' || !hint.classList.contains('popupFeedback__hint_active')) {
    label.classList.remove('popupFeedback__label_active');
  }
  if (hint.classList.contains('popupFeedback__hint_active')) {
    hint.classList.remove('popupFeedback__hint_active');
  }
}

inputs.forEach(input => {
  input.addEventListener('input', handleInput);
  input.addEventListener('blur', handleBlur);
  
  input.onfocus = function() {
    const label = this.previousElementSibling;
    const hint = this.nextElementSibling;
    if (!label.classList.contains('popupFeedback__label_active')) {
      label.classList.add('popupFeedback__label_active');
    }
    if (!hint.classList.contains('popupFeedback__hint_active')) {
      hint.classList.add('popupFeedback__hint_active');
    }
  }
});
  