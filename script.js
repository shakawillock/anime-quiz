const quizEl = document.getElementById("quiz");
const quizElHtml = quizEl.innerHTML;
const inputWrapper = document.getElementsByClassName("input-wrapper");
const radioButtons = getDOMElements().radioButtons;

const beginnerBtn = createDifficultyButtons().beginnerBtn;
const intermediateBtn = createDifficultyButtons().intermediateBtn;
const advancedBtn = createDifficultyButtons().advancedBtn;

const difficultyButtons = [beginnerBtn, intermediateBtn, advancedBtn];

let beginnerQuizActive = false;
let intermediateQuizActive = false;
let advancedQuizActive = false;

let currentIndex = 0;
let questionNumber = 1;
let score = 0;

const beginnerQuiz = {
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

const intermediateQuiz = {
  questions: [
    {
      name: "Who was the first member of Team 7 to become a Chunin?",
      answerChoices: ["Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno", "Shikamaru Nara"],
      correctAnswer: "Shikamaru Nara"
    },

    {
      name: "What is the name of Kakashi Hatake's father?",
      answerChoices: ["Sakumo Hatake", "Minato Namikaze", "Jiraiya", "Hiruzen Sarutobi"],
      correctAnswer: "Sakumo Hatake"
    },

    {
      name: "Which technique did Itachi use to kill his entire clan?",
      answerChoices: ["Tsukuyomi", "Amaterasu", "Izanami", "Susanoo"],
      correctAnswer: "Tsukuyomi"
    },

    {
      name: "What does Gaara’s tattoo on his forehead mean?",
      answerChoices: ["Power", "Love", "Pain", "Loneliness"],
      correctAnswer: "Love"
    },

    {
      name: "Who was the second Hokage?",
      answerChoices: ["Hashirama Senju", "Tobirama Senju", "Hiruzen Sarutobi", "Minato Namikaze"],
      correctAnswer: "Tobirama Senju"
    },

    {
      name: "What is the Eight Inner Gates technique?",
      answerChoices: ["A forbidden jutsu", "A medical ninjutsu", "A taijutsu", "A genjutsu"],
      correctAnswer: "A taijutsu"
    },

    {
      name: "What is the name of Hidan's religion?",
      answerChoices: ["Jashin", "Raijin", "Sageism", "Amaterasu"],
      correctAnswer: "Jashin"
    },

    {
      name: "Who sealed the Nine-Tails into Naruto?",
      answerChoices: ["Kushina Uzumaki", "Minato Namikaze", "Hiruzen Sarutobi", "Tobirama Senju"],
      correctAnswer: "Minato Namikaze"
    },

    {
      name: "What ability is unique to the Uzumaki Clan?",
      answerChoices: ["Massive chakra reserves", "Sharingan", "Rinnegan", "Byakugan"],
      correctAnswer: "Massive chakra reserves"
    },

    {
      name: "Who is the creator of the Akatsuki?",
      answerChoices: ["Madara Uchiha", "Nagato", "Yahiko", "Obito Uchiha"],
      correctAnswer: "Yahiko"
    },

    {
      name: "Who becomes the Seventh Hokage?",
      answerChoices: ["Naruto Uzumaki", "Sasuke Uchiha", "Kakashi Hatake", "Konohamaru Sarutobi"],
      correctAnswer: "Naruto Uzumaki"
    },

    {
      name: "Which Akatsuki member fought and killed Asuma Sarutobi?",
      answerChoices: ["Kakuzu", "Hidan", "Deidara", "Zetsu"],
      correctAnswer: "Hidan"
    },

    {
      name: "What is Deidara's primary form of attack?",
      answerChoices: ["Explosive clay", "Chidori", "Fire Style", "Genjutsu"],
      correctAnswer: "Explosive clay"
    },

    {
      name: "Who is the strongest known taijutsu user in Konoha?",
      answerChoices: ["Might Guy", "Rock Lee", "Neji Hyuga", "Naruto Uzumaki"],
      correctAnswer: "Might Guy"
    },

    {
      name: "Who was the teacher of Jiraiya, Orochimaru, and Tsunade?",
      answerChoices: ["Hiruzen Sarutobi", "Hashirama Senju", "Minato Namikaze", "Tobirama Senju"],
      correctAnswer: "Hiruzen Sarutobi"
    },

    {
      name: "What is the name of Naruto's tailed beast transformation?",
      answerChoices: ["Kurama Mode", "Tailed Beast Mode", "Sage Mode", "KCM"],
      correctAnswer: "Kurama Mode"
    },

    {
      name: "What is the name of Sasuke's sword?",
      answerChoices: ["Kusanagi", "Kubikiribocho", "Samehada", "Gunbai"],
      correctAnswer: "Kusanagi"
    },

    {
      name: "Which Uchiha clan member awakened the Rinnegan?",
      answerChoices: ["Madara Uchiha", "Obito Uchiha", "Itachi Uchiha", "Sasuke Uchiha"],
      correctAnswer: "Madara Uchiha"
    },

    {
      name: "Which character dies using the Reaper Death Seal?",
      answerChoices: ["Hiruzen Sarutobi", "Minato Namikaze", "Both Minato and Hiruzen", "Tobirama Senju"],
      correctAnswer: "Both Minato and Hiruzen"
    },

    {
      name: "Who killed Danzo Shimura?",
      answerChoices: ["Sasuke Uchiha", "Naruto Uzumaki", "Kakashi Hatake", "Madara Uchiha"],
      correctAnswer: "Sasuke Uchiha"
    }
  ]
};

const advancedQuiz = {
  questions: [
    {
      name: "What is the original name of Madara's Moon Eye Plan?",
      answerChoices: ["Infinite Tsukuyomi", "Project Tsuki no Me", "Project Infinite Moon", "Eye of the Moon Plan"],
      correctAnswer: "Project Tsuki no Me"
    },

    {
      name: "What was Naruto’s score on the Genin Exam?",
      answerChoices: ["Failing in all but Ninjutsu", "Top of his class", "Passed in Taijutsu and Genjutsu", "Average in all subjects"],
      correctAnswer: "Failing in all but Ninjutsu"
    },

    {
      name: "How did Hashirama die?",
      answerChoices: ["Unknown circumstances", "During a battle with Madara", "Killed by the Nine-Tails", "Old age"],
      correctAnswer: "Unknown circumstances"
    },

    {
      name: "What technique did Sasuke use to escape Itachi’s Tsukuyomi?",
      answerChoices: ["Sharingan", "Kirin", "Amaterasu", "Susanoo"],
      correctAnswer: "Kirin"
    },

    {
      name: "Who created the Edo Tensei jutsu?",
      answerChoices: ["Tobirama Senju", "Orochimaru", "Kabuto", "Madara Uchiha"],
      correctAnswer: "Tobirama Senju"
    },

    {
      name: "Who was the first jinchuriki of the Ten-Tails?",
      answerChoices: ["Obito Uchiha", "Madara Uchiha", "Hagoromo Otsutsuki", "Kaguya Otsutsuki"],
      correctAnswer: "Kaguya Otsutsuki"
    },

    {
      name: "Who unlocked the Mangekyou Sharingan first?",
      answerChoices: ["Madara Uchiha", "Izuna Uchiha", "Itachi Uchiha", "Obito Uchiha"],
      correctAnswer: "Madara Uchiha"
    },

    {
      name: "What was the outcome of the battle between Hashirama and Madara at the Valley of the End?",
      answerChoices: ["Hashirama won", "Madara won", "Both died", "Draw"],
      correctAnswer: "Hashirama won"
    },

    {
      name: "How many seals are needed to contain the Ten-Tails?",
      answerChoices: ["Nine", "Eight", "Six", "Ten"],
      correctAnswer: "Nine"
    },

    {
      name: "What is the ultimate goal of the Otsutsuki Clan?",
      answerChoices: ["To harvest chakra from planets", "To become Hokage", "To master all jutsu", "To protect the tailed beasts"],
      correctAnswer: "To harvest chakra from planets"
    },

    {
      name: "What is the first step to unlock Sage of Six Paths Mode?",
      answerChoices: ["Obtaining the Rinnegan", "Mastering Tailed Beast Chakra", "Sage Mode mastery", "Making contact with Hagoromo Otsutsuki"],
      correctAnswer: "Making contact with Hagoromo Otsutsuki"
    },

    {
      name: "Which character has both Rinnegan and Sharingan simultaneously?",
      answerChoices: ["Madara Uchiha", "Sasuke Uchiha", "Obito Uchiha", "Hagoromo Otsutsuki"],
      correctAnswer: "Sasuke Uchiha"
    },

    {
      name: "What form of the Susanoo did Sasuke awaken after receiving the Rinnegan?",
      answerChoices: ["Perfect Susanoo", "Indra’s Arrow", "Complete Body Susanoo", "Flame Control Susanoo"],
      correctAnswer: "Complete Body Susanoo"
    },

    {
      name: "What ability did Obito Uchiha gain by synchronizing with the Gedo Statue?",
      answerChoices: ["Ability to control the tailed beasts", "Immortality", "Infinite chakra reserves", "Rinnegan"],
      correctAnswer: "Ability to control the tailed beasts"
    },

    {
      name: "What was the name of the technique used by Naruto to defeat Pain?",
      answerChoices: ["Rasen Shuriken", "Sage Art: Great Ball Rasengan", "Tailed Beast Rasengan", "Planetary Rasengan"],
      correctAnswer: "Sage Art: Great Ball Rasengan"
    },

    {
      name: "How did the Otsutsuki Clan survive for millennia?",
      answerChoices: ["Through chakra fruit harvesting", "Immortality techniques", "By reincarnating", "By taking over host bodies"],
      correctAnswer: "Through chakra fruit harvesting"
    },

    {
      name: "Who was the first person to be resurrected using the Edo Tensei?",
      answerChoices: ["Hashirama Senju", "Madara Uchiha", "Hiruzen Sarutobi", "Tobirama Senju"],
      correctAnswer: "Hashirama Senju"
    },

    {
      name: "Who fought Madara Uchiha before Naruto and Sasuke?",
      answerChoices: ["The Five Kage", "Kakashi and Gai", "Tsunade and Jiraiya", "Minato and Obito"],
      correctAnswer: "The Five Kage"
    },

    {
      name: "Who defeated Kaguya Otsutsuki?",
      answerChoices: ["Naruto and Sasuke", "Hagoromo Otsutsuki", "Hashirama Senju", "Madara Uchiha"],
      correctAnswer: "Naruto and Sasuke"
    },

    {
      name: "What power did Hagoromo Otsutsuki give to Naruto?",
      answerChoices: ["Yin and Yang Chakra", "Sage of Six Paths power", "Tailed Beast control", "Sharingan"],
      correctAnswer: "Sage of Six Paths power"
    }
  ]
};

window.addEventListener("load", startQuiz);

// getDOMElements().buttonEl.addEventListener("click", function() {
//   submitAnswerChoice();
// });

function startQuiz() {
  hideDOMElements()

  for (let i = 0; i < difficultyButtons.length; i++) {
    quizEl.insertBefore(difficultyButtons[i], getDOMElements().questionEl);
  }
}

beginnerBtn.addEventListener("click", function() {
  hideDifficultyButtons()
  showDOMElements();
  currentQuizQuestion(getDOMElements().questionEl, beginnerQuiz);

  getDOMElements().buttonEl.addEventListener("click", function() {
    submitAnswerChoice(beginnerQuiz);
  });

  updateQuestionTracker();
});

intermediateBtn.addEventListener("click", function() {
  hideDifficultyButtons()
  showDOMElements();
  currentQuizQuestion(getDOMElements().questionEl, intermediateQuiz);

  getDOMElements().buttonEl.addEventListener("click", function() {
    submitAnswerChoice(intermediateQuiz);
  });

  updateQuestionTracker();
});

advancedBtn.addEventListener("click", function() {
  hideDifficultyButtons()
  showDOMElements();
  currentQuizQuestion(getDOMElements().questionEl, advancedQuiz);

  getDOMElements().buttonEl.addEventListener("click", function() {
    submitAnswerChoice(advancedQuiz);
  });

  updateQuestionTracker();
})

function currentQuizQuestion(questionName, quizLevel) {
  if (quizLevel !== "") {
    let options = getDOMElements().options;

    if (currentIndex <= quizLevel.questions.length - 1) {
      questionName.textContent = quizLevel.questions[currentIndex].name;
  
      for (let i = 0; i < options.length; i++) {
        options[i].textContent = quizLevel.questions[currentIndex].answerChoices[i];
        radioButtons[i].value = quizLevel.questions[currentIndex].answerChoices[i];
        radioButtons[i].checked = false;
       }
    }
  } else {
    hideDOMElements()
  }
}

function submitAnswerChoice(quizLevel) {
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
    checkAnswer(userAnswer, quizLevel);
    updateQuestionNumber();
    updateIndexNumber(quizLevel);
    currentQuizQuestion(getDOMElements().questionEl, quizLevel);
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

function updateIndexNumber(quizLevel) {
  if (currentIndex <= quizLevel.questions.length - 1) {
    currentIndex++;
  }
}

function checkAnswer(userAnswer, quizLevel) {
  if (userAnswer === quizLevel.questions[currentIndex].correctAnswer) {
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

 createDifficultyButtons().beginnerBtn
 currentQuizQuestion(getDOMElements().questionEl, "");



 showDifficultyButtons();
 startQuiz();
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


function createDifficultyButtons() {
  let beginnerBtn = document.createElement("button");
  let intermediateBtn = document.createElement("button");
  let advancedBtn = document.createElement("button");

  beginnerBtn.textContent = "Beginner Level";
  beginnerBtn.className = "btn-difficulty";
  beginnerBtn.id = "beginner-btn"

  intermediateBtn.textContent = "Intermediate Level";
  intermediateBtn.className = "btn-difficulty";
  intermediateBtn.id = "intermediate-btn"



  advancedBtn.textContent = "Advanced Level";
  advancedBtn.className = "btn-difficulty";
  advancedBtn.id = "advanced-btn";

  let buttons = [beginnerBtn, intermediateBtn, advancedBtn];

  return {beginnerBtn, intermediateBtn, advancedBtn, buttons};
}

function hideDOMElements() {
  for (let i = 0; i < inputWrapper.length; i++) {
    inputWrapper[i].style.display = "none";
  }

  getDOMElements().buttonEl.style.display = "none";
}

function showDOMElements() {
  for (let i = 0; i < inputWrapper.length; i++) {
    inputWrapper[i].style.display = "block";
  }

  getDOMElements().buttonEl.style.display = "block";
}

function hideDifficultyButtons() {
  for (let i = 0; i < difficultyButtons.length; i++) {
    difficultyButtons[i].style.display = "none";
  }
}

function showDifficultyButtons() {
  for (let i = 0; i < difficultyButtons.length; i++) {
    difficultyButtons[i].style.display = "inline";
  }
}
