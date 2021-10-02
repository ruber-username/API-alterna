document.addEventListener("DOMContentLoaded", function (e) {
        getJSONData(inst_url).then(function(resultObj){
        if (resultObj.status === "ok"){
            arrayvacio = resultObj.data;
                mostrar_instancias(arrayvacio);
            }
        });
        document.getElementById("buscador").addEventListener('input', function () {
            buscar = document.getElementById("buscador").value.toLowerCase();
            mostrar_instancias(arrayvacio);
    });
    });
    var arrayvacio = [];

    function mostrar_instancias(array){
        
    let contenido="";
                    for(let i=0; i<array.length; i++)
                    {
                    let instancia = array[i];
                    if (!instancia.innerHTML.toLowerCase().includes(buscar)){
    
                                    contenido = `
                                        `;

                    }else{
                        contenido += `
                                        ${instancia.descripción}<br>
                                        `;
                    }; 
document.getElementById("instancia").innerHTML = contenido;    
                }
            }