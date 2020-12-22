<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$to = "cec-info@mail.ru";
$subject = "Заказ с сайта";
$message = "Имя: $name\nТелефон: $phone";
mail ($to,$subject,$message,"Content-type:text/plain;charset = utf-8") or print "Не могу отправить письмо !!!";
?>
