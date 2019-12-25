<?php

$to  = "<info@bigcreative.moscow>";

$subject = "Новая заявка";

// $message = ' <p>Текст письма</p> </br> <b>1-ая строчка </b> </br><i>2-ая строчка </i> </br>';
$message  = '<p>С сайта ' . $_SERVER['HTTP_HOST'] . ' была отправлена новая заявка.</p>';
$message .= '<p>ФИО: ' . $_POST['name'] . '</p>';
$message .= '<p>E-mail: ' . $_POST['email'] . '</p>';
$message .= '<p>Номер телефона: ' . $_POST['phonenumber'] .'</p>';


$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: bigcreative.moscow <info@bigcreative.moscow>\r\n";

mail($to, $subject, $message, $headers);

?>