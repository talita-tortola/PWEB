var i = 0, maisVelha = 0, maisNova = 150, qtdeF = 0,
    qtdeM = 0, qtdePessimo = 0, porcentagemBomOtimo = 0;

var media = 0.0, idade = 0.0, idadeTotal = 0.0;

function addOp(){
    
    if(i < 45){
        calcIdade();
        qtdeGenero();
        dadosOpiniao();
        limpar();
        i++;
        document.getElementById('contador').innerText = 'Opiniões recebidas: ' + i + '/45.'
    }else{
        document.getElementById("confirmar").disabled = true;
        document.getElementById('contador').innerText = 'Limite de 45 opiniões atingido! Clique em Exibir Resultados';
    }

}

function calcIdade(){
    
    idade = Number.parseFloat(document.getElementById('idade').value);

    idadeTotal += idade;

    media = idadeTotal / 45;

    if(idade > maisVelha){
        maisVelha = idade;
    }

    if(idade < maisNova){
        maisNova = idade;
    }
}

function qtdeGenero(){

    if(document.querySelector('#F').checked == true){
        qtdeF++;
    }

    if(document.querySelector('#M').checked == true){
        qtdeM++;
    }

}

function dadosOpiniao(){

    if(document.querySelector('#op1').checked == true){
        qtdePessimo++;
    }
    
    if(document.querySelector('#op4').checked == true || document.querySelector('#op3').checked == true){
        porcentagemBomOtimo++;
    }

}

function limpar(){

    document.getElementById('nome').value = "";
    document.getElementById('idade').value = "";
    document.querySelector('#F').checked = false;
    document.querySelector('#M').checked = false;
    document.querySelector('#op4').checked = false;
    document.querySelector('#op3').checked = false;
    document.querySelector('#op2').checked = false;
    document.querySelector('#op1').checked = false;
    document.getElementById('h1').innerText = "";
    document.getElementById('res').innerText = "";

}

function resultado(){
    
    if(i < 45){
        alert("Resultado Parcial");
    }else{
        alert("Resultado Final");
    }

    alert(`Média das idades: ${media}\n\nIdade da pessoa mais velha: ${maisVelha}\n\nIdade da pessoa mais nova: ${maisNova}\n\nQuantidade de opiniões "Péssimo": ${qtdePessimo}\n\nPorcentagem de opiniões "Bom ou Ótimo": ${(100*porcentagemBomOtimo/i)}%\n\nQuantidade de mulheres: ${qtdeF}\n\nQuantidade de homens: ${qtdeM}`);

}
