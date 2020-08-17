<?php require_once "template/header.php"; ?>

<div class="container">
	<div class="row">
		<div class="offset-md-4 col-md-4 offset-md-4 mt-5">
			<form method="post" action="./valid-form/auth.php">
				<div class="form-group">
					<label for="login">Логин</label>
					<input type="text" name="login" class="form-control" id="login" aria-describedby="Введите пароль">
				</div>
				<div class="form-group">
					<label for="password">Пароль</label>
					<input type="password" name="password" class="form-control" id="password">
				</div>
				<button type="submit" class="btn btn-primary">Войти</button>
			</form>
		</div>
	</div>
</div>

<?php require_once "template/footer.php"; ?>