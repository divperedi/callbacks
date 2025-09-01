type displayMessageFunction = (message: string) => void;

const orderPizza = (displayMessage: displayMessageFunction): void => {
    console.log("Your pizza order is placed.")
    setTimeout(() => {
        const message = "Your pizza is ready!";
        displayMessage(message);
    }, 3000);
}

const displayMessage = (message: string): void => {
    console.log(message);
}
orderPizza(displayMessage);