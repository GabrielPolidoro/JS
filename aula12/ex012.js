var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var nome = 'Gabriel'
console.log(`Olá senhor ${nome}, agora são exatamente ${hora} hora(s) e ${minutos} minuto(s).`)

if (hora > 6 && hora < 12) {
    console.log('Bom dia!')
}
else if (hora > 12 && hora < 18) {
    console.log('Boa tarde!')
}
else if (hora > 18 && hora < 24) {
    console.log('Boa noite!')
}
else{
    console.log('Boa madrugada!')
}