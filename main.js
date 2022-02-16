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
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });
/*burger menu*/
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
