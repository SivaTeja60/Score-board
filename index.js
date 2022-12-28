let homeEl=document.getElementById("home-score")
let guestEl=document.getElementById("guest-score")
let newGame=document.getElementById("new-game")
function homeAddone(){
    homeEl.textContent=Number(homeEl.textContent)+1
}
function homeAddtwo(){
    homeEl.textContent=Number(homeEl.textContent)+2
}
function homeAddthree(){
    homeEl.textContent=Number(homeEl.textContent)+3
}
function guestAddone(){
    guestEl.textContent=Number(guestEl.textContent)+1
}
function guestAddtwo(){
    guestEl.textContent=Number(guestEl.textContent)+2
}
function guestAddthree(){
    guestEl.textContent=Number(guestEl.textContent)+3
}
function reset(){
    homeEl.textContent=0
    guestEl.textContent=0
}