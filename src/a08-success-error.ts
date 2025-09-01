type showStatus = (data: number) => void;

const result = (showError: showStatus, showSuccess: showStatus): void => {
    // added Math.floor to get the whole number (0 or 1)
    const data = Math.floor(Math.random() * 2);

    if(data === 0) {
        showError(data);   
    } else {
        showSuccess(data);
    }
}

const showError = (data: number): void => {
    console.log("Callback code:", data, ", error");
}

const showSuccess = (data: number): void => {
    console.log("Callback code:", data, ", success")
}

result(showError, showSuccess);