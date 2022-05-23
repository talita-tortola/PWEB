function Conta(nomeCorrentista,nomeBanco,numeroConta,numSaldo){

    this.nomeCorrentista = nomeCorrentista;
    this.nomeBanco = nomeBanco;
    this.numeroConta = numeroConta;
    this.numSaldo = numSaldo;

    this.setnomeCorrentista = function(nome){
        nomeCorrentista = nome;
    }

    this.setnomeBanco = function(banco){
        nomeBanco = banco;
    }

    this.setnumConta = function(numConta){
        numeroConta = numConta;
    }

    this.setnumSaldo = function(saldo){
        numSaldo = saldo;
    }

    this.getnomeCorrentista = function(){
        return nomeCorrentista;
    }

    this.getnomeBanco = function(){
        return nomeBanco;
    }

    this.getnumConta = function(){
        return numeroConta;
    }

    this.getnumSaldo = function(){
        return numSaldo;
    }

}

function Corrente(saldoEspecial){

    this.saldoEspecial = saldoEspecial;

    this.setsaldoEspecial = function(salEsp){
        saldoEspecial = salEsp;
    }

    this.getsaldoEspecial = function(){
        return saldoEspecial;
    }

}

function Poupanca(valJuros,dataVencimento){

    this.valJuros = valJuros;
    this.dataVencimento = dataVencimento;

    this.setvalJuros = function(juros){
        valJuros = juros;
    }

    this.setdataVencimento = function(dtVenc){
        dataVencimento = dtVenc;
    }

    this.getvalJuros = function(){
        return valJuros;
    }

    this.getdataVencimento = function(){
        return dataVencimento;
    }

}

Corrente.prototype = new Conta();

var contaCorrente = new Corrente();

function CriaCorrente(){

    contaCorrente.setnomeCorrentista(document.getElementById('nome1').value);
    contaCorrente.setnomeBanco(document.getElementById('banco1').value);
    contaCorrente.setnumConta(document.getElementById('numConta1').value);
    contaCorrente.setnumSaldo(document.getElementById('saldo1').value);
    contaCorrente.setsaldoEspecial(document.getElementById('saldoEsp1').value);

}

Poupanca.prototype = new Conta();

var contaPoupanca = new Poupanca();

function CriaPoupanca(){

    contaPoupanca.setnomeCorrentista(document.getElementById('nome2').value);
    contaPoupanca.setnomeBanco(document.getElementById('banco2').value);
    contaPoupanca.setnumConta(document.getElementById('numConta2').value);
    contaPoupanca.setnumSaldo(document.getElementById('saldo2').value);
    contaPoupanca.setvalJuros(document.getElementById('juros1').value);
    contaPoupanca.setdataVencimento(document.getElementById('dataVenc1').value);

}

function ExibeContaCorrente(){

    document.getElementById('nome3').value = contaCorrente.getnomeCorrentista();
    document.getElementById('banco3').value = contaCorrente.getnomeBanco();
    document.getElementById('numConta3').value = contaCorrente.getnumConta();
    document.getElementById('saldo3').value = contaCorrente.getnumSaldo();
    document.getElementById('juros2').value = "";
    document.getElementById('dataVenc2').value = "";
    document.getElementById('saldoEsp2').value = contaCorrente.getsaldoEspecial();

}

function ExibeContaPoupanca(){

    document.getElementById('nome3').value = contaPoupanca.getnomeCorrentista();
    document.getElementById('banco3').value = contaPoupanca.getnomeBanco();
    document.getElementById('numConta3').value = contaPoupanca.getnumConta();
    document.getElementById('saldo3').value = contaPoupanca.getnumSaldo();
    document.getElementById('juros2').value = contaPoupanca.getvalJuros();
    document.getElementById('dataVenc2').value = contaPoupanca.getdataVencimento();
    document.getElementById('saldoEsp2').value = "";

}

function limparConta(){

    document.getElementById('nome1').value = "";
    document.getElementById('nome2').value = "";
    document.getElementById('nome3').value = "";
    document.getElementById('banco1').value = "";
    document.getElementById('banco2').value = "";
    document.getElementById('banco3').value = "";
    document.getElementById('numConta1').value = "";
    document.getElementById('numConta2').value = "";
    document.getElementById('numConta3').value = "";
    document.getElementById('saldo1').value = "";
    document.getElementById('saldo2').value = "";
    document.getElementById('saldo3').value = "";
    document.getElementById('saldoEsp1').value = "";
    document.getElementById('saldoEsp2').value = "";
    document.getElementById('juros1').value = "";
    document.getElementById('juros2').value = "";
    document.getElementById('dataVenc1').value = "";
    document.getElementById('dataVenc2').value = "";

}