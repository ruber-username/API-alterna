document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(lista_url).then(function(resultObj){
        if (resultObj.status === "ok"){
            arrayvacio = resultObj.data;
                mostrar_lista(arrayvacio);
            }
        });
    });

    var arrayvacio = [];

                function mostrar_lista(array){
                    let contenido="";
                                    for(let i=0; i<array.length; i++)
                                    {
                                    let lista = array[i];
                    
                                                    contenido += `
                                                        <tr>
                                                        <td>`+ lista.nombre +`</td>
                                                        <td>`+ lista.fecha +`</td>
                                                        <td>`+ lista.comentario +`</td>
                                                        </tr>
                                                        `;
                                            document.getElementById("lista").innerHTML = contenido;
                                    };
                            
                                };