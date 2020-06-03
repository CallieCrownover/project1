// //stores previous recipes in local storage
// var recipeArray = JSON.parse(localStorage.getItem("recipes")) || [];

// on click event to initiate food recipe search once ingredients are entered
$("#foodSearch").on("click", function(event) {

	// variable to pull ingredients to be used for search
	var foodIng = $("#foodIng")
		.val()
		.trim();
		
		console.log(foodIng);

	// API call to search for recipes based on ingredient
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://api.spoonacular.com/recipes/762009/information?includeNutrition=false&apiKey=380aee2f63msh502b64f71be7614p164be7jsn561a2dd539f1" ,
		"method": "GET"
		// "headers": {
		// 	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		// 	"Access-Control-Allow-Origin": "*",
		// 	"x-rapidapi-key": "380aee2f63msh502b64f71be7614p164be7jsn561a2dd539f1"
		// }
	}
	$.ajax({
		url:
		  "https://api.spoonacular.com/recipes/762009/information?includeNutrition=false&apiKey=fe24873e87244a279196ac9e03c7722a",
		method: "get",
	  }).then(function (res) {
		console.log(res);
	  });
	});

	
// 	$.ajax(settings).done(function (response) {
// 		console.log(response);
// 	});
// });

// id: 762009