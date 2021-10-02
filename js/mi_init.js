const lista_url = 'https:/ruber-username.github.io/API-alterna/json/lista.json';
const inst_url = 'https://ruber-username.github.io/API-alterna/json/instancias.json';

var getJSONData = function(url){
  var result = {};
  return fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    }else{
      throw Error(response.statusText);
    }
  })
  .then(function(response) {
        result.status = 'ok';
        result.data = response;
        return result;
  })
  .catch(function(error) {
      result.status = 'error';
      result.data = error;
      return result;
  });
}