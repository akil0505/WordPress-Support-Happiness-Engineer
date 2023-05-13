<?php

$num = 2;
$num2 = 8;

if($num == 2) {
    echo "the number is 2";
}


if($num == 3) {
    echo "the number is not 2";
}

if($num == 3 || $num = 2) {
    echo "the number is 2 or 3";
}

if($num == 2 && $num2 = 8) {
    echo "num and num2 are equal";
}

if($num == 5) {
    echo "num is equal to 5";
}else {
    echo "num is not equal to 5";
}


if($num == 1) {
    echo "num is equal to 1";
}elseif($num == 2) {
    echo "num is equal to 2";
}elseif($num == 3) {
    echo "num is equal to 3";
}else {
    echo "num is not equal to above number";
}