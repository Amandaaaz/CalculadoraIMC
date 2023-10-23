document.getElementById('imcCalculatorForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
  
    if (!isNaN(age) && !isNaN(height) && !isNaN(weight)) {
      const imc = weight / (height * height);
      const resultMessage = `Olá, ${name}! Seu IMC é ${imc.toFixed(2)}.`;
  
      document.getElementById('result').textContent = resultMessage;
    } else {
      document.getElementById('result').textContent = "Por favor, preencha todos os campos corretamente.";
    }
  });

  document.getElementById('imcCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
  
    if (!isNaN(age) && !isNaN(height) && !isNaN(weight)) {
      const imc = weight / (height * height);
      const resultMessage = `Olá, ${name}! Seu IMC é ${imc.toFixed(2)}.`;
  
      // Determinando se o IMC é "bom" ou "ruim"
      let imcStatus = "";
      if (imc < 18.5) {
        imcStatus = "Abaixo do peso (IMC ruim)";
      } else if (imc >= 18.5 && imc < 24.9) {
        imcStatus = "Peso saudável (IMC bom)";
      } else if (imc >= 25 && imc < 29.9) {
        imcStatus = "Sobrepeso (IMC ruim)";
      } else {
        imcStatus = "Obeso (IMC ruim)";
      }
  
      const fullResultMessage = `${resultMessage} - ${imcStatus}`;
      document.getElementById('result').textContent = fullResultMessage;
    } else {
      document.getElementById('result').textContent = "Por favor, preencha todos os campos corretamente.";
    }
  });
