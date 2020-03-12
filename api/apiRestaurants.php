<?php
/*
Trataremos los datos deacuerdo con la especificación 
*/
include("_db.php");

$sql = "SELECT * FROM restaurants"; 
$result = $mysqli->query($sql);

$numrows = $result->num_rows;

$datos = array();

//$datos = $result->fetch_all(MYSQLI_ASSOC);

if($numrows > 0) {
	$datos ['type'] = "success";
	$datos ['data'] = $result->fetch_all(MYSQLI_ASSOC);
}
else {
	$datos ['type'] = "error";
	$datos ['data'] = 'No hay restaurantes';	
}

echo json_encode($datos);

?>
		