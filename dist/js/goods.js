define(["jquery","jquery-cookie"],function($){
	function main(){
		$(function(){
			$.ajax({
				url:"../json/data3.json",
				type:"GET",
				success:function(res){
					var ban = `<img src="${res[0].img}" alt="">`;
					$("#ban").html(ban);
					var con = "";
					for(var i = 1;i <res.length;i++){
						con += `<li>
							<a href=""><img src="${res[i].img}" alt=""></a>
							<img src="${res[i].logo}" alt="">
							<h1>${res[i].title}</h1>
							<h2>${res[i].des}</h2>
							<p>
								<i>${res[i].price}</i>
								<span>${res[i].oriPrice}</span>
							</p>
							<div>
								<h3>${res[i].intro}</h3>
								<a href="">查看详情<span>&#x3435;</span></a>
							</div>
						</li>`
					}
					$("#con").html(con);
				},
				error:function(msg){
					alert(msg);
				}
			})
		})
	}
	function list(){
		$(function(){
			//选择显示商品
			$(".checked").on("click","li a",function(){
				$(this).find("i").css("backgroundPosition","0 -134px");
				var html = $(this).find("span").html();
				if(html == "全部"){
					$(this).parent().siblings().find("a i").css("backgroundPosition","0 -148px");
				}else{
					$(this).parent().parent().find("li:eq(1) a i").css("backgroundPosition","0 -148px");
				}
			})
			//排序显示商品
			var isYes1 = true;
			var isYes2 = true;
			var isYes3 = true;
			$(".sort").on("click","li a",function(){
				$(this).css("background","#f63d1f").css("color","white");
				$(this).parent().siblings().find("a").css("background","white").css("color","black");
				var span = $(this).find("span").html();
				
				if(span == "销量"){
					//$(this).find("i").css("backgroundPosition","0 0");
					$(this).parent().siblings().find("a i").css("backgroundPosition","-10px -12px")
					if(isYes3){
						
						$(this).find("i").css("backgroundPosition","0 0");
						
						isYes3 = false;
						isYes1 = true;
						isYes2 = true;
					}else{
						
						$(this).find("i").css("backgroundPosition","0 -12px");
						
						isYes3 = true;
						isYes1 = true;
						isYes2 = true;
					}
								
				}else{
					//$(this).find("i").css("backgroundPosition","0 -12px");
					$(this).parent().siblings().find("a i").css("backgroundPosition","-10px -12px");
					$("#num").css("backgroundPosition","-10px 0px")
					if(span == "上架时间"){
						if(isYes1){							
							$(this).find("i").css("backgroundPosition","0 -12px");
							
							isYes1 = false;
							isYes2 = true;
							isYes3 = true;
						}else{							
							$(this).find("i").css("backgroundPosition","0 0");
							
							isYes1 = true;
							isYes2 = true;
							isYes3 = true;
						}
					}else{
						if(isYes2){							
							$(this).find("i").css("backgroundPosition","0 -12px");							
							isYes2 = false;
							isYes1 = true;
							isYes3 = true;
						}else{							
							$(this).find("i").css("backgroundPosition","0 0");		
							isYes2 = true;
							isYes1 = true;
							isYes3 = true;
						}
					}			
				}
			})
			
			//显示在售商品
			var onsale = true;
			$("#sale").click(function(){
				if(onsale){
					$("#sale").find("i").css("backgroundPosition","0 -134px");
					onsale = false;
				}else{
					$("#sale").find("i").css("backgroundPosition","0 -148px");
					onsale = true;
				}
			})
		})
	}
	function move(){
		$(function(){
			$("#con").on("mouseenter","li",function(){
				$(this).find("div").stop().animate({bottom:0},300);

			})
			$("#con").on("mouseleave","li",function(){
				$(this).find("div").stop().animate({bottom:-113},300);
			})
		})
	}
	return{
		main:main,
		list:list,
		move:move
	}
})