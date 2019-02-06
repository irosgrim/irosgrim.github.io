// get the meal information on click
function requestMeal(id) {
  let req = new XMLHttpRequest();
  req.open(
    'GET',
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    true
  );
  req.onload = function() {
    let data = JSON.parse(this.response);
    if (req.status >= 200 && req.status < 400) {
      let theMeal = {
        mealId: data['meals'][0].idMeal,
        mealPicture: data['meals'][0].strMealThumb,
        mealName: data['meals'][0].strMeal,
        mealRecipe: data['meals'][0].strInstructions,
        ingredientList: [],
        amount: []
      };
      for (let i = 1; i <= 20; i++) {
        theMeal.ingredientList.push(data['meals'][0][`strIngredient${i}`]);
        theMeal.amount.push(data['meals'][0][`strMeasure${i}`]);
      }
      modal(theMeal);
    } else {
      console.log('error');
    }
  };
  req.send();
}

// get the meals of the day, only the ones with a picture
function requestSugestedMeals() {
  let request = new XMLHttpRequest();

  request.open(
    'GET',
    'https://www.themealdb.com/api/json/v1/1/latest.php',
    true
  );

  request.onload = function() {
    let data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      for (let i = 0; i < 5; i++) {
        if (data.meals[i].strMealThumb !== null) {
          meal = {
            idMeal: data.meals[i].idMeal,
            nameMeal: data.meals[i].strMeal,
            picMeal: data.meals[i].strMealThumb
          };
          meals.push(meal);
          dagensRecept.innerHTML += createMealDiv(meal);
        }
      }
    } else {
      console.log('error');
    }
  };

  request.send();
}
