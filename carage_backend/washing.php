<?php
require "connection.php";

$name = $_REQUEST['name'];
$phone_number = $_REQUEST['phone_number'];
$car_type = $_REQUEST['car_type'];
$location = $_REQUEST['location'];
$wash_type = $_REQUEST['wash_type'];
$auto_order_weekly = $_REQUEST['auto_order_weekly'];
$time_picker = $_REQUEST['time_picker'];



$sql = "INSERT INTO car_wash (name,phone_number,car_type,location,wash_type,auto_order_weekly,time_picker) VALUES (?,?,?,?,?,?,?)";
$result  = $conn->prepare($sql);

$result->execute([$name,$phone_number,$car_type,$location,$wash_type,$auto_order_weekly,$time_picker]);

?>