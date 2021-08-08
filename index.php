<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/PHPMailer-master/src/Exception.php';
require './PHPMailer/PHPMailer-master/src/PHPMailer.php';
require './PHPMailer/PHPMailer-master/src/SMTP.php';



if (isset($_POST["login"])) {
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $userEmail = $_POST["email"];
        $mail = new PHPMailer(true);
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host  = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'danielliberty2425@gmail.com';
        $mail->Password   = 'Tamaiah1825';
        $mail->SMTPSecure = "tls";
        $mail->Port       = 587;
        $mail->setFrom('danielliberty2425g@mail.com', 'Team Tamaiah');
        $mail->addAddress('danielliberty2425@gmail.com', 'Liberty');
        $mail->isHTML(true);
        $mail->Subject = 'Anniversary';
        $mail->Body    = '<h1>We love you daddy</h1>';
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
        if ($mail->send()) {
            echo 'Message sent';
        } else {
            echo 'Message has been sent';
        }
    }
}

// we now have this book. Stallings W.: Computer Organization and Architecture. Pearson Education Limited, Edinburgh 2016.
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="index.php" method="post">
        <label for="email">Email</label>
        <br>
        <input type="email" id="email" name="email">
        <br>
        <label for="password">Password</label>
        <br>
        <input type="password" id="password" name="password">
        <br>
        <br>
        <button type="submit" name="login">Login</button>

    </form>
    </form>
</body>

</html>