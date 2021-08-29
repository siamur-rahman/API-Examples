
/*
const loadCountries = () => {
   fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = (country) => {
   console.log(country);
}*/


/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||
const loadCountries = () => {
   fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = (countries) => {
   // const country = document.getElementById('countries')
   for (const country of countries) {
      console.log(country);
   }// ei kaj ta e forEach diye korbo
}*/


/*
const loadCountries = () => {
   fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = (countries) => {
   // const country = document.getElementById('countries')
   countries.forEach(country => {
      console.log(country)
   })
}*/   //|||||||||||||||||||||||||||||||||||||||||||||||||

/*
const loadCountries = () => {
   fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = (countries) => {
   const countriesDiv = document.getElementById('countries')
   countries.forEach(country => {

      const h3 = document.createElement('h3');
      h3.innerText = country.name;
      countriesDiv.appendChild(h3);
   })
}*/


/*
const loadCountries = () => {
   fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = (countries) => {
   const countriesDiv = document.getElementById('countries')
   countries.forEach(country => {

      const h3 = document.createElement('h3');
      h3.innerText = country.name;
      countriesDiv.appendChild(h3);
      const p = document.createElement('p');
      p.innerText = country.capital;
      countriesDiv.appendChild(p);
   })
}*/

/*
const loadCountries = () => {
   fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = (countries) => {
   const countriesDiv = document.getElementById('countries')
   countries.forEach(country => {

      const div = document.createElement('div');// div banailam zate (h3 & p) k append korbo..ei div k countriesDiv a append korbo

      const h3 = document.createElement('h3');//h3 banailam
      h3.innerText = country.name;
      div.appendChild(h3);
      const p = document.createElement('p');//p banailam
      p.innerText = country.capital;
      div.appendChild(p);

      countriesDiv.appendChild(div);
   })
}*/


/*
const loadCountries = () => {
   fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = (countries) => {
   const countriesDiv = document.getElementById('countries')
   countries.forEach(country => {

      const div = document.createElement('div');// div banailam zate (h3 & p) k append korbo..ei div k countriesDiv a append korbo

      div.classList.add('country')//classlist dilam style deyar jonno|||***|||


      const h3 = document.createElement('h3');//h3 banailam
      h3.innerText = country.name;
      div.appendChild(h3);
      const p = document.createElement('p');//p banailam
      p.innerText = country.capital;
      div.appendChild(p);

      countriesDiv.appendChild(div);
   })
}/////////ei sobgula kaj inner.html diye easily kora zai


*/


/*
const loadCountries = () => {
   fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = (countries) => {
   const countriesDiv = document.getElementById('countries')
   countries.forEach(country => {

      const div = document.createElement('div');// div banailam zate (h3 & p) k append korbo..ei div k countriesDiv a append korbo

      div.classList.add('country')//classlist dilam style deyar jonno|||***|||

      div.innerHTML = `
      <h3>${country.name}</h3>
      <p>${country.capital}</p>
      <button > Details </button>
      `// const h3 = document.createElement('h3');//h3 banailam
      // h3.innerText = country.name;
      // div.appendChild(h3);
      // const p = document.createElement('p');//p banailam
      // p.innerText = country.capital;
      // div.appendChild(p);
      countriesDiv.appendChild(div);
   })

}*/



/*
const loadCountries = () => {
   fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = (countries) => {
   const countriesDiv = document.getElementById('countries')
   countries.forEach(country => {

      const div = document.createElement('div');// div banailam zate (h3 & p) k append korbo..ei div k countriesDiv a append korbo

      div.classList.add('country')//classlist dilam style deyar jonno|||***|||

      div.innerHTML = `
      <h3>${country.name}</h3>
      <p>${country.capital}</p>
      <button onclick="loadCountryByName('${country.name}')" > Details </button> `
      countriesDiv.appendChild(div);
   });
}

const loadCountryByName = name => {
   console.log(name);
}*/



/*
const loadCountries = () => {
   fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = (countries) => {
   const countriesDiv = document.getElementById('countries')
   countries.forEach(country => {

      const div = document.createElement('div');// div banailam zate (h3 & p) k append korbo..ei div k countriesDiv a append korbo

      div.classList.add('country')//classlist dilam style deyar jonno|||***|||

      div.innerHTML = `
      <h3>${country.name}</h3>
      <p>${country.capital}</p>
      <button onclick="loadCountryByName('${country.name}')" > Details </button> `
      countriesDiv.appendChild(div);
   });
}

const loadCountryByName = name => {
   const url = `https://restcountries.eu/rest/v2/name/${name} 
   `//link ta  website theke niye aschi...tarpor dinamically bosaite $ dichi 

   fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))  ///0 index e country name ache tai index bole dite hobe////

}

const displayCountryDetails = country => {
   console.log(country);
}*/




const loadCountries = () => {
   fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = (countries) => {
   const countriesDiv = document.getElementById('countries')
   countries.forEach(country => {

      const div = document.createElement('div');// div banailam zate (h3 & p) k append korbo..ei div k countriesDiv a append korbo

      div.classList.add('country')//classlist dilam style deyar jonno|||***|||

      div.innerHTML = `
      <h3>${country.name}</h3>
      <p>${country.capital}</p>
      <button onclick="loadCountryByName('${country.name}')" > Details </button> `
      countriesDiv.appendChild(div);
   });
}

const loadCountryByName = name => {
   const url = `https://restcountries.eu/rest/v2/name/${name} 
   `//link ta  website theke niye aschi...tarpor dinamically bosaite $ dichi 

   fetch(url)
      .then(res => res.json())
      .then(data => displayCountryDetails(data[0]))  ///0 index e country name ache tai index bole dite hobe////

}

const displayCountryDetails = country => {
   console.log(country);

   const countryDiv = document.getElementById('country-detail');
   countryDiv.innerHTML = `<h5> ${country.name}</h5>
   <p> population: ${country.population}</p>
   <img width="200px" src="${country.flag}">
   `

}