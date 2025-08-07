async function fetchCoffeeData() {
  const res = await fetch('data/coffee-data.json');
  const data = await res.json();
  return data;
}

function createCard(coffee) {
  return `
    <div class="card">
      <img src="${coffee.image}" alt="${coffee.name}" />
      <h3>${coffee.name}</h3>
      <p><strong>Origin:</strong> ${coffee.origin}</p>
      <p><strong>Altitude:</strong> ${coffee.altitude}</p>
      <p><strong>Flavor:</strong> ${coffee.flavor}</p>
    </div>
  `;
}

function renderCoffees(data) {
  const container = document.getElementById("coffeeContainer");
  container.innerHTML = data.map(createCard).join("");
}

function handleSearch(data) {
  const input = document.getElementById("searchBar");
  input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    const filtered = data.filter(c => c.name.toLowerCase().includes(query));
    renderCoffees(filtered);
  });
}

window.onload = async () => {
  const data = await fetchCoffeeData();
  renderCoffees(data);
  handleSearch(data);
};
