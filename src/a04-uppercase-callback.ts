type displayUppercaseFunction = (item: string) => void;

const uppercase = (item: string, displayUppercase: displayUppercaseFunction): void => { 
    displayUppercase(item);
}

const displayUppercase = (item: string): void => {
    const result = item.toUpperCase();
    console.log(result);
}

uppercase("hello", displayUppercase);