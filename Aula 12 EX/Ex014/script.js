function carregar() {
  var msg = document.getElementById('mensagem')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    // BOM DIA!
    img.src = 'img/pexels-artur-roman-1167355.jpg'
    document.body.style.background = '#e2cd9f'
  } else if (hora >= 12 && hora < 18) {
    // BOA TARDE!
    img.src = 'img/pexels-nihat-69224.jpg'
    document.body.style.background = '#b9846f'
  } else {
    // BOA NOITE!
    img.src = 'img/pexels-alex-fu-3289156.jpg'
    document.body.style.background = '#515154'
  }
}

