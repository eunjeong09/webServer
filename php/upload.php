<?php
	//error
    error_reporting(E_ALL);
	ini_set("display_errors", 1);
	
	/*
	$file_name = $_FILES['uploadFile']['name'];
	$tmp_file= $_FILES['uploadFile']['tmp_name'];
	$file_path = '../upload/'.$file_name;
	// $file_path = '/var/www/html/upload/'.$file_name;
	$r = move_uploaded_file($tmp_file, $file_path);
	*/

	// if($_FILES['uploadFile']['error'] > 0){ 
	// 	echo '{result: -1, '; 
	// 		//오류 타입에 따라 echo 'msg: "오류종류"}';
	// 	 switch ($_FILES['uploadFile']['error']){ 
	// 		case 1: echo 'msg: "upload_max_filesize 초과"}';break; 
	// 		case 2: echo 'msg: "max_file_size 초과"}';break; 
	// 		case 3: echo 'msg: "파일이 부분만 업로드됐습니다."}';break; 
	// 		case 4: echo 'msg: "파일을 선택해 주세요."}';break; 
	// 		case 6: echo 'msg: "임시 폴더가 존재하지 않습니다."}';break; 
	// 		case 7: echo 'msg: "임시 폴더에 파일을 쓸 수 없습니다. 퍼미션을 살펴 보세요."}';break; 
	// 		case 8: echo 'msg: "확장에 의해 파일 업로드가 중지되었습니다."}';break; 
	// 	} 
	// }


	$uploads_dir = '/upload';
	$tmp_name = $_FILES["uploadFile"]["tmp_name"];
	$name = $_FILES["uploadFile"]["name"];
	move_uploaded_file($tmp_name, "$uploads_dir/$name");

	echo "temp:".$_FILES['uploadFile']['tmp_name']."<br>";




	header('Content-type: application/json');
	
?>

