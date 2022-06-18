let image = document.getElementById('fotos2');
let images = ['./Imagens/Fotos/1.png','./Imagens/Fotos/2.png','./Imagens/Fotos/3.png','./Imagens/Fotos/4.png','./Imagens/Fotos/5.png','./Imagens/Fotos/6.png','./Imagens/Fotos/7.png','./Imagens/Fotos/8.png','./Imagens/Fotos/9.png','./Imagens/Fotos/10.png','./Imagens/Fotos/11.png']
setInterval(function(){
    let random = Math.floor(Math.random() * 11);
    image.src = images[random];
}, 800);

let imagem = document.getElementById('fotos3');
let imagens = ['./Imagens/Fotos/12.png','./Imagens/Fotos/13.png','./Imagens/Fotos/14.png','./Imagens/Fotos/15.png','./Imagens/Fotos/16.png','./Imagens/Fotos/17.png','./Imagens/Fotos/18.png','./Imagens/Fotos/19.png','./Imagens/Fotos/20.png','./Imagens/Fotos/21.png','./Imagens/Fotos/22.png']
setInterval(function(){
    let random = Math.floor(Math.random() * 11);
    imagem.src = imagens[random];
}, 800);