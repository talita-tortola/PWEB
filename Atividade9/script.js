var a, b, c, maior;

a = prompt("Num 1: ");
b = prompt("Num 2: ");
c = prompt("Num 3: ");

function verificaMaior(a,b,c){
    
    maior = a;

    if(b > maior){
        maior = b;
    }
    if(c > maior){
        maior = c;
    }
    
    return alert("O maior é o número: " + maior);

}

verificaMaior(a,b,c);

function ordenar(a,b,c){
    
    if(a < b && a < c){
        if(b < c){
            return alert(a + "," + b + "," + c);
        }
        else{
            return alert(a + "," + c + "," + b);
        }
    }else if(b < a && b < c){
        if(a < c){
            return alert(b + "," + a  + "," + c);
        }else{
            return alert(b + "," + c + "," + a);
        }
    }else if(c < a && c < b){
        if(a < b){
            return alert(c + "," + a + "," + b);
        }else{
            return alert(c + "," + b + "," + a);
        }
    }

}

ordenar(a,b,c);