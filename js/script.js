const userJourney = document.getElementById("userInputJourney");

const userAge = document.getElementById("userInputAge");

const formButton = document.getElementById("formInputButton");

let ticketPrice = userJourney.value * 0.233;

parseInt(userJourney)

parseInt(userAge)

console.log(ticketPrice)

const underAgeDiscount = ticketPrice * (19.4 / 100);

const overSixtyfiveDiscount = ticketPrice * (37.7 / 100)

formButton.addEventListener("click", function(){
        if (userAge.value < 18){
            ticketPrice = ticketPrice - underAgeDiscount;
        }

        else if (userAge.value >= 65){
            ticketPrice = ticketPrice - overSixtyfiveDiscount;
        }

        console.log(ticketPrice);
    }
);

