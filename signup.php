<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SIGNUP</title>
    <link rel="stylesheet" href="signup.css">
    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="18.css">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Sign Up</title>
</head>

<body>
    <div class="box">
        <form action="signup.php" name="myForm" onsubmit="return validateForm()" method="post">
            <div class="formdesign" id="name">
                <label for="name" class="head">Sign Up</label>
                <br>
                <br>
                <label for="name">Name</label>
                <input type="text" name="name" required><b><span class="formerror"> </span></b>
            </div>
            <br>
            <div class="formdesign" id="email">
                <label for="email">Email</label>
                <input type="email" name="email" required><b><span class="formerror"> </span></b>
            </div>
            <br>
            <div class="formdesign" id="phone">
                <label for="phone">Phone</label>
                <input type="phone" name="phone" required><b><span class="formerror"></span></b>
            </div>
            <br>
            <div class="formdesign" id="pass">
                <label for="password">Password</label>
                <input type="password" name="password" required><b><span class="formerror"></span></b>
            </div>
            <br>
            <div class="formdesign" id="cpass">
                <label for="confirm password">Confirm Password</label>
                <input type="password" name="cpass" required><b><span class="formerror"></span></b>
            </div>
            <br>
            <input class="but" type="submit" name="Register" value="Register">
        </form>
    </div>


    <?php
    $conn=mysqli_connect("localhost","root","");
    if (!$conn) {
        die("Sorry we failed to connect: " . mysqli_connect_error());
    }

    if ($_SERVER['REQUEST_METHOD'] == 'POST') 
    {
        if (isset($_POST['Register']))
         {

            $name = $_POST['name'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
            $password = $_POST['password'];

            $sql = "INSERT INTO `alphafitness`.`user` (`name`, `email`, `phone`, `password`) VALUES ('$name', '$email', '$phone','$password');";
            $result = mysqli_query($conn, $sql);

            if($result)
            {
              echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
              <strong>Success!</strong> Your entry has been submitted successfully!
            </div>';
            } else {
                echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error!</strong> Technical issue. Your entry was not submitted successfully! We regret the inconvinience caused!
          </div>';
            }
        }
    }
    ?>
    <script src="index.js"></script>
</body>
</html>