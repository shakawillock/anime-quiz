const questionEl = document.getElementById("question");

const radioButtons = document.getElementsByName("naruto");

const optionOne = document.getElementById("option-one");
const optionTwo = document.getElementById("option-two");
const optionThree = document.getElementById("option-three");
const optionFour = document.getElementById("option-four");

const options = [optionOne, optionTwo, optionThree, optionFour];

const buttonEl = document.getElementById("btn-submit");

const questionTrackerEl = document.getElementById("question-tracker");

let currentIndex = 0;
let questionNumber = 1;

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

window.addEventListener("load", function() {
  currentQuizQuestion();
  questionTrackerEl.textContent = `Question ${questionNumber} of 20`;
});

buttonEl.addEventListener('click', function() {
  currentIndex++;
  questionNumber++;

  currentQuizQuestion();
  // for (let i = 0; i < radioButtons.length; i++) {
  //   console.log(radioButtons[i].checked)

  //   if (radioButtons[i].checked) {
  //     console.log('A Radio Button is checked!')
  //     console.log(radioButtons[i])
  //   }
  // }

  questionTrackerEl.textContent = `Question ${questionNumber} of 20`
});

function currentQuizQuestion() {
  questionEl.textContent = quiz.questions[currentIndex].name;

  for (let i = 0; i < options.length; i++) {
    options[i].textContent = quiz.questions[currentIndex].answerChoices[i]
    radioButtons[i].value = quiz.questions[currentIndex].answerChoices[i];
    console.log(radioButtons[i]);
   }

}