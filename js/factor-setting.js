function initFactorSetting() {
	$("body").on("click", ".factors-setting.index .factors-setting-add button", function() {
		if($(this).parent().prev(".factors-setting-items").children("div").length == 1) {
			$('<div class="factors-setting-items-inputs">' +
				'							<div class="dropdown-list dropdown pull-left">' +
				'								<div class="dropdown-current">58</div>' +
				'								<span class="arrow pull-right"></span>' +
				'								<ul class="dropdown-menu">' +
				'									<li>' +
				'										<a href="#">First</a>' +
				'									</li>' +
				'									<li>' +
				'										<a href="#">Second</a>' +
				'									</li>' +
				'									<li>' +
				'										<a href="#">Third</a>' +
				'									</li>' +
				'								</ul>' +
				'							</div>' +
				'							<div class="dropdown-list dropdown pull-left">' +
				'								<div class="dropdown-current">58</div>' +
				'								<span class="arrow pull-right"></span>' +
				'								<ul class="dropdown-menu">' +
				'									<li>' +
				'										<a href="#">First</a>' +
				'									</li>' +
				'									<li>' +
				'										<a href="#">Second</a>' +
				'									</li>' +
				'									<li>' +
				'										<a href="#">Third</a>' +
				'									</li>' +
				'								</ul>' +
				'							</div>' +
				'							<input type="number" placeholder="0" />' +
				'							<div id="timePicker" class="factors-setting-items-inputs-timepickr">' +
				'								<input class="date-range" size="60" value="">' +
				'								<div class="arrow"></div>' +
				'							</div>' +
				'							<button class="factors-setting-items-inputs-delete" type="button"></button>' +
				'						</div>').appendTo($(this).parent().prev(".factors-setting-items"));
		} else {
			$("<div class='factors-setting-items clear-fix'>" +
				"<div class='factors-setting-items-link'>" +
				"<span>And</span>" +
				"</div>" +
				"<div class='factors-setting-items-inputs'>" +
				"<div class='dropdown-list dropdown pull-left'>" +
				"<div class='dropdown-current'>58</div>" +
				"<span class='arrow pull-right'></span>" +
				"<ul class='dropdown-menu'>" +
				"<li>" +
				"<a href='#'>First</a>" +
				"</li>" +
				"<li>" +
				"<a href='#'>Second</a>" +
				"</li>" +
				"<li>" +
				"<a href='#'>Third</a>" +
				"</li>" +
				"</ul>" +
				"</div>" +
				"<div class='dropdown-list dropdown pull-left'>" +
				"<div class='dropdown-current'>58</div>" +
				"<span class='arrow pull-right'></span>" +
				"<ul class='dropdown-menu'>" +
				"<li>" +
				"<a href='#'>First</a>" +
				"</li>" +
				"<li>" +
				"<a href='#'>Second</a>" +
				"</li>" +
				"<li>" +
				"<a href='#'>Third</a>" +
				"</li>" +
				"</ul>" +
				"</div>" +
				"<input type='number' placeholder='0' />" +
				"<div id='timePicker' class='factors-setting-items-inputs-timepickr'>" +
				"<input class='date-range' size='60' value=''>" +
				"<div class='arrow'></div>" +
				"</div>" +
				"<button class='factors-setting-items-inputs-delete' type='button'></button>" +
				"</div>" +
				"</div>").insertBefore($(this).parent());
		}
	});

	$("body").on("click", ".factors-setting.dimention .factors-setting-add button", function() {
		if($(this).parent().prev(".factors-setting-items").children("div").length == 1) {
			$('<div class="factors-setting-items-inputs">' +
				'							<div class="dropdown-list dropdown pull-left">' +
				'								<div class="dropdown-current">58</div>' +
				'								<span class="arrow pull-right"></span>' +
				'								<ul class="dropdown-menu">' +
				'									<li>' +
				'										<a href="#">First</a>' +
				'									</li>' +
				'									<li>' +
				'										<a href="#">Second</a>' +
				'									</li>' +
				'									<li>' +
				'										<a href="#">Third</a>' +
				'									</li>' +
				'								</ul>' +
				'							</div>' +
				'							<div class="dropdown-list dropdown pull-left">' +
				'								<div class="dropdown-current">58</div>' +
				'								<span class="arrow pull-right"></span>' +
				'								<ul class="dropdown-menu">' +
				'									<li>' +
				'										<a href="#">First</a>' +
				'									</li>' +
				'									<li>' +
				'										<a href="#">Second</a>' +
				'									</li>' +
				'									<li>' +
				'										<a href="#">Third</a>' +
				'									</li>' +
				'								</ul>' +
				'							</div>' +
				'							<input type="text" placeholder="..." />' +
				'							<button class="factors-setting-items-inputs-delete" type="button"></button>' +
				'						</div>').appendTo($(this).parent().prev(".factors-setting-items"));
		} else {
			$("<div class='factors-setting-items clear-fix'>" +
				"<div class='factors-setting-items-link'>" +
				"<span>And</span>" +
				"</div>" +
				"<div class='factors-setting-items-inputs'>" +
				"<div class='dropdown-list dropdown pull-left'>" +
				"<div class='dropdown-current'>58</div>" +
				"<span class='arrow pull-right'></span>" +
				"<ul class='dropdown-menu'>" +
				"<li>" +
				"<a href='#'>First</a>" +
				"</li>" +
				"<li>" +
				"<a href='#'>Second</a>" +
				"</li>" +
				"<li>" +
				"<a href='#'>Third</a>" +
				"</li>" +
				"</ul>" +
				"</div>" +
				"<div class='dropdown-list dropdown pull-left'>" +
				"<div class='dropdown-current'>58</div>" +
				"<span class='arrow pull-right'></span>" +
				"<ul class='dropdown-menu'>" +
				"<li>" +
				"<a href='#'>First</a>" +
				"</li>" +
				"<li>" +
				"<a href='#'>Second</a>" +
				"</li>" +
				"<li>" +
				"<a href='#'>Third</a>" +
				"</li>" +
				"</ul>" +
				"</div>" +
				"<input type='text' placeholder='...' />" +
				"<button class='factors-setting-items-inputs-delete' type='button'></button>" +
				"</div>" +
				"</div>").insertBefore($(this).parent());
		}
	});
	$("body").on("click", ".factors-setting-items-inputs-delete", function() {
		var itemsNum = $(this).parents(".factors-setting").children(".factors-setting-items").length;
		if(itemsNum > 1) {
			var nextInputs = $(this).parents(".factors-setting-items").next().children(".factors-setting-items-inputs").html();
			if($(this).parents(".factors-setting-items").next().hasClass("factors-setting-items")) {
				$(this).parents(".factors-setting-items").next(".factors-setting-items").remove();
				$(this).parent().html(nextInputs);
			} else {
				$(this).parents(".factors-setting-items").remove();
			}
		} else {
			$(this).parent().remove();
		}
	});
	$("body").on("click", ".factors-setting-items-filter a", function() {
		$(this).siblings().removeClass("active").end().addClass("active");
		var text = $(this).text();
		$(this).parents(".factors-setting").find(".factors-setting-items-link span").text(text);
	})
}