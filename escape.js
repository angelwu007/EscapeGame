questions =[
{question: 'How many 9 s are there between 1 and 100?', answer: 20},
{question:'Three times what number is no larger than two times that same number?',answer: 0},
{question: 'How many days are there in 4 years?' , answer: 1461},
{question: 'When my father was 31 I was 8. Now he is twice as old as me. How old am I?', answer: 23},
{question:' 7, 15, 31, ? ', answer:63},
{question: "When you have me, you feel like sharing me. If you do share me, you don't have me. What am I?", answer:'secret'},
{question:'Q. Which part of a boat does a shopaholic like the most?',answer:'the sail'},
{question:'16, 06, 68, 88, ?, 98', answer:78},
{question:' This five letter word becomes shorter when you add two letters to it', answer:'short'}
]

const objects = [
    {name: "rope",   weight: 10},
    {name: "knife",   weight: 8},
    {name: "candlestick",   weight: 2},
    {name: "dumbbell",   weight: 30},
    {name: "poison",   weight: 2},
    {name: "axe",   weight: 15},
    {name: "bat",   weight: 13},
    {name: "trophy",   weight: 25},
    {name: "pistol",   weight: 20}
]


rooms = []


// class Game {
//     constructor () {
//         this.attempts= 3;
//         this.secretObjects =[ 'axe, car key, hammer'] ;
//         this.questionPicked ='';
//         this.selectedObjects = [];


//     }
//     randomSelector(arr) {
//        let randomNumber = Math.floor(Math.random() * arr.length);
//        return randomNumber
        
//     }

//     createMystery() {

//         this.secretOjects.push(objects.name[randomSelector(objects)]);
//         this.secretOjects.push(objects.name[randomSelector(objects)]);
//         this.secretOjects.push(objects.name[randomSelector(objects)]);

//     }
// }

let playerAnswer,secretAnswer,numItemsCollected,itemsCollect,secretObjects;
playerAnswer ='';
realAnswer = '';
secretObjects = [];
numItemsCollected = 0;
itemsCollected = [];

let generateObjects = function (arr){
   for (let i = 0; i<3; i++){
    let randomNumber = Math.floor(Math.random() * arr.length);

    secretObjects.push(arr[randomNumber].name);
    console.log(secretObjects);
   }
}


let getRandomQuestion = function(arr){
    let questionPicked = ''
    let questionAnswer = '';
    let randomNumber = Math.floor(Math.random() * arr.length);
    questionPicked = arr[randomNumber].question;
    questionAnswer = arr[randomNumber].answer;
    secretAnswer.push(questionAnswer);
    return questionPicked;
}



let getShuriken = document.querySelector("img[name='shuriken']");
getShuriken.addEventListener('click',function(){
    playerAnswer = prompt(getRandomQuestion(questions,"type in a word or number"));
    numItemsCollected++;
    itemsCoo
});



