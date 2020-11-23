var score = 0;
var readlineSync = require("readline-sync");
var chalk = require("chalk");
console.log(chalk.bgRed("        ---Let's Start Our Quiz---      "));
var userName = readlineSync.question(chalk.bold.magenta("What's Your name ? "));
console.log(chalk.yellow("Welcome! ") + chalk.bold.cyan(userName) + chalk.yellow(" To Do You Know Prashant Kumar."));
function Play(question, answer) {
    var userAns = readlineSync.question(question);
    if (userAns === answer) {
        console.log(chalk.green("Right!"));
        score = score + 1;
    }
    else {
        console.log(chalk.bold.red("Wrong!"));
    }
    console.log(chalk.green("current score: ", score));
    console.log(chalk.bold.grey("-------------------------"));
}

var QuestionOne = {
    question: "1.Do You know me?",
    answer: "Yes"

}
var QuestionTwo = {
    question: "2.Where do i live?",
    answer: "Cochin"
}
var QuestionThree = {
    question: "3.What's mine passion? ",
    answer: "Coding"
}
var QuestionFour = {
    question: "4.Do I have a gf? ",
    answer: "No"
}
var QuestionFive = {
    question: "5.From which state i am?",
    answer: "Bihar"
}
var QuestionSix = {
    question: "6.How much Older i am ?",
    answer: "20"
}
var QuestionSeven = {
    question: "7.What's mine nick name?",
    answer: "Prashu"
}
var myInfo = [QuestionOne, QuestionTwo, QuestionThree, QuestionFour, QuestionFive, QuestionSix, QuestionSeven];
for (var i = 0; i < myInfo.length; i++) {
    var currentQuestion = myInfo[i];
    Play(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.bold.blue("Yay! You scored: " + score));