//下拉框js
$("body").on("click", ".dropdown-toggle button,.dropdown .dropdown-current", function() {
	$(this).parent().toggleClass("open");
})
$("body").on("click", ".dropdown-toggle ul li", function() {
	var text = $(this).children("a").text();
	$(this).parents(".dropdown-toggle").find("button p").text(text).end().toggleClass("open");
})
$("body").on("click", ".dropdown ul li", function() {
		var text = $(this).children("a").text();
		$(this).parents(".dropdown").find(".dropdown-current").text(text).end().toggleClass("open");
	})
	//折叠菜单
$(".fold-menu-list.has-sub > a").on("click", function() {
	$(this).siblings("ul").slideToggle("fast");
})

//分页
var pager = Pager(1, 11, callback);
$(".pager").append(pager);

//列表
var listOpts = {
	head: [{
		title: '分群名称',
		hasBtn: false
	}, {
		title: '分群人数',
		hasBtn: false
	}, {
		title: '最后计算时间',
		hasBtn: true,
		order: "desc"
	}, {
		title: '最后修改',
		hasBtn: true,
		order: "desc"
	}, {
		title: '创建者',
		hasBtn: true,
		order: "asc"
	}, {
		title: '操作',
		hasBtn: false
	}],
	body: {
		data: [{
			groupName: "PC端弹窗关闭按钮的人群",
			groupNum: "35万",
			lastTime: "2017-03-02",
			lastModify: {
				person: "刘鑫",
				time: "2017-03-02"
			},
			creator: {
				person: "刘鑫",
				time: "2017-03-02"
			},
			operation: {
				firstBtnType: "icon-down",
				secondBtnType: "icon-pen",
				thirdBtnType: "icon-del"
			}
		}, {
			groupName: "PC端弹窗关闭按钮的人群",
			groupNum: "35万",
			lastTime: "2017-03-02",
			lastModify: {
				person: "刘鑫",
				time: "2017-03-02"
			},
			creator: {
				person: "刘鑫",
				time: "2017-03-02"
			},
			operation: {
				firstBtnType: "icon-down",
				secondBtnType: "icon-pen",
				thirdBtnType: "icon-del"
			}
		}, {
			groupName: "PC端弹窗关闭按钮的人群",
			groupNum: "35万",
			lastTime: "2017-03-02",
			lastModify: {
				person: "刘鑫",
				time: "2017-03-02"
			},
			creator: {
				person: "刘鑫",
				time: "2017-03-02"
			},
			operation: {
				firstBtnType: "icon-down",
				secondBtnType: "icon-pen",
				thirdBtnType: "icon-del"
			}
		}],
		tmpl: "<tr><td>${groupName}</td>" +
			"<td>${groupNum}</td>" +
			"<td>${lastTime}</td>" +
			"<td>${lastModify.person}<p>${lastModify.time}</p></td>" +
			"<td>${creator.person}<p>${creator.time}</p></td>" +
			"<td><span class='${operation.firstBtnType}'></span><span class='${operation.secondBtnType}'></span><span class='${operation.thirdBtnType}'></span></td></tr>"
	}
}
List($(".commonList"), listOpts);

//详情列表
var detailListOpts = {
	area: "中国，新余",
	id: "00011787-4238-422C-9335-737C1A257",
	userPic: "img/people.png",
	visits: {
		device: "Web",
		num: 2,
		lastTime: "2017-02-10"
	},
	factors: {
		city: "新余",
		country: "中国",
		screen: "1024x768",
		keywords: "baidu",
		eventTime: "2017-03-03",
		device: "web",
		ip: "122.44.55.66",
		os: "windows",
		browser: "ie",
		refer: "https://www.growingio.com/projects/L9GkaJ96/segmentations"
	}
}
DetailsList($(".details-list"), detailListOpts);

//时间轴列表
var timeaxisListOpts = [{
	eventType: "start",
	content: "",
	time: "19:02"
}, {
	eventType: "openwindow",
	content: "[19:02pc端二手车列表页]【绥化二手市场】-绥化58同城",
	time: "19:03"
}, {
	eventType: "click",
	content: "http://www.highcharts.com/demo/pie-basic3432423423434adsadadssdasdasdasdasdasda",
	time: "19:03"
}, {
	eventType: "end",
	content: "",
	time: "19:03"
}];
TimeaxisList($(".timeaxis-list"), timeaxisListOpts);

//时间选择器
function timePicker(el) {
	var configObject = {
		showShortcuts: true,
		shortcuts: {
			'prev-days': [1, 7, 14, 30],
			// 'prev': ['week', 'month', 'year'],
			'next-days': null,
			'next': null
		}
	};
	el.each(function() {
		$(this).dateRangePicker(configObject);
	});
}
timePicker($(".date-range"));

//指标配置表
initFactorSetting();

//单选框
$("body").on("click", ".radio-group .radio div", function() {
	$(this).parent().siblings().removeClass("active").end().addClass("active");
})

//选项卡
$("body").on("click", ".tab-btns div", function() {
	$(this).siblings().removeClass("active").end().addClass("active");
	var index = $(this).index();
	$(this).parents(".tab").find(".tab-divs .tab-divs-items:eq(" + index + ")").siblings().removeClass("open").end().addClass("open");
})

