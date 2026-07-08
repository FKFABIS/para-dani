function proximaPagina() {
  
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    if (email === "valentina@gmail.com" && password === "luna") {
        window.location.href = "home.html";
    } else {
        alert("Errouuuuuuuu.");
    }
}s