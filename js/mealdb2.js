///M-33.7//////

/*
const searchFood = () => {
   const searchField = document.getElementById('search-field');
   const searchText = searchField.value;
   // console.log(searchText);

   searchField.value = '';
   // const url = `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`  dinamic kora lagbe tai ektu change korlam
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`//http wala link nite hobe
   fetch(url)

      .then(res => res.json())
      .then(data => displaySearchResults(data.meals))
}

const displaySearchResults = meals => {
   const searchResult = document.getElementById('search-result');
   meals.forEach(meal => {
      console.log(meal)

      const div = document.createElement('div');
      div.classList.add('col');

      div.innerHTML = ` <div class="card h-100">
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
          </div>
         </div>`
      searchResult.appendChild(div);
   })
}*/




/*
const searchFood = () => {
   const searchField = document.getElementById('search-field');
   const searchText = searchField.value;
   // console.log(searchText);

   searchField.value = '';
   // const url = `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`  dinamic kora lagbe tai ektu change korlam
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`//http wala link nite hobe
   fetch(url)

      .then(res => res.json())
      .then(data => displaySearchResults(data.meals))
}

const displaySearchResults = meals => {
   const searchResult = document.getElementById('search-result');
   meals.forEach(meal => {
      console.log(meal)

      const div = document.createElement('div');
      div.classList.add('col');

      div.innerHTML = ` 
      <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
          </div>
         </div>`
      searchResult.appendChild(div);
   })
}

const loadMealDetail = mealId => {
   // console.log(mealId);
   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
   fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
}*/




/*

const searchFood = () => {
   const searchField = document.getElementById('search-field');
   const searchText = searchField.value;
   // console.log(searchText);

   searchField.value = '';
   // const url = `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`  dinamic kora lagbe tai ektu change korlam
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`//http wala link nite hobe
   fetch(url)

      .then(res => res.json())
      .then(data => displaySearchResults(data.meals))
}

const displaySearchResults = meals => {
   const searchResult = document.getElementById('search-result');
   meals.forEach(meal => {
      console.log(meal)

      const div = document.createElement('div');
      div.classList.add('col');

      div.innerHTML = ` 
      <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
          </div>
         </div>`
      searchResult.appendChild(div);
   })
}

const loadMealDetail = mealId => {
   // console.log(mealId);
   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
   fetch(url)
      .then(res => res.json())
      .then(data => console.log(data.meals[0]));//shudhu data dot meals dile kaj hobe na karon amader ekta array dibe index number dite hobe
}*/







/*
const searchFood = () => {
   const searchField = document.getElementById('search-field');
   const searchText = searchField.value;
   // console.log(searchText);

   searchField.value = '';
   // const url = `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`  dinamic kora lagbe tai ektu change korlam
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`//http wala link nite hobe
   fetch(url)

      .then(res => res.json())
      .then(data => displaySearchResults(data.meals))
}

const displaySearchResults = meals => {
   const searchResult = document.getElementById('search-result');
   meals.forEach(meal => {
      console.log(meal)

      const div = document.createElement('div');
      div.classList.add('col');

      div.innerHTML = ` 
      <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
          </div>
         </div>`
      searchResult.appendChild(div);
   })
}

const loadMealDetail = mealId => {
   // console.log(mealId);
   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
   fetch(url)
      .then(res => res.json())
      .then(data => displayMealDetail(data.meals[0]));//shudhu data dot meals dile kaj hobe na karon amader ekta array dibe index number dite hobe
}



const displayMealDetail = meal => {
   console.log(meal);

   const mealDetails = document.getElementById('meal-details');
   const div = document.createElement('div');
   div.classList.add('card');
   div.innerHTML = `  
   
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
         </div>
      
   `;
   mealDetails.appendChild(div);
}*/





/*

const searchFood = () => {
   const searchField = document.getElementById('search-field');
   const searchText = searchField.value;
   // console.log(searchText);

   searchField.value = '';

   // const url = `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`  dinamic kora lagbe tai ektu change korlam

   //load data
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`//http wala link nite hobe
   fetch(url)

      .then(res => res.json())
      .then(data => displaySearchResults(data.meals))
}

const displaySearchResults = meals => {
   const searchResult = document.getElementById('search-result');
   // searchResult.innerHTML = '';
   searchResult.textContent = '';
   meals.forEach(meal => {
      console.log(meal)

      const div = document.createElement('div');
      div.classList.add('col');

      div.innerHTML = ` 
      <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
          </div>
         </div>`
      searchResult.appendChild(div);
   })
}

const loadMealDetail = mealId => {
   // console.log(mealId);
   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
   fetch(url)
      .then(res => res.json())
      .then(data => displayMealDetail(data.meals[0]));//shudhu data dot meals dile kaj hobe na karon amader ekta array dibe index number dite hobe
}



const displayMealDetail = meal => {
   console.log(meal);

   const mealDetails = document.getElementById('meal-details');
   const div = document.createElement('div');
   div.classList.add('card');
   div.innerHTML = `  
   
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
         </div>
      
   `;
   mealDetails.appendChild(div);
}*/







const searchFood = () => {
   const searchField = document.getElementById('search-field');
   const searchText = searchField.value;
   // console.log(searchText);

   searchField.value = '';
   if (searchText == '') {
      //homework please write something to display
   }
   else {
      // const url = `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`  dinamic kora lagbe tai ektu change korlam

      //load data
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`//http wala link nite hobe
      fetch(url)

         .then(res => res.json())
         .then(data => displaySearchResults(data.meals))
   }

}

const displaySearchResults = meals => {
   const searchResult = document.getElementById('search-result');
   // searchResult.innerHTML = '';
   searchResult.textContent = '';
   if (meals.length == 0) {
      //homework(show no result found);
   }
   meals.forEach(meal => {
      console.log(meal)

      const div = document.createElement('div');
      div.classList.add('col');

      div.innerHTML = ` 
      <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
          </div>
         </div>`
      searchResult.appendChild(div);
   })
}

const loadMealDetail = mealId => {
   // console.log(mealId);
   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
   fetch(url)
      .then(res => res.json())
      .then(data => displayMealDetail(data.meals[0]));//shudhu data dot meals dile kaj hobe na karon amader ekta array dibe index number dite hobe
}



const displayMealDetail = meal => {
   console.log(meal);

   const mealDetails = document.getElementById('meal-details');
   const div = document.createElement('div');
   div.classList.add('card');
   div.innerHTML = `  
   
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
         </div>
      
   `;
   mealDetails.appendChild(div);
}