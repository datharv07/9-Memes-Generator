const api = "https://meme-api.com/gimme";
let page = 1; // Initial page number

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
    fetch(`${api}?page=${page}`)
        .then((response) => response.json())
        .then((data) => {
            updateDetails(data.url, data.title, data.author);
            page++; // Increment page for the next request
        });
};

generateMemeBtn.addEventListener("click", generateMeme);

// Function to check if the user has scrolled to the bottom of the page
const isBottom = () => {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
};

// Function to handle infinite scroll
const handleInfiniteScroll = () => {
    if (isBottom()) {
        generateMeme();
    }
};

// Attach the scroll event listener
window.addEventListener("scroll", handleInfiniteScroll);

// Initial load
generateMeme();
