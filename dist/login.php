<?php
	header("Content-type:text/html;charset=utf-8");
	$link = mysql_connect("localhost",'root','123456');
	if(!$link){
		echo "链接数据库失败";
		exit;
	}
	mysql_set_charset("utf8");

	mysql_select_db("mypro");

	$type = $_GET["type"];
	if($type == "login"){

		$username = $_POST['username'];
		$password = $_POST['password'];

		$sql = "SELECT * FROM users where username='{$username}' AND password='{$password}'";

		$res = mysql_query($sql);

		$row = mysql_fetch_assoc($res);

		if($row){
			
			echo "$row";
			exit;
		}else{
			echo "登录失败";
			exit;
		}

		//echo json_encode($arr);	
	}else{
		$username = $_POST['username'];
		$password = $_POST['password'];
		$repassword = $_POST["repassword"];

		if($password != $repassword){
			echo "两次输入的密码不一致";
			exit;
		}
		//判断是否之前注册过
		$sql = "SELECT * FROM users WHERE username='{$username}'";
		$res = mysql_query($sql);
		$row = mysql_fetch_assoc($res);
		if($row){
			echo "该用户已被注册";
			exit;
		}

		//5、准备sql语句
		$sql = "INSERT INTO users(username,password) VALUES('{$username}','{$password}')";

		//6、发送sql语句
		$res = mysql_query($sql);
		if($res){
			echo "注册成功";
			exit;
		}else{
			echo "注册失败";
			exit;
		}
	}

	mysql_close($link);
?>