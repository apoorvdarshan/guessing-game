const user = prompt("enter the max number");

let num = Math.floor(Math.random() * user) + 1;

let guess = prompt("enter your guess");

while(true) {
    if(guess == "quit") {
        console.log(`you quit the game. the correct guess is ${num}`);
        break;
    }
    
    if(guess == num) {
        console.log(`you guess is correct, (${num})`);
        break;
    } else if(guess < num) {
        guess = prompt("hint: your guess was too small. please try again");
    } else {
        guess = prompt("hint: your guess was too large. please try again");        
    }
}

console.log("thank you");