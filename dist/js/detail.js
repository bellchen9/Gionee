console.log('detail');
define(["jquery","jquery-cookie"],function(){
	function main(){
		$(function(){

			var index = 0;
			var index_b = 1;
			//小图片移入
			$("#small_img").on("mouseenter","li",function(){
				$(this).css("borderColor","#ca141d");
				$(this).siblings().css("borderColor","#fff");
				index = $(this).index();
				$("#big_img").find("div").css("top",-511 * index);

			})
			//小图片点击移动
			$("#btn_l").click(function(){
				alert(index);
				var l = $("#small_img").css("left");
				l = parseInt(l);
				if(l < 0){
					$("#small_img").stop().animate({left:l+72},100);
				}
			})
			$("#btn_r").click(function(){
				var l = $("#small_img").css("left");
				l = parseInt(l);
				if(l > -144){
					$("#small_img").stop().animate({left:l-72},100);
				}
			})
		//放大镜
			$(".big").mouseenter(function(){
				$("#glass").css("display","block");
				$("#glass_s").css("display","block");
				$(".big").mousemove(function(ev){
					var left = ev.pageX - 127.5;
					var top = ev.pageY - 265;
					if(left < -1){
						left = -1;
					}else if(left > 247){
						left = 247;
					}
					if(top < -1){
						top = -1;
					}else if(top > 290){
						top = 290;
					}
					$("#glass_s").css("left",left).css("top",top);
				
					//$("#glass_s").html(left + "," + top);
					var glass_top = -929 * index - 1.818 * top;
					var glass_left = -1.818 * left;
					$("#glass").find("div").css("top",glass_top);
					$("#glass").find("div").css("left",glass_left);
				})
			});
			$(".big").mouseleave(function(){
				$("#glass").css("display","none");
				$("#glass_s").css("display","none");
			});

			//选择颜色
			$("#col").on("click","li a",function(){
				$(this).css("borderColor","#ca141d");
				$(this).parent().siblings().find("a").css("borderColor","#a4a4a4");
				var col = $(this).html();
				$(".color").html("（" + col + "）");
			})
			$("#ram").on("click","a",function(){
				$(this).css("borderColor","#ca141d");
				$(this).siblings().css("borderColor","#a4a4a4");
				var ram = $(this).find("span").html();
				$(".ram").html(ram);
			})

			//保障服务下拉框
			$("#product1").hover(function(){
				$("#div1").css("display","block");
			},function(){
				$("#div1").css("display","none");
			});
			$("#product2").hover(function(){
				$("#div2").css("display","block");
			},function(){
				$("#div2").css("display","none");
			});

			var isTrue = false;
			var sibling_i = null;
			$(".aa").click(function(){
				sibling_i = $(this).parent().siblings().find("i").css("backgroundPosition");

				if(sibling_i == "0px -132px"){
					//alert(sibling_i);
					istrue = false;
					$(this).parent().siblings().find("i").css("backgroundPosition","0 -148px");
					$(this).prev().css("backgroundPosition","0 -132px");
					$(this).parent().parent().siblings().css("borderColor","#ca141d");
					$(this).parent().parent().css("display","none").css("borderColor","#ca141d");
				}else{
					if(isTrue){
						isTrue = false;
						$(this).prev().css("backgroundPosition","0 -148px");
						$(this).parent().parent().siblings().css("borderColor","#c4c4c4");
						$(this).parent().parent().css("display","none").css("borderColor","#c4c4c4");				
					}else{
						isTrue = true;
						//$(this).parent().siblings().find("i").css("backgroundPosition","0 -148px");
						$(this).prev().css("backgroundPosition","0 -132px");
						$(this).parent().parent().siblings().css("borderColor","#ca141d");
						$(this).parent().parent().css("display","none").css("borderColor","#ca141d");
					}
				}
		
			})
			var isaaa = false;
			$(".aaa").click(function(){
				if(isaaa){
					isaaa = false;
					$(this).prev().css("backgroundPosition","0 -148px");
					$(this).parent().parent().siblings().css("borderColor","#c4c4c4");
					$(this).parent().parent().css("display","none").css("borderColor","#c4c4c4");				
				}else{
					isaaa = true;			
					$(this).prev().css("backgroundPosition","0 -132px");
					$(this).parent().parent().siblings().css("borderColor","#ca141d");
					$(this).parent().parent().css("display","none").css("borderColor","#ca141d");
				}
			})


		//数量加减
			var val = 1
			$("#plus").click(function(){
				val = $("#number").val();
				val = Number(val) + 1;
				$("#number").val(val);
				$("#minus").css("cursor","pointer");
			})


			$("#minus").click(function(){
				if(val > 2){
					$(this).css("cursor","pointer");
					val = $("#number").val();
					val = Number(val) - 1;
					$("#number").val(val);
				}else if(val == 2){
					$("#number").val(1);
					$(this).css("cursor","not-allowed");
				}		
			})

			//加入购物车
			$("#shopCar").click(function(){
				var phone = $(".right").find("h1").text();

				alert(phone + "成功加入购物车！");
			})
		})

	}


	return{
		main:main
	}
})