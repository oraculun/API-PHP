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

  //Objeto da classe Curso
  curso = new Curso();

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

      //Alterar
  alterar():void{
    alert("Alterar");
  }

  //Remover
  remover(){
    this.curso_servico.removerCurso(this.curso).subscribe(
        (res: Curso[]) => {
          this.vetor = res;

          this.curso.nomeCurso = "";
          this.curso.valorCurso = 0;
        }
    )
  }

  //selecionar curso
  selecionarCurso(c:Curso){
    this.curso.idCurso = c.idCurso;
    this.curso.nomeCurso = c.nomeCurso;
    this.curso.valorCurso = c.valorCurso;

  }

  //Cadastro
  cadastro(){
    this.curso_servico.cadastrarCurso(this.curso).subscribe(
      (res: Curso[]) => {

        //adicionando dados ao vetor
        this.vetor = res;

        //Limpar os atributos
        this.curso.nomeCurso = "";
        this.curso.valorCurso = 0;

        //Atualizar a listagem de curso
        this.selecao();
      }
    )
  }
}
