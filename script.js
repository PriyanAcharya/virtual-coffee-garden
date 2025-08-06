// script.js
document.addEventListener("DOMContentLoaded", async () => {
  const garden = document.getElementById("garden");

  try {
    const response = await fetch("data/coffee_data.json");
    const data = await response.json();

    data.forEach(coffee => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h2>${coffee.name}</h2>
        <p><strong>Origin:</strong> ${coffee.origin}</p>
        <p><strong>Altitude:</strong> ${coffee.altitude}</p>
        <p><strong>Flavor Notes:</strong> ${coffee.flavor}</p>
      `;
      garden.appendChild(card);
    });
  } catch (error) {
    console.error("Failed to load coffee data:", error);
    garden.innerHTML = "<p>Error loading coffee garden data.</p>";
  }
});
