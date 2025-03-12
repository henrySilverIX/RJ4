import { Endereco } from "./Endereco.js";
import { Telefone } from "./Telefone.js";

class Cliente{
    nome;
    #cpf;
    endereco;

    constructor(nome, cpf, endereco){
        this.nome = nome;
        this.#cpf = cpf;
        this.endereco = endereco;
        this.telefones = new Set();
    }

    get pegarCpf(){
        return this.#cpf;
    }

    //Métodos de recuperação para caixa alta e caixa baixa
    
    nomeUPcase(){
        return this.nome.toUpperCase();
    }

    nomeLWcase(){
        return this.nome.toLowerCase();
    }

    adicionarTelefone(newTelephone){
        this.telefones.add(newTelephone);
    }

    exibirTelefone(){
        console.log(this.telefones);
    }

    //Método imprimir cliente
    imprimirCliente(){
        return `Nome: ${this.nome}
    ${this.endereco.imprimirEndereco()}
    ${Array.from(this.telefones).map(telefone => `ddd: ${telefone.ddd} .......... número: ${telefone.numero}`).join('\n    ')}`
    }
}

export { Cliente };