async function fetchCoffeeData() {
  const res = await fetch("data/coffee-data.json");
  const data = await res.json();
  return data;
}

function createCard(coffee) {
  return `
    <div class="card">
      <img src="${coffee.image}" alt="${coffee.name}">
      <h3>${coffee.name}</h3>
      <p><strong>Origin:</strong> ${coffee.origin}</p>
      <p><strong>Altitude:</strong> ${coffee.altitude}</p>
      <p><strong>Flavor:</strong> ${coffee.flavor}</p>
    </div>
  `;
}

function renderCoffees(coffeeList) {
  const container = document.getElementById("coffeeContainer");
  container.innerHTML = coffeeList.map(createCard).join("");
}

function handleSearch(data) {
  const searchInput = document.getElementById("searchBar");
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = data.filter(coffee =>
      coffee.name.toLowerCase().includes(query)
    );
    renderCoffees(filtered);
  });
}

window.onload = async () => {
  const coffeeData = await fetchCoffeeData();
  renderCoffees(coffeeData);
  handleSearch(coffeeData);
};

