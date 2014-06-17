$(document).ready(function(){
	form.init();
});

var preferences = {}

preferences.breakfast = [];

var form={
	init : function(){
		form.initEvents();
	},
	initEvents : function(){
		$("#mealsForm").on("submit", form.addFoodToArr);

	},
	addFoodToArr : function(e){
		e.preventDefault();
		$("#breakfastInput").empty();
		preferences.breakfast.push($("#breakfastInput").val());
		console.log(preferences.breakfast);
	
		home.getMeal();
	},
	genNum : function(foodLength){
		var randNum = Math.floor(Math.random()*foodLength.length);
		return randNum
	}

}//end form