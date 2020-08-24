<?php
require_once "template/header.php";
require_once "core/db.php";
?>

<div class="container">
	<div class="jumbotron mt-5">
		<h1 class="mb-2">Поиск</h1>
		<form action="<?php $_SERVER['script_name']; ?>" method="post" class="form">
			<div class="input-group mb-3">
				<input type="text" class="form-control" placeholder="Фамилия, Имя" name="search_query" aria-label="ФИО" aria-describedby="button-addon2">
				<div class="input-group-append">
					<button class="btn btn-outline-secondary" name="search_btn" type="submit" id="button-addon2">Искать</button>
				</div>
			</div>
		</form>
		<?php if ( isset($_COOKIE['admin']) ): ?>
			<a href="/" class="btn btn-primary">На главную</a>
			<a href="./add.php" class="btn btn-primary mt-2 mb-2">Добавить</a>
		<?php endif; ?>
	</div>

	<?php
	$search_query = trim($_REQUEST['search_query']);
	if (isset($_REQUEST['search_btn'])) {
		if (!empty($search_query)) {
			$sql = "SELECT * FROM `DigSign` WHERE `lastname` LIKE " . "'%" . $search_query . "%'" . "OR `firstname` LIKE " . "'%" . $search_query . "%'";
			if (!empty($records = $conn->query($sql))) {
				echo "<table class='table table-hover'>";
				while ($record = $records->fetch_assoc()) {
					echo "<tr>";
					echo "<td>" . $record['lastname'] . "</td>";
					echo "<td>" . $record['firstname'] . "</td>";
					echo "<td>" . $record['secondname'] . "</td>";
					// echo "<td>" . $record['department'] . "</td>";
					// echo "<td>" . $record['post'] . "</td>";
					echo "<td>" . date("d-m-Y", strtotime($record['start_date'])) . "</td>";
					echo "<td>" . date("d-m-Y", strtotime($record['end_date'])) . "</td>";
					// echo "<td>" . $record['servicefield'] . "</td>";
					if ($record['handon'] == 1) {
						echo "<td>Выдана владельцу</td>";
					} else {
						echo "<td>Ожидает владельца</td>";
					}
					echo "</tr>";
				}
				echo "</table>";
			} else {
				echo "<div class='alert alert-danger'>Ошибка запроса</div>";
			}
		} else {
			echo "<div class='alert alert-danger'>Поле не должно быть пустым!</div>";
		}
	}
	$conn->close();
	?>

</div>

<?php require_once "template/footer.php"; ?>