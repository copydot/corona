
<?php

/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
# Obtiene y lista archivos y carpetas contenidas en un directorio
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/

Class ChildrenFilesFolder { 
	
	private $path;          // Ubicación del directorio
    private $order;         // Orden: 0 asc - 1 desc (NULL = default asc)
    private $list_folders;  // Array de subdirectorios obtenidos
    private $list_files;    // Array de archivos obtenidos
    private $data;

    public function __construct($path){ 

    	$this->path = $path;
    	$this->order = 0; 
        $this->list_files = array();
   		$this->list_folders = array();
   		$this->data = array();

    }

    public function getFiles () {

        return $this->list_files;
        // return json_encode($this->list_files, JSON_PRETTY_PRINT);

    }

    /* public function getFolders() {
        return $this->list_folders;
    } */


	public function get($ord=NULL){ // Orden: 0 asc - 1 desc (NULL = default asc)

	    if(is_dir($this->path)){ // si existe la ubicacion proporcionada y es una carpeta

	    	if (isset($ord)) {
	    		$this->order = $ord;
	    	}

            // Obtiene listado de carpetas y/o archivos dentro de la ubicacion / path
	    	$array_fichero = scandir($this->path, $this->order); 

	    	foreach ($array_fichero as $valor) {

	    		if($valor != '.' && $valor != '..' && $valor != '.htaccess'){ 

		    		if (is_dir($this->path.DS.$valor)) { // es carpeta
		        		$this->list_folders[] = $valor;
		        	} else {
		        		$this->list_files[] = $valor; //  es archivo
		        	}
		        }
            }

            $this->data ["folders"] = $this->list_folders;
            $this->data ["files"] = $this->list_files;
            

	    }
	}
}

/*-----------------------------------------------------------------*/
# END Class
/*-----------------------------------------------------------------*/
