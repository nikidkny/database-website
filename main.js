// <!--the endpoint https://friends-5d79.restdb.io/rest/showlist
// the API key 620d387c34fd621565858693 -->
const url =
  "https://friends-5d79.restdb.io/rest/showlist?q={%22release%20year%22:%20{%20%22$gt%22:%201996%20}}&sort=ratings";
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

/*         <template id="smallSeriesTemplate">
        <article>
          <img
            class="seriesImage"
            src="https://hyggeland.dk/common_passion_images/Sabrina-the-teenage-witch.png"
            alt="{name}"
          />
          <h2 class="seriesName">Sabrina the teenage witch</h2>
          <h3 class="rating">Imdb rating:<span>6.7</span></h3>
          <p class="seriesDescription">
            This is about the advendtures of a 16 year-old girl, who finds out
            she is part of the magical world.
          </p>

 */

function showSeries(series) {
  console.log(series);
  // grabbing the tamplate
  const template = document.querySelector("#smallSeriesTemplate").content;
  // copying the template
  const copy = template.cloneNode(true);
  //changing the contents => do this last
  // copy.querySelector("a").setAttribute("href", `series.html?id=${series.id}`);
  copy.querySelector("h2").textContent = `${series.title}`;
  copy.querySelector("span").textContent = `${series.ratings}`;
  copy.querySelector("img").src = `${series.media_url}`;
  copy.querySelector("p").textContent = `${series.description}`;
  // grabing parent
  const parent = document.querySelector("main");
  // append
  parent.appendChild(copy);
}

// url sort by release year
// https://friends-5d79.restdb.io/rest/showlist?q={}&sort=release%20year
//grouped by release year
// https://friends-5d79.restdb.io/rest/showlist?h={%22$groupby%22:%20[%22release%20year%22]}
// for gen z the year min 1997
//  https://friends-5d79.restdb.io/rest/showlist?q={%22release%20year%22:%20{%20%22$gt%22:%201996%20}}&sort=ratings
// for millennials
// https://friends-5d79.restdb.io/rest/showlist?q={%22release%20year%22:%20{%20%22$lt%22:%201996%20}}&sort=ratings

/*burger menu*/
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Nancy code
