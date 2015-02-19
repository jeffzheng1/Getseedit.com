<?php
require 'vendor/autoload.php';
// Check for empty fields
$sendgrid = new SendGrid("app34063474@heroku.com", "5Jc6%pk6.");
$email    = new SendGrid\Email();

if(empty($_POST['name'])        ||
   empty($_POST['email'])       ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
    echo "No arguments Provided!";
    return false;
   }

$name = $_POST['name'];
$email_address = $_POST['email'];

$email->addTo("jeff.zheng.6@gmail.com")
      ->setFrom("you@youremail.com")
      ->setSubject("Website Contact Form:  $name")
      ->setHtml("You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address");

$sendgrid->send($email);
return true;			
?>