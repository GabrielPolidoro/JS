function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
    alert('Por favor, digite um número!')
    }
    else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10) {
            let item = document.createElement('option') // criando a tag html option dentro do select
            item.text = `${n} x ${c} = ${n*c}` // numero vezes o contador
            tab.appendChild(item) // adicionar um elemento filho que vai ser o item
            c++
        }
    }
}