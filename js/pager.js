var Pager = function(current, total, callback) {
	var currentPage = current;
	if(currentPage < 1) {
		currentPage = 1;
	}
	if(currentPage > total) {
		currentPage = total;
	}

	var pagerJO = $('<div class="pagenav clear-fix"></div>');

	// prev btn
	var prev = $('<a href="javascript:void(0);" class="pager-prevArrow"></a>');
	if(currentPage == 1) {
		prev.addClass('nolink');
	}
	prev.on('click', function() {
		if(!$(this).hasClass('nolink')) {
			callback(currentPage - 1);
		}
		return false;
	});
	pagerJO.append(prev);

	// index
	if(currentPage <= 5) {
		for(var i = 1; i <= total; i++) {
			if(i > 7 && i < (total - 1)) {
				continue;
			}
			var temp = $('<a href="javascript:void(0);" data-page="' + i + '">' + i + '</a>');
			temp.on('click', function() {
				callback($(this).data('page'));
				return false;
			});
			if(i == currentPage) {
				temp.addClass('on');
			}
			pagerJO.append(temp);
		}
	} else if(currentPage >= (total - 4)) {
		for(var i = 1; i <= total; i++) {
			if(i > 2 && i < (total - 6)) {
				continue;
			}
			var temp = $('<a href="javascript:void(0);" data-page="' + i + '">' + i + '</a>');
			temp.on('click', function() {
				callback($(this).data('page'));
				return false;
			});
			if(i == currentPage) {
				temp.addClass('on');
			}
			pagerJO.append(temp);
		}
	} else {
		for(var i = 1; i <= total; i++) {
			if(i > 2 && ((i < (currentPage - 2)) || (i > (currentPage + 2))) && (i < total)) {
				continue;
			}
			var temp = $('<a href="javascript:void(0);" data-page="' + i + '">' + i + '</a>');
			temp.on('click', function() {
				callback($(this).data('page'));
				return false;
			});
			if(i == currentPage) {
				temp.addClass('on');
			}
			pagerJO.append(temp);
		}
	}
	// next btn
	var next = $('<a href="javascript:void(0);" class="pager-nextArrow"></a>');
	if(currentPage == total) {
		next.addClass('nolink');
	}
	next.on('click', function() {
		//var p = end + 1 > total? end : end + 1;
		if(!$(this).hasClass('nolink')) {
			callback(currentPage + 1);
		}
		return false;
	});
	pagerJO.append(next);

	// divide part
	var curr = $('.on', pagerJO);
	var prev = curr.prev().prev();
	if(prev.data('page') > 3) {
		if(prev.data('page') < (total - 5)) {
			$('<a>...</a>').insertBefore(prev);
		} else if(total > 9){
			$('<a>...</a>').insertAfter($("a[data-page=2]", pagerJO));
		}
	}
	var next = curr.next().next();
	if(next.data('page') < (total - 2)) {
		if(next.data('page') > 6) {
			$('<a>...</a>').insertAfter(next);
		} else if(total > 9){
			$('<a>...</a>').insertBefore($("a[data-page=" + (total - 1) + "]", pagerJO));
		}
	}
	return pagerJO;
};

function callback(currentPage){
	$(".pagenav").remove();
	var pager = Pager(currentPage, 11, callback);
	$(".pager").append(pager);
}