<?php
require "connection.php";

$name = $_REQUEST['name'];
$phone_number = $_REQUEST['phone_number'];
$car_type = $_REQUEST['car_type'];
$location = $_REQUEST['location'];
$charger_type = $_REQUEST['charger_type'];
$auto_order_weekly = $_REQUEST['auto_order_weekly'];


$sql = "INSERT INTO charger (name,phone_number,car_type,location,charger_type,auto_order_weekly) VALUES (?,?,?,?,?,?)";
$result  = $conn->prepare($sql);

$result->execute([$name,$phone_number,$car_type,$location,$charger_type,$auto_order_weekly]);



?>