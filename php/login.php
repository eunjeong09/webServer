<?php
    $db = new SQLite3('../webServer.db');

    $name = $_POST["name"];
    $pass = $_POST["pass"];

    $name2 = json_decode($name);

    echo($name);
    // echo($name2);

    error_reporting(E_ALL);

    ini_set("display_errors", 1);




    $result = $db->querySingle("SELECT id FROM ADMIN");


    


	// echo $result;

	$db->close(); 


?>
