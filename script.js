

//RECUPERATION DES ELEMENTS DU DOM

let p1_score = document.querySelector('#p1_score')
let p2_score = document.querySelector('#p2_score')
let p1_current = document.querySelector('#p1_current')
let p2_current = document.querySelector('#p2_current')
let new_game = document.querySelector('#new_btn')
let roll_btn = document.querySelector('#roll_btn')
let hold_btn = document.querySelector('#hold_btn')

//FONCTIONS NOMBRE ALEATOIRE

function get_random(){
    console.log(Math.floor(Math.random()*7))
}

roll_btn.addEventListener('click', get_random)