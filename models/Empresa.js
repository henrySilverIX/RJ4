import { Endereco } from "./Endereco.js";
import { Cliente } from "./Cliente.js";
import { Telefone } from "./Telefone.js";

class Empresa {
    razaoSocial;
    nomeFantasia;
    #cnpj;
    endereco;

    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
        this.endereco = endereco;
        this.clientes = new Set();
        this.telefones = new Set();
    }

    get pegarCnpj(){
        return this.#cnpj;
    }

    //Métodos para adiconar e exibir os clientes e os telefones
    adicionarTelefone(newTelephone){
        this.telefones.add(newTelephone);
    }

    adicionarCliente(newClients){
        this.clientes.add(newClients);
    }

    //Métodos de recuperação dos atributos para caixa alta e caixa baixa
    razaoSocialUPcase(){
        return this.razaoSocial.toUpperCase();
    }

    razaoSocialLWcase(){
        return this.razaoSocial.toLowerCase();
    }

    nomeFantasiaUPcase(){
        return this.nomeFantasia.toUpperCase();
    }

    nomeFantasiaLWcase(){
        return this.nomeFantasia.toLowerCase();
    }

    

    //Método para exibição
    detalhe(){
        return `
    Razão Social: ${this.razaoSocial}
    Nome Fantasia: ${this.nomeFantasia}
    ----------------------------------------------------------
    ${Array.from(this.clientes).map(cliente => cliente.imprimirCliente()).join('\n\n    ')}
    \n`}
}

export {Empresa}