type stepFunction = (data: string) => void;

const firstStep = (secondStep: stepFunction) => {
    // console.log("Starting step 1...");
    setTimeout(() => {
        const data = "Step 1 done";
        secondStep(data); 
    }, 1000);
};

const secondStep = (data: string, thirdStep: stepFunction) => {
    console.log(data);
    // console.log("Starting step 2...");
    setTimeout(() => {
        const data = "Step 2 done";
        thirdStep(data);
    }, 1000);
};

const thirdStep = (data: string) => {
    console.log(data);
    // console.log("Starting step 3...");
    setTimeout(() => {
        console.log("Step 3 done");
    }, 1000);
};

// had to add this to solve the confusion between 
// needing different number of arguments in secondStep function
// (1 argument to execute it in firstSte and 2 in secondStep itself)
// confusing, got help here @_@
firstStep((dataFromStep1) => {
    secondStep(dataFromStep1, thirdStep);
});