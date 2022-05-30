var questionArray = [
    {question: "Question1", a: "Q1A1", b:"Q1A2", c: "Q1A3", d: "Q1A4", correctAnswer: 'b'},
    {question: "Question2", a: "Q2A1", b:"Q2A2", c: "Q2A3", d: "Q2A4", correctAnswer: 'b'},
    {question: "Question3", a: "Q3A1", b:"Q3A2", c: "Q3A3", d: "Q3A4", correctAnswer: 'c'},
    {question: "Question4", a: "Q4A1", b:"Q4A2", c: "Q4A3", d: "Q4A4", correctAnswer: 'a'},
    {question: "Question5", a: "Q5A1", b:"Q5A2", c: "Q5A3", d: "Q5A4", correctAnswer: 'b'},
]; // end of QuestionArray

//Hide instructions
var instructionsEl = document.getElementById("instructions");
var startButtonEl = document.getElementById("start-button");

// Show quiz

var questionContainerEl = document.querySelector(".question-container");

startButtonEl.addEventListener("click", function(){
  currentQuestion = 0;
  // hide instructions
 instructionsEl.style.display = "none";
 // show quiz
 questionContainerEl.style.display = "block";
 // start timer
 startTimer();
 // show first question
  showQuestion();
});

//global time variables
  let timeSeconds = 0;

var startTimer = function(){
  // Timer
  var timeEl = document.getElementById("timer");
  var initialMinutes = 5;
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
     };
  setInterval(countDown, 1000);

  }; // end of start timer

  
  let currentQuestion = 0;
  let score = 0;
  

  //Displaying the question
  var showQuestion = function (){

    // select DOM elements
    var messageEl = document.getElementById("message");
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

    // check answers

    // check button a
    answerAEl.addEventListener("click", function(){
      if (answerAEl.id === questionArray[currentQuestion].correctAnswer){
        messageEl.textContent = "RIGHT!";
        currentQuestion++;
        console.log(currentQuestion);
        score = score + 10;
        console.log(score);
        showQuestion();
         } else {
        messageEl.textContent = "WRONG!";
        currentQuestion++;
         console.log(currentQuestion);
        timeSeconds = timeSeconds-15;
        showQuestion();
         }
     
    }); // end onclick button A
         
  
     // check button b
    answerBEl.addEventListener("click", function(){
      if (answerBEl.id === questionArray[currentQuestion].correctAnswer){
        messageEl.textContent = "RIGHT!";
        currentQuestion++;
        console.log(currentQuestion);
        score = score + 10;
        console.log(score);
        showQuestion();
         } else {
        messageEl.textContent = "WRONG!";
        currentQuestion++;
         console.log(currentQuestion);
        timeSeconds = timeSeconds-15;
        showQuestion();
         }
     
    }); // end onclick button b
         
      // check button c
    answerCEl.addEventListener("click", function(){
      if (answerCEl.id === questionArray[currentQuestion].correctAnswer){
        messageEl.textContent = "RIGHT!";
        currentQuestion++;
        console.log(currentQuestion);
        score = score + 10;
        console.log(score);
        showQuestion();
         } else {
        messageEl.textContent = "WRONG!";
        currentQuestion++;
         console.log(currentQuestion);
        timeSeconds = timeSeconds-15;
        showQuestion();
         }
     
    }); // end onclick button c

       // check button d
    answerDEl.addEventListener("click", function(){
      if (answerDEl.id === questionArray[currentQuestion].correctAnswer){
        messageEl.textContent = "RIGHT!";
        currentQuestion++;
        console.log(currentQuestion);
        score = score + 10;
        console.log(score);
        showQuestion();
         } else {
        messageEl.textContent = "WRONG!";
        currentQuestion++;
         console.log(currentQuestion);
        timeSeconds = timeSeconds-15;
        showQuestion();
         }
     
    }); // end onclick button d


     }; // end of showTheFirstQuestion
 
 




