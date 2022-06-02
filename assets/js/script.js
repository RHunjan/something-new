var questionArray = [
    {question: "Javascript is an _______ language?", a: "Object-Oriented", b:"Object-Based", c: "Procedural", d: "none", correctAnswer: 'a'},
    {question: "Which of the following keywords is used to define a variable in Javascript?", a: "var", b:"let", c: "Both", d: "none", correctAnswer: 'c'},
    {question: "Which of the following methods is used to access HTML elements using Javascript?", a: "getElementById()", b:"getElementsbyClassName()", c: "Both", d: "none", correctAnswer: 'c'},
    {question: "Upon encountering empty statements, what does the Javascript Interpreter do?", a: "Trows an error", b:"Ignores the statement", c: "Gives a warning", d: "none", correctAnswer: 'b'},
    {question: "How can a datatype be declared to be a constant type?", a: "const", b:"let", c: "var", d: "constant", correctAnswer: 'a'},
    {question: "What keyword is used to check whether a given property is valid or not?", a: "in", b:"is in", c: "exists", d: "lies", correctAnswer: 'a'},
    {question: "Which function is used to serialize an object into a JSON string in Javascript?", a: "stringify()", b:"parse()", c: "convert()", d: "none of the above", correctAnswer: 'b'},
    {question: "Which of the following is not a Javascript framework?", a: "Node", b:"Vue", c: "React", d: "Cassandra", correctAnswer: 'd'},
    {question: "What keyword is used to declare an asynchronous function in Javascript?", a: "async", b:"await", c: "setTimeout", d: "None of the Above", correctAnswer: 'a'},
    {question: "How to stop an interval timer in Javascript?", a: "clearInterval", b:"clearTimer", c: "intervalOver", d: "none", correctAnswer: 'a'},
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
  var initialMinutes = 10;
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

    // show final score
  var finalScoreEl = document.getElementById("final-score");
  var formEl = document.querySelector(".form-group");
  var formScores = document.querySelector('.high-scores');
    var finalScore = function(){
 
       questionContainerEl.style.display = "none";
     
       finalScoreEl.textContent = `Thanks for playing! Your final score is ${score}`;
       formEl.style.display = "block";
       

    };

    // Save high scores
     var nameButtonEl = document.getElementById("save-score");
  
    var highScoreArray = [];
    nameButtonEl.addEventListener("click", function(){
      var playerNameEl = document.querySelector("input").value;
      var playerObject = {
        savedScore: score,
        savedName: playerNameEl}
      highScoreArray.push(playerObject);
      localStorage.setItem('high-score', JSON.stringify(highScoreArray));
      highScoreArray = localStorage.getItem('high-score');
      highScoreArray = JSON.parse(highScoreArray);
      //console.log(highScoreArray);
      listHighScore();
      formScores.style.display = "block";
      playerNameEl.textContent = '';

      
     });

      
     // list the items
     var listHighScore = function(){
           
         for (i=0; i<highScoreArray.length; i++){
           var highScoreListEl = document.getElementById("high-score-list");
           let scoreItem = document.createElement('li');
           scoreItem.innerHTML = highScoreArray[i].savedName;
           highScoreListEl.appendChild(scoreItem);
          
         }
        
   
       
            
       
      
     };
    
    
   
    // play again

    var playAgainButtonEl = document.getElementById("play-again");
    playAgainButtonEl.addEventListener("click", function(){
      currentQuestion = 0;
       // hide instructions
      instructionsEl.style.display = "none";
      // hide high scores
      formEl.style.display = "none";
      finalScoreEl.style.display = "none";
      questionContainerEl.style.display = "block";
      messageEl.textContent = '';
       // start timer
      startTimer();
      // show first question
      showQuestion();
    } )

     // var test = function(){
      //  let jim = '5';
     //   localStorage.setItem('jim', jim);
     //   console.log(localStorage.getItem('jim'))
     // };
//
      //test();









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

  



