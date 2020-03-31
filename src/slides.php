
<?php

include_once("../objects.php");

/*-------------------------------*/
# Settings
/*-------------------------------*/

// define("DS", DIRECTORY_SEPARATOR);
// define("ROOT", realpath(dirname(__FILE__)) .DS); // Ubicación fisica del directorio raiz

// define("FILE_PATH", ROOT ."assets".DS."images".DS."placas".DS); //Ubicación fisica del directorio de archivos

define("FILE_PATH", "assets".DS."images".DS."placas".DS); //Ubicación fisica del directorio de archivos 

$obj_list = New ChildrenFilesFolder(ROOT.FILE_PATH);

$obj_list->get(0); // Obtiene lista de archivos y/o carpetas

echo ('<pre>');
print_r( $obj_list->getFiles() );
echo ('</pre>'); exit();

$array_files = $obj_list->getFiles();

?>
<html lang="es">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <meta name="description" content=""/>
        <title></title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>  
        <script src="https://kit.fontawesome.com/5c1b189872.js" crossorigin="anonymous"></script>
        </head>
    <body>
        <section class="container">
            <div class="border-bottom border-ligth mb-4">
                <h1>Listado de archivos...</h1>
            </div>

            <div class="row justify-content-left">
                <?php foreach ($obj_list->getFiles() as $file) { 

                    foreach ($variable as $key => $value) {
                        # code...
                    }
                    
                ?>
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img class="img-fluid" src="<?= FILE_PATH. $file ?>" alt="<?= $file ?>" >
                    </div>
                </div>                    
                <?php } ?>
            </div>

        </section>
    </body>
</html>