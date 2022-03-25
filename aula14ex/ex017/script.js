function calcular() {
    let num = document.getElementById('txtn')
    let area = document.getElementById('txta')
}
if (num.value.length == 0) {
    alert('Por favor, digite um número!')
}
else {
    let num = Number(num.value)
    let area = Number(area.value)

    for(let c = 1; c <= 10; c++) {
        area.innerHTML +=  `${num} x ${c} = ${num*c}`
    }
}