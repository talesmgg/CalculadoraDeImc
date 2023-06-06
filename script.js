window.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const nome = urlParams.get('nome');
    const altura = parseFloat(urlParams.get('altura'));
    const peso = parseFloat(urlParams.get('peso'));
  
    const imc = peso / (altura * altura);
    let situacao;
  
    if (imc < 18.5) {
      situacao = "Baixo peso";
    } else if (imc < 24.9) {
      situacao = "Peso normal";
    } else if (imc < 29.9) {
      situacao = "Pré-obeso";
    } else if (imc < 34.9) {
      situacao = "Obeso I";
    } else if (imc < 39.9) {
      situacao = "Obeso II";
    } else {
      situacao = "Obeso III";
    }                                           
  
            const divresultado = document.getElementById('resultado');
            divresultado.innerHTML = `<p>Olá, ${nome}!</p>
                                    <p>Seu IMC é: ${imc.toFixed(2)}</p>
                                    <p>Situação: ${situacao}</p>`;

});                              