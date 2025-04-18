function tabuada(){
    var num = document.getElementById('numero')
    var tab =document.getElementById('seltab')
    if(num.value.length == 0){
        alert('erro , digite um número')
    }else{
        var n = Number(num.value)
        tab.innerHTML = ''
        for(var c=1; c<=10; c++){
            let item = document.createElement('option')
           item.text = `${n}* ${c} = ${n*c}`
           item.value = `tab${c}`
           tab.appendChild(item)
        }
    }
}