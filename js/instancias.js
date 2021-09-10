const inst_url = "json/instancias.json";

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(inst_url).then(function(resultObj){
        if (resultObj.status === "ok"){
                instancias(inst_url);
            }
        });
    });

    
    function instancias(url){

        document.getElementById("instancia").innerHTML= "";

                    for(let i=0; i<url.length; i++)
                    {
    
                                    let row="";
                                    row= `
                                        <tr>
                                        <td>`+ url[i].nombre +`</td>
                                        <td>`+ url[i].descripción +`</td>
                                        <td>`+ url[i].extra +`</td>
                                        </tr>
                                        `;
                            document.getElementById("instancia").innerHTML += row;
                    };
            
                };