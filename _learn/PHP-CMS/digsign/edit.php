<?php

require_once "template/header.php";
require_once "core/db.php";

$record = $conn->select("SELECT * FROM DigSign WHERE id=" . $_REQUEST['id']);
$msg = '';
?>

<div class="container">
	<div class="jumbotron">
		<a href="/" class="btn btn-danger mb-2 mt-2">Назад</a>
		<?php echo $msg; ?>
		<form action="<?php $_SERVER['script_name']; ?>" class="form" method="post">
			<div class="form-row">
				<div class="col">
					<div class="form-group">
						<label for="lastname">Фамилия</label>
						<input type="text" class="form-control" name="lastname" id="lastname" value="<?php echo $record[0]['lastname']; ?>">
					</div>
				</div>
				<div class="col">
					<div class="form-group">
						<label for="name">Имя</label>
						<input type="text" class="form-control" name="name" id="name" value="<?php echo $record[0]['firstname']; ?>">
					</div>
				</div>
				<div class="col">
					<div class="form-group">
						<label for="secondname">Отчество</label>
						<input type="text" class="form-control" name="secondname" id="secondname" value="<?php echo $record[0]['secondname']; ?>">
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="col">
					<div class="form-group">
						<label for="department">Отделение</label>
						<input type="text" class="form-control" name="department" id="name" value="<?php echo $record[0]['department']; ?>">
					</div>
				</div>
				<div class="col">
					<div class="form-group">
						<label for="post">Должность</label>
						<input type="text" class="form-control" name="post" id="post" value="<?php echo $record[0]['post']; ?>">
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="col-md-3">
					<label for="department">Начало:</label>
					<input type="date" name="start" class="form-control" value="<?php echo $record[0]['start_date']; ?>">
				</div>
				<div class="col-md-3">
					<label>Конец:</label>
					<input type="date" name="end" class="form-control" value="<?php echo $record[0]['end_date']; ?>">
				</div>
				<div class="col-md-3">
					<label for="servicefield">Служебное поле:</label>
					<input type="text" name="servicefield" id="servicefield" class="form-control" value="<?php echo $record[0]['servicefield']; ?>">
				</div>
				<div class="col-md-3">
					<div class="form-check">
						<input class="form-check-input" value="<?php echo $record[0]['handon']; ?>" type="checkbox" name="handon" id="handon" <?php if ($record[0]['handon'] == 1) echo "checked"; ?> >
						<label class="form-check-label" for="handon">Выдана владельцу</label>
					</div>
				</div>
			</div>
			<button name="add" type="submit" class="btn btn-primary mb-2 mt-2">Обновить</button>
		</form>
	</div>
</div>

<?php

$lastname = trim($_REQUEST['lastname']);
$name = trim($_REQUEST['name']);
$secondname = trim($_REQUEST['secondname']);
$department = trim($_REQUEST['department']);
$post = trim($_REQUEST['post']);
$start = $_REQUEST['start'];
$end = $_REQUEST['end'];
$servicefield = trim($_REQUEST['servicefield']);
$handon = $_REQUEST['handon'];

if (isset($_REQUEST['add'])) {
	$record = "UPDATE DigSign SET lastname='".$lastname."', firstname='".$name."', secondname='".$secondname."', department='".$department."', post='".$post."', start_date='".$start."', end_date='".$end."', servicefield='".$servicefield."', handon='".$handon."' WHERE id='".$_REQUEST['id']."'";

	if ( $conn->update($record) ) {
		$msg = "<div class='alert alert-success alert-dismissible fade show' role='alert'>Запись успешно добавлена!<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>";
		// header('Location: /edit.php');
	} else {
		$msg = "<div class='alert alert-danger alert-dismissible fade show' role='alert'>Запись не добавлена!<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>";
	}
}

$conn->close();

require_once "template/footer.php";

?>