<?php
$file = new DOMDocument();
if(isset($_POST['city'])){
    $city = $_POST['city'];
    $file -> load("https://api.weatherapi.com/v1/current.xml?key=9c3b1c5bdd154ee6b2b153837222405&q=$city&aqi=no");
    $response = array();
    $notices = $file -> getElementsByTagName("root");
    foreach ($notices as $entry){
        $new = array();
        $new["name"] = $entry->getElementsByTagName("name")[0]->nodeValue;
        $new["localtime"] = $entry->getElementsByTagName("localtime")[0]->nodeValue;
        $new["temp_c"] = $entry->getElementsByTagName("temp_c")[0]->nodeValue;
        $new["text"]= $entry->getElementsByTagName("text")[0]->nodeValue;
        $new["icon"]= $entry->getElementsByTagName("icon")[0]->nodeValue;
        $response[]=$new;
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>El tiempo</title>
    <link rel="stylesheet" href="style2.css">
</head>
<body>
    <h2>El tiempo en...</h2>
    <form action="<?php $_SERVER['PHP_SELF']?>" method="post">
        <label for="city">Introduzca el nombre de la ciudad y presione Enter</label> <br>
        <input type="text" name="city">
    </form>
    <?php
        if(isset($response)){
            echo "<table>";
            echo "<tr><th>Nombre</th><th>Hora Local</th><th>Temp Cº</th><th>Descripción</th><th>Icono</th></tr>";
            foreach($response as $element){
                $name = $element["name"];
                $local = $element["localtime"];
                $temp = $element["temp_c"];
                $text = $element["text"];
                $icon = $element["icon"];
                echo "<tr><td>$name</td><td>$local</td><td>$temp</td><td>$text</td><td><img src='$icon' alt='Image'</td></tr>";
            }
            echo "</table>";
        }
    ?>
</body>
</html>