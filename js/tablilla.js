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