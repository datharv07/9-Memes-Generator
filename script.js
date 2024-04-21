// https://github.com/D3vd/Meme_Api
// Git hub API


// https://github.com/public-apis/public-apis
// https://github.com/public-apis/public-apis


const generateMemeBtn = document.querySelector(".generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-title");
const memeAuthor = document.querySelector(".meme-author");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
};

const generateMeme = () => {
    fetch("https://meme-api.com/gimme")
        .then((response) => response.json())
        .then((data) => {
            updateDetails(data.url, data.title, data.author);
        });
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();