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

startButtonEl.addEventListener("click", function(){
 instructionsEl.style.display = "none";
});

let currentScore = 0;
 let currentQuestion = 0;
 let score = 0;


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
   
 //Displaying the question

 var questionDisplayed = document.getElementById("questionAsked");
  var answerAEl = document.getElementById("a");
 var answerBEl = document.getElementById("b");
 var answerCEl = document.getElementById("c");
 var answerDEl = document.getElementById("d");
 
// Display current question

var displayCurrentQuestion = function(){
   questionDisplayed.textContent = questionArray[currentQuestion].question
  answerAEl.textContent = questionArray[currentQuestion].a;
  answerBEl.textContent = questionArray[currentQuestion].b;
  answerCEl.textContent = questionArray[currentQuestion].c;
  answerDEl.textContent = questionArray[currentQuestion].d;

};

// check answers
  var checkAnswers = function(){
     var messageToUser = document.getElementById("message");

     // check button A
     answerAEl.addEventListener("click", function(){
      if (answerAEl.id === questionArray[currentQuestion].correctAnswer){
      messageToUser.textContent = "RIGHT!";
      currentQuestion++
      displayCurrentQuestion();
      } else {
      messageToUser.textContent = "WRONG!";
        console.log(timeSeconds);
        timeSeconds = timeSeconds-15;
      currentQuestion++
      displayCurrentQuestion();
    }
 }); // end of check button B
 
     // check button B
     answerBEl.addEventListener("click", function(){
      if (answerBEl.id === questionArray[currentQuestion].correctAnswer){
      messageToUser.textContent = "RIGHT!";
      currentQuestion++
      displayCurrentQuestion();
      
    } else {
      messageToUser.textContent = "WRONG!";
       timeSeconds = timeSeconds-15;
      currentQuestion++
      displayCurrentQuestion();
    }
 }); // end of check button B
 
    // check button C
     answerCEl.addEventListener("click", function(){
      if (answerCEl.id === questionArray[currentQuestion].correctAnswer){
      messageToUser.textContent = "RIGHT!";
      currentQuestion++
      displayCurrentQuestion();
    } else {
      messageToUser.textContent = "WRONG!";
       timeSeconds = timeSeconds-15;
      currentQuestion++
      displayCurrentQuestion();
    }
 }); // end of check button C

    // check button D
     answerDEl.addEventListener("click", function(){
      if (answerDEl.id === questionArray[currentQuestion].correctAnswer){
      messageToUser.textContent = "RIGHT!";
      currentQuestion++
      displayCurrentQuestion();
    } else {
      messageToUser.textContent = "WRONG!";
       timeSeconds = timeSeconds-15;
      currentQuestion++
      displayCurrentQuestion();
    }
 }); // end of check button D
 
 

    
  }; // end of CheckAnswers function

  checkAnswers();




 