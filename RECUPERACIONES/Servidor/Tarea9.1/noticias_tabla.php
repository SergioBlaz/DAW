<?php 
$file = new DOMDocument();
$file -> load("https://e00-elmundo.uecdn.es/elmundo/rss/espana.xml");
$response = array();
$notices = $file -> getElementsByTagName("item");
foreach ($notices as $entry){
    $new = array();
    $new["title"] = $entry->getElementsByTagName("title")[0]->nodeValue;
    $new["link"] = $entry->getElementsByTagName("link")[0]->nodeValue;
    $response[]=$new;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Noticias España</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h2>Noticias destacadas El Mundo</h2>
    <div>
        <h3>Titulares</h3>
        <?php 
            foreach($response as $element){
                $title = $element["title"];
                $link = $element["link"];
                echo "<p><a href='$link'>$title</a></p>";
            }
        ?>
    </div>
</body>
</html>

