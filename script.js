function proximaPagina() {
  
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    if (email === "fernanda@gmail.com" && password === "20") {
        window.location.href = "home.html";
    } else {
        alert("Errouuuuuuuu.");
    }
}