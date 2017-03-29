function TimeaxisList(el, opts){
	var opt = opts || {};
	var ul = $("<ul></ul>");
	var timeaxisListTmpl ="<li class='timeaxis-list-${eventType}'>" +
							"<span class='icon'></span>" +
							"<span class='event'></span>" +
							"{{if eventType !== 'start' && eventType !== 'end'}}<span class='content'>${content}</span>{{/if}}" +
							"<span class='time'>${time}</span>" +
						"</li>";
	$.tmpl(timeaxisListTmpl, opt).appendTo(ul);
	ul.appendTo(el);
}

