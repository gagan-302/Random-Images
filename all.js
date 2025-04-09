let url = "https://dog.ceo/api/breeds/image/random"; // Correct API endpoint for random dog images
let img = document.querySelector("img");
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let newimg = await getimage();
    img.setAttribute("src", newimg);
})

async function getimage() {
    try {
        let res = await fetch(url); // Fetching from the actual url variable
        let data = await res.json();
        return data.message; // This is the URL of the dog image
    } catch (e) {
        console.log("Error occurred:", e);
        return ''; // Return empty string in case of error
    }
}