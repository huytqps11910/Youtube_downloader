var mp4Btn = document.querySelector("#mp4-button");
var mp3Btn = document.querySelector("#mp3-button");
var URLinput = document.querySelector('.URL-input');

mp4Btn.addEventListener("click", () => {
    console.log(`URL: ${URLinput.value}`);
    sendURLMP4(URLinput.value);
})

mp3Btn.addEventListener("click", () => {
    console.log(`URL: ${URLinput.value}`);
    sendURLMP3(URLinput.value);
})

const sendURLMP4 = (URL) => {
    if(URL.length <= 0) {
        alert("Ban chua nhap dia chi");
    }
    else {
        window.location.href = `/download-video?URL=${URL}`;
    }
}

const sendURLMP3 = (URL) => {
    window.location.href = `/download-song?URL=${URL}`;
}
