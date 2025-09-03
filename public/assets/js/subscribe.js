document.getElementById("subscribeForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("emailInput").value;

  try {
    const res = await fetch("http://localhost:5000/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    const data = await res.json();
    document.getElementById("msg").innerText = data.message;
    document.getElementById("emailInput").value = "";
  } catch (err) {
    document.getElementById("msg").innerText = "❌ Server error!";
  }
});
