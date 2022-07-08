<?php
require "./connection.php";

if (isset($_POST['login'])){
    
    $email = ($_POST['email']);
   
    $password = ($_POST['password']);
    
    
    // ensure that form fields are filled properly 
    
    if (empty($email)){
       echo( "Email is  required ");
    }
    if (empty($password)){
        echo("password is  required ");
    }
   if(count($errors) == 0){
    $password = md5($password);
    $query = "SELECT * FROM users WHERE  email='$email' AND password='$password' ;";
$result = mysqli_query($db, $query);
if(mysqli_num_rows($result) == 1){
   
    header('location: home.php ');

}else{

    array_push($errors, "wrong user name /password combination");
    

}

   }
}