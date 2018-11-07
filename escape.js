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
{question:'Q. When you need me you throw me away, but whe you don\'t need me, you bring me back. What am I ?', answer:'anchor'},
{question:'Q. I stay in the corner but travel around the world. What am I ?', answer:'stamp'},
{question: 'Q. What was the largest island in the world before Australia was discovered', answer:'australia'},
{question: 'Q. What can you hold in your right hand, but not in your left?', answer:'left hand'}
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

let playerAnswer,secretAnswer,numItemsCollected,itemsCollect,secretObjects;
playerAnswer ='';
secretAnswer = '';
secretObjects = [];
numItemsCollectedByPlayer = 0;
itemsCollected = [];


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
    console.log("======", getElement)
    let correctItemsPickedByPlayer = 0;

    if ( itemsCollected.length < 3){ 
        playerAnswer = prompt(getRandomQuestion(questions,"type in a word or number"));
        if (typeof playerAnswer === "string"){ 
            playerAnswer = playerAnswer.toLowerCase();
            }
        if ( playerAnswer == secretAnswer){
            console.log("----------- ", document.getElementsByName(getElement))
            numItemsCollectedByPlayer++; 
            itemsCollected.push(getElement);
            alert('Alright! You have received a ' + getElement);  
            let element = document.getElementsByName(getElement), index;
            for(index = element.length - 1; index >= 0; index--) {
                element[index].parentNode.removeChild(element[index]);
            }
        }
        itemCollectedUI();
        objectsDisplay();

    } 
    if(itemsCollected.length === 3) {
        console.log("checking if correct items", secretObjects)
        itemsCollected.forEach(item=>{
            console.log("running through for each statemnt",secretObjects, item)
        if (secretObjects.includes(item)){
            console.log(secretObjects);
            correctItemsPickedByPlayer+=1;
        }
        })
        if (correctItemsPickedByPlayer === 3){
            alert('You Won');
        }else{
            alert('You have collected ' +correctItemsPickedByPlayer+ ' correct picks' );
        }
    }

    
}

//////////////////////////// User Interface/////////////////////////??



let getStartGame = document.querySelector('.start');
let getModal = document.querySelector('.center-modal')
getStartGame.addEventListener('click',function(){
    getModal.remove();
    generateObjects(objects);
   
})


let images = document.querySelectorAll('img')

for(let i = 0; i < images.length; i++) {
    document.images[i].addEventListener('click', function() {
        checkIfPlayerWon(images[i].name);
    })
}


let itemCollectedUI = function () {

    let ItemCounter = document.querySelector('#item-counter');
    ItemCounter.textContent = numItemsCollectedByPlayer;

}

let playerName = function(){
    let input = document.querySelector('input[type=text]');
    let userName = document.getElementById('name');
    userName.innerHTML = input.value;
}



let objectsDisplay = function () {

    if ( itemsCollected.length === 1){
        let firstObjectUI = document.querySelector('.ui-items p:first-of-type')
        firstObjectUI.innerHTML = itemsCollected[0];
    }else if ( itemsCollected.length === 2){

        let secondObjectUI = document.querySelector('.ui-items p:nth-of-type(2)')
        secondObjectUI.innerHTML = itemsCollected[1];
    } else if (itemsCollected.length === 3){

        let lastObjectUI = document.querySelector('.ui-items p:last-of-type')
        lastObjectUI.innerHTML = itemsCollected[2];

    }

}



//class game//
let removeItem = document.querySelectorAll('.interface button');
let userDisplayObject = document.querySelectorAll('.ui-items p')
for(let i = 0; i < removeItem.length; i++){
    removeItem[i].addEventListener('click',function(){
        userDisplayObject[i].remove();
        itemsCollected[i].remove();

    });
}





let removefirstItem = document.querySelector('.interface button:first-of-type');
let removeSecondItem= document.querySelector('.interface button:nth-of-type(2)');
let removeThirdItem = document.querySelector('.interface button:last-of-type');

// class Game {

//     constructor() {
//     this.playerAnswer ='';
//     this.secretAnswer = '';
//     this.secretObjects = [];
//     this.numItemsCollectedByPlayer = 0;
//     this.itemsCollected = [];
//     } 
//   }

// class Mystery {
//     constructor(){

//     }
// }

