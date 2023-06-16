var readlineSync = require('readline-sync');


function blank(){// function to print nothing
  console.log();
}

var score = 0;
var respond = readlineSync.question("what's your name? ");
console.log("hi! " + respond);
console.log("this is a mini quiz on MCU");
blank();//fn call
var respond = readlineSync.question("are you intrested to play this game?(yes/no) ");

if (respond === "yes"){
  blank();//fn call
  console.log("but you have to promise to not to use the Google");
  var confirmation = readlineSync.question("if you agreed press ok ");
  
  if(confirmation === "ok"){
    console.log("ok! let's see how big fan of MCU are you");
    blank();
    console.log("-----------");
}
  else{
    console.log("cheater");
    process.exit();
  }
  
}
else{
    console.log("ok see you next time");
    process.exit();
}

var question = [
  {
    question: "who invented the marvel comics? ",
    answer: "stan lee"
  },
  { 
    question: "what is ironman's name in MCU? ",
    answer: "tony stark"  
  },
  {
    question: "what was the first AI assistant created by Tony stark? ",
    answer: "jarvis"     
  },
  {
    question: "Thor is the God of? ",
    answer: "thunder"     
  },
  {
    question: "captain america's shield is made of which metal? ",
    answer: "vibranium"     
  },
  {
    question: "thor's father name? ",
    answer: "odin"     
  }
];


function gameplay(question,answer){
  var useranswer = readlineSync.question(question);

  if(useranswer.toUpperCase() === answer.toUpperCase()){
    console.log("correct");
    score++;
  }
  else{
    console.log("you are wrong");
    console.log("correct answer is ",answer);
  }
  console.log("current score is ",score);
  console.log("-------------");
  blank();
}


function maingame(){
  for(var i=0; i<question.length; i++){
    var currentquestion = question[i];
    gameplay(currentquestion.question,currentquestion.answer);
  }
}


function finalscore(){
if (score===question.length){
  console.log("Congrats!! you answerd all the questions correctly");
  console.log("so your total score is ",score);
}
  else{
  console.log("you answered " + score + " out of " + question.length + " correctly");
  console.log("so your total score is ",score);
  }
}

maingame();
finalscore();