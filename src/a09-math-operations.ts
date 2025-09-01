type showResultFunction = (result: number) => void;

const calculate = (a: number, b: number, operand: string, showResult: showResultFunction): void => {
    if (operand === "+") {
        const result = a + b;
        showResult(result);
    } else if (operand === "-") {
        const result = a - b;
        showResult(result);
    } else if (operand === "*") {
        const result = a * b;
        showResult(result);
    } else if (operand === "/") {
        const result = a / b;
        showResult(result);
    }
}

const showResult = (result: number): void => {
    console.log("Calculation result is", result);
}
calculate(5, 5, "+", showResult);
calculate(5, 5, "-", showResult);
calculate(5, 5, "*", showResult);
calculate(5, 5, "/", showResult);