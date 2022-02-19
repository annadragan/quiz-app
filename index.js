// console.log('Hello word');

/* Navigation*/
const buttonHome = document.querySelector('[data-nav=home]');
const buttonBookmarks = document.querySelector('[data-nav=bookmarks]');
const buttonCreate = document.querySelector('[data-nav=create]');
const buttonProfile = document.querySelector('[data-nav=profile]');

const pageHome = document.querySelector('[data-page=home]');
const pageBookmarks = document.querySelector('[data-page=bookmarks]');
const pageCreate = document.querySelector('[data-page=create]');
const pageProfile = document.querySelector('[data-page=profile]');

buttonHome.addEventListener('click', () => {
  pageHome.classList.remove('hidden');
  pageBookmarks.classList.add('hidden');
  pageCreate.classList.add('hidden');
  pageProfile.classList.add('hidden');

  buttonHome.classList.add('active');
  buttonBookmarks.classList.remove('active');
  buttonCreate.classList.remove('active');
  buttonProfile.classList.remove('active');
});

buttonBookmarks.addEventListener('click', () => {
  pageHome.classList.add('hidden');
  pageBookmarks.classList.remove('hidden');
  pageCreate.classList.add('hidden');
  pageProfile.classList.add('hidden');

  buttonHome.classList.remove('active');
  buttonBookmarks.classList.add('active');
  buttonCreate.classList.remove('active');
  buttonProfile.classList.remove('active');
});

buttonCreate.addEventListener('click', () => {
  pageHome.classList.add('hidden');
  pageBookmarks.classList.add('hidden');
  pageCreate.classList.remove('hidden');
  pageProfile.classList.add('hidden');

  buttonHome.classList.remove('active');
  buttonBookmarks.classList.remove('active');
  buttonCreate.classList.add('active');
  buttonProfile.classList.remove('active');
});

buttonProfile.addEventListener('click', () => {
  pageHome.classList.add('hidden');
  pageBookmarks.classList.add('hidden');
  pageCreate.classList.add('hidden');
  pageProfile.classList.remove('hidden');

  buttonHome.classList.remove('active');
  buttonBookmarks.classList.remove('active');
  buttonCreate.classList.remove('active');
  buttonProfile.classList.add('active');
});

/* bookmarks toggle */
const bookmarks = document.querySelectorAll('[data-card="bookmark"]');
bookmarks.forEach(bookmark => {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('active');
  });
});

/* show- hide button */
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

/* Calculation */

const createQuestion = document.querySelector('[data-js="create-question"]');
const leftCharactersQuestion = document.querySelector(
  '[data-js="left-characters-question"]'
);

const createAnswer = document.querySelector('[data-js="create-answer"]');
const leftCharactersAnswer = document.querySelector(
  '[data-js="left-characters-answer"]'
);

createQuestion.addEventListener('input', () => {
  const questionLength = createQuestion.value.length;
  const maxQuestionLength = createQuestion.maxLength;
  leftCharactersQuestion.innerText = maxQuestionLength - questionLength;
});

createAnswer.addEventListener('input', () => {
  leftCharactersAnswer.innerText =
    createAnswer.maxLength - createAnswer.value.length;
});
