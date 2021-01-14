<?php
	//error
    error_reporting(E_ALL);
	ini_set("display_errors", 1);
	
	// $file = isset($_POST["uploadFile"]);

	$file_name = $_FILES['uploadFile']['name'];
	$tmp_file = $_FILES['uploadFile']['tmp_name'];

	$file_path = '../upload/';

	// echo $file_name;
	// echo $tmp_file;
	echo $file_path;


	$r = move_uploaded_file($tmp_file, $file_path);
	
	// if(isset($file)){
	// 	echo "file 들어옴";
	// }
	header('Content-type: application/json');
	
?>

