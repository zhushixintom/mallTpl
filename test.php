<?php

    header("content-type:text/html;charset=utf-8");
    $host = '127.0.0.1';
    $root = 'root';
    $password  =  'root';
    // 开启session
    // seccion_start();

    $post   = $_POST;
    // var_dump($_POST);
    // die;
    $mobile = $_POST['mobile'];
    $pwd = $_POST['pwd'];

    // 连接数据库
    $conn = @mysql_connect($host,$root,$password);
    //选择数据库
    mysql_select_db("test");

    // 设置客户端和连接字符集
    mysql_query("set names utf8");

    //通过php进行insert操作
    $sqlinsert = "insert into register(mobile,pwd) values('{$mobile}','{$pwd}')";

    //通过Php进行select操作
    $sqlselect = "select * from register order by id";

    //添加用户信息到数据库
    mysql_query($sqlinsert);

    //返回用户信息字符集
    $result = mysql_query($sqlselect);

    // echo "<div>id: {$row['id']}</div>";
    $result =array('status'=>1,'pwd'=> $pwd,'mobile'=> $mobile,'url'=>'0.1登录.html');
    // echo $_POST;
    echo json_encode($result);

    // 释放连接资源
    mysql_close($conn);

?>