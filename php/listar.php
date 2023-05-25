<?php

//Incluir a conexão
include("conexao.php");

//SQL
$sql = "SELECT * FROM cursos";

//
$executar = mysqli_query($conexao,$sql);

//Vetor
$cursos = [];

//Índice
$indice = 0;

//Laço
while($linha = mysqli_fetch_assoc($executar)){
    $cursos[$indice]['idCurso'] = $linha['idCurso'];
    $cursos[$indice]['nomeCurso'] = $linha['nomeCurso'];
    $cursos[$indice]['valorCurso'] = $linha['valorCurso'];

    $indice++;
}

json_encode($cursos);  //json_encode(['dados'=>$cursos]);
?>