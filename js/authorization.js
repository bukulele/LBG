let authorizationForm = document.querySelector('.auth-block__form');

function handleFormSubmission (event) {
  event.preventDefault();

  if (authorizationForm.login.value === 'qwe' && authorizationForm.password.value === 'rty') {
    localStorage.setItem('auth', 'true');
  }
}


authorizationForm.addEventListener('submit', handleFormSubmission);
