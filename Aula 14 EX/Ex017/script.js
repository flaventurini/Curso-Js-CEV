function calcular() {
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')
  
  if(num.value.length == 0) {
    alert('Por favor, digite um número!')
  } else {
    let n = Number(num.value)
    
    tab.innerHTML = ''
    
    /* Opção de repetição com WHILE 
    
    let c = 1
    
      while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}`
      item.value = 'tab$(c)'
      tab.appendChild(item)
      c++
    } */

    // Opção de repetição com FOR

    for (let c = 1; c <= 10; c++) {
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}`
      item.value = 'tab$(c)'
      tab.appendChild(item)
    }
    }
  
}
