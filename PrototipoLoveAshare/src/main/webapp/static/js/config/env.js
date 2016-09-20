(function (window) {
  window.__env = window.__env || {};

  // API url
  window.__env.appUrl = 'http://localhost:8080/prototipo1';
  
  window.__env.apiUrl = 'http://localhost:8080/prototipo1';
  
  window.__env.userUrl = 'user';
  
  // Whether or not to enable debug mode
  // Setting this to false will disable console output
  window.__env.enableDebug = true;
  
  window.__noe = window.__noe || {}; // si existe la variable partimos de ella; si no array en blanco
  window.__noe.constante1 = 'constante1: miau';
  
}(this));