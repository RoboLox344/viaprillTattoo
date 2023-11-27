<?php
define('NUM_E', 2.71828);

echo "Число e = " . NUM_E . " ";

echo "\n";
$num_e1 = NUM_E;

echo "\n\$num_e1 = " . $num_e1 . " - ";
var_dump($num_e1);

$num_e1 = (string) $num_e1;
echo "\$num_e1 = " . $num_e1 . " - ";
var_dump($num_e1);

$num_e1 = (int) $num_e1;
echo "\$num_e1 = " . $num_e1 . " - ";
var_dump($num_e1);

$num_e1 = (bool) $num_e1;
echo "\$num_e1 = " . $num_e1 . " - ";
var_dump($num_e1);

?>
