var APIKeyFood = "37bd8dfef1msh4174c2e8e77b8e9p118f96jsn5ee04ed7a537";

// Here we are building the URL we need to query the database
var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?";

// //stores previous recipes in local storage
// var recipeArray = JSON.parse(localStorage.getItem("recipes")) || [];

$("#foodSearch").on("click", function(event) {

var foodIng = $("#foodIng")
	.val()
	.trim();

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=10&ranking=1&ignorePantry=true&ingredients=" + foodIng,
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

$("#cocktailIng").on("click", function(event){ 

var cocktailIng= $("#cocktailIng")
	.val()
	.trim();

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