import { DatePipe } from "@angular/common";

export class Aluno{
    id!: BigInt;
    nome!: String;
    cpf!: String;
    bairro!: String;
    dataDeNascimento!: DatePipe;    
}