function List(el, opts){
	var table = $("<table cellspacing='0'></table>");
	var tableHead = $("<thead><tr class='list-head'></tr></thead>");
	var tableBody = $("<tbody></tbody>");
	var opt = opts || {};
	var tableHeadTmpl = "<th>${title}{{if hasBtn}}<span class='${order}'></span>{{/if}}</th>";
	$.tmpl(tableHeadTmpl, opt.head).appendTo(tableHead.children("tr"));
	$.tmpl(opt.body.tmpl, opt.body.data).appendTo(tableBody);
	table.append(tableHead, tableBody);
	el.append(table);
}
