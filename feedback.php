<?php
$email = $_POST['email'];
$message = $_POST['message'];
$name = $_POST['name'];
$headers = "From:$email" . "\r\n";
// use wordwrap() if lines are longer than 70 characters
$message = wordwrap($message, 70);

// send email
mail("mmdjoker@yahoo.com", "FeedBack-$name", $message, $headers);
echo '<script type="text/javascript">
           window.location = "https://telegrammbot.xyz"
      </script>';
