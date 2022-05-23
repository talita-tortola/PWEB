function Retangulo(x,y){

    this.x = x;
    this.y = y;

    this.area = function(){
        return x * y;
    }

}

function Ret(){

    var x = document.getElementById('base').value;
    var y = document.getElementById('altura').value;
    
    var objRet = new Retangulo(x,y);

    return document.getElementById('area').value = objRet.area();

}

function limpar(){

    document.getElementById('base').value = "";
    document.getElementById('altura').value = "";
    document.getElementById('area').value = "";

}