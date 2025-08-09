fetch('data/coffee-data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('coffee-list');
    data.forEach(coffee => {
      const card = document.createElement('div');
      card.classList.add('coffee-card');

      card.innerHTML = `
        <img src="${coffee.image}" alt="${coffee.name}">
        <h3>${coffee.name}</h3>
        <p><strong>Origin:</strong> ${coffee.origin}</p>
        <p>${coffee.description}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error loading coffee data:", error));

