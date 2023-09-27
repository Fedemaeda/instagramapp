const instagram = new Instagram({
    clientId: "[TU_CLIENT_ID]",
    clientSecret: "[TU_CLIENT_SECRET]",
    redirectUri: "[TU_REDIRECT_URI]"
  });
  
  function getAccessToken() {
    instagram.login().then(response => {
      const accessToken = response.accessToken;
  
      // Procesa el token de acceso
    });
  }
  
  function postComment(url, followers) {
    instagram.postComment(url, followers).then(response => {
      // Procesa la respuesta
    });
  }
  
  // Eventos
  
  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const url = event.target.querySelector("input[name=url]").value;
    const followers = event.target.querySelector("input[name=followers]").value;
  
    getAccessToken().then(() => {
      postComment(url, followers);
    });
  });
  