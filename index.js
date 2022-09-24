const chalk = require("chalk");
var readlineSync = require('readline-sync');
var score = 0;
 

//program starts
var myname = readlineSync.question("Please enter your name \n");
console.log(chalk.yellow ('\nWELCOME '+ myname + ' on "How well you know Nikhil ?"\n\n'));

//play fucntion
function play(question, option, answer){
    var userAnswer = readlineSync.question(option) 

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log(chalk.green('Right answer!!! Keep Going'));
        score +=1;
    } else {
        console.log(chalk.red('Wrong answer!!! \n'));
        console.log(chalk.yellow('Correct answer is '+ answer));

    }
    console.log("=====>Your score after this round: " + score+"\n");
}

//questions
var questions = [
    {
        question: "What is the real name of Batman ?\n",
        option: "(A)Tony Stark\n(B)Bruce Wayne\n(C)Barry Allen\n",
        answer: "B"
    },
    {
        question: "Where does Batman live ?\n",
        option: "(A)Gotham\n(B)New York\n(C)Miami\n",
        answer: "A"
    },
    {
        question: "Name the team which Batman is part of ?\n",
        option: "(A)Avengers\n(B)Power Rangers\n(C)Justice League\n",
        answer: "C"
    },
    {
        question: "Name the villain who was in 'The Dark Knight'\n",
        option: "(A)Riddler\n(B)Harvey Dent\n(C)Joker\n",
        answer: "C"
    },
    {
        question: "Who trained Batman ?\n",
        option: "(A)Alfred\n(B)Ra's Al Ghul(Henry Ducard)\n(C)Penguin\n",
        answer: "B"
    },
];

//array length
var len = questions.length;

//for loop
for(var i = 0 ; i<len; i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.option, currentQuestion.answer);
}
console.log(chalk.bgGreenBright("Your Final Score is "+ score+ "..\n\n"));


//https://replit.com/@swdnikhil/How-well-you-know-me?v=1