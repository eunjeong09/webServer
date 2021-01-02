<?php






	$db = new SQLite3('../webServer.db');

	$result = $db->querySingle("SELECT id FROM ADMIN");


	echo $result;

	$db->close(); 
?>

