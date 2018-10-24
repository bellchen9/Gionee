define(["jquery","jquery-cookie"],function($){
	function main(){
		$(function(){
			$.ajax({
				url:"../json/data.json",
				type:"GET",
				success:function(res){
					var phone = "";
					for(var i = 0;i < res.length;i++){
						phone += `<ol><li><a href="">${res[i].title}</a></li>
						<li><a href="">${res[i].phone1}</a></li>
						<li><a href="">${res[i].phone2}</a></li>
						<li><a href="">${res[i].phone3}</a></li>
						<li><a href="">${res[i].phone4}</a></li>
						<li><a href="">${res[i].phone5}</a></li>
						<li><a href="">${res[i].phone6}</a></ol>`;
					}
					$(".box").html(phone);
				},
				error: function(msg){
					alert(msg);
				}
			})
		})
	}
	function list(){
		$(function(){
			$("#phone").mouseover(function(){
				$(".box").css("display","block");
			})
			$("#phone").mouseout(function(){
				$(".box").css("display","none");
			})
		})
	}
	function move(){
		$(function(){
			var oBtns = $("#banner").find("ol").find("li");
			var  oUl = $("#banner").find("ul");
			var aLis = oUl.find("li");
			var iNow = 0;
			var timer = null;

			oBtns.click(function(){
				iNow = $(this).index();
				tab();
			})

			timer = setInterval(function(){
				iNow++;
				tab();
			},4000);

			$("#banner").hover(function(){
				clearInterval(timer);
			},function(){
				timer = setInterval(function(){
					iNow++;
					tab();
				},2000);
			})

			function tab(){
				oBtns.attr("class","").eq(iNow).attr("class","active");
				
				oUl.stop().animate({
					left: -1263 * iNow
				},500,function(){
					if(iNow == aLis.size()-1){
						oUl.css("left",0);
						iNow = 0;
					}
				})

				if(iNow == aLis.size()-1){
					oBtns.eq(0).attr("class","active");
				}
			}
		})
	}
	return{
		main: main,
		list: list,
		move: move
	}
})