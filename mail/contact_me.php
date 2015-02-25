<?php
require '../vendor/autoload.php';
// Check for empty fields
$sendgrid = new SendGrid("app34063474@heroku.com", "5Jc6%pk6.");
$email    = new SendGrid\Email();

$name = $_POST['name'];
$email_address = $_POST['email'];

$email->addTo("jeff.zheng.6@gmail.com")
      ->setFrom("jeff.zheng.6@gmail.com")
      ->setSubject("Website Contact Form:    $name    $email_address");

$sendgrid->send($email);
return true;			
?>