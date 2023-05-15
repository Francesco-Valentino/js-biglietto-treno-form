const userJourney = parseInt(document.getElementById("userInputJourney"));

const userAge = parseInt(document.getElementById("userInputAge"));

const formButton = document.getElementById("formInputButton");

let ticketPrice = userJourney * 0.233;

formButton.addEventListener("click", function(){
        console.log(ticketPrice);
    }
);

