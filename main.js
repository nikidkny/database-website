// <!--the endpoint https://friends-5d79.restdb.io/rest/database-tv-shows
// the API key 620d387c34fd621565858693 -->
const url = "https://friends-5d79.restdb.io/rest/database-tv-shows";
const options = {
  headers: {
    "x-apikey": "620d387c34fd621565858693",
  },
};
fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    handleShowlist(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function handleShowlist(data) {
  console.log(data);
  data.forEach(showSeries);
}

{
  /*         <template id="smallSeriesTemplate">
          <article>
            <img class="seriesImage" src="" alt="" />
            <h2 class="seriesName"></h2>
            <p class="seriesDescription"></p>
          </article>
        </template>
 */
}

function showSeries(series) {
  // grabbing the tamplate
  const template = document.querySelector("#smallSeriesTemplate").content;
  // cloning the template
  const copy = template.cloneNode(true);
  //changing the contents => do this last

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
