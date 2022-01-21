// fetch("https://randomuser.me/api/?results=10")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);

//     for (let i = 0; i < data.results.length; i++) {
//       document.getElementById("poke-list").innerHTML += `
//         <li><button onclick="getPokemon('${data.results[i].url}')">${data.results[i].name}</button></li>
//       `;
//     }
//   });

// function getPokemon(url) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);

//       document.getElementById("display").innerHTML = `
//         <h1>${data.species.name}</h1>
//         <img src="${data.sprites.front_default}">
//       `;
//     });
// }


// const a = [];
// console.log(a[0]);
// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars);
// Object.
//  const a ={l:10,s:21
// };
// const b = {ll:4};
//  b = a;

// console.log(b);
//  console.log(Object.keys(a));
const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    }
}
//using for in to clone the objects
// const another = {}
// for (let key in circle)
// another[key] = circle[key];
// console.log(another);

// using assign method to clone the object
const another = Object.assign(, circle);
// console.log("for another" + " "+ another);
// console.log("for circle" + " "+circle);
