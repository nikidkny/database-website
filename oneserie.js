const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id");
console.log(id);

const url = "https://friends-5d79.restdb.io/rest/showlist/" + id;
fetch(url)
  .then((res) => res.json())
  .then((data) => handleShow(data));
function handleShow(singleShow) {
  console.log(singleShow);
  document.querySelector("h2").textContent = singleShow.title;
  document.querySelector("p").textContent = singleShow.description;
  document.querySelector(
    "img.seriesimages"
  ).src = `https://hyggeland.dk/common_passion_images/${singleShow.id}.png  `;
  document.querySelector("img.seriesimages").alt = singleShow.title;
  document.querySelector(".genre").textContent = `${singleShow.genre}`;
  document.querySelector(".seasons").textContent = `${singleShow.seasons}`;
  document.querySelector(".rating").textContent = `${singleShow.ratings}`;
}
