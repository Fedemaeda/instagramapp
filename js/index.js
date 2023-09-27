// Importa el código JavaScript de Facebook
<script src="https://connect.facebook.net/en_US/sdk.js"></script>

// Inicializa el código JavaScript de Facebook
FB.init({
  appId: "[283465684544034]",
  cookie: true,
  xfbml: true,
  version: "v13.0"
});

// Crea el botón de inicio de sesión
var loginButton = document.createElement("button");
loginButton.setAttribute("id", "login");
loginButton.setAttribute("class", "btn btn-primary");
loginButton.setAttribute("data-href", "https://www.facebook.com/dialog/oauth?client_id=[283465684544034]&redirect_uri=https://www.example.com/");
loginButton.innerHTML = "Iniciar sesión con Facebook";

// Agrega el botón al documento
document.body.appendChild(loginButton);
