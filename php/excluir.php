<?php

//Incluir a conexão
include("conexao.php");

// obtendo dados via url
$idCurso=$_GET["idCurso"];

//SQL
$sql = "DELETE FROM cursos WHERE idCurso=$idCurso";
mysqli_query($conexao, $sql);

?>