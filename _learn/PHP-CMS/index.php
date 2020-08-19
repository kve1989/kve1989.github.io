<?php
require_once "template/header.php";
require_once "core/db.php";
$records = $conn->query("SELECT * FROM `DigSign`");
$conn->close();
?>

<?php if (isset($_COOKIE['login'])): ?>
	<div class="container">
		<a href="./add.php" class="btn btn-primary mt-2 mb-2">Добавить</a>
		<a href="./search.php" class="btn btn-secondary mt-2 mb-2">Найти</a>
		<table class="table table-hover">
			<thead class="thead-dark">
				<tr>
					<th class="align-middle">Фамилия</th>
					<th class="align-middle">Имя</th>
					<th class="align-middle">Отчество</th>
					<th class="align-middle">Отделение</th>
					<th class="align-middle">Должность</th>
					<th class="align-middle">Начало действия</th>
					<th class="align-middle">Конец действия</th>
					<th class="align-middle">Служебное поле</th>
					<th class="align-middle">Отдана владельцу</th>
					<th class="align-middle">Действия</th>
				</tr>
			</thead>
			<tbody>
				<?php
				while ($record = $records->fetch_assoc()) {
				// for ($i=0; $i < count($record); $i++) {
					echo "<tr>";
					echo "<td>" . $record['lastname'] . "</td>";
					echo "<td>" . $record['firstname'] . "</td>";
					echo "<td>" . $record['secondname'] . "</td>";
					echo "<td>" . $record['department'] . "</td>";
					echo "<td>" . $record['post'] . "</td>";
					echo "<td>" . date("d-m-Y", strtotime($record['start_date'])) . "</td>";
					echo "<td>" . date("d-m-Y", strtotime($record['end_date'])) . "</td>";
					echo "<td>" . $record['servicefield'] . "</td>";
					if ($record['handon'] == 1) {
						echo "<td>Да</td>";
					} else {
						echo "<td>Нет</td>";
					}
					echo "<td><div class='btn-group' role='group' aria-label='Basic example'><a href='./edit.php?id=" . $record['id'] . "' class='btn btn-warning btn-sm'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-pencil-square' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z'/><path fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'/></svg></a><a href='./del.php?id=" . $record['id'] . "' class='btn btn-danger btn-sm'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-trash-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z'/></svg></a></div></td>";
					echo "</tr>";
				}
				?>
			</tbody>
		</table>
	</div>
<?php else: ?>
	<div class="container">
		<div class="alert alert-danger mt-5">Для просмотра страницы нужна авторизация!</div>
	</div>
<?php endif; ?>

<?php require_once "template/footer.php"; ?>