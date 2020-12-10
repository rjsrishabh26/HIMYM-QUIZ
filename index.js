var readlineSync = require("readline-sync");
const chalk = require('chalk');
var score=0;
var highScores= 5;

var userName =readlineSync.question(chalk.bgCyan.bold("Type in your name to start!! "));

console.log(chalk.blue.bold("Welcome " + userName + " to the Quiz about How I met Your Mother"));
console.log(chalk.blue.bold("Dont worry, your score wont go under 0 and the casing of your answer doesnt matter.The first 4 questions are MCQs and 1 point each with 1 point deduction for wrong answer. Level two is subjective questions with +2 -2. Enjoy!"))

var level= 0;
function play(question,answer){
  var input = readlineSync.question(question);
  var userAnswer =input.toUpperCase();

  if (userAnswer === answer){
		if(level==0){
    	console.log(chalk.green.bold("Right!"));
    	score=score+1 ;
		}
		else{
			console.log(chalk.green.bold("Right!"));
			score=score+2;
		}
  }
  else{
    console.log(chalk.red.bold("Wrong!"));
		if(level== 0){
			if(score>0){
				score--;
			}
			else{
				score = 0;
			}
		}
		
  }

  console.log(chalk.green.bold("Current Score: ", score));
    console.log("------------")
}

var questions = [{
  question : 
  chalk.blue.bold("Q1)Who was Ted's roommate for the longest time :\n") + "\na)Barney" + "\nb)Marshal" +"\nc)Lily" + "\nd)Robin\n" ,
  answer : 
  "B"
}, {
  question : 
  chalk.blue.bold("Q2)What was the name of the cab driver that drove the gang to Robins' for the first time:\n ")+ "\na)Ranjit" + "\nb)Ramu" +"\nc)Rahul" + "\nd)NEIL\n" ,
  answer : 
  "A"
},{
  question : 
  chalk.blue.bold("Q3)What was one game that Barney Loved playing:\n ") + "\na)Football" + "\nb)Chess" +"\nc)Lazer Tag" + "\nd)Marathon\n" ,
  answer : 
  "C"
},{
  question : 
  chalk.blue.bold("Q4)Where was Robin from:\n") + "\na)The Internet" + "\nb)The Great North" +"\nc)States" + "\nd)Canada\n " ,
  answer : "D"
},{
  question : 
  chalk.blue.bold("Q5)What did Ted call himself when the Captain told him that men make their own names:\n"),
  answer : "GAlACTIC PRESIDENT SUPERSTAR MACAWESOMEVILLE"
},{
  question : 
  chalk.blue.bold("Q6)What is the name of Barney's infamous book of tricks?"),
  answer : "THE PLAYBOOK"
}];


for (var i=0; i<questions.length;i++){
  var currentQuestion = questions[i];
	if(i==4){
		console.log("Welcome to Level two!")
		level=2;
	}
  play(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.green("Yaaay!! YOU SCORED :", score + " out of 8." ));
if(score>highScores){
	console.log("Congratulations you beat the high score!!")
}
else{
	console.log(chalk.magentaBright("The Highscores is " + highScores));
		for (i = 0; i <highScores.length; i++) {
			console.log(chalk.magentaBright((i+1) +"." + " " + highScores[i].name + ": " + highScores[i].total));
		}

}
