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
      'Content-Type':'applcation/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  // 
  public getAlunoList(): Observable<Aluno[]> {
    return this.httpClient.get<Aluno[]>(this.apiUrl);
  }
}
