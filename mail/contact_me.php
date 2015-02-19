<?php
// Check for empty fields
$sendgrid = new SendGrid("app34063474@heroku.com", "5Jc6%pk6.");
$email    = new SendGrid\Email();

$email->addTo("test@sendgrid.com")
      ->setFrom("you@youremail.com")
      ->setSubject("Sending with SendGrid is Fun")
      ->setHtml("and easy to do anywhere, even with PHP");

$sendgrid->send($email);
return true;			
?>