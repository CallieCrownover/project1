// //stores previous recipes in local storage
// var recipeArray = JSON.parse(localStorage.getItem("recipes")) || [];

// on click event to initiate food recipe search once ingredients are entered
foodSearch.addEventListener('click')

function Search() {
	recipe-one.remove('hide')
	recipe-two.remove('hide')
}
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
			"x-rapidapi-key": "6ed5ef0009ec44b3af47976b6e69a2e9"
		}
	}

	$.ajax(settings).done(function (response) {
		console.log(response);

		// variable that pulls info from API (image, title, id)
		var dishOneImg = response[0].image;
		var dishOneTitle = response[0].title;
		var dishId = response[0].id;
		
		var dishTwoImg = response[1].image;
		var dishTwoTitle = response[1].title;
		var dishTwoId = response[1].id;

		var dishThreeImg = response[2].image;
		var dishThreeTitle = response[2].title;
		var dishThreeId = response[2].id;

		var dishFourImg = response[3].image;
		var dishFourTitle = response[3].title;
		var dishFourId = response[3].id;

		var dishFiveImg = response[4].image;
		var dishFiveTitle = response[4].title;
		var dishFiveId = response[4].id;

		var dishSixImg = response[5].image;
		var dishSixTitle = response[5].title;
		var dishSixId = response[5].id;

		var dishSevenImg = response[6].image;
		var dishSevenTitle = response[6].title;
		var dishSevenId = response[6].id;

		var dishEightImg = response[7].image;
		var dishEightTitle = response[7].title;
		var dishEightId = response[7].id;

		//create element and adds attribute
		var dishImg = $("<img>");
		dishImg.attr("src", dishOneImg);

		var dishImgTwo = $("<img>");
		dishImgTwo.attr("src", dishTwoImg);

		var dishImgThree = $("<img>");
		dishImgThree.attr("src", dishThreeImg);

		var dishImgFour = $("<img>");
		dishImgFour.attr("src", dishFourImg);

		var dishImgFive = $("<img>");
		dishImgFive.attr("src", dishFiveImg);

		var dishImgSix = $("<img>");
		dishImgSix.attr("src", dishSixImg);

		var dishImgSeven = $("<img>");
		dishImgSeven.attr("src", dishSevenImg);

		var dishImgEight = $("<img>");
		dishImgEight.attr("src", dishEightImg);


		//placing information to the HTML page
		$("#cardOne").append(dishImg);
		$("#titleOne").append(dishOneTitle);

		// for (var i=0;i<4;i++){
		// 	var img =$("#imge"+i+"")
		// 	img.attr("src",response[i].image)





		// 	console.log(response[i].id);
		// 	console.log(response[i].image);

		// }

		// //will need to display of results to card, need to pull the image from the response, dynamically create element for image, set attribute and place the image to HTML
		// var dishImg = response.[i].image

		// //this API only provides dish name and ingredients necessary to make the dish, but no step by step instruction, creating a variable to store the dish name to call another API to pull the recipe and step by step instrcutions
		// var dishName = response.[i].title

		// //function for the new API pull, will need to build the new function outside of this current function
		searchRecipe(dishId);
	});
});
function searchRecipe(dishId){
	
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + dishId + "/information",
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
			"x-rapidapi-key": "380aee2f63msh502b64f71be7614p164be7jsn561a2dd539f1"
		}
	}
	
	$.ajax(settings).done(function (response) {
		console.log(response);
	});
};

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
		"url": "https://the-cocktail-db.p.rapidapi.com/filter.php?i=" + drinkIng,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
			"x-rapidapi-key": "05b725c27amsh218a9c552817d66p1c19b1jsnd9b6fdf58751"
		}
	}
	
	$.ajax(cocktail).done(function (response) {
		console.log(response);
		console.log("****")

	// 	var cocktailOne = response.drinks.0.idDrink
	// });
	});

	// var coctailRecipe = {
	// 	"async": true,
	// 	"crossDomain": true,
	// 	"url": "https://the-cocktail-db.p.rapidapi.com/lookup.php?i=3",
	// 	"method": "GET",
	// 	"headers": {
	// 		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
	// 		"x-rapidapi-key": "380aee2f63msh502b64f71be7614p164be7jsn561a2dd539f1"
	// 	}
	// }
	
	// $.ajax(cocktailR).done(function(response) {
	// 	console.log(response);
	});