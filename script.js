const quizEl = document.getElementById("quiz");
const quizElHtml = quizEl.innerHTML;
const radioButtons = getDOMElements().radioButtons;

let currentIndex = 0;
let questionNumber = 1;
let score = 0;

const quiz = {
  questions: [
    {
      name: "Who is Naruto's best friend?",
      answerChoices: ["Sasuke Uchiha", "Sakura Haruno", "Kakashi Hatake", "Shikamaru Nara"],
      correctAnswer: "Sasuke Uchiha"
    },

    {
      name: "What is Naruto's signature jutsu?",
      answerChoices: ["Chidori", "Shadow Clone Jutsu", "Rasengan", "Fireball Jutsu"],
      correctAnswer: "Rasengan"
    },

    {
      name: "Who was Naruto's mentor during his training to master the Rasengan?",
      answerChoices: ["Jiraiya", "Iruka Umino", "Tsunade", "Yamato"],
      correctAnswer: "Jiraiya"
    },

    {
      name: "What animal is Naruto's summon?",
      answerChoices: ["Frog", "Snake", "Bird", "Dog"],
      correctAnswer: "Frog"
    },

    {
      name: "What village does Naruto come from?",
      answerChoices: ["Hidden Leaf Village", "Hidden Sand Village", "Hidden Mist Village", "Hidden Cloud Village"],
      correctAnswer: "Hidden Leaf Village"
    },

    {
      name: "Who is Naruto's mother?",
      answerChoices: ["Kushina Uzumaki", "Mikoto Uchiha", "Tsunade Senju", "Hinata Hyuga"],
      correctAnswer: "Kushina Uzumaki"
    },

    {
      name: "What is the name of Naruto's son?",
      answerChoices: ["Boruto Uzumaki", "Sarada Uchiha", "Mitsuki", "Konohamaru Sarutobi"],
      correctAnswer: "Boruto Uzumaki"
    },

    {
      name: "What is the name of the Nine-Tails fox?",
      answerChoices: ["Kurama", "Gyuki", "Shukaku", "Matatabi"],
      correctAnswer: "Kurama"
    },

    {
      name: "Who killed Naruto's sensei, Jiraiya?",
      answerChoices: ["Pain", "Orochimaru", "Madara Uchiha", "Itachi Uchiha"],
      correctAnswer: "Pain"
    },

    {
      name: "What is Sasuke's primary goal in the beginning?",
      answerChoices: ["To become Hokage", "To avenge his clan", "To find his brother", "To defeat Naruto"],
      correctAnswer: "To avenge his clan"
    },

    {
      name: "Which character is known for their Byakugan?",
      answerChoices: ["Sakura Haruno", "Neji Hyuga", "Tenten", "Ino Yamanaka"],
      correctAnswer: "Neji Hyuga"
    },

    {
      name: "What is the primary role of the Akatsuki?",
      answerChoices: ["Protecting the villages", "Collecting tailed beasts", "Promoting peace", "Training young ninjas"],
      correctAnswer: "Collecting tailed beasts"
    },

    {
      name: "Who is the creator of the Shadow Clone Jutsu?",
      answerChoices: ["Naruto Uzumaki", "Minato Namikaze", "Tobirama Senju", "Hiruzen Sarutobi"],
      correctAnswer: "Tobirama Senju"
    },

    {
      name: "Which character has a Sharingan?",
      answerChoices: ["Sakura Haruno", "Hinata Hyuga", "Kakashi Hatake", "Naruto Uzumaki"],
      correctAnswer: "Kakashi Hatake"
    },

    {
      name: "What is the primary element of the Fourth Hokage?",
      answerChoices: ["Fire", "Wind", "Lightning", "Water"],
      correctAnswer: "Wind"
    },

    {
      name: "Who is the leader of the Akatsuki?",
      answerChoices: ["Obito Uchiha", "Nagato (Pain)", "Madara Uchiha", "Zetsu"],
      correctAnswer: "Nagato (Pain)"
    },

    {
      name: "What form does Naruto achieve when he uses Sage Mode?",
      answerChoices: ["Tailed Beast Mode", "Kurama Mode", "Sage of Six Paths Mode", "Sage Mode"],
      correctAnswer: "Sage Mode"
    },

    {
      name: "Which character is known as the 'Copy Ninja'?",
      answerChoices: ["Rock Lee", "Kakashi Hatake", "Shikamaru Nara", "Sasuke Uchiha"],
      correctAnswer: "Kakashi Hatake"
    },

    {
      name: "What is the name of the forbidden jutsu that Itachi used on Sasuke?",
      answerChoices: ["Amaterasu", "Tsukuyomi", "Susanoo", "Kotoamatsukami"],
      correctAnswer: "Tsukuyomi"
    },

    {
      name: "What does Naruto dream of becoming?",
      answerChoices: ["A legendary ninja", "The strongest in the village", "Hokage", "A member of Akatsuki"],
      correctAnswer: "Hokage"
    }
  ]
};

