<?php
//include the database connection file so we can use $conn variable
require 'connect.php';

//Checks if the form submitted using the POST method
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    //gets the form data sent via POST and stores them in variables
    $fname = $_POST['first_name'];
    $lname = $_POST['last_name'];
    $email = $_POST['email'];
    $meter = $_POST['meter_number'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); //hash; to store the password in the db securely

    //prepare an sql statement to insert data into 'customers' table
    $stmt = $conn->prepare("INSERT INTO customers (first_name, last_name, email, meter_number, password) VALUES (?, ?, ?, ?, ?)");
    //bind the variables to the sql statement
    $stmt->bind_param("sssss", $fname, $lname, $meter, $password);

    //Try to execute the sql statement
    //looks out for if the email or meter number already exits
    if ($stmt->execute()) {
    echo "Customer registered successfully.";
} else{
    if($conn->errno ==1062) //error 1062: duplicate entry for a value that is supposed to be unique
    { 
 echo "Error: This email or meter number already exists!";
 } else {
    echo "Error: " .$stmt->error;
 }
}

//close the prepared statement
$stmt->close();

//close the db connection
$conn->close();
}

?>

