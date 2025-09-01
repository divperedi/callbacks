type showMessageFunction = (message: string) => void;

const printMessage = (message: string, showMessage: showMessageFunction): void => {

    showMessage(message);
}

const showMessage = (message: string): void => {
    console.log("Message:", message);
}

printMessage("I", showMessage);
printMessage("am", showMessage);
printMessage("here", showMessage);