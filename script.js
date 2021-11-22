const btn = document.getElementById("btn");
const output = document.getElementById("outputText");

let number = [Math.floor(Math.random() * 100)];

btn.addEventListener("click", () => {
    const input = document.querySelector("#userInput");

    if (input === number) {
        output.innerHTML = `You guessed right, your number was ${number}`;
    } else if (input < number) {
        output.innerHTML = "You guessed too low";
    }
    if (input > number) {
        output.innerHTML = "You guessed too high";
    }
});