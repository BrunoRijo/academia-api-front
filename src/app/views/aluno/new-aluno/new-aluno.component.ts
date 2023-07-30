import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Aluno } from 'src/app/shared/model/aluno.model';
import { AlunoService } from 'src/app/shared/service/aluno.service';

@Component({
  selector: 'app-new-aluno',
  templateUrl: './new-aluno.component.html',
  styleUrls: ['./new-aluno.component.css']
})

export class NewAlunoComponent {

  newAlunoForm = this.fb.group({
    nome:  "",
    cpf : "",
    bairro: "",
    dataDeNascimento : ""
  })  
  
  constructor(
    private fb: FormBuilder,
    private alunoService: AlunoService
  ){ }

  onSubmit(){
    const nome = this.newAlunoForm.get("nome")?.value;
    const cpf = this.newAlunoForm.get("cpf")?.value;
    const bairro = this.newAlunoForm.get("bairro")?.value;
    const dataDeNascimento = this.newAlunoForm.get("dataDeNascimento")?.value;

    const aluno: Aluno = {
      nome: nome ? nome : "",
      cpf: cpf ? cpf : "",
      bairro: bairro ? bairro : "",
      dataDeNascimento: dataDeNascimento ? dataDeNascimento : ""
    };

    this.adicionarAluno(aluno);
  }

  adicionarAluno(aluno: Aluno){
    this.alunoService.addAluno(aluno).subscribe(
        (response) => {
          console.log('Resposta: ', response)
        },
        (error) => {
          console.error('Erro: ', error);          
        }
      );
    this.newAlunoForm.reset();
  }

}
