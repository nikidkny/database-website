// <!--the endpoint https://friends-5d79.restdb.io/rest/showlist
// the API key 620d387c34fd621565858693 -->
const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get("_id");
// const id = "620bacfef701f460000a24f7";
// console.log(_id);

const url = "https://friends-5d79.restdb.io/rest/showlist/" + id;
console.log(url);
const options = {
  headers: {
    "x-apikey": "620d387c34fd621565858693",
  },
};
fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      // throw Error(response.statusText);
    }
    return response.json();
  })

  .then((data) => {
    // console.log(data);
    handleShow(data);
  });
// .catch((e) => {
//   console.error("An error occured:", e.message);
// });

function handleShow(singleShow) {
  console.log(singleShow);
  document.querySelector("h2").textContent = singleShow.title;
  document.querySelector("p").textContent = singleShow.description;
  document.querySelector(
    "img.seriesimages"
  ).src = `https://hyggeland.dk/common_passion_images/${singleShow.id}.png  `;
  document.querySelector("img.seriesimages").alt = singleShow.title;
}
