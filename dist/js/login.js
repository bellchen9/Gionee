console.log('login');
define(["jquery","jquery-cookie"],function($){
	function main(){
		$(function(){
			$("#page1").stop().animate({left:0},500,function(){
				$(this).css("opacity","1");
			});
			var isYes = false;
			$("#logo_g").click(function(){
				if(isYes){
					$(this).css("background","#fff");
					isYes = false;
				}else{
					$(this).css("background","url(../images/logo_g.jpg) no-repeat");
					isYes = true;
				}
				
			})
			$("#login").click(function(){
				var val = $("#phoneNum1").val();
				val = val.replace(/ /ig,"");
				var password1 = $("#password1").val();
				password1 = password1.replace(/ /ig,"");
				$("#phoneNum1").val(val);
				if(!val){
					$("#hint1").html("请输入手机号");
				}else{
					if(!password1){
						$("#hint1").html("请输入密码");
					}else if(password1.length < 3 || password1.length > 16){
						$("#hint1").html("密码必须在3 - 16位之内");				
					}else{
						var str = `username=${val}&password=${password1}`;
						alert(str);
						$.ajax({
							url: "../login.php?type=login",
							type:"POST",
							data:str,
							success: function(res){
								$("#hint1").html(res);								
							},
							error: function(msg){
								alert(msg);
							}
						})
					}
				}				
			})

			//注册

			$("#toPage2").click(function(){
				
				$(".login1").css("display","none");
				$("#page1").css("display","none");
				$(".login2").css("display","block");
				$("#page2").css("display","block").stop().animate({left:0},500,function(){
					$(this).css("opacity","1");
				});
				$("#random").html(randomNum());
			})

			
			$("#toPage3").click(function(){
				var num2 = $("#phoneNum2").val();
				var code = $("#code").val();
				//alert(num2);
				if(!num2){
					$("#hint2").html("请输入手机号");
				}else if(!code){
					$("#hint2").html("请输入验证码");
				}else if(!/^[1-3]\d{10}$/.test(num2)){
					$("#hint2").html("请输入正确的手机号");
				}else if(code !== $("#random").html()){
					$("#hint2").html("验证码错误");
				}else{
					$(".next").css("backgroundColor","#ff9000");
					$("#page2").css("display","none");
					$("#page3").css("display","block").stop().animate({left:0},500,function(){
						$(this).css("opacity","1");
					});
				}
					
				
			})
			
			$("#change").click(function(){
				$("#random").html(randomNum());
			})

			function randomNum(){
				var arr = [];
				for(i = 0;i < 4;i++){
					var num = parseInt(Math.random() * 10);
					arr.push(num);
				}
				arr = arr.join("");
				return arr;
			}


			$("#toPage4").click(function(){
				var password = $("#password").val();
				var repassword = $("#repassword").val();
				var num2 = $("#phoneNum2").val()
				if(password.length < 6 || password.length > 16){
					$("#hint3").html("密码需在6-16位之间");
				}else if(password != repassword){
					$("#hint3").html("两次输入的密码需一致");
				}else{
					var str = `username=${num2}&password=${password}&repassword=${repassword}`;
					
					$.ajax({
						url: "../login.php?type=register",
						type:"POST",
						data:str,
						success: function(res){
							$("#hint3").html(res);								
						},
						error: function(msg){
							alert(msg);
						}
					})
				}
			})


			

		})
	}
	return{
		main:main
	}
})