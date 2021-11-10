<?php
$nombres = ["Sergio","Antonio","Manuel","Juan"];

echo count($nombres)."<br>";

$cadenaNombres = implode(" ", $nombres);

echo $cadenaNombres."<br>";

//asort($nombres);

//print_r($nombres)."<br>";

$nombresReverse = array_reverse($nombres);

print_r($nombresReverse);

echo "<br>".array_search("Sergio", $nombres)."<br>";

$alum = [[
            'id'=>01,
            'nombre'=>"Sergio",
            'edad'=>21
        ],
        [
            'id'=>02,
            'nombre'=>"Manuel",
            'edad'=>21
        ],
        [
            'id'=>03,
            'nombre'=>"Pepe",
            'edad'=>19
        ],
        [
            'id'=>04,
            'nombre'=>"Juan",
            'edad'=>18
        ]
    ];

$s = '<table border="1">';

foreach ( $alum as $r ) {
        $s .= '<tr>';
        foreach ( $r as $v ) {
                $s .= '<td>'.$v.'</td>';
        }
        $s .= '</tr>';
}

$s .= '</table>';

echo $s;

$alumNom = array_column($alum, 'nombre');

print_r($alumNom);

$numerosSumar = [1,2,3,4,5,6,7,8,9,10];

echo "<br>".array_sum($numerosSumar);

?>
