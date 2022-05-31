var questionArray = [
    {question: "Question1", a: "Q1A1", b:"Q1A2", c: "Q1A3", d: "Q1A4", correctAnswer: 'a'},
    {question: "Question2", a: "Q2A1", b:"Q2A2", c: "Q2A3", d: "Q2A4", correctAnswer: 'b'},
    {question: "Question3", a: "Q3A1", b:"Q3A2", c: "Q3A3", d: "Q3A4", correctAnswer: 'c'},
    {question: "Question4", a: "Q4A1", b:"Q4A2", c: "Q4A3", d: "Q4A4", correctAnswer: 'd'},
    {question: "Question5", a: "Q5A1", b:"Q5A2", c: "Q5A3", d: "Q5A4", correctAnswer: 'a'},
    {question: "Question6", a: "Q1A1", b:"Q1A2", c: "Q1A3", d: "Q1A4", correctAnswer: 'a'},
    {question: "Question7", a: "Q2A1", b:"Q2A2", c: "Q2A3", d: "Q2A4", correctAnswer: 'b'},
    {question: "Question8", a: "Q3A1", b:"Q3A2", c: "Q3A3", d: "Q3A4", correctAnswer: 'c'},
    {question: "Question9", a: "Q4A1", b:"Q4A2", c: "Q4A3", d: "Q4A4", correctAnswer: 'd'},
    {question: "Question10", a: "Q5A1", b:"Q5A2", c: "Q5A3", d: "Q5A4", correctAnswer: 'a'},
]; // end of QuestionArray

//Hide instructions
var instructionsEl = document.getElementById("instructions");
var startButtonEl = document.getElementById("start-button");

// Show quiz

var questionContainerEl = document.querySelector(".question-container");

//global time variables
  let timeSeconds = 0;

var startTimer = function(){
  // Timer
  var timeEl = document.getElementById("timer");
  var initialMinutes = 1;
  timeSeconds = initialMinutes *60;
 
  var countDown = function(){
    let minutes = Math.floor(timeSeconds / 60);
    let seconds = Math.floor(timeSeconds % 60);
      if (seconds <10) {
        seconds = '0' + seconds;
      } else {
        seconds = seconds;
      }
    timeEl.innerHTML = `${minutes}: ${seconds}`;
    timeSeconds--;

    if (timeSeconds<=0){
      timeEl.style.display = 'none';
      finalScore();
      return;
    }
      };

  setInterval(countDown, 1000);

  

  
  }; // end of start timer

  

  
    // select DOM elements
    var messageEl = document.getElementById("message");
    var questionDisplayedEl = document.getElementById("questionAsked");
    var answerAEl = document.getElementById("a");
    var answerBEl = document.getElementById("b");
    var answerCEl = document.getElementById("c");
    var answerDEl = document.getElementById("d");

    let currentQuestion = 0;
    let score = 0;

      //Displaying the first question
  var showQuestion = function (){
    questionDisplayedEl.textContent = questionArray[currentQuestion].question
    answerAEl.textContent = questionArray[currentQuestion].a;
    answerBEl.textContent = questionArray[currentQuestion].b;
    answerCEl.textContent = questionArray[currentQuestion].c;
    answerDEl.textContent = questionArray[currentQuestion].d;

  }; // end of first question

    // add click events to a,b,c,d buttons

       // button a
    answerAEl.addEventListener("click", function(){
      console.log('purple');
      checkAnswers(answerAEl);
    });

    //button b
     answerBEl.addEventListener("click", function(){
      console.log('blue');
      checkAnswers(answerBEl);
    });

       //button c
     answerCEl.addEventListener("click", function(){
      console.log('green');
      checkAnswers(answerCEl);
    });

       // button d
     answerDEl.addEventListener("click", function(){
      console.log('yellow');
     checkAnswers(answerDEl);
    });

    //check answers

    var checkAnswers = function(x){
      if (x.id === questionArray[currentQuestion].correctAnswer){
        messageEl.textContent = "RIGHT!";
        score = score+10;
      
      } else {
        messageEl.textContent = "WRONG!";
        timeSeconds = timeSeconds -15;
      }
        nextQuestion();
    };

  //move to next question

  var nextQuestion = function(){
    console.log(currentQuestion);
    if (currentQuestion < 9 && timeSeconds > 0){
       currentQuestion++;
      console.log(currentQuestion);
      showQuestion(currentQuestion);
       } else {
         console.log(score);
        finalScore();
    }
   
  };

  var finalScoreEl = document.getElementById("final-score");
    var finalScore = function(){
 
       questionContainerEl.style.display = "none";
     
       finalScoreEl.textContent = `Thanks for playing! Your final score is ${score}`;
    };
 









// Start the Quiz
 startButtonEl.addEventListener("click", function(){

  // hide instructions
 instructionsEl.style.display = "none";
 // show quiz
 questionContainerEl.style.display = "block";
 // start timer
 startTimer();
 // show first question
  showQuestion();
});

  



