<?php

$arr = [32,324,523,45,324,23,4];

foreach($arr as $value) {
    echo $value . ' ';
}

$assoArr = [
    'name'=> "Al Akil",
    'city' => "Dinajpur",
    'country'=> "Bagladesh"
];

foreach($assoArr as $key => $value) {
    echo $key . '=>' . $value . '<br>';
}