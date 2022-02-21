function counter() {
  const createQuestion = document.querySelector('[data-js="create-question"]');
  const leftCharactersQuestion = document.querySelector(
    '[data-js="left-characters-question"]'
  );

  const createAnswer = document.querySelector('[data-js="create-answer"]');
  const leftCharactersAnswer = document.querySelector(
    '[data-js="left-characters-answer"]'
  );

  createQuestion.addEventListener('input', () => {
    const questionTextLength = createQuestion.value.length;
    const maxQuestionTextLength = createQuestion.maxLength;
    leftCharactersQuestion.innerText =
      maxQuestionTextLength - questionTextLength;
  });

  createAnswer.addEventListener('input', () => {
    leftCharactersAnswer.innerText =
      createAnswer.maxLength - createAnswer.value.length;
  });
  // const createQuestion = document.querySelector('[data-js="create-question"]');
  // const leftCharactersQuestion = document.querySelector(
  //   '[data-js="left-characters-question"]'
  // );

  // const createAnswer = document.querySelector('[data-js="create-answer"]');
  // const leftCharactersAnswer = document.querySelector(
  //   '[data-js="left-characters-answer"]'
  // );

  // createQuestion.addEventListener('input', () => {
  //   const questionTextLength = createQuestion.value.length;
  //   const maxQuestionTextLength = createQuestion.maxLength;
  //   leftCharactersQuestion.innerText =
  //     maxQuestionTextLength - questionTextLength;
  // });

  // createAnswer.addEventListener('input', () => {
  //   const answerTextLength = createAnswer.value.length;
  //   const maxLengthAnswer = createQuestion.maxLength;
  //   leftCharactersAnswer.innerText = maxLengthAnswer - answerTextLength;
  // });
}

export default counter;
