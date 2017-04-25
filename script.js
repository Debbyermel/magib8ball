$(document).ready(function() {
var questionText = null;
var magicBall = {};
magicBall.answers = ["It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes, definitely",
      "You may rely on it",
      "As I see it, yes",
      "Most likely",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Do not count on it",
      "My reply is no",
      "My sources say no",
      "Outlook not so good",
      "Very doubtful" ];

magicBall.answerQuestion = function(question) {
  
  console.log("You asked: " + question);
  var randomNumber = Math.random() * this.answers.length;
  var randomInteger = Math.floor(randomNumber);

  console.log("Your answer is: " + this.answers[randomInteger]);
  
  $("#answer").text(this.answers[randomInteger]);
  $("#answer").fadeIn(4000);
  
};
  
magicBall.getQuestion = function () {  
  console.log("Should be hiding answer now");
  $("#answer").text = "";
  $("#answer").hide();
  //$("#answer").text = "";
  questionText = prompt("Please ask a YES/NO question:");
  //console.log("Hiding answer after prompt");
  //$("#answer").fadeOut(7000);
  $("#8ball").effect( "shake" );
  if ((questionText != null) && (questionText != "")) {
    //magicBall.answerQuestion(questionText);
    $("#answer").click(magicBall.answerQuestion(questionText));
  }  
  else {
    //console.log("You didn't ask a question!");
    $("#answer").text("You didn't ask a question!");
    $("#answer").fadeIn(4000);
  }
};

  //console.log("before asking question?");
$("#answer").hide();
$("#questionButton").click(magicBall.getQuestion);
//magicBall.getQuestion();

});

