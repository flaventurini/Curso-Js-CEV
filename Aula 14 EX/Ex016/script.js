function contar() {
  var inicio = document.getElementById('formInicio')
  var fim = document.getElementById('formFim')
  var passo = document.getElementById('formPasso')
  var res = document.getElementById('res')
  
  while (inicio < Number.parseInt(fim)) {
    inicio = Number.parseInt(inicio)
    inicio = inicio + Number.parseInt(passo)

  }
  
  
  res.innerHTML = `Detectamos ${inicio} com ${fim} anos.`
}