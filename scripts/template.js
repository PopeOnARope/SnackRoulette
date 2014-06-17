var templates = {};

templates.matches = '<%_.each(_.shuffle(matches), function(element,index,list){%>'+
	'<div class="mealColumn"><img src= "<%= (element.imageUrlsBySize[90]).split("=")[0] %>">'+
	'<h4><a data-toggle="modal" data-target="#myModal<%=index%>"><%=element.recipeName%></a></h4>'+
	

	'<div class="modal fade" id="myModal<%=index%>">'+
	'<div class="modal-dialog">'+
	'<h3 class="hh"><%=element.recipeName %> <a class="glyphicon glyphicon-remove" data-dismiss="modal"></a></h3><br>'+
	'<img class="modalImage" src= "<%= (element.imageUrlsBySize[90]).split("=")[0] %>">'+
	'<div class="ingredientBox">'+
	'<h4>What you\'ll need:</h4>'+

 	'<p><%= element.ingredients.join("<br>") %></p>'+
 	'<p><strong>Estimated prep time:</strong> <%=(Math.floor(element.totalTimeInSeconds/60))%> minutes.</p>'+
 	'<p>Click <a href="http://www.yummly.com/recipe/external/<%=element.id%>">here</a> for the full recipe'+
	'</div>'+
	'</div>'+
	'</div>'+
	'</div>'+
	'<% }); %>';

