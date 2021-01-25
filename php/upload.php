<?php
	//error
    error_reporting(E_ALL);
	ini_set("display_errors", 1);

	$root = $_SERVER['DOCUMENT_ROOT'];
	
	

	// $uploads_dir = '../upload';
	// $tmp_name = $_FILES["uploadFile"]["tmp_name"];
	// $name = $_FILES["uploadFile"]["name"];
	// $target_file = '../upload/' . basename( $_FILES["uploadFile"]["name"]);

	$name = $_FILES['uploadFile']['name'];
	echo $root.'/upload'.'/'.$name;

	move_uploaded_file($_FILES['uploadFile']['tmp_name'],$root.'/upload'.'/'.$name);


	header('Content-type: application/json');
		
	?>

