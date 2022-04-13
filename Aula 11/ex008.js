function clicar() {
  var vel = Number(document.querySelector('#txtvel').value);
  var res = document.getElementById('res');
  res.innerHTML = `<p>A velocidade do seu carro é <strong>${vel}Km/h</strong></p>`;
  
  if (vel > 60) { // Condição simples
  res.innerHTML += `<p>Você ultrapassou a velocidade permitida. <strong>MULTADO!</strong></p>`;
  }

  res.innerHTML += `<p>Dirija sempre usando cinto de segurança.</p>`;
}