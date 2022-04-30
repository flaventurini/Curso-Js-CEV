function calcular() {
  let num = document.getElementById('num')
  let n = Number(num.value)
  let mult = 1

  while(mult <= 10) {
    let res = document.getElementById('res')
    res.innerHTML = `${n} x ${mult} = ${n*mult}</br>`
    mult++
  }
  
  //for(let mult = 1; mult <= 10; mult++) {
    //res.innerHTML = `${n} x ${mult} = ${n*mult}</br>`
  //}
}