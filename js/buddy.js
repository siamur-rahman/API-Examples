/*const loadBuddies = () => {

   fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(data => displayBuddies(data))
}
loadBuddies();

const displayBuddies = data => {
   console.log(data)
}*/

/*
const loadBuddies = () => {

   fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(data => displayBuddies(data))
}
loadBuddies();

const displayBuddies = data => {
   const buddies = data.results;
   for (const buddy of buddies) {
      console.log(buddy);
   }
}*/

/*
const loadBuddies = () => {

   fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(data => displayBuddies(data))
}
loadBuddies();

const displayBuddies = data => {
   const buddies = data.results;
   const buddiesDiv = document.getElementById('buddies')
   for (const buddy of buddies) {
      console.log(buddy.email)
   }
}*/

/*
const loadBuddies = () => {

   fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(data => displayBuddies(data))
}
loadBuddies();

const displayBuddies = data => {
   const buddies = data.results;
   const buddiesDiv = document.getElementById('buddies')
   for (const buddy of buddies) {
      // console.log(buddy.email)
      const p = document.createElement('P');
      p.innerText = buddy.email;
      buddiesDiv.appendChild(p);
   }
}//email gula dekhailam

*/

//ebar zodi tader name dekahte chai taile abar console log kore dekhte hobe name gula kothay ache|||||||||||||||||||||||||||||||||||||||||

/*
const loadBuddies = () => {

   fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(data => displayBuddies(data))
}
loadBuddies();

const displayBuddies = data => {
   const buddies = data.results;
   const buddiesDiv = document.getElementById('buddies')
   for (const buddy of buddies) {

      console.log(buddy.name.title, buddy.name.first, buddy.name.last)
      const p = document.createElement('P');
      p.innerText = buddy.email;
      buddiesDiv.appendChild(p);
   }
}*/

const loadBuddies = () => {

   fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(data => displayBuddies(data))
}
loadBuddies();

const displayBuddies = data => {
   const buddies = data.results;
   const buddiesDiv = document.getElementById('buddies')
   for (const buddy of buddies) {

      // console.log(buddy.name.title, buddy.name.first, buddy.name.last)
      const p = document.createElement('P');
      p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}  Email:${buddy.email}`;
      buddiesDiv.appendChild(p);
   }
}