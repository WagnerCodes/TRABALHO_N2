function calcular(operacao) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Por favor, insira números válidos!";
    } else {
        switch (operacao) {
            case '+': resultado = num1 + num2; break;
            case '-': resultado = num1 - num2; break;
            case '*': resultado = num1 * num2; break;
            case '/': 
                resultado = num2 !== 0 ? (num1 / num2).toFixed(2) : "Erro: divisão por zero!";
                break;
        }
    }

    document.getElementById("resultado").textContent = resultado;
}