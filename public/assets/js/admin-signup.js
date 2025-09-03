document.querySelector(".form1").addEventListener("submit", async (e) => {
    e.preventDefault();

    const employeeId = document.querySelector('input[placeholder="Employee Id"]').value;
    const number = document.querySelector('input[placeholder="number"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;

    const res = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ employeeId, number, password })
    });

    const data = await res.json();
    alert(data.message);

    if (res.status === 201) {
        // redirect to login page
        window.location.href = "login.html";
    }
});