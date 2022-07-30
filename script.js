

//RECUPERATION DES ELEMENTS DU DOM

let p1_score_div = document.querySelector('#p1_score')
let p2_score_div = document.querySelector('#p2_score')
let p1_name = document.querySelector('#p1_name')
let p2_name = document.querySelector('#p2_name')
let p1_current = document.querySelector('#p1_current')
let p2_current = document.querySelector('#p2_current')
let new_game = document.querySelector('#new_btn')
let roll_btn = document.querySelector('#roll_btn')
let hold_btn = document.querySelector('#hold_btn')
let des_div = document.querySelector('#des')
let div_count = 0
p1_active = true
after()


//FONCTION NOMBRE ALEATOIRE

function get_random(){
    let random = (Math.floor(Math.random()*6)+1)
    des_div.textContent = random
    if(random!=1){
        div_count+=random
    }else{
        div_count = 0
        update_display()
        p1_active = !p1_active
        after()
    }
    update_display()
}

// FONCTION POUR METTRE A JOUR L'AFFICHAGE

function update_display(){
    p1_active ? p1_current.textContent = div_count : p2_current.textContent = div_count
}

// GERE L'INDICATEUR DU JOUEUR EN TRAIN DE JOUER

function after(){
    if(p1_active){
        p1_name.classList.add('active')
        p2_name.classList.remove('active')
    }else{
        p2_name.classList.add('active')
        p1_name.classList.remove('active')
    }
}

//FONCTION POUR CONTROLER SI UN JOUEUR A GAGNE

function check_win(){
    if(Number(p1_score_div.textContent) >= 100){
        alert('p1 win')
    }else if(Number(p2_score_div.textContent) >= 100){
        alert('p2 win')
    }
}


// LES LISTENNERS SUR LES DIFFERENTS BOUTONS

roll_btn.addEventListener('click', get_random)


hold_btn.addEventListener('click', () => {
    if(p1_active){
        p1_score_div.textContent = Number(p1_score_div.textContent) + div_count
        p1_current.textContent = 0
    }else{
        p2_score_div.textContent = Number(p2_score_div.textContent) + div_count
        p2_current.textContent = 0
    }  
    div_count = 0
    des_div.textContent = '-'
    p1_active = !p1_active
    after()
    check_win()
})

new_game.addEventListener('click', () => {
    p1_current.textContent = 0
    p1_score_div.textContent = 0
    p2_current.textContent = 0
    p2_score_div.textContent =0
    des_div.textContent = 0
    div_count = 0
    p1_active = true
    after()
})