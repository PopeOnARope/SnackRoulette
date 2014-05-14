$(document).ready(function(){
home.init();

});

var home = {

	init : function(){
		home.initEvents();
	},

	initEvents : function(){
		$("#mealsForm").on("submit", home.getMeal, home.appendNumbers);
	},

	renderTmpl : function($target, template, data){
		var tmpl = _.template(template, data);
		$target.html(tmpl);
	},

	getMeal : function(){
		var breakfast=preferences.breakfast;
		var allowedIngredient=home.iterateFoods(breakfast);
		var flavInput=$(".inMoodForInput").val();
		var specialDietInput=$(".specialDietInput").val();
		var specDiet;
		var flavor;
		if(flavInput==="sweet"){
			flavor="&flavor.sweet.min=0.8&flavor.sweet.max=1&flavor.piquant.min=0"+
			"&flavor.piquant.max=0.2"
			} else if(flavInput==="spicy"){
				flavor="&flavor.sweet.min=0.0&flavor.sweet.max=0.2&flavor.piquant.min=0.3"+
			"&flavor.piquant.max=0.9";
			} else {
				flavor="";
			};
		var specialDiet;
		if(specialDietInput==="vegetarian"){
			specialDiet="&allowedDiet[]=387^Lacto-ovo+vegetarian";
		} else if(specialDietInput==="pescatarian"){
			specialDiet="&allowedDiet[]=390^Pescetarian";
		} else if(specialDietInput==="vegan"){
			specialDiet="&allowedDiet[]=386^Vegan";
		} else if(specialDiet==="gluten-free"){
			specialDiet="&allowedAllergy[]=393^Gluten-Free";
		} else {
			specialDiet="";
		}
		var fullUrl="http://api.yummly.com/v1/api/recipes?_app_id=3749ecd0&_app_"+
			"key=f2d7e42e718a093a05a25d495c821b1f"+
			allowedIngredient+
			flavor+
			specialDiet+
			"&requirePictures=true";
			console.log(fullUrl);
		$.ajax({
			url: fullUrl,
			type: "GET",
			dataType: "jsonp",
			success: function(data, dataType, jqXHR){
				var matches = window.matches=data;
				console.log(matches);
				home.renderTmpl($(".foodSchedule"), templates.matches, matches);
				home.generateReport(flavInput, specialDietInput, breakfast);

			}
		});
	},
	generateReport : function(flavor, foodRestric, ingred){
		var joinArray=ingred.join(", ")
		$(".report").html("<h3>Ok! Here are some recipes for "+flavor+" "+foodRestric+" snacks containing "+joinArray+":</h3>");
	},
	iterateFoods : function(food){
		var i;
		var markup="";
		for(i=0;i<food.length;i++){
			markup+="&allowedIngredient[]="+food[i];
		};
		return markup;
	}


} //end home