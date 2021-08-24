document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("botón1").addEventListener("click", function(){

            let nombre = document.getElementById("mi_nombre");
            let campo_completo = true;

            if(nombre.value === ""){
                nombre.classList.add("invalid");
                campo_completo = false;
            } else{
                nombre.classList.remove("invalid");
            }
            if(campo_completo){window.location.href = 'página_1.html';}else{alert("Upss! Pon tu nombre :(");}
});})