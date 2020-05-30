

var APIKey = "37bd8dfef1msh4174c2e8e77b8e9p118f96jsn5ee04ed7a537";

// Here we are building the URL we need to query the database
var queryURL = "https://api.spoonacular.com/recipes/search";

// array to add cities to, to be grabbed from after search
var recipeArray = JSON.parse(localStorage.getItem("recipes")) || [];

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer?q=How%20much%20vitamin%20c%20is%20in%202%20apples%253F",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "37bd8dfef1msh4174c2e8e77b8e9p118f96jsn5ee04ed7a537"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});