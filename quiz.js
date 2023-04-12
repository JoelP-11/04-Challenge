
var questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: [
        'numbers and strings',
        'other arrays',
        'booleans',
        'all of the above',
      ],
      answer: 'all of the above',
    },
    {
      title:
        'String values must be enclosed within ____ when being assigned to variables.',
      choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      answer: 'quotes',
    },
    {
      title:
        'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
      answer: 'console.log',
    },
  ];
  
  var questionIndex = 0;
  var numCorrect = 0;

function startQuiz() {
  document.getElementById("start-btn").style.display = "none";
  document.getElementById("intro").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  document.getElementById("question-title").innerHTML = questions[questionIndex].title;
  
  var choices = questions[questionIndex].choices;
  var choicesHtml = "";
  for (var i = 0; i < choices.length; i++) {
      choicesHtml += "<li><button onclick='checkAnswer(\"" + choices[i] + "\")'>" + choices[i] + "</button></li>";
  }
  document.getElementById("choices").innerHTML = choicesHtml;
}

function checkAnswer(answer) {
  if (answer === questions[questionIndex].answer) {
      numCorrect++;
      document.getElementById("feedback").innerHTML = "Correct!";
  } else {
    document.getElementById("feedback").innerHTML = "Wrong!";
  }
  
  questionIndex++;
  
  if (questionIndex === questions.length) {
      endQuiz();
  } else {
      loadQuestion();
  }
  document.getElementById("score").innerHTML = numCorrect;
}

function endQuiz() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("final-score").innerHTML = numCorrect;
  
  questionIndex = 0;
  numCorrect = 0;
}

document.getElementById("start-btn").addEventListener("click", startQuiz)



