<?php
    session_start();
    header('Location:login.html');
    $connection = mysqli_connect('Localhost', 'root');

    if ($connection) {
        echo "Connection Successfully";
    }
    else {
        echo "Connection Unsuccessfully";
    }
    mysqli_select_db($connection, 'techlyn');

    $name = $_POST['email'];
    $pass = $_POST['password'];

    $quer= "Select * from userdata where username = '$name' && password = '$pass'";
    $result = mysqli_query($connection, $quer);

    $num = mysqli_num_rows($result);
    if ($num == 1) {
        echo "Duplicate Data";
    }
    else {
        $querr = "insert into userdata(username,password) Values('$name', '$pass')";
        mysqli_query($connection, $querr);
    }
?>