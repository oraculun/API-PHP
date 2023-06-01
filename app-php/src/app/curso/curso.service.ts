import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { Curso } from './curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  //url
  url = "http://localhost:80/api/php/";

  //vetor
  vetor : Curso[] = [];

  //Construtor
  constructor(private http: HttpClient) { }

  //obter todos os cursos
  obterCurso():Observable<Curso[]>{
    return this.http.get(this.url+"listar").pipe(
      map((res:any) => {
        this.vetor = res;
        return this.vetor;
      })
    )
  }

  /*
  //Cadastrar curso
  cadastrarCurso(c:Curso): Observable<Curso[]>{
    return this.http.post(this.url+'cadastrar', {cursos:c}) //enviar os dados cadastrar.php
    .pipe(map((res:any) => {//percorre as informações
      this.vetor.push(res['cursos']); //insere a resposta de cursos
      return this.vetor;
    }))
  }
  */
   //Cadastrar curso
  cadastrarCurso(c:Curso):Observable<Curso>{
    return this.http.post<Curso>(this.url+'cadastrar', Curso);
  }

  removerCurso (id:any):Observable<Curso>{
    const url = `${this.url}excluir?idCurso=${id}`;
    return this.http.delete<Curso>(url);
    }
}
