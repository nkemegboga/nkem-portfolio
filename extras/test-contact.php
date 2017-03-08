<?php
/* Set e-mail recipient */
$myemail  = "nkemegboga@yahoo.ca";

/* Check all form inputs using check_input function */
$name = check_input($_POST['name'], "Enter your name");
$formMessage = check_input($_POST['message'], "Write a message");
$email = check_input($_POST['email']);


/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
    show_error("E-mail address not valid");
}


/* Let's prepare the message for the e-mail */
$message = "Hello!"

// Your contact form has been submitted by:
//
// Name: $name
// E-mail: $email
//
// Message:
// $formMessage
//
// End of message
// ";

/* Send the message using mail() function */
mail($myemail, "Contact Form", $message, "From: Nkem");

/* Redirect visitor to the thank you page */
header('Location: thanks.html');
exit();

/* Functions we used */
function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        show_error($problem);
    }
    return $data;
}

function show_error($myError)
{
?>
    <html>
    <body>

    <b>Please correct the following error:</b><br />
    <?php echo $myError; ?>

    </body>
    </html>
<?php
exit();
}
?>
