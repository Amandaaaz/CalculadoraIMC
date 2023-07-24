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