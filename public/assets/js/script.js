document.getElementById("searchForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {
    city: formData.get("city"),
    listingType: formData.get("listingType"),
    minPrice: formData.get("minPrice"),
    maxPrice: formData.get("maxPrice")
  };

  const res = await fetch("http://localhost:5000/api/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (result.length === 0) {
    resultsDiv.innerHTML = "<p>No properties found.</p>";
  } else {
    result.forEach(prop => {
      const div = document.createElement("div");
      div.classList.add("property-card");
      div.innerHTML = `
        <img src="assets/img/${prop.image}" alt="Property" />
        <h3>${prop.title}</h3>
        <p>₹ ${prop.price} | ${prop.area} sq.ft</p>
        <button>Contact Owner</button>
      `;
      resultsDiv.appendChild(div);
    });
  }
});
