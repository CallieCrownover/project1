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

		//will need to display of results to card, need to pull the image from the response, dynamically create element for image, set attribute and place the image to HTML
		var dishImg = response.[i].image

		//this API only provides dish name and ingredients necessary to make the dish, but no step by step instruction, creating a variable to store the dish name to call another API to pull the recipe and step by step instrcutions
		var dishName = response.[i].title

		//function for the new API pull, will need to build the new function outside of this current function
		searchRecipe(dishName);
	});


});
// on click event to initiate cocktail search once ingredients are entered
$("#drinkSearch").on("click", function(event){ 

	var drinkIng= $("#drinkIng")
		.val()
		.trim();
	
		console.log("#drinkIng")
	//API call for cocktail search
	var cocktail = {
		"async": true,
		"crossDomain": true,
		"url": "https://the-cocktail-db.p.rapidapi.com/search.php?i=" + drinkIng,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
			"x-rapidapi-key": "05b725c27amsh218a9c552817d66p1c19b1jsnd9b6fdf58751"
		}
	}
	
	$.ajax(cocktail).done(function (response) {
		console.log(response);
		console.log("****")
	});
	});