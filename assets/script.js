// //stores previous recipes in local storage
// var recipeArray = JSON.parse(localStorage.getItem("recipes")) || [];

// on click event to initiate food recipe search once ingredients are entered
function recipeHound() {
	// variable to pull ingredients to be used for search
	var foodIng = $("#foodIng")
		.val()
		.trim();
		
		console.log(foodIng);

	// API call to search for recipes based on available ingredients on hand
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=8&ranking=1&ignorePantry=false&ingredients=" + foodIng,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
			"x-rapidapi-key": "380aee2f63msh502b64f71be7614p164be7jsn561a2dd539f1"
		}
	}
let arr=[]
	$.ajax(settings).done(function (response) {
		console.log(response);

		// // Below would be what the loop would look like if I wanted to shorten the script. 
		// for (var i=0;i<4;i++){
		// 	var img =$("#imge"+i+"")
		// 	img.attr("src",response[i].image)

		// variable that pulls info from API (image, title, id)
		var dishOneImg = response[0].image;
		var dishOneTitle = response[0].title;
		var dishId = response[0].id;
		arr.push(dishId)
		
		var dishTwoImg = response[1].image;
		var dishTwoTitle = response[1].title;
		var dishTwoId = response[1].id;
		arr.push(dishTwoId)
		var dishThreeImg = response[2].image;
		var dishThreeTitle = response[2].title;
		var dishThreeId = response[2].id;
		arr.push(dishThreeId)

		var dishFourImg = response[3].image;
		var dishFourTitle = response[3].title;
		var dishFourId = response[3].id;
		arr.push(dishFourId)

		var dishFiveImg = response[4].image;
		var dishFiveTitle = response[4].title;
		var dishFiveId = response[4].id;
		arr.push(dishFiveId)

		var dishSixImg = response[5].image;
		var dishSixTitle = response[5].title;
		var dishSixId = response[5].id;
		arr.push(dishSixId)

		var dishSevenImg = response[6].image;
		var dishSevenTitle = response[6].title;
		var dishSevenId = response[6].id;
		arr.push(dishSevenId)

		var dishEightImg = response[7].image;
		var dishEightTitle = response[7].title;
		var dishEightId = response[7].id;
		arr.push(dishEightId)

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
		$("#foodImg1").prepend(dishImg);
		$("#recipeT1").text(dishOneTitle);
		console.log(dishOneTitle);
		
		$("#foodImg2").prepend(dishImgTwo);
		$("#recipeT2").text(dishTwoTitle);
		console.log(dishTwoTitle);

		$("#foodImg3").prepend(dishImgThree);
		$("#recipeT3").text(dishThreeTitle);
		console.log(dishThreeTitle);

		$("#foodImg4").prepend(dishImgFour);
		$("#recipeT4").text(dishFourTitle);

		$("#foodImg5").prepend(dishImgFive);
		$("#recipeT5").append(dishFiveTitle);

		$("#foodImg6").prepend(dishImgSix);
		$("#recipeT6").append(dishSixTitle);

		$("#foodImg7").prepend(dishImgSeven);
		$("#recipeT7").append(dishSevenTitle);

		$("#foodImg8").prepend(dishImgEight);
		$("#recipeT8").append(dishEightTitle);

		let count =1
	for(let i =0;i<arr.length;i++){
		searchRecipe(arr[i]).then(function(item){
			console.log("___") 
			console.log(item)
			let url = item.sourceUrl
			console.log(url)
			console.log("url above")
			let aTag=$("<a>").attr("href",url)
			aTag.text(" recipe link")
			$("<div>")
			$(`#recipeT${count}`).append(aTag)
count++

		})
		console.log("***")
		
	}
		
		
});
};

//Previous API does not provide instructions or step by step guide to prepare the dish, API below provides URL for the source of the dish with the recipe instructions
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
	
	return $.ajax(settings)
};

$("#foodSearch").on("click", function(event) {
	event.preventDefault();
	recipeHound();
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
		"url": "https://the-cocktail-db.p.rapidapi.com/filter.php?i=" + drinkIng,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
			"x-rapidapi-key": "05b725c27amsh218a9c552817d66p1c19b1jsnd9b6fdf58751"
		}
	}
	let arrTwo=[]
	$.ajax(cocktail).done(function (response) {
		console.log(response);
		console.log("****")

	//will need to display of results to card, need to pull the image from the response, dynamically create element for image, set attribute and place the image to HTML
         
        var drinkOneImg = response.drinks[0].strDrinkThumb;
		var drinkOneTitle = response.drinks[0].strDrink;
		var drinkId = response.drinks[0].idDrink;
		arrTwo.push(drinkId);
		console.log(drinkOneTitle);

		var drinkTwoImg = response.drinks[1].strDrinkThumb;
		var drinkTwoTitle = response.drinks[1].strDrink;
		var drinkTwoId = response.drinks[1].idDrink;
		arrTwo.push(drinkTwoId);
		console.log(drinkTwoTitle);

		var drinkThreeImg = response.drinks[2].strDrinkThumb;
		var drinkThreeTitle = response.drinks[2].strDrink;
		var drinkThreeId = response.drinks[2].idDrink;
		arrTwo.push(drinkThreeId);

		var drinkFourImg = response.drinks[3].strDrinkThumb;
		var drinkFourTitle = response.drinks[3].strDrink;
		var drinkFourId = response.drinks[3].idDrink;
		arrTwo.push(drinkFourId);
        
        var drinkImg = $("<img>");
		drinkImg.attr("src", drinkOneImg);

		var drinkImgTwo = $("<img>");
		drinkImgTwo.attr("src", drinkTwoImg);

		var drinkImgThree = $("<img>");
		drinkImgThree.attr("src", drinkThreeImg);

		var drinkImgFour = $("<img>");
        drinkImgFour.attr("src", drinkFourImg);
    

		//placing information to the HTML page
		$("#drinkImg1").prepend(drinkImg);
		$("#cocktail1").text(drinkOneTitle);
		console.log(drinkOneTitle);
		
		$("#drinkImg2").prepend(drinkImgTwo);
		$("#cocktail2").text(drinkTwoTitle);
		console.log(drinkTwoTitle);

		$("#drinkImg3").prepend(drinkImgThree);
		$("#cocktail3").text(drinkThreeTitle);
		console.log(drinkThreeTitle);

		$("#drinkImg4").prepend(drinkImgFour);
		$("#cocktail4").text(drinkFourTitle);
		

	// 	for(let i =0;i<arr.length;i++){
	// 		searchRecipe(arr[i]).then(function(item){
	// 			console.log("___") 
	// 			console.log(item)
	// 			let url = item.sourceUrl
	// 			console.log(url)
	// 			console.log("url above")
	// 			let aTag=$("<a>").attr("href",url)
	// 			aTag.text(" recipe link")
	// 			$("<div>")
	// 			$(`#recipeT${count}`).append(aTag)
	// count++


	});
});
    //function for the new API pull, will need to build the new function outside of this current function
    // need to pull drink details by ID from previous API
    // "strInstructions" cocktail instructions location
    
function searchCocktail(drinkID) {

	var cocktailRcp = {
		"async": true,
		"crossDomain": true,
		"url": "https://the-cocktail-db.p.rapidapi.com/lookup.php?i=" + drinkID,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
			"x-rapidapi-key": "05b725c27amsh218a9c552817d66p1c19b1jsnd9b6fdf58751"
		}
	}
	
	$.ajax(cocktailRcp).done(function (response) {
		console.log(response);
		console.log("***");

	});
}
