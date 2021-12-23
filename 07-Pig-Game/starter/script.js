'use strict';

let score0El=document.querySelector('#score--0')
let score1El=document.getElementById('score--1')
let current1El=document.getElementById('current--1')
let current0El=document.getElementById('current--0')
let player0El=document.querySelector('.player--0')
let player1El=document.querySelector('.player--1')

let diceEl=document.querySelector('.dice')
let btnNew=document.querySelector('.btn--new')
let btnRoll=document.querySelector('.btn--roll')
let btnHold=document.querySelector('.btn--hold')

let scores,currentScore,activePlayer,playing
let initial=function(){
    player0El.classList.add('player--active')
     currentScore=0
     activePlayer=0
     scores=[0,0]
    diceEl.classList.add('hidden')
    score0El.textContent=0
    score1El.textContent=0
    current0El.textContent=0
    current1El.textContent=0
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
     playing=true

}
initial()

let switchPlayer=function(){
    document.getElementById(`current--${activePlayer}`).textContent=0
    activePlayer=activePlayer=== 0? 1:0
    currentScore=0
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}

btnRoll.addEventListener('click',function(){
    //generate a random dice roll,display,check for 1
    if (playing){
    let dice=Math.trunc(Math.random()*6)+1
    diceEl.classList.remove('hidden')
    diceEl.src=`dice-${dice}.png`

    if (dice!=1){
    //add to current score
        currentScore+=dice
        document.getElementById(`current--${activePlayer}`).textContent=currentScore
    }else{
    //switch  players
        switchPlayer()
    }
    
}})

btnHold.addEventListener('click',function(){
    if (playing){
    //add currentscore to score.check score.change player
    scores[activePlayer]+=currentScore
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer]
    if (scores[activePlayer]>=100){
        diceEl.classList.add('hidden')
        playing=false
       document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
       document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    }else{
    switchPlayer()
    }
}})
btnNew.addEventListener('click',initial)




