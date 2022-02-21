function button() {
  const cardSet = document.querySelectorAll('[data-js="card"]');
  cardSet.forEach(card => {
    const showAnswer = card.querySelector('[data-button="showAnswer"]');
    const hideAnswer = card.querySelector('[data-span="hideAnswer"]');
    const answerText = card.querySelector('[data-js="answerText"]');
    const showButton = card.querySelector('[data-js="show"]');

    showAnswer.addEventListener('click', () => {
      hideAnswer.classList.toggle('hidden');
      answerText.classList.toggle('hidden');
      showButton.classList.toggle('hidden');
    });
  });
  const loginButton = document.querySelector('[data-js="logout-button"]');
  let userLoggedOut = true;
  loginButton.addEventListener('click', () => {
    if (userLoggedOut) {
      alert('You are now logged in!');
      loginButton.textContent = 'Logout';
      userLoggedOut = false;
    } else {
      alert('You are now logged out');
      loginButton.textContent = 'Login';
      userLoggedOut = true;
    }
  });
}
export default button;
