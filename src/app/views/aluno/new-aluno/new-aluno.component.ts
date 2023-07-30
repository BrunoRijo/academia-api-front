import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/shared/model/aluno.model';
import { AlunoService } from 'src/app/shared/service/aluno.service';

@Component({
  selector: 'app-new-aluno',
  templateUrl: './new-aluno.component.html',
  styleUrls: ['./new-aluno.component.css']
})

export class NewAlunoComponent {

  newAlunoForm = this.fb.group({
    nome:  [' ', Validators.required],
    cpf : [' ', Validators. required],
    bairro: [' ', Validators. required],
    dataDeNascimento : [' ', Validators. required]
  })  
  
  constructor(
    private fb: FormBuilder,
    private router : Router,
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
          console.log('Resposta: ', response);
        },
        (error) => {
          console.error('Erro: ', error);          
        }
      );
    this.newAlunoForm.reset();
    this.router.navigate
  }

  clearNomeField(){
    this.newAlunoForm.get('nome')?.setValue('');
  }

  clearCPFField(){
    this.newAlunoForm.get('cpf')?.setValue('');
  }  

  clearBairroField(){
    this.newAlunoForm.get('bairro')?.setValue('');
  }   
  
  getMinimumDate(){
    return new Date(new Date().getFullYear() - 100, 0, 1);
  }

  getMaximummDate(){
    return new Date(new Date().getFullYear() + 80, 0, 1);
  }  

}
