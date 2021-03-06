import cipher from './cipher.js';

/* boton para cifrar */
let buttonToEncode = document.getElementById('buttonToEncode');
buttonToEncode.addEventListener("click", function () {
    let codeEncode = document.getElementById("main_message");
    let codeToEncode = codeEncode.value;
    let displaceEncode = document.getElementById("displace");
    let displaceToEncode = parseInt(displaceEncode.value);

    document.getElementById("final_message").value = cipher.encode(displaceToEncode, codeToEncode);
});

/* boton para descifrar */
let buttonToDecode = document.getElementById('buttonToDecode');
buttonToDecode.addEventListener("click", function () {
    let codeDecode = document.getElementById("main_message");
    let codeToDecode = codeDecode.value;
    let displaceDecode = document.getElementById("displace");
    let displaceToDecode = parseInt(displaceDecode.value);

    document.getElementById("final_message").value = cipher.decode(displaceToDecode, codeToDecode);
});