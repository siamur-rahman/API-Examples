/*const searchFood = () => {
   const searchField = document.getElementById('search-field');
   const searchText = searchField.value;
   console.log(searchText);

   searchField.value = '';
}

*/


/*
const searchFood = () => {
   const searchField = document.getElementById('search-field');
   const searchText = searchField.value;
   console.log(searchText);

   searchField.value = '';
   // const url = `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`  dinamic kora lagbe tai ektu change korlam
   const url = `www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

   console.log(url)
}
*/

/*
const searchFood = () => {
   const searchField = document.getElementById('search-field');
   const searchText = searchField.value;
   console.log(searchText);

   searchField.value = '';
   // const url = `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`  dinamic kora lagbe tai ektu change korlam
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`//http wala link nite hobe
   fetch(url)

      .then(res => res.json())
      .then(data => console.log(data))  ////////
}
*/


/*
const searchFood = () => {
   const searchField = document.getElementById('search-field');
   const searchText = searchField.value;
   console.log(searchText);

   searchField.value = '';
   // const url = `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`  dinamic kora lagbe tai ektu change korlam
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`//http wala link nite hobe
   fetch(url)

      .then(res => res.json())
      .then(data => console.log(data.meals)) ///array dibe sorasori(data.meals deyate)
}*/

/*
const searchFood = () => {
   const searchField = document.getElementById('search-field');
   const searchText = searchField.value;
   console.log(searchText);

   searchField.value = '';
   // const url = `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`  dinamic kora lagbe tai ektu change korlam
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`//http wala link nite hobe
   fetch(url)

      .then(res => res.json())
      .then(data => console.log(data.meals))
}
*/


//|||||||||||||||||||||Module-33-6|||||||||||||||||||||||||||||||||////
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
   console.log(meals);
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

      div.innerHTML = ` <div class="card h-100">
         <img src="..." class="card-img-top" alt="...">
         <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</p>
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

      div.innerHTML = ` <div class="card h-100">
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">${meal.strInstructions}</p>
          </div>
         </div>`
      searchResult.appendChild(div);
   })
}*/





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
}