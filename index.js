var readLineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.cyan.italic('Welcome to quiz'));
var score = 0;
function askUser(question, answer){
  var ans = readLineSync.question(chalk.blue(question));
  if(ans.toLowerCase() === answer.toLowerCase()){
    score++;
  }
  // else{
  //   score--;
  // }
}
var highScores = [
  {
    name: 'tony',
    score: 2
  },
  {
    name: 'bucky',
    score: 2
  }
];
const maxScore = Math.max(...highScores.map(x => x.score));
var listOfQuestions = [
  {
    question: 'Whats my highest degree of education :',
    answer: 'masters'
  },
  {
    question: 'Whats my nick name :',
    answer: 'none'
  },
  {
    question: 'Where do i live :',
    answer: 'hyderabad'
  },
  {
    question: 'Organization i work for :',
    answer: 'keste'
  },
  {
    question: 'Whats my bike :',
    answer: 'classic 350'
  }
];
for(var i=0; i< listOfQuestions.length; i++){
  askUser(listOfQuestions[i].question, listOfQuestions[i].answer);
}
console.log('-----------------');
console.log('Highest score so far :');
for(var i=0; i< highScores.length; i++){
  console.log(highScores[i].name, highScores[i].score);
}
console.log('-----------------');
console.log(chalk.green('your score :'), score);

if(score > maxScore){
  console.log(chalk.red('You have scored big.. Submit this screen shot'));
}
