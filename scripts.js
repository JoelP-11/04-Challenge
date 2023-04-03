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

var currentQuestionIndex = 0;
var timer = 60;
var score = 0;
var intervalId;

function startQuiz() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    renderQuestion();
    startTimer();
}

  function renderQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question-title').textContent = currentQuestion.title;
    var choicesEl = document.getElementById('choices');
    choicesEl.innerHTML = '';
    
    for (var i = 0; i < currentQuestion.choices.length; i++) {
      var choice = currentQuestion.choices[i];
      var button = document.createElement("button");
      button.textContent = choice;
      button.setAttribute("class", "choice");
      button.setAttribute("value", choice);
      button.onclick = handleAnswerClick;
      choicesEl.appendChild(button);
    }
    }

    function handleAnswerClick() {
      if (this.value === questions[currentQuestionIndex].answer) {
        score++;
      } else {
        timer -= 10;
      }
      currentQuestionIndex++;
      if (currentQuestionIndex === questions.length) {
        endQuiz();
      } else {
        renderQuestion();
      }
    }

    function startTimer() {
      intervalId = setInterval(function () {
        timer--;
        document.getElementById("timer").textContent = "Time: " + timer;
        if (timer <= 0) {
          endQuiz();
        }
      }, 1000);
    }

    function endQuiz() {
      clearInterval(intervalId);
      document.getElementById("quiz").style.display = "none";
      document.getElementById("score").textContent =
      "Your score is: " + score + " out of " + questions.length;
      document.getElementById("results").style.display = "block";
    }



    

