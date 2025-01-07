
function converterDistancia() {
   
    const distancia = parseFloat(document.querySelector('.distancia').value);

    
    const unidade = document.querySelector('select').value;

    
    if (isNaN(distancia)) {
        alert("Por favor, insira um valor de distância válido.");
        return;
    }

   
    let resultado;


    switch (unidade) {
        case 'Jardas':
            resultado = distancia * 1.094;
            break;
        case 'Pes':
            resultado = distancia * 3.281;
            break;
        case 'Polegadas':
            resultado = distancia * 39.37;
            break;
        case 'Milhas':
            resultado = distancia * 0.000621;
            break;
        default:
            resultado = 0;
    }

   
    document.querySelector('.resultado').innerHTML = `<p>Resultado: ${resultado.toFixed(2)} ${unidade}</p>`;
}

document.querySelector('button').addEventListener('click', converterDistancia);
