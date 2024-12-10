let scoreHome = 0
let scoreGuest = 0
let txtHomeScore = document.getElementById('txtHomeScore')
let txtGuestScore = document.getElementById('txtGuestScore')

function HomePlusOne(){
    scoreHome++
    txtHomeScore.innerText = scoreHome
}
function HomePlusTwo(){
    scoreHome += 2
    txtHomeScore.innerText = scoreHome
}
function HomePlusThree(){
    scoreHome += 3
    txtHomeScore.innerText = scoreHome
}

function GuestPlusOne(){
    scoreGuest++
    txtGuestScore.innerText = scoreGuest
}
function GuestPlusTwo(){
    scoreGuest += 2
    txtGuestScore.innerText = scoreGuest
}
function GuestPlusThree(){
    scoreGuest += 3
    txtGuestScore.innerText = scoreGuest
}