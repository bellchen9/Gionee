
define(["jquery","jquery-cookie"],function($){
	function main(){
		$(function(){
			$.ajax({
				url:"../json/data2.json",
				type:"GET",
				success:function(res){
					var c1 = "";
					c1 += `<li><a href=""><img src="${res[0].img1}" alt="" /></a></li>
						<li><a href=""><img src="${res[0].img2}" alt="" /></a></li>
						<li><a href=""><img src="${res[0].img3}" alt="" /></a></li>`;
					$("#c1").html(c1);
					var left = `<img src="${res[1].img}" alt="" />`;
					$("#c2_left").html(left);
					var c2 = "";
					for(var i = 2;i <= 7;i++){
						c2 += `<li><a href="">
							<div><img class = "img1" src="${res[i].img1}" alt="">
							<img  class = "img2" src="${res[i].img2}" alt=""></div>
							<h1>${res[i].title}</h1>
							<h2>${res[i].des}</h2>
							<p>${res[i].price}</p>
						</a></li>`;
					}
					$("#c2").html(c2);
					var c3 = "";
					for(var i = 8;i <= 13;i++){
						c3 += `<li><a href="">
							<img src="${res[i].img}" alt="">
							<h1>${res[i].title}</h1>
							<h2>${res[i].des}</h2>
							<p>${res[i].price}</p>
						</a></li>`;
					}
					$("#c3").html(c3);
					var c4 = "";
					c4 += `<li><a href=""><img src="${res[14].img1}" alt="" ></a></li>
						<li><a href=""><img src="${res[14].img2}" alt="" ></a></li>
						<li><a href=""><img src="${res[14].img3}" alt="" ></a></li>`;
					$("#c4").html(c4);
				},
				error: function(msg){
					alert(msg);
				}
			})
		})
	}
	function slide(){
		$(function(){
			$("#c2").on("mouseenter","li",function(){
				$(this).find("div .img1").stop().animate({left:53},500);
			})
			$("#c2").on("mouseleave","li",function(){
				$(this).find("div .img1").stop().animate({left:90},500);
			})
			$("#c2").on("mouseenter","li",function(){
				$(this).find("div .img2").stop().animate({left:127},500);
			})
			$("#c2").on("mouseleave","li",function(){
				$(this).find("div .img2").stop().animate({left:90},500);
			})
		})
	}
	function shadow(){
		$(function(){
			
			$(".shadow").hover(function(){
				$(this).stop().animate({top:-2},300).css("boxShadow","0px 15px 50px #bcbabb");
			},function(){
				$(this).stop().animate({top:0},300).css("boxShadow","none");
			});
		})
	}
	function earphone(){
		$(function(){
			$("#c3").on("mouseenter","li",function(){
				$(this).find("a").stop().animate({top:-2},300).css("boxShadow","0px 15px 50px #bcbabb");
			})
			$("#c3").on("mouseleave","li",function(){
				$(this).find("a").stop().animate({top:0},300).css("boxShadow","none");
			})
		})
	}

	return{
		main: main,
		slide:slide,
		shadow:shadow,
		earphone:earphone
	}
})