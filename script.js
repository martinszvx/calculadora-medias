    /**
     * ESPAÇO PARA O DESAFIO
     * Instruções: 
     * 1. Capture os valores dos inputs (simulando o 'leia')
     * 2. Converta para números Reais (Float)
     * 3. Calcule a média aplicando a regra de precedência correta
     * 4. Exiba no elemento #output (simulando o 'escreva')
     */
    function resolverDesafio() {
        const outputDiv = document.getElementById('output');
        // --- SEU CÓDIGO COMEÇA AQUI ---
        let n1 = parseFloat(document.getElementById('n1').value);
        let n2 = parseFloat(document.getElementById('n2').value);
        let n3 = parseFloat(document.getElementById('n3').value);
        let n4 = parseFloat(document.getElementById('n4').value);
        let media = (n1+n2+n3+n4)/4;
        outputDiv.innerText = "A media é: " + media;
        // --- SEU CÓDIGO TERMINA AQUI ---
    }