<?php

function select($id, $table) {
	$query = 'SELECT * FROM $table WHERE id=' . $id;
	$result = mysqli_query($conn->link, $query);
	if (!$result) {
		echo mysqli_error($conn);
	}

	return $result;
}

function selectFromTable($table) {
	global $conn;
	$query = 'SELECT * FROM ' . $table;
	$result = mysqli_query($conn->link, $query);
	if (!$result) {
		exit(mysqli_error($conn));
	}
	$res = array();
	if (mysqli_num_rows($result) > 0) {
		while($row = mysqli_fetch_assoc($result)) {
			$res[] = $row;
		}
	}
	return $res;
}

function selectById($id, $table) {
	global $conn;
	$sql = "SELECT * FROM {$table} WHERE id='$id'";
	$result = mysqli_query($conn->link, $sql);

	$res = array();
	while($row = mysqli_fetch_assoc($result)) {
		$res[] = $row;
	}
	return $res;
}

function delete($tableName,$columnName,$columnValue) {
	global $conn;
	$sql = "DELETE FROM {$tableName} WHERE {$columnName}=".$columnValue;
	if ( mysqli_query($conn->link, $sql) ) {
		return true;
	} else {
		return "Error deleting record: " . mysqli_error($conn);
	}
}

function addArticle($title, $desc, $image) {
	global $conn;
	$query = "INSERT INTO articles SET title='$title', description='$desc', image='$image'";
	if ( mysqli_query($conn->link, $query) ) {
	} else {
		die(mysqli_error($conn));
	}
}

function updateArticle($title, $desc, $image, $id) {
	global $conn;
	$query = "UPDATE articles SET title='$title', description='$desc', image='$image' WHERE id=" . $id;
	if ( mysqli_query($conn->link, $query) ) {
	} else {
		die(mysqli_error($conn));
	}
}
