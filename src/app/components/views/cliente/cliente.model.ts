import { Endereco } from "../endereco/endereco.model";

export interface Cliente{
    id?: String,
    nome: String,
    cpf: String,
    dataNascimento:String,
    email:String,
    sexo:String,
    telefone:String,
    id_endereco:String,
    endereco?:Endereco
}