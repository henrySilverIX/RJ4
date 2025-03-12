class Endereco {
    estado;
    cidade;
    rua;
    numero;

    constructor(estado, cidade, rua, numero){
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }

    //Métodos de recuperação para caixa alta e caixa baixa
    estadoUPcase(){
        return this.estado.toUpperCase();
    }

    estadoLWcase(){
        return this.estado.toLowerCase();
    }


    cidadeUPcase(){
        return this.cidade.toUpperCase();
    }

    cidadeLWcase(){
        return this.cidade.toLowerCase();
    }

    ruaUPcase(){
        return this.rua.toUpperCase();
    }

    ruaLWcase(){
        return this.rua.toLowerCase();
    }

    //Método imprimir endereço
    imprimirEndereco(){
        return `Estado: ${this.estado}, Cidade: ${this.cidade}, Rua: ${this.rua}, Número: ${this.numero}`
    }
}

export {Endereco}