<?php

require_once "core/db.php";

$records = $conn->query("SELECT * FROM `DigSign` WHERE `id`=" . $_REQUEST['id']);
$record = $records->fetch_assoc();


$lastname = $record['lastname'];
$name = $record['firstname'];
$secondname = $record['secondname'];
$department = $record['department'];
$post = $record['post'];
$start =  date('Y-m-d', $record['start']);
$end = date('Y-m-d', $record['end']);
$servicefield = $record['servicefield'];
$handon = $record['handon'];

$record = "INSERT INTO `DigSign` (`lastname`, `firstname`, `secondname`, `department`, `post`, `start_date`, `end_date`, `servicefield`, `handon`) VALUES ('".$lastname."', '".$name."', '".$secondname."', '".$department."', '".$post."', '".$start."', '".$end."', '".$servicefield."', '".$handon."')";


if ( $conn->query($record ) ) {
    echo json_encode([
        "status" => true,
        "text" => "Success"
    ]);
} else {
    echo json_encode([
        "status" => false,
        "text" => $conn->error
    ]);
}

$conn->close();
?>