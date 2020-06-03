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
		"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=" + foodIng,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
			"x-rapidapi-key": "380aee2f63msh502b64f71be7614p164be7jsn561a2dd539f1"
		}
	}

	$.ajax(settings).done(function (response) {
		console.log(response);
	});
});
// on click event to initiate cocktail search once ingredients are entered
$("#cocktailIng").on("click", function(event){ 

	var cocktailIng= $("#cocktailIng")
		.val()
		.trim();
	
		console.log("#cocktailIng")
	
	var cocktail = {
		"async": true,
		"crossDomain": true,
		"url": "https://the-cocktail-db.p.rapidapi.com/search.php?i=" + cocktailIng,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
			"x-rapidapi-key": "05b725c27amsh218a9c552817d66p1c19b1jsnd9b6fdf58751"
		}
	}
	
	$.ajax(cocktail).done(function (response) {
		console.log(response);
	});
	});