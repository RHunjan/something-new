var questionArray = [
    {question: "Question1", a: "Q1A1", b:"Q1A2", c: "Q1A3", d: "Q1A4", correctAnswer: 'b'},
    {question: "Question2", a: "Q2A1", b:"Q2A2", c: "Q2A3", d: "Q2A4", correctAnswer: 'b'},
    {question: "Question3", a: "Q3A1", b:"Q3A2", c: "Q3A3", d: "Q3A4", correctAnswer: 'a'},
    {question: "Question4", a: "Q4A1", b:"Q4A2", c: "Q4A3", d: "Q4A4", correctAnswer: 'a'},
    {question: "Question5", a: "Q5A1", b:"Q5A2", c: "Q5A3", d: "Q5A4", correctAnswer: 'a'},
]; // end of QuestionArray

//Hide instructions
var instructionsEl = document.getElementById("instructions");
var startButtonEl = document.getElementById("start-button");

// Show quiz

var questionContainerEl = document.querySelector(".question-container");

startButtonEl.addEventListener("click", function(){
  // hide instructions
 instructionsEl.style.display = "none";
 // show quiz
 questionContainerEl.style.display = "block";
 // start timer
 startTimer();
 // show first question
  showTheFirstQuestion();
});

var startTimer = function(){
  // Timer
  var timeEl = document.getElementById("timer");
  var initialMinutes = 5;
  let timeSeconds = initialMinutes *60;
 
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
     };
  setInterval(countDown, 1000);

  }; // end of start timer

  
  let currentQuestion = 0;
  

  //Displaying the question
  var showTheFirstQuestion = function (){

    // select DOM elements

    var questionDisplayed = document.getElementById("questionAsked");
    var answerAEl = document.getElementById("a");
    var answerBEl = document.getElementById("b");
    var answerCEl = document.getElementById("c");
    var answerDEl = document.getElementById("d");
 
  
    questionDisplayed.textContent = questionArray[currentQuestion].question
    answerAEl.textContent = questionArray[currentQuestion].a;
    answerBEl.textContent = questionArray[currentQuestion].b;
    answerCEl.textContent = questionArray[currentQuestion].c;
    answerDEl.textContent = questionArray[currentQuestion].d;
  
   
  };
 
 
// Display current question



