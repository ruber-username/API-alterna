
function validar(){
let ask = document.getElementsByClassName("ask");
let error = 0;
for(let i=0; i<ask.length; i++){
    if(ask[i].value =! "true"){
        error = error +1;
    }
}
    if(error = 0){
        alert("Bien");
    }else{alert(`"No, hay algo que no encaja..."`);}

}