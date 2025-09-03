
document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.querySelector('input[placeholder="NAME..."]').value;
    const email = document.querySelector('input[placeholder="EMAIL..."]').value;
    const phone = document.querySelector('input[placeholder="PHONE..."]').value;
    const message = document.querySelector('textarea[placeholder="MESSAGE..."]').value;

    const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message })
    });

    const data = await res.json();
    alert(data.message); // user ko feedback
});
