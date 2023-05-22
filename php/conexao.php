<?php

//variáveis
$ulr = "localhost";
$usuario = "root";
$senha = "";
$base = "api";

//conexão
$conexao = new mysqli($ulr,$usuario,$senha,$base);

//Verificar caractéres especiais
mysqli_set_charset($conexao,"utf8")
?>