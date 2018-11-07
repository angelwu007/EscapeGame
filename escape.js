questions =[
{question: 'Q. How many 9 s are there between 1 and 100?', answer: 20},
{question:'Q. Three times what number is no larger than two times that same number?',answer: 0},
{question: 'Q. How many days are there in 4 years?' , answer: 1461},
{question: 'Q. When my father was 31 I was 8. Now he is twice as old as me. How old am I?', answer: 23},
{question:' 7, 15, 31, ? ', answer:63},
{question: "Q. When you have me, you feel like sharing me. If you do share me, you don't have me. What am I?", answer:'secret'},
{question:'Q. Which part of a boat does a shopaholic like the most?',answer:'sail'},
{question:'16, 06, 68, 88, ?, 98', answer:78},
{question:'Q. This five letter word becomes shorter when you add two letters to it', answer:'short'},
{question:'Q. When you need me you throw me away, but whe you need me, you bring me back. What am I ?', answer:'an anchor'},
{question:'Q. I stay in the corner but travel around the world. What am I ?', answer:'a stamp'},
{question: 'Q. What was the largest island in the world before Australia was discovered', answer:'australia'},
{question: 'Q. What can you hold in your right hand, but not in your left?', answer:'your left hand'}
]

const objects = [
    {name: "rope",   weight: 10},
    {name: "knife",   weight: 8},
    {name: "candlestick",   weight: 2},
    {name: "fairy-wand",   weight: 30},
    {name: "poison",   weight: 2},
    {name: "bat",   weight: 13},
    {name: "grenade",   weight: 25},
    {name: "pistol",   weight: 20},
    {name:'shuriken', weight: 20},
    {name:'mona-lisa'},
    {name:'pistol'},
    {name:'key'},
    {name:'bomb'},
    {name:'hammer'},
    {name: 'telescope'}
]
// class Game {
//     constructor () {
//         this.attempts= 3;
//         this.secretObjects =[ 'axe, car key, hammer'] ;
//         this.questionPicked ='';
//         this.selectedObjects = [];}
// }





let playerAnswer,secretAnswer,numItemsCollected,itemsCollect,secretObjects;
playerAnswer ='';
secretAnswer = '';
secretObjects = [];
numItemsCollectedByPlayer = 0;
itemsCollected = [];
correctItemsPickedByPlayer = 0;



// Three random objects should be generated everytime a room is selected
let generateObjects = function (arr) {

    while(secretObjects.length < 3){
      let randomNumber = Math.floor(Math.random() * arr.length);
      if (!secretObjects.includes(arr[randomNumber].name)){
          secretObjects.push(arr[randomNumber].name);
      }
    }
  } 


 // create a random question 
  let getRandomQuestion = function(arr){
    let questionPicked = ''
    let questionAnswer = '';
    let randomNumber = Math.floor(Math.random() * arr.length);
    questionPicked = arr[randomNumber].question;
    questionAnswer = arr[randomNumber].answer;
    secretAnswer = questionAnswer;
    return questionPicked;
}


let checkIfPlayerWon = function(getElement){

    if ( itemsCollected.length < 3){ 
        playerAnswer = prompt(getRandomQuestion(questions,"type in a word or number"));
        if (typeof playerAnswer === "string"){ 
            playerAnswer = playerAnswer.toLowerCase();
            }
        if ( playerAnswer == secretAnswer){
            getElement.remove();
            numItemsCollectedByPlayer++; 
            itemsCollected.push(getElement.name);
            alert('Alright! You have received a ' + getElement.name);      
        }
    } else {
        itemsCollected.forEach(item=>{
        if (secretObjects.includes(item)){
            console.log(secretObjects);
            correctItemsPickedByPlayer++;
        }
        })
        if (correctItemsPickedByPlayer === 3){
            alert('You Won');
            }else{
            alert('You have collected ' +correctItemsPickedByPlayer+ ' correct picks' );
            }
    }

}


// let removeItem = document.querySelector('.remove');
// removeItem.addEventListener('click',function(){

// });


let getStartGame = document.querySelector('.start');
let getModal = document.querySelector('.center-modal')
getStartGame.addEventListener('click',function(){
    getModal.remove();
    generateObjects(objects);

})

let getShuriken = document.querySelector("img[name='shuriken']");
getShuriken.addEventListener('click',function(){
        checkIfPlayerWon(getShuriken);
});

let getGrenade = document.querySelector("img[name = 'grenade'] ");
getGrenade.addEventListener('click',function(){
    checkIfPlayerWon(getGrenade);
});

let getBomb = document.querySelector("img[name = 'bomb'] ");
getBomb.addEventListener('click',function(){
    checkIfPlayerWon(getBomb);
});

let getPistol = document.querySelector("img[name = 'pistol'] ");
getPistol.addEventListener('click',function(){
    checkIfPlayerWon(getPistol);
});

let getPoison = document.querySelector("img[name = 'poison'] ");
getPoison.addEventListener('click',function(){
    checkIfPlayerWon(getPoison);
});