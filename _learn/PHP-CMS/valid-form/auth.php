<?php
session_start();

require_once "../core/db.php";

$login = trim($_REQUEST['login']);
$pass = trim($_REQUEST['password']);

$records = $conn->query("SELECT * FROM `users` WHERE `login`='$login' AND `password`='$pass'");
$record = $records->fetch_assoc();


if ($record['login'] === $login AND $record['password'] === $pass ):

	$_SESSION['user'] = [
		"id" => $record['id'],
		"login" => $record['login'],
		"admin" => $record['id_admin']
	];

	if ($record['is_admin']) {
		setcookie('admin', md5(time()), time() + 3600, "/");
	} else {
		setcookie('user', true, time() + 3600, "/");
	}

	setcookie('login', $record['login'], time() + 3600, "/");
	header('Location: /');

elseif ( isset($_COOKIE['login']) ):
	setcookie('login', '', time() - 3600, "/");

	if ( isset($_COOKIE['admin']) )
		setcookie('admin', '', time() - 3600, "/");
	else
		setcookie('user', '', time() - 3600, "/");

	header('Location: /');

else:
	echo "Не верный логин или пароль!";
endif;


?>
