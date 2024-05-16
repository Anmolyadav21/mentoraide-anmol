// General Knowledge
let generalKnowledge = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Rome"],
    correctAnswer: 1,
    attempted: false,
    hint: "The city is known as the 'City of Light'.",
    selectedIndex: -1, // Added selected index
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Ernest Hemingway", "J.K. Rowling", "Harper Lee", "Stephen King"],
    correctAnswer: 2,
    attempted: false,
    hint: "The author's first name is Nelle.",
    selectedIndex: -1, // Added selected index
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    attempted: false,
    hint: "It is named after the Roman god of war.",
    selectedIndex: -1, // Added selected index
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    correctAnswer: 0,
    attempted: false,
    hint: "It consists of two hydrogen atoms and one oxygen atom.",
    selectedIndex: -1, // Added selected index
  },
  {
    question: "Who discovered penicillin?",
    options: [
      "Alexander Fleming",
      "Marie Curie",
      "Louis Pasteur",
      "Thomas Edison",
    ],
    correctAnswer: 0,
    attempted: false,
    hint: "He accidentally discovered it in 1928.",
    selectedIndex: -1, // Added selected index
  },
  {
    question: "Which country is famous for its tulips?",
    options: ["Netherlands", "Italy", "Japan", "India"],
    correctAnswer: 0,
    attempted: false,
    hint: "Its national flower is the tulip.",
    selectedIndex: -1, // Added selected index
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Whale", "Giraffe", "Rhinoceros"],
    correctAnswer: 1,
    attempted: false,
    hint: "It is an aquatic creature.",
    selectedIndex: -1, // Added selected index
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Pablo Picasso",
      "Michelangelo",
    ],
    correctAnswer: 0,
    attempted: false,
    hint: "He was an Italian Renaissance artist.",
    selectedIndex: -1, // Added selected index
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yuan", "Yen", "Won", "Dollar"],
    correctAnswer: 1,
    attempted: false,
    hint: "It is written with the symbol ¥.",
    selectedIndex: -1, // Added selected index
  },
  {
    question: "Which element has the chemical symbol 'Fe'?",
    options: ["Iron", "Gold", "Silver", "Copper"],
    correctAnswer: 0,
    attempted: false,
    hint: "It is a common metal used in construction.",
    selectedIndex: -1, // Added selected index
  },
];

// aptitude

let aptitudeQuestions = [
  {
    question:
      "If a car travels 50 miles in 2 hours, how many miles will it travel in 8 hours?",
    options: ["100 miles", "150 miles", "200 miles", "250 miles"],
    correctAnswer: 2,
    attempted: false,
    hint: "Use the formula: distance = speed × time.",
    selectedIndex: -1,
  },
  {
    question:
      "If the area of a square is 25 square meters, what is the length of one side?",
    options: ["5 meters", "10 meters", "15 meters", "20 meters"],
    correctAnswer: 0,
    attempted: false,
    hint: "Remember, the area of a square is side × side.",
    selectedIndex: -1,
  },
  {
    question:
      "If a shirt costs $20 and is discounted by 25%, what is the discounted price?",
    options: ["$5", "$10", "$15", "$20"],
    correctAnswer: 1,
    attempted: false,
    hint: "Calculate the discount amount first.",
    selectedIndex: -1,
  },
  {
    question: "What is the next number in the sequence: 2, 5, 10, 17, ...?",
    options: ["24", "26", "28", "30"],
    correctAnswer: 2,
    attempted: false,
    hint: "Notice the pattern in the sequence.",
    selectedIndex: -1,
  },
  {
    question:
      "If 3 workers can complete a task in 8 hours, how many hours will it take for 6 workers to complete the same task?",
    options: ["2 hours", "4 hours", "6 hours", "8 hours"],
    correctAnswer: 1,
    attempted: false,
    hint: "Think about the concept of work done and time taken.",
    selectedIndex: -1,
  },
  {
    question:
      "If a fraction is multiplied by 3/4, the result is 3/8. What is the original fraction?",
    options: ["1/2", "2/3", "3/4", "3/2"],
    correctAnswer: 2,
    attempted: false,
    hint: "Set up an equation to solve for the original fraction.",
    selectedIndex: -1,
  },
  {
    question:
      "A train travels 150 miles in 3 hours. What is its average speed in miles per hour?",
    options: ["40 mph", "45 mph", "50 mph", "55 mph"],
    correctAnswer: 2,
    attempted: false,
    hint: "Average speed = total distance ÷ total time.",
    selectedIndex: -1,
  },
  {
    question:
      "If a bag contains 12 red balls and 8 blue balls, what is the probability of drawing a red ball?",
    options: ["2/5", "1/2", "3/5", "2/3"],
    correctAnswer: 0,
    attempted: false,
    hint: "Probability = favorable outcomes / total outcomes.",
    selectedIndex: -1,
  },
  {
    question: "If 2x + 3 = 15, what is the value of x?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 1,
    attempted: false,
    hint: "Solve for x using basic algebraic operations.",
    selectedIndex: -1,
  },
  {
    question:
      "What is the perimeter of a rectangle with length 6 meters and width 4 meters?",
    options: ["12 meters", "20 meters", "24 meters", "30 meters"],
    correctAnswer: 2,
    attempted: false,
    hint: "Perimeter of a rectangle = 2 × (length + width).",
    selectedIndex: -1,
  },
];

