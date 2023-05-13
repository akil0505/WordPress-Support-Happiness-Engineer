<?php


$arr = [2,32,453,2,423];


// count the number of element of array 

echo count($arr);


// add a new value inside array
echo array_push($arr, 32,32);


// fund unique value
$a =  array_unique($arr);
var_dump($a);


//remove array last value

echo array_pop($arr);