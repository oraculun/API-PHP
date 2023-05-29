import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
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
}