window.addEventListener("load", startQuiz);
getDOMElements().buttonEl.addEventListener("click", submitAnswerChoice);

function startQuiz() {
  currentQuizQuestion(getDOMElements().questionEl);
  updateQuestionTracker();
}

function currentQuizQuestion(questionName) {
  let options = getDOMElements().options;

  if (currentIndex <= quiz.questions.length - 1) {
    questionName.textContent = quiz.questions[currentIndex].name;

    for (let i = 0; i < options.length; i++) {
      options[i].textContent = quiz.questions[currentIndex].answerChoices[i];
      radioButtons[i].value = quiz.questions[currentIndex].answerChoices[i];
      radioButtons[i].checked = false;
     }
  }
}

function submitAnswerChoice() {
  let userAnswer;
  let radioButtonSelected = false;

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      radioButtonSelected = true
      userAnswer = radioButtons[i].value;
      radioButtons[i].checked = false;
    }
  }

  if (radioButtonSelected) {
    checkAnswer(userAnswer);
    updateQuestionNumber();
    updateIndexNumber();
    currentQuizQuestion(getDOMElements().questionEl);
  } else {
      showErrorMessage();
  }
}

function updateQuestionNumber() {
  if (questionNumber < 20) {
    questionNumber++;
    updateQuestionTracker();
  } else {
    displayScoreMessage(score);
  }
}

function updateIndexNumber() {
  if (currentIndex <= quiz.questions.length - 1) {
    currentIndex++;
  }
}

function checkAnswer(userAnswer) {
  if (userAnswer === quiz.questions[currentIndex].correctAnswer) {
    updateScore();
  }
}

function showErrorMessage() {
  const errorMessage = document.getElementById("error-message");
  errorMessage.textContent = "Please select a choice first!";

  setTimeout(function() {
    errorMessage.textContent = "";
    quizEl.insertBefore(errorMessage, quizEl.firstChild);
  }, 1000)
}

function updateScore() {
  score++;
  return score;
}

function displayScoreMessage(score) {
  const h2Heading = createScoreHeading(score);
  const paragraph = createParagraph();
  const image = createImage();
  const button = createRestartButton();

  quizEl.innerHTML = "";
  quizEl.append(h2Heading, paragraph, image, button);
  button.addEventListener("click", restartQuiz);
}

function createImage() {
  const image = document.createElement("img");

  if (score === 20) {
    image.src = "images/kaguya.webp";
  } else if (score <= 5) {
    image.src = "images/kiba.webp";
  }

  return image;
}

function createScoreHeading(score) {
  const h2Element = document.createElement("h2");

  h2Element.classList.add("text-center", "text-color-white");
  h2Element.textContent = `You scored ${score} out of 20!`;

  return h2Element;
}

function createParagraph() {
  const paragraph = document.createElement("p");
  paragraph.classList.add("text-center", "text-color-white");

  if (score === 20) {
    paragraph.textContent = "You Have Achieved God Mode!";
  } else if (score <= 5) {
    paragraph.textContent = "At least you tried";
  }

  return paragraph;
}

function createRestartButton() {
  const buttonContainer = document.createElement("div");
  const button = document.createElement("button");

  buttonContainer.classList.add("text-center", "text-color-white");

  button.id = "btn-restart";
  button.textContent = "Restart Quiz";

  buttonContainer.appendChild(button);

  return buttonContainer;
}

function restartQuiz() {
  quizEl.innerHTML = quizElHtml;

  currentIndex = 0;
  questionNumber = 1;
  score = 0;

 getDOMElements().buttonEl.addEventListener("click", submitAnswerChoice);
 currentQuizQuestion(getDOMElements().questionEl);
 updateQuestionTracker();
}

function getDOMElements() {
  const quizEl = document.getElementById("quiz");
  const questionEl = document.getElementById("question");
  const questionTrackerEl = document.getElementById("question-tracker");
  const optionOne = document.getElementById("option-one");
  const optionTwo = document.getElementById("option-two");
  const optionThree = document.getElementById("option-three");
  const optionFour = document.getElementById("option-four");
  const options = [];

  options.push(optionOne, optionTwo, optionThree, optionFour)

  const radioButtons = document.getElementsByName("naruto");
  const buttonEl = document.getElementById("btn-submit");

  return {quizEl, questionEl, questionTrackerEl, options, radioButtons, buttonEl}
}

function updateQuestionTracker() {
    let questionTrackerEl = getDOMElements().questionTrackerEl;
    questionTrackerEl.textContent = `Question ${questionNumber} of 20`;
}