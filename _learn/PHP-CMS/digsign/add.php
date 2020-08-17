<?php
require_once "template/header.php";
require_once "core/db.php";

$lastname = trim($_REQUEST['lastname']);
$name = trim($_REQUEST['name']);
$secondname = trim($_REQUEST['secondname']);
$department = trim($_REQUEST['department']);
$post = trim($_REQUEST['post']);
$start = $_REQUEST['start'];
$end = $_REQUEST['end'];
$servicefield = trim($_REQUEST['servicefield']);
$handon = $_REQUEST['handon'];
$msg = '';
?>

<div class="container">
	<div class="jumbotron mt-5">
		<a href="/" class="btn btn-danger mb-2 mt-2">Назад</a>
		<?php echo $msg; ?>
		<form action="<?php $_SERVER['script_name']; ?>" class="form" method="post">
			<div class="form-row">
				<div class="col">
					<div class="form-group">
						<label for="lastname">Фамилия</label>
						<input type="text" class="form-control" name="lastname" id="lastname">
					</div>
				</div>
				<div class="col">
					<div class="form-group">
						<label for="name">Имя</label>
						<input type="text" class="form-control" name="name" id="name">
					</div>
				</div>
				<div class="col">
					<div class="form-group">
						<label for="secondname">Отчество</label>
						<input type="text" class="form-control" name="secondname" id="secondname">
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="col">
					<div class="form-group">
						<label for="department">Отделение</label>
						<input type="text" class="form-control" name="department" id="name">
					</div>
				</div>
				<div class="col">
					<div class="form-group">
						<label for="department">Должность</label>
						<input type="text" class="form-control" name="post" id="name">
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="col-md-3">
					<label for="department">Начало:</label>
					<input type="date" name="start" class="form-control">
				</div>
				<div class="col-md-3">
					<label>Конец:</label>
					<input type="date" name="end" class="form-control">
				</div>
				<div class="col-md-3">
					<label for="servicefield">Служебное поле:</label>
					<input type="text" name="servicefield" id="servicefield" class="form-control">
				</div>
				<div class="col-md-3">
					<div class="form-check">
						<input class="form-check-input" value="1" type="checkbox" name="handon" id="handon">
						<label class="form-check-label" for="handon">Выдана владельцу</label>
					</div>
				</div>
			</div>
			<button name="add" type="submit" class="btn btn-primary mb-2 mt-2">Отправить</button>
		</form>
	</div>
</div>

<?php

if (isset($_REQUEST['add'])) {
	$record = "INSERT INTO DigSign (lastname, firstname, secondname, department, post, start_date, end_date, servicefield, handon) VALUES ('".$lastname."', '".$name."', '".$secondname."', '".$department."', '".$post."', '".$start."', '".$end."', '".$servicefield."', '".$handon."')";

	if ( $conn->query($record) ) {
		$msg = "<div class='alert alert-success alert-dismissible fade show' role='alert'>Запись успешно добавлена!<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>";
	} else {
		$msg = "<div class='alert alert-danger alert-dismissible fade show' role='alert'>Запись не добавлена!<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>";
	}
}

$conn->close();

require_once "template/footer.php";

?>