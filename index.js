const URL = 'https://api.thedogapi.com/v1/images/search';
const newImg = document.querySelector("#btn");

newImg.addEventListener("click", () => {
  dogs();
});


const dogs = () => {
  fetch(URL)
  .then(res => res.json())
  .then(data => {
    const img = document.querySelector('img');
    img.src = data[0].url;
  });
} 