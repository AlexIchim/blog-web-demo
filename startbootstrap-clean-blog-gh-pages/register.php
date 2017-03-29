<?php
	
	// Check for empty fields
	if(empty($_POST['passwordRegister'])      ||
   		empty($_POST['emailRegister'])      ||
   		!filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
	   {
	   echo "No arguments Provided!";
	   return false;
	   }
   $email_address = strip_tags(htmlspecialchars($_POST['emailRegister']));
   $password = strip_tags(htmlspecialchars($_POST['passwordRegister']));


	require('connect.php');
	//logic for user registration
	//If the values are posted, insert them into the database
	if (isset($_POST['emailRegister']) && isset($_POST['passwordRegister'])){
        $username = $_POST['emailRegister'];
		$email = $_POST['emailRegister'];
        $password = $_POST['passwordRegister'];
 
        $query = "INSERT INTO `user` (username, password, email) VALUES ('$username', '$password', '$email')";
        $result = mysqli_query($connection, $query);
        if($result){
            $smsg = "User Created Successfully.";
        }else{
            $fmsg ="User Registration Failed";
        }
    }
    return true;
?>