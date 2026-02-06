const searchBtn = document.getElementById("searchbtn");
const resetBtn = document.getElementById("resetbtn");
const searchInput = document.getElementById("search");
const results = document.getElementById("recommendations");

let data;

// fetch JSON
fetch("travel_recommendation_api.json")
  .then(res => res.json())
  .then(json => {
    data = json;
    console.log(data);   // IMPORTANT: check output
  });

// search click
searchBtn.addEventListener("click", function () {
  results.innerHTML = "";
  const keyword = searchInput.value.toLowerCase();

  if (keyword === "beach" || keyword === "beaches") {
    data.beaches.forEach(place => {
      showCard(place.name, place.imageUrl, place.description);
    });
  }

  else if (keyword === "temple" || keyword === "temples") {
    data.temples.forEach(place => {
      showCard(place.name, place.imageUrl, place.description);
    });
  }

  else if (keyword === "country" || keyword === "countries") {
    data.countries.forEach(country => {
      country.cities.forEach(city => {
        showCard(city.name, city.imageUrl, city.description);
      });
    });
  }
});

// reset click
resetBtn.addEventListener("click", function () {
  searchInput.value = "";
  results.innerHTML = "";
});

// card display
function showCard(title, image, desc) {
  results.innerHTML += `
    <div class="recommendation-card">
      <img src="./images/${image}" alt="${title}">
      <div class="info">
        <h3>${title}</h3>
        <p>${desc}</p>
        <button>Visit</button>
      </div>
    </div>
  `;
}


