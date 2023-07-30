import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/shared/model/aluno.model';
import { AlunoService } from 'src/app/shared/service/aluno.service';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
})

export class AlunoListComponent implements OnInit{

  alunosList!: Aluno[];

  constructor(
    public alunoService: AlunoService
  ){  }

  ngOnInit(): void {
    this.getAlunoList();
  }

  getAlunoList(){
    this.alunoService.getAlunoList().subscribe(data => {
      this.alunosList = data;
    });
  }

}
