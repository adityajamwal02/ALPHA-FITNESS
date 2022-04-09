<!doctype html>
<html lang="en">
  <head>
    <title>Log</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="log.css">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>

  <body>
    <div class="box">
        <br>
        <form action ="log.php" method="post">
            <div class="formdesign" id="name">
                <label for="name" class="head">Log-In</label>
                <br>
                <br>
                <label for="name">Name</label>
                <input type="text" name="name" required><b><span class="formerror"></span></b>
            </div>
            <br>
            <div class="formdesign" id="password">
                <label for="password">Password</label>
                <input type="password" name="password" required><b><span class="formerror"></span></b>
            </div>
            <br>
            <input class="but" name="login" type="submit" value="login">
        </form>
    </div>

    <?php
    // Connecting to the Database
        $servername = "localhost";
        $username = "root";
        $pass= "";
        $database = "alphafitness";

    // Create a connection
        $conn = mysqli_connect($servername, $username, $pass, $database);
    
    // Die if connection was not successful
            
        if (!$conn)
        {
            die("Sorry we failed to connect: ". mysqli_connect_error());
        }

        $login=false;
        $showError = false;
                
        if($_SERVER["REQUEST_METHOD"] == "POST")
        {
                
            $username = $_POST["name"];
            $password = $_POST["password"];      
                
                $sql = "Select * from user where name='$username' AND password='$password';";
                $result = mysqli_query($conn, $sql);
                $num = mysqli_num_rows($result);
                if ($num == 1)
                {
                    $login = true;
                    session_start();
                    $_SESSION['loggedin'] = true;
                    $_SESSION['name'] = $username;
                    $cust="INSERT INTO `alphafitness`.`log` (`name`,`password`) VALUES ('$username','$password');";
                    mysqli_query($conn, $cust);
                } 
                else
                {
                    $showError = "Invalid Credentials";
                }
                    
            }
            if($login)
            {
                echo ' <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> You are logged in
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div> ';
            }

            if($showError)
            {
                echo ' <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Error!</strong> '. $showError.'
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div> ';
            }
    ?>
      
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>