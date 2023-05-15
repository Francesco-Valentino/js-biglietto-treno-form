const userJourney = document.getElementById("userInputJourney");

const userAge = parseInt(document.getElementById("userInputAge"));

const formButton = document.getElementById("formInputButton");
console.log(userJourney.value)
let ticketPrice = userJourney.value * 0.233;

formButton.addEventListener("click", function(){
        console.log(ticketPrice);
    }
);

