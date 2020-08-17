<?php
require_once "template/header.php";
require_once "core/db.php";
?>


<div class="container">
  <div class="jumbotron">
    <?php
      if ( isset($_REQUEST['id']) ) {
        $sql = "DELETE FROM DigSign WHERE id = " . $_REQUEST['id'];
        if ($conn->query($sql)) {
          echo "<div class='d-flex flex-column justify-content-center'>";
          echo "<div class='alert alert-success'>Запись удалена</div>";
          echo "<a href='/' class='btn btn-primary mt-2 mb-2 align-self-center'>На главную</a></div>";

        } else {
          echo "<div class='alert alert-danger'>Запись не удалена</div>";
          echo "<a href='/' class='btn btn-primary mt-2 mb-2'>На главную</a>";
        }
      }
      $conn->close();
    ?>
  </div>
</div>
