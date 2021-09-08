var readlineSync = require('readline-sync')

var score = 0

console.log("Hey! Welcome to the General Knowledge Quiz Made by Anjali Garg:) ")

var userName = readlineSync.question("What's your name? ")

console.log("Best of Luck " + userName + ". Hope you'll complete both levels.")

console.log("There will be 2 levels, if you will complete level 1 then you will be entered to next level.\nSo lets start, here's your first question.\n")

var questionsAnswers = [
  {
    question:"How many days are there in a year? ",
    answer:"365"
  },
  {
    question:"Which language is used by the computer to process data? ",
    answer:"Binary language"
  },
  {
    question:"Global warming is caused by the excess of which type of gas? ",
    answer:"Carbon dioxide"
  },
  {
    question:"Which African nation is famous for chocolate? ",
    answer:"Ghana"
  },
  {
    question:"Who painted the Mona Lisa? ",
    answer:"Leonardo da Vinci"
  },
  {
    question:"Capital of Uttarakhand is? ",
    answer:"Dehradun"
  },
  {
    question:"Smallest state of India is? ",
    answer:"Goa"
  },
  {
    question:"Who invented Computer? ",
    answer:"Charles Babbage"
  },
  {
    question:"Who is the Father of our Nation? ",
    answer:"Mahatma Gandhi"
  },
  {
    question:"Which is the most sensitive organ in our body? ",
    answer:"Skin"
  },
]

function play(question, answer) {

  var userAnswer = readlineSync.question(question)

  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Correct answer ")
    score +=1
  }else {
    console.log("Wrong Answer ")
  }

  console.log("currentScore: ", score)
  console.log("-------------------------------------------------------------")
}


for(var i=0;i<5;i++) {
  play(questionsAnswers[i].question, questionsAnswers[i].answer)
}

if(score == 5 ) {
  console.log("Congratulations! You have reached now level 2.\n")
  for(var i=5;i<questionsAnswers.length;i++) {
    play(questionsAnswers[i].question, questionsAnswers[i].answer)
  }
}else {
  console.log("Final Score: ", score)
  console.log("Try again to reach next level!!")
}

if(score == 10 ) {
  console.log("Final Score: ", score)
  console.log("Yay!! you won!!!!!")
} else {
  console.log("Final Score: ", score)
  console.log("Better luck next time:)")
}