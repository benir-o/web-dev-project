<?php
//This php file connects to the MySQL database

$host = "localhost"; //hostname of the MySQL server
$user = "root"; //username
$password = ""; //password, which happens to be an empty string
$db = "quantumgrid_db"; //name of the db I am connecting to, that I have created in phpMyAdmin

//create a new connection to the MySQL server 
$conn = new mysqli($host, $user, $password, $db);

//checks if the connection failed.
//If there is an error, the script is stopped, and the error message displayed
if ($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}

?>