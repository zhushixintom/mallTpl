<?php

    header("content-type:text/html;charset=utf-8");
    $host = '127.0.0.1';
    $root = 'root';
    $password  =  'root';

    // 连接数据库
    $conn = mysql_connect($host,$root,$password);
    // 连接数据库
    // $conn = mysqli($host,$root,$password);

    if($conn){
        echo "yes";
    }else {
        echo "no";
    }

?>