<?php 

    if($_SERVER["REQUEST_METHOD"] == "POST") {

        $name = $_POST["name"];
        $phone = $_POST["phone"];
        $email = $_POST["email"];

        if(!is_dir("../usersList/")) {
            mkdir("../usersList/");
        }

        $file = fopen("../usersList/people.txt", "a");
        fwrite($file, "Имя: $name\nТелефон: $phone\nEmail: $email\n\n");
        fclose($file);

        echo 'Вы успешно записаны';

    }


    

