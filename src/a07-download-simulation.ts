type displayDownloadStatusFunction = (status: string) => void;

const download = (url: string, displayDownloadStatus: displayDownloadStatusFunction): void => {
    console.log("Downloading data from", url);
    setTimeout(() => {
        const status = `Downloaded data from ${url}`;
        displayDownloadStatus(status);
    }, 2000);
}

const displayDownloadStatus = (status: string): void => {
    console.log("Status:", status);
}

download("http://blabla.com", displayDownloadStatus);