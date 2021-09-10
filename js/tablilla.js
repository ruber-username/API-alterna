const lista_url = 'https://github.com/ruber-username/API-alterna/blob/main/json/lista.json';

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

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(lista_url).then(function(resultObj){
        if (resultObj.status === "ok"){
                lista(lista_url);
            }
        });
    });



    function lista(url){

        document.getElementById("lista").innerHTML= "";

                    for(let i=0; i<url.length; i++)
                    {
    
                                    let row="";
                                    row= `
                                        <tr>
                                        <td>`+ url[i].nombre +`</td>
                                        <td>`+ url[i].fecha +`</td>
                                        <td>`+ url[i].comentario +`</td>
                                        </tr>
                                        `;
                            document.getElementById("lista").innerHTML += row;
                    };
            
                };