<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="assets/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	<a class="navbar-brand" href="/">OKBHMAO</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarNav">
		<!-- <ul class="navbar-nav">
		<li class="nav-item active">
			<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="#">Features</a>
		</li>
		<li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" href="#">Система</a>
			<div class="dropdown-menu dropdown-menu-md-right" aria-labelledby="dropdownMenuLink">
				<a class="dropdown-item" href="#">Action</a>
				<a class="dropdown-item" href="#">Another action</a>
			</div>
		</li>
		<li class="nav-item">
			<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
		</li>
		</ul> -->
		<div class="dropdown ml-md-auto">
			<a class="btn btn-outline-success dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				<?php if (isset($_COOKIE['login'])): ?>
					<?php echo $_COOKIE['login']?>
				<? else: ?>
					Анонимный
				<?php endif; ?>
			</a>
			<div class="dropdown-menu dropdown-menu-md-right" aria-labelledby="dropdownMenuLink">
				<a class="dropdown-item" href="#">Action</a>
				<a class="dropdown-item" href="#">Another action</a>
				<div class="dropdown-divider"></div>

				<?php if (isset($_COOKIE['login'])): ?>
					<a class="dropdown-item" href="./valid-form/auth.php">Выйти</a>
				<? else: ?>
					<a class="dropdown-item" href="./login.php">Войти</a>
				<?php endif; ?>
			</div>
		</div>
	</div>
	</nav>