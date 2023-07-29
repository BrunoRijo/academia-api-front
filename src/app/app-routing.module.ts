import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AlunoListComponent } from './views/aluno-list/aluno-list.component';
import { NewAlunoComponent } from './views/aluno/new-aluno/new-aluno.component';

const routes: Routes = [
    { path: '', component: HomeComponent }
    //{ path: '', component: AlunoListComponent },
    //{ path: '/aluno/newAluno', component: NewAlunoComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
