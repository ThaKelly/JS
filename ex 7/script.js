function carregar(){
    var msg =window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data =new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if( hora>= 0 && hora <12){
        img.src = 'imagens/manhã.jpg'
        document.body.style.background = '#f1d9ab'
    }else if(hora >=12 && hora <18){
        img.src = 'imagens/tarde.jpg'
        document.body.style.background ='#e0831b'
    }else{
        img.src = 'imagens/noite.jpg'
        document.body.style.background ='#2a2f43'
    }
}
