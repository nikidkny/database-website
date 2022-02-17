// const urlParams = new URLSearchParams(window.location.search);
// const id = urlParams.get("id");

const url = "https://friends-5d79.restdb.io/rest/database-tv-shows";
fetch(url)
  .then((res) => res.json())
  .then((data) => showSeries(data));

function showSeries(tvshow) {
  console.log(tvshow);
  document.querySelector(".series").textContent = tvshow.id;
  //   document.querySelector(".series").textContent = tvshow.description;
  //   document.querySelector(
  //     "img.seriesImage"
  //   ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  //   document.querySelector("img.productImage").alt = product.productdisplayname;
}
