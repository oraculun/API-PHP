<?php

//Incluir a conexão
include("conexao.php");

//Obter dados
$obterDados = file_get_contents("php://input");

//Extrair dados do JSON
$extrair = json_decode($obterDados);

//Separar os dados do JSON
$nomeCurso = $extrair->nomeCurso;
$valorCurso = $extrair->valorCurso;

//SQL
$sql = "INSERT INTO cursos (nomeCurso, valorCurso) values ('$nomeCurso', $valorCurso)";
mysqli_query($conexao, $sql);

//Exportar os dados cadastrados
$curso = [
    'nomeCurso' => $nomeCurso,
    'valorCurso' => $valorCurso,
];

json_encode(['curso' => $curso]);

?>