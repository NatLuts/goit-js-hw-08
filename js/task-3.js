const nameEl = document.querySelector('#name-input');
const greetingName = document.querySelector('#name-output');

nameEl.addEventListener('input', onFormInput);

function onFormInput(e) {
  const userName = e.target.value.trim();

  if (userName === '') {
    greetingName.textContent = 'Anonymous';
  } else {
    greetingName.textContent = userName;
  }
}