//多选框
$("body").on("click", ".checkbox .checkbox-items div", function() {
	if($(this).parent().hasClass("checked")) {
		$(this).parent().removeClass("checked");
	} else {
		$(this).parent().addClass("checked");
	}
})

//开关
$(".switch-box").on("click", function() {
	if($(this).hasClass("open")) {
		$(this).attr("data-isopen", "1");
		$(this).removeClass("open");
	} else {
		$(this).attr("data-isopen", "2");
		$(this).addClass("open");
	}
})

//定义整页
$(".page-list li").on("click", function() {
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
})

//插入指标面板
$("#formPanel .switch-box").off("click");

//提示弹框
$(".tipsPop .inflItemHead i").on("click", function() {
	$(this).parent().siblings("ul").slideToggle(200);
	$(this).toggleClass("open");
})

//复合指标start
var compListOpts = {
	head: [{
		title: '指标名称',
		hasBtn: false
	}, {
		title: '创建者',
		hasBtn: false
	}, {
		title: '创建时间',
		hasBtn: false
	}],
	body: {
		data: [{
			id: "123",
			type: "elem",
			indicName: "PC端弹窗关闭按钮的人群",
			creator: "刘鑫",
			createAt: "2017-03-02"
		}, {
			id: "456",
			type: "page",
			indicName: "PC端弹窗",
			creator: "刘鑫",
			createAt: "2017-03-02"
		}, {
			id: "789",
			type: "elem",
			indicName: "二手车点击更多",
			creator: "刘鑫",
			createAt: "2017-03-02"
		}],
		tmpl: "<tr draggable='true' ondragstart='drag(event)' data-type='${type}' id='${id}'><td>${indicName}</td>" +
			"<td>${creator}</td>" +
			"<td>${createAt}</td></tr>"
	}
}
List($(".compPopList"), compListOpts);

//拖拽
function drag(ev) {
	var elem = $(ev.target);
	var dataObj = {
		id: elem.attr("id"),
		name: elem.children("td:eq(0)").text(),
		type: elem.attr("data-type")
	}
	ev.dataTransfer.setData("Text", JSON.stringify(dataObj));
}

function drop(ev) {
	ev.preventDefault();
	var dataObj = JSON.parse(ev.dataTransfer.getData("Text"));
	var container;
	if($(ev.target).hasClass("compPopSelect-item")){
		container = $(ev.target);
	}else{
		container = $(ev.target).parents(".compPopSelect-item");
	}
	var	type = container.find(".currentDrop").text();
	var weightSwitch = container.parents(".compPop-right").find(".switch-box").attr("data-isopen");
	dataObj["weightSwitch"] = weightSwitch;
	var elemTmpl = '<li data-id="${id}" class="clear-fix">' +
		'											<span class="selectedName">${name}</span>' +
		'											<div class="dropdown-list dropdown pull-left">' +
		'  											{{if type === "page"}}' +
		'												<div class="dropdown-current">页面浏览</div>' +
		'												<span class="arrow pull-right"></span>' +
		'												<ul class="dropdown-menu">' +
		'													<li>' +
		'														<a href="javascript:;">页面浏览</a>' +
		'													</li>' +
		'												</ul>' +
		'    										{{else}}' +
		'												<div class="dropdown-current">浏览量</div>' +
		'												<span class="arrow pull-right"></span>' +
		'												<ul class="dropdown-menu">' +
		'													<li>' +
		'														<a href="javascript:;">浏览量</a>' +
		'													</li>' +
		'													<li>' +
		'														<a href="javascript:;">点击量</a>' +
		'													</li>' +
		'												</ul>' +
		'    										{{/if}}' +	
		'											</div>' +
		'											<span class="selectedType">'+ type +'</span>' +
		'  								  			{{if weightSwitch === "1"}}<input style="display:none;" type="number" class="weightInput"/>' +
		'											{{else}}<input type="number" class="weightInput"/>{{/if}}' +
		'											<span class="deleteLi"></span>' +
		'										</li>';
	container.children("ul").append($.tmpl(elemTmpl, dataObj)).siblings(".typeSelect").show().siblings("p").remove();
}

function allowDrop(ev) {
	ev.preventDefault();
}

$(".compPopSelect-item").on("click", ".deleteLi", function(){
	if($(this).parents("ul").children("li").length === 1){
		$(this).parents(".compPopSelect-item").children(".typeSelect").hide().end().append("<p>请拖拽多个指标至此</p>");
		$(this).parents("li").remove();
	}
	$(this).parents("li").remove();
})

$(".compPopSelect-item").on('DOMNodeInserted','.currentDrop', function(e) { 
	$(e.target).parents(".typeSelect").siblings("ul").find(".selectedType").text($(e.target).text());
}); 

$(".compPop-right").on("click", ".switch-box", function(){
	var isOpen = $(this).attr("data-isopen");
	if(isOpen === "1"){
		$(".weightInput").hide();
	}else{
		$(".weightInput").show();
	}
})
//复合指标end

//客户端配置start
$(".settingForm .commonInput .ctrl").on("click", function(){
	var isOpen = $(this).attr("data-isopen");
	if(isOpen === "1"){
		$(this).siblings("input").val("").attr("readonly",true);
	}else{
		$(this).siblings("input").attr("readonly",false);
	}
})
//客户端配置end