let authorizationForm = document.querySelector('.auth-block__form');

function handleFormSubmission (event) {
  event.preventDefault();

  // DELETE FROM HERE
  if (authorizationForm.login.value === 'qwe' && authorizationForm.password.value === 'rty') {
    sessionStorage.setItem('auth', 'true');
    window.location.href = '/LBG/index.html';
  }
//   DELETE TO HERE
}


authorizationForm.addEventListener('submit', handleFormSubmission);
