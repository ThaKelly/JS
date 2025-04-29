let num = document.getElementById('numero')
let tab = document.getElementById('numeros')
let res =document.getElementById('res')
let valores = []

function isNum(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inlista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar(){
    if(num.value.length == 0){
        alert('erro digite um numero')
    }else if(isNum(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        var n = Number(num.value)
        let item = document.createElement('option')
        item.text = `O número ${n} foi adicionado`
        tab.appendChild(item)
        res.innerHTML =''
    }else{
        alert('numero inválido ou já está na lista')
    }
    num.value =''
    num.focus()
}
function finalizar(){
    if(valores.length == 0 ){
        alert('adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        let menor = valores[0]
        let maior =[0]
        let soma = 0
        let media = 0
        for( let pos in valores){
            soma+= valores [pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores [pos] < menor)
                menor= valores[pos]
        }
        media = soma / tot
        res.innerHTML =''
        res.innerHTML += `<p>Ao todo temos ${tot} Números cadastrados</p>`
        res.innerHTML +=` <p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma é ${soma}</p>`
         res.innerHTML += `<p>A media é ${media}</p>`

        
    }


}