let mathematicsQuestions = [
  {
    question: "What is the value of pi (π) correct to two decimal places?",
    options: ["3.14", "3.16", "3.18", "3.20"],
    correctAnswer: 0,
    attempted: false,
    hint: "Pi (π) is a mathematical constant representing the ratio of a circle's circumference to its diameter.",
    selectedIndex: -1,
  },
  {
    question: "What is the square root of 144?",
    options: ["10", "12", "14", "16"],
    correctAnswer: 1,
    attempted: false,
    hint: "The square root of a number is a value that, when multiplied by itself, gives the original number.",
    selectedIndex: -1,
  },
  {
    question: "Solve for x: 2x + 5 = 15",
    options: ["x = 5", "x = 7", "x = 8", "x = 10"],
    correctAnswer: 0,
    attempted: false,
    hint: "Isolate the variable x by performing inverse operations.",
    selectedIndex: -1,
  },
  {
    question: "What is the value of 5! (5 factorial)?",
    options: ["10", "15", "20", "120"],
    correctAnswer: 3,
    attempted: false,
    hint: "Factorial (denoted by !) of a non-negative integer n is the product of all positive integers less than or equal to n.",
    selectedIndex: -1,
  },
  {
    question: "What is the sum of the angles in a triangle?",
    options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
    correctAnswer: 1,
    attempted: false,
    hint: "The sum of the angles in any triangle is always equal to 180 degrees.",
    selectedIndex: -1,
  },
  {
    question: "If a circle has a radius of 5 cm, what is its circumference?",
    options: ["10 cm", "15 cm", "20 cm", "25 cm"],
    correctAnswer: 3,
    attempted: false,
    hint: "The circumference of a circle is given by the formula: 2 × π × radius.",
    selectedIndex: -1,
  },
  {
    question: "What is the value of log10(100)?",
    options: ["1", "2", "10", "100"],
    correctAnswer: 1,
    attempted: false,
    hint: "The logarithm of a number to the base 10 (log10) is the exponent to which 10 must be raised to produce that number.",
    selectedIndex: -1,
  },
  {
    question:
      "If a triangle has sides of lengths 3 cm, 4 cm, and 5 cm, what type of triangle is it?",
    options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
    correctAnswer: 3,
    attempted: false,
    hint: "A triangle with side lengths in the ratio 3:4:5 is a right-angled triangle.",
    selectedIndex: -1,
  },
  {
    question: "What is the value of sin(90 degrees)?",
    options: ["0", "1", "-1", "Undefined"],
    correctAnswer: 1,
    attempted: false,
    hint: "The sine function gives the ratio of the length of the side opposite the angle to the length of the hypotenuse in a right-angled triangle.",
    selectedIndex: -1,
  },
  {
    question: "What is the value of 2^3 (2 raised to the power of 3)?",
    options: ["4", "6", "8", "16"],
    correctAnswer: 2,
    attempted: false,
    hint: "2^3 means 2 multiplied by itself 3 times.",
    selectedIndex: -1,
  },
];

let scienceQuestions = [
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    correctAnswer: 0,
    attempted: false,
    hint: "Water is composed of two hydrogen atoms and one oxygen atom.",
    selectedIndex: -1,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    attempted: false,
    hint: "It is named after the Roman god of war.",
    selectedIndex: -1,
  },
  {
    question: "Who discovered penicillin?",
    options: [
      "Alexander Fleming",
      "Marie Curie",
      "Louis Pasteur",
      "Thomas Edison",
    ],
    correctAnswer: 0,
    attempted: false,
    hint: "He accidentally discovered it in 1928.",
    selectedIndex: -1,
  },
  {
    question: "Which country is famous for its tulips?",
    options: ["Netherlands", "Italy", "Japan", "India"],
    correctAnswer: 0,
    attempted: false,
    hint: "Its national flower is the tulip.",
    selectedIndex: -1,
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Whale", "Giraffe", "Rhinoceros"],
    correctAnswer: 1,
    attempted: false,
    hint: "It is an aquatic creature.",
    selectedIndex: -1,
  },
  {
    question: "Which element has the chemical symbol 'Fe'?",
    options: ["Iron", "Gold", "Silver", "Copper"],
    correctAnswer: 0,
    attempted: false,
    hint: "It is a common metal used in construction.",
    selectedIndex: -1,
  },
  {
    question: "Who proposed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Stephen Hawking",
    ],
    correctAnswer: 1,
    attempted: false,
    hint: "His famous equation is E=mc^2.",
    selectedIndex: -1,
  },
  {
    question: "What is the process by which plants make their own food called?",
    options: ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"],
    correctAnswer: 0,
    attempted: false,
    hint: "It involves the conversion of light energy into chemical energy.",
    selectedIndex: -1,
  },
  {
    question: "What is the unit of electrical resistance?",
    options: ["Ampere", "Volt", "Ohm", "Watt"],
    correctAnswer: 2,
    attempted: false,
    hint: "It is named after a German physicist.",
    selectedIndex: -1,
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    correctAnswer: 0,
    attempted: false,
    hint: "It comes from the Latin word 'aurum'.",
    selectedIndex: -1,
  },
];

// coding part for functionality
let quizOptions = Array.from(document.getElementsByClassName("quiz_option"));
let quizStartBtn = document.getElementsByClassName("start_button")[0];
let quizHomeWindow = document.getElementsByClassName("quiz_home_window")[0];
let quizPlatform = document.getElementsByClassName(
  "quiz_platform_container"
)[0];
quizStartBtn.disabled = true;
quizStartBtn.classList.add("btn_disabled");

quizOptions.forEach((element) => {
  element.addEventListener("click", () => {
    quizOptions.forEach((ele) => {
      if (ele.classList.contains("quiz_active")) {
        ele.classList.remove("quiz_active");
      }
    });
    element.classList.add("quiz_active");
    quizStartBtn.disabled = false;
    quizStartBtn.classList.remove("btn_disabled");
  });
});

quizStartBtn.addEventListener("click", () => {
  console.log("i am clicked");
  let choosedSubjectIndex = null;
  for (let i = 0; i < 4; i++) {
    if (quizOptions[i].classList.contains("quiz_active")) {
      choosedSubjectIndex = i;
      break;
    }
  }
  console.log(choosedSubjectIndex);
  if (choosedSubjectIndex == 0) {
    displayTheQuestions(generalKnowledge, "General Knowledge");
    quizHomeWindow.style.display = "none";
  } else if (choosedSubjectIndex == 1) {
    // displayScience();
    displayTheQuestions(scienceQuestions, "Science");
    quizHomeWindow.style.display = "none";
  } else if (choosedSubjectIndex == 2) {
    // displayMaths();
    displayTheQuestions(mathematicsQuestions, "Mathematics");
    quizHomeWindow.style.display = "none";
  } else {
    // displayAptitude();
    displayTheQuestions(aptitudeQuestions, "Aptitude");
    quizHomeWindow.style.display = "none";
  }
});

// function for each subject
let quizSubjectHeading = document.getElementsByClassName(
  "quiz_subject_heading"
)[0];
let attemptedQuestions = document.getElementsByClassName(
  "no_of_attempted_questions"
)[0];

let timer = document.getElementsByClassName("timer_clock")[0];
let quizQuestion = document.getElementsByClassName("quiz_question")[0];
let options = Array.from(document.getElementsByClassName("options"));

let nextBtn = document.getElementsByClassName("save_and_next_button")[0];

let counter = 0;

// getting the hint box
let hintTag = document.querySelector(".hint_p_tag");
// getting hint container
let hintContainer = document.querySelector(".hint_container_box");

//getting hint logo
let hintLogo = document.querySelector(".hint_logo");
hintLogo.addEventListener("click", () => {
  if (hintContainer.style.display == "none") {
    hintContainer.style.display = "flex";
  } else {
    hintContainer.style.display = "none";
  }
});

function displayQuestion(questionText, quiztype) {
  quizQuestion.innerText = `Q${counter + 1}: ${questionText}`;
  hintTag.innerText = `${quiztype[counter].hint}`;
  hintContainer.style.display = "none";
}
let ansArray = [];
function displayOptionsAndHandler(opt, cnt, quiz_type) {
  options_container = document.getElementsByClassName(
    "quiz_platform_options_container"
  )[0];
  options_container.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    listItem = document.createElement("li");
    listItem.classList.add("platform_quiz_options", "options", "quiz_option");
    listItem.innerText = `${i + 1}: ${opt[i]}`;
    listItem.id = `${i}`;
    options_container.appendChild(listItem);
  }
  list_options = Array.from(
    document.getElementsByClassName("platform_quiz_options")
  );
  for (let i = 0; i < 4; i++) {
    list_options[i].addEventListener("click", () => {
      for (let i = 0; i < 4; i++) {
        if (list_options[i].classList.contains("selected")) {
          list_options[i].classList.remove("selected");
        }
      }
      list_options[i].classList.add("selected");
      let liIndex = parseInt(list_options[i].id);
      ansArray[cnt] = liIndex;
    });
  }
}

function changeAttemptedQuestion(counterOfQuestions) {
  attemptedQuestions.innerText = `${counterOfQuestions + 1}/10`;
}

function displayTheQuestions(quiz_type, quizName) {
  quizHomeWindow.style.display = "none";
  quizPlatform.style.display = "flex";
  displayQuestion(quiz_type[counter].question, quiz_type);
  displayOptionsAndHandler(quiz_type[counter].options, counter, quiz_type);
  changeAttemptedQuestion(counter);
  counter++;

  let timeIntervalIndex = setInterval(() => {
    let currentTime = parseInt(timer.innerText);
    currentTime--;

    if (currentTime <= 0) {
      // If time is up, reset timer and move to the next question
      clearInterval(timeIntervalIndex);
      timer.innerText = "10s";
      // displayNextQuestion();
      displayTheQuestions(quiz_type, quizName);
    } else {
      timer.innerText = `${currentTime}s`;
    }
  }, 1000);

  // Add event listener for the "Next" button
  nextBtn.addEventListener("click", displayNextQuestion);

  function displayNextQuestion() {
    if (counter < quiz_type.length) {
      // Display next question and options
      timer.innerText = "10s";
      displayQuestion(quiz_type[counter].question, quiz_type);
      displayOptionsAndHandler(quiz_type[counter].options, counter, quiz_type);
      changeAttemptedQuestion(counter);
      counter++;
      // Reset timer
    } else {
      // Quiz is finished, display result
      clearInterval(timeIntervalIndex);
      console.log(ansArray);
      displayResult(quiz_type, quizName);
    }
  }
}

let result_window = document.querySelector(".result_window_container");
function displayResult(quiz_type, quizName) {
  console.log(quiz_type);
  quizPlatform.style.display = "none";
  result_window.style.display = "flex";
  let n = quiz_type.length;
  let ans = 0;
  let wrongAns = 0;
  for (let i = 0; i < n; i++) {
    if (quiz_type[i].correctAnswer == ansArray[i]) {
      let idx = quiz_type[i].correctAnswer;
      console.log(quiz_type.options[idx]);
      ans++;
    }
  }
  console.log(ans);
  let resultTag = document.querySelector(".quiz_result_p_tag");
  resultTag.innerText = `${quizName}`;

  let totalQuestionTag = document.querySelector(".total_questions_tag");
  totalQuestionTag.innerText = `Total number of questions: 10`;
  totalCorrectAns = document.querySelector(".correct_answer_tag");
  totalCorrectAns.innerText = `Correct answers : ${ans}`;
  let bootomCircle = document.querySelector(".bootom_circle");
  bootomCircle.style.background = `conic-gradient(
    #0b59b2 ${ans * 10}%,    
    rgb(186, 184, 184) ${(10 - ans) * 10}%     
  )`;
}
