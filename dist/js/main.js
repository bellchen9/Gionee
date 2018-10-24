console.log("加载成功");

require.config({
	paths:{
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"index": "index",
		"bottom":"bottom",
		"content":"content",
		"goods":"goods",
		"detail":"detail",
		"login":"login"
	},
	shim: {
		"jquert-cookie": ["jquery"]
	}
})

require(['index','bottom','content','goods','detail','login'],function(index,bottom,content,goods,detail,login){
	index.main();
	index.list();
	index.move();
	bottom.select();
	bottom.top();
	content.main();
	content.slide();
	content.shadow();
	content.earphone();
	goods.main();
	goods.list();
	goods.move();
	detail.main();
	login.main();
})
