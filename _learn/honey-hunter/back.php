<?php


$db = mysqli_connect('localhost', 'root', 'root', 'honeyhunters');

if (isset($_REQUEST['add'])) {
	// $name = trim($_REQUEST['name']);
	// $email = trim($_REQUEST['email']);
	// $msg = trim($_REQUEST['msg']);
	// addcomment($db, $name, $email, $msg);
	var_dump($_REQUEST);
}

if (isset($_REQUEST['all'])) {
	getComments($db);
}

function addComment($conn, $name, $email, $msg) {
	$q = "INSERT INTO Comments (name, email, msg) VALUES ('".$name."', '".$email."', '".$msg."')";
	$result = mysqli_query($conn, $q);
	if (!$result) {
		return json_encode([
			'status' => false,
			'body' => mysql_error()
		]);
	}
	return $result;
}

function getComments($conn) {
	$records = [];
	$results = mysqli_query($conn, 'SELECT * FROM `Comments`');
	while ($result = mysqli_fetch_assoc($results)) {
		$records[] = $result;
	};
	echo json_encode($records);
}