// <!--the endpoint https://friends-5d79.restdb.io/rest/showlist
// the API key 620d387c34fd621565858693 -->
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://friends-5d79.restdb.io/rest/showlist";
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
    handleShowlist(data);
  });
// .catch((e) => {
//   console.error("An error occured:", e.message);
// });

function handleShowlist(data) {
  console.log(data);
  data.forEach(showSeries);
}

/*    Genz template    
       <template id="smallSeriesTemplate">
          <article>
            <img class="seriesImage" src="" alt="" />
            <h2 class="seriesName"></h2> done
            <p class="seriesDescription"></p>
          </article>
        </template>
 */

function showSeries(series) {
  console.log(series);
  // grabbing the tamplate
  const template = document.querySelector("#smallSeriesTemplate").content;
  // cloning the template
  const copy = template.cloneNode(true);
  //changing the contents => do this last
  copy.querySelector("h2").textContent = `${series.title}`;
  copy.querySelector("span").textContent = `${series.ratings}`;
  copy.querySelector(
    "img"
  ).src = `https://friends-5d79.restdb.io/rest/showlist/images/webp/1000/${series.id}.webp`;
  copy.querySelector("p").textContent = `${series.description}`;
  // grabing parent
  const parent = document.querySelector("main");
  // append
  parent.appendChild(copy);
}

/*burger menu*/
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Nancy code
function showTvSeries(popularShows) {
  console.log(popularShows);
  document.querySelector(".myTitle").textContent = popularShows.title;
  document.querySelector(".summary").textContent = popularShows.description;
  //   document.querySelector(
  //     "img.seriesimages"
  //   ).src = `images/The Wire${popularShows.id}.png`;
  //   document.querySelector("img.seriesimages").alt = popularShows.description;
}
