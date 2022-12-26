import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('[name = email]');
const inputMessage = document.querySelector('[name = message]');
const sbmButton = document.querySelector('[type=submit]');
const KEY_SUBMIT_STORAGE = 'feedback-form-state';
let StateData = {
  email: '',
  message: '',
};

feedbackForm.addEventListener('keyup', onInput);
sbmButton.addEventListener('click', onClick);

function saveStorage() {
  localStorage.setItem(KEY_SUBMIT_STORAGE, JSON.stringify(StateData));
}

const throttledSaveStorage = throttle(saveStorage, 500);

function onClick(evt) {
  evt.preventDefault();
  inputEmail.value = '';
  inputMessage.value = '';
  console.log(StateData);
  localStorage.removeItem(KEY_SUBMIT_STORAGE);
}

function onInput(evt) {
  if (evt.target.name === 'email') {
    StateData.email = evt.target.value;
  }
  if (evt.target.name === 'message') {
    StateData.message = evt.target.value;
  }
  throttledSaveStorage();
}

try {
  StateData = JSON.parse(localStorage.getItem(KEY_SUBMIT_STORAGE));
  inputEmail.value = StateData.email;
  inputMessage.value = StateData.message;
} catch (err) {
  StateData = {
    email: '',
    message: '',
  };
  inputEmail.value = '';
  inputMessage.value = '';
}
