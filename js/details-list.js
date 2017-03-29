//var detailListOpts = {
//	area: "中国，新余",
//	id: "00011787-4238-422C-9335-737C1A257",
//	userPic: "img/people.png",
//	visits:{
//		device: "Web",
//		num: 2,
//		lastTime: "2017-02-10"
//	},
//	factors:{
//		city: "新余",
//		country: "中国",
//		screen: "1024x768",
//		keywords: "baidu",
//		eventTime: "2017-03-03",
//		device: "web",
//		ip: "122.44.55.66",
//		os: "windows",
//		browser: "ie",
//		refer: "https://www.growingio.com/projects/L9GkaJ96/segmentations"
//	}
//}
function DetailsList(el, opts){
	var opt = opts || {};
	var detailListTmpl = "<div class='details-list-userinfo'>" +
						"<div class='details-list-userinfo-identity clear-fix'>" +
							"<img src='${userPic}' />" +
							"<div>" +
								"<p class='details-list-userinfo-identity-area'><span>地区：</span>${area}</p>" +
								"<p class='details-list-userinfo-identity-id'><span>ID：</span>${id}</p>" +
							"</div>" +
						"</div>" +
						"<div class='details-list-userinfo-visit'>" +
							"<div>" +
								"<p class='details-list-userinfo-visit-device'><span>上次访问设备：</span>${visits.device}</p>" +
								"<p class='details-list-userinfo-visit-num'><span>近30天访问：</span>${visits.num}</p>" +
								"<p class='details-list-userinfo-visit-time'><span>最近访问：</span>${visits.lastTime}</p>" +
							"</div>" +
							"<div></div>" +
						"</div>" +
					"</div>" +
					"<div class='details-list-factor'>" +
						"<div class='details-list-head'>指标详情</div>" +
						"<ul>" +
							"<li><span>城市：</span><span>${factors.city}</span></li>" +
							"<li><span>国家：</span><span>${factors.country}</span></li>" +
							"<li><span>屏幕分辨率：</span><span>${factors.screen}</span></li>" +
							"<li><span>搜索词：</span><span>${factors.keywords}</span></li>" +
							"<li><span>事件时间：</span><span>${factors.eventTime}</span></li>" +
							"<li><span>终端：</span><span>${factors.device}</span></li>" +
							"<li><span>IP：</span><span>${factors.ip}</span></li>" +
							"<li><span>操作系统：</span><span>${factors.os}</span></li>" +
							"<li><span>浏览器：</span><span>${factors.browser}</span></li>" +
							"<li><span>访问来源：</span><span>${factors.refer}</span></li>" +
						"</ul>" +
					"</div>";
	$.tmpl(detailListTmpl, opt).appendTo(el);
}

