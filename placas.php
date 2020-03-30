
<?php

include_once("objects.php");

/*-------------------------------*/
# Settings
/*-------------------------------*/

define("DS", DIRECTORY_SEPARATOR);
define("ROOT", realpath(dirname(__FILE__)) .DS); // Ubicación fisica del directorio raiz

define("FILE_PATH", ROOT ."assets".DS."images".DS."placas"); //Ubicación fisica del directorio de archivos 


$obj_list = New ChildrenFilesFolder(FILE_PATH);

$obj_list->get(0); // Obtiene lista de archivos y/o carpetas

echo ('<pre>');
print_r( $obj_list->getFiles() );
echo ('</pre>'); exit();

// foreach ($obj_list->list_files as $file) { 
    
//      echo ('<pre>');print_r($file);echo ('</pre>'); 
// } 

// exit();
?>