<?php

    //error
    error_reporting(E_ALL);
    ini_set("display_errors", 1);

    $db = new SQLite3('../webServer.db');

    $name = isset($_POST["name"]);
    $pass = isset($_POST["pass"]);

    if(isset($name) && isset($pass)){
        $result = $db->querySingle("SELECT id FROM ADMIN");
        echo $result;
	    
    }


    $db->close(); 

    header('Content-type: application/json');
    // echo json_encode($response);
    


?>
