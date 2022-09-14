const inputMensaje = document.querySelector(".input__textarea");
const outputMensaje = document.querySelector(".output__textarea");

function encriptar(stringEncriptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","over"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i=0 ; i<matrizCodigo.length ; i++){
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["over","o"],["ufat","u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i=0 ; i<matrizCodigo.length ; i++){
        if (stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringDesencriptada;
}
function botonEncriptar(){
    const textoEncriptado = encriptar(inputMensaje.value);
    outputMensaje.value = textoEncriptado;
    inputMensaje.value = "";
}
function botonDesencriptar(){
    const textoDesencriptado = desencriptar(inputMensaje.value);
    outputMensaje.value = textoDesencriptado;
    inputMensaje.value = "";
}
function copiar(){
    outputMensaje.select();
    navigator.clipboard.writeText(outputMensaje.value);
}
function Enter(e){
    if (e.code == "Enter"){
        botonEncriptar();
    }
}
