import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../model/aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  apiUrl = 'http://localhost:8080/alunos';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAlunoList(): Observable<Aluno[]> {
    return this.httpClient.get<Aluno[]>(this.apiUrl);
  }

  public addAluno(aluno: Aluno): Observable<Aluno> {
    console.log(JSON.stringify(aluno));
    return this.httpClient.post<Aluno>(this.apiUrl, aluno, this.httpOptions);
  }

}
