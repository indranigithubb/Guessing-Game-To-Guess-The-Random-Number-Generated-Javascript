
const max = prompt("Enter a max number");

const random =  Math.floor(Math.random()*max)+1;

let guess = prompt("guess the random number generated");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }


    if(guess==random){
        console.log("congrats! you guessed the right number", random);
        break;
    }else if(guess < random){
        guess = prompt ("hint : your guess is too small, please try again !")
    }else if(guess > random){
        guess = prompt ("hint : your guess is too large, please try again !")
    }
}

