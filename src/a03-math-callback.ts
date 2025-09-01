type displayDataFunction = (data: number) => void;

const calculate = (a: number, b: number, displayData: displayDataFunction): void => {
    const data = a + b;
    displayData(data);
}

const displayData = (data: number): void => {
    console.log("The result is: ", data);
}

calculate(33, 75, displayData);