<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: Blog';
    $to = 'nkemegboga@yahoo.ca';
    $subject = 'Contact Form';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if ($_POST['submit']) {
      if ($name != '' && $email != '' && $message != '') {
          if (mail ($to, $subject, $body, $from)) {
            header('Location: thanks.html#three');
	           echo '<p>Your message has been sent!</p>';
	        }
          else {header('Location: index.html#three');}
          }
          else {header('Location: index.html#three');}
    }
?>
