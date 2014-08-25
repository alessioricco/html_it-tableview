var items = [{
	title: "html.it",
	url:"http://www.html.it"	
}, {
	title:"google",
	url:"http://www.google.com"
},{
	title:"facebook",
	url:"http://www.facebook.com"
}];


$.list.data = items;

$.index.open();


function onClick(e)
{
	Ti.API.info(JSON.stringify(e));
	alert("hai cliccato la riga " + e.index);
}
