'use strict';

// console.log(document.querySelector('.message').textContent);
// console.log('hello22dd');
// document.querySelector('.number').textContent = 30;
// document.querySelector('.score').textContent = 55;
// document.querySelector('.guess').value = 50;
let score = 20; 
let highScore = 0;
document.querySelector('.score').textContent = score;
let secretNumber = Math.trunc(Math.random()*20) + 1;
const displayMessge = ( mainMessage) => {
    document.querySelector('.message').textContent = mainMessage;
}
document.querySelector('.check').addEventListener('click',function(){
   const guess = parseInt(document.querySelector('.guess').value);
   console.log(typeof guess);
   
   
   if(!guess){
          displayMessge('no number')
        //document.querySelector('.message').textContent = 'no number';
   }
   else if( guess === secretNumber){
        document.querySelector('.message').textContent = 'its matched';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
       
        
   }
   else if(guess !== secretNumber){
    if (score > 1){
        document.querySelector('.message').textContent =  (guess > secretNumber) ? 'number is greater' : 'number is less than';
        score--;
        document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.score').textContent = 0; 
        document.querySelector('.message').textContent = 'you loss the game';
    }
   }
})
//    else if( guess > secretNumber){
//     if (score > 1){
//         document.querySelector('.message').textContent = 'number is greater';
//         score--;
//         document.querySelector('.score').textContent = score;
//     }
//     else{
//         document.querySelector('.score').textContent = 0; 
//         document.querySelector('.message').textContent = 'you loss the game';
//     }
//    }
//    else if (guess < secretNumber){
//     if (score > 1){
//         document.querySelector('.message').textContent = 'number is less than';
//         score--;
//         document.querySelector('.score').textContent = score;
//     }
//     else{
//         document.querySelector('.score').textContent = 0; 
//         document.querySelector('.message').textContent = 'you loss the game';
//     }
//    }
// })
document.querySelector('.again').addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value= '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    score = 20;
})