var questionArray = [
    {question: "Question1", answerOptions: ["answer1","answer111", "answer1111", "answer11111"]},
    {question: "Question2", answerOptions: ["answer12","answer112", "answer1112", "answer11112"]},
    {question: "Question3", answerOptions: ["answer13","answer113", "answer1113", "answer11113"]},
    {question: "Question4", answerOptions: ["answer14","answer114", "answer1114", "answer11114"]},
     {question:"Question5", answerOptions: ["answer15","answer115", "answer1114", "answer11115"]},

]; // end of QuestionArray

// identify DOM elements
var questionToAsk = document.querySelector(".questionAsked");
var listOfAnswers = document.querySelector(".potential-answers");
 // turn each question into an object

 var eachQuestion = function(array){

    //display question

    questionToAsk.textContent = questionArray[0].question;
    var answerArray = questionArray[0].answerOptions;
    console.log(answerArray);
  ;
    
 }; // end of function eachQuestion

 eachQuestion(questionArray);