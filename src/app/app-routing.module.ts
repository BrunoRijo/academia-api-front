import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunoListComponent } from './views/home/aluno-list.component';
import { NewAlunoComponent } from './views/aluno/new-aluno/new-aluno.component';

const routes: Routes = [
  { path: '',  component: AlunoListComponent },
  { path: 'addAluno', component: NewAlunoComponent}

    //{ path: '', component: AlunoListComponent },
    //{ path: '/aluno/newAluno', component: NewAlunoComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
