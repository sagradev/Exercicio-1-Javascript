document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault();


    let campoA = parseFloat(document.getElementById("campoA").value);
    let campoB = parseFloat(document.getElementById("campoB").value);
    let mensagem = document.getElementById("mensagem");

    if( campoB > campoA){
        mensagem.textContent = "O número do campo B é maior que o número do campo A";
        mensagem.className =  "mensagem positivo";
        mensagem.style.display = 'block';
    } else{
        mensagem.textContent = "O número do campo B não é maior que o do campo A";
        mensagem.className = "mensagem negativo"
        mensagem.style.display = 'block';
    }
});