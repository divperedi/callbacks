const sayHelloLater = () => {
    console.log("Hello!");
    setTimeout(() => {
        console.log("Hi, I am late!");
    }, 2000);
}

sayHelloLater();