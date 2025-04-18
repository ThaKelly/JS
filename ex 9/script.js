function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('erro! faltam dados')
    }else{
    var ini = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    res.innerHTML = 'Contando..<br>'
        if(ini< f){
            for(var i = ini; i<= f; i += p){
             res.innerHTML += `${i} \u{1F449}`
            }
        }else{
            for(var i = ini;  i>= f; i -= p ){
                res.innerHTML += `${i} \u{1F449}`
            }
        }
        res.innerHTML += '\u{1F3C1}'  
    }
}