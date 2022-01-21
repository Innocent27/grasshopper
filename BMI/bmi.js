// const age 
// document.getElementById("age").Value
// console.log(age);
// function getValues(){
//     console.log(age);
// }
// let age =  document.getElementById("age").value;
// console.log(age);
//   let height =  document.getElementById("height").value;
//   let weight =  document.getElementById("weight").value;


//this function read values of age,height, weight from the inputs
function myFunction() {
  let age =  document.getElementById("age").value;
  let height =  document.getElementById("height").value;
  let weight =  document.getElementById("weight").value;

  console.log(age);
  console.log(height);
  console.log(weight);
  }
function bmi(){
  let age =  document.getElementById("age").value;
  let height =  document.getElementById("height").value;
  let weight =  document.getElementById("weight").value;
  console.log(age);
  console.log(height);
  console.log(weight);
  let bmi = age*2;
  document.getElementById("bmi").value =bmi;
//   console.log(age);
//   console.log(height);
//   console.log(weight);
//   bmi.value = height*2;
//        weight / height;
   }