<?php
	
	if (isset($_POST['send'])) {
		//Email information
		/*$admin_email = "ichim.daniel.alexandru@gmail.com";
		$email = $_REQUEST['email'];
		$name = $_REQUEST['name'];
		$message = $_REQUEST['message'];
		$phoneNr = $_REQUEST['phoneNumber'];

		//send mail
		mail($admin_email, "$message", $name, "From: ", $email);

		//email response
		echo "Thank you for contacting us!";*/

		$to = 'ichim.daniel.alexandru@gmail.com';
		$subject = 'Feedback';
		$message = 'Name: ' . $_POST['name'] . "\r\n\r\n";
		$message .= 'Message: ' . $_POST['message'];

		echo $message;
	} else {
	}
?>