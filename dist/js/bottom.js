define(["jquery","jquery-cookie"],function($){
	function select(){
		$(function(){
			$("#select").hover(function(){
				$(this).animate({height:72},300).css("background","#474747");
			},function(){
				$(this).animate({height:24},300).css("background","#333");
			});
		})
	}
	function top(){
		$(function(){
			$("#last").hover(function(){
				$("#eng").stop().animate({top:-24},300);
				$("#add").html("-");
			},function(){
				$("#eng").stop().animate({top:0},300);
				$("#add").html("+");
			})
		})
	}
	return{
		select:select,
		top:top
	}
})