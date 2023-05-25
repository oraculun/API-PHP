import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //vetor de cursos
  vetor: Curso[] = [];

  //construtor
  constructor(private curso_servico:CursoService){  }

  //Inicializador
  ngOnInit(){
    //Ao inicir o sistema, deverá listar os cursos
    this.selecao();
  }

    //Seleção
    selecao(){
      this.curso_servico.obterCurso().subscribe(
        (res: Curso[]) => {
          this.vetor = res;
        }
      )
    }

  //Cadastro
  cadastro():void{
    alert("Cadastro");
  }
  //Alterar
  alterar():void{
    alert("Alterar");
  }

  //Remover
  remover():void{
    alert("Remover");
  }

}
