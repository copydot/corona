<?php
define("DS", "/");
define("ROOT", realpath(dirname(__FILE__)) .DS);
include 'src/route.php';
// include_once('src/bd.inc.php');
// include_once('src/functions.inc.php');
include_once('src/functions.php');
// $conexion = AbrirBD_2();
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <?php include("src/layout/head.php"); ?>  
</head>
<body id="top">
  <?php include("src/layout/navbar.php"); ?>
  <?php
  $source ='src/pages/' . $page . '.php';
  if (!file_exists($source)) {
    $page = 'error';
  }
  include("src/pages/$page.php");
  ?>
  <?php include("src/layout/footer.php"); ?>
  <?php include("src/layout/script.php"); ?>
</body>
</html>