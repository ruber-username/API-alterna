var LISTA = 'https://github.com/ruber-username/API-alterna/blob/main/json/lista.json';

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
    getJSONData(LISTA).then(function(resultObj){
        if (resultObj.status === "ok"){
                lista(LISTA);
            }
        });
    });

    function lista(url){

        document.getElementById("lista").innerHTML= "";
        
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos =>{

                    for(let i=0; i<datos.length; i++)
                    {
    
                                    let row="";
                                    row= `
                                        <tr>
                                        <td>`+ datos[i].nombre +`</td>
                                        <td>`+ datos[i].fecha +`</td>
                                        <td>`+ datos[i].comentario +`</td>
                                        </tr>
                                        `;
                            document.getElementById("lista").innerHTML += row;
                    };
            
                })
                .catch(error => alert("Error" + error));}
            