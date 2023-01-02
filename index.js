let home = 0
let away = 0
document.getElementById("home-el").textContent = home
document.getElementById("away-el").textContent = away

function plusOneHome() {
    home += 1
    document.getElementById("home-el").textContent = home
}

function plusTwoHome() {
    home += 2
    document.getElementById("home-el").textContent = home
}

function plusThreeHome() {
    home += 3
    document.getElementById("home-el").textContent = home
}

function plusOneAway() {
    away += 1
    document.getElementById("away-el").textContent = away    
}

function plusTwoAway() {
    away += 2
    document.getElementById("away-el").textContent = away   
}

function plusThreeAway() {
    away += 3
    document.getElementById("away-el").textContent = away 
}

function newGame() {
    home = 0
    away = 0
    document.getElementById("home-el").textContent = home
    document.getElementById("away-el").textContent = away
}