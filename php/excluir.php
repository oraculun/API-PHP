<?php

//Incluir a conexão
include("conexao.php");

//Obter dados
$obterDados = file_get_contents("php://input");

//Extrair dados do JSON
$extrair = json_decode($obterDados);

//Separar os dados do JSON
$idCurso = $extrair->curso->idCurso;

//SQL
$sql = "DELETE FROM curso WHERE idCurso=$idCurso";
mysqli_query($conexao, $sql);

?>