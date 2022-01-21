//  let  files= "serch.txt"
// fetch(files)
//   .then((response) => response.json())
//   .then((data) => {
//    console.log(data);
//   // console.log(typeof data.results);
//    //console.log(data.results[0]);
//      let a = data.results;
//      console.log(a);

//      let p = a[0];
//     // console.log(p.name);
//     // console.log(p.name.title);
//     // console.log(p.name.first);
//     // console.log(p.name.last);
//     //  console.log(p.gender);
//     //console.log(c.find(checkName));
//     // a.find(checkName);
//     // function checkName(name) {
//     //   return name = "api";
//     // }
// });
fetch ("https://randomuser.me/api/?results=100")
.then ((response) => response.json())
.then ((data) => {
  console.log(data);
  const dBdata = data.results;
  
  console.log(dBdata);
  
  // console.log(dBdata.find((person) => {return person.name.first == "Angela";})
  // );
  // var f= (user){
  //   return person.name.first == "Angela";
  // };
  // console.log(f);
  
  let user = dBdata.find((user) => {
    return user.name.first == "Harvey";
  })
  
  if (user) {
    document.querySelector("#user").innerHTML = `
    <h1>${ user.name.first }</h1>
    `
  }
  
  else {
    alert("Name not found.")
  }
  
  document.querySelector("#user").innerHTML = `
  `;
})