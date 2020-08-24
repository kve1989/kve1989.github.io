<?php
require_once "core/db.php";

if ( isset($_REQUEST['id']) ) {
    $sql = "DELETE FROM `DigSign` WHERE `id` = " . $_REQUEST['id'];
    if ( $conn->query($sql) ) {
        echo json_encode([
            "status" => true,
            "msg" => "Успех"
        ]);
    } else {
        echo json_encode([
            "status" => false,
            "msg" => $conn->error
        ]);
    }
}
$conn->close();
?>