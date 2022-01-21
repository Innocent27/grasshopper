let countries = [
    // {
    //     name:"South Africa",
    //     continent: "Africa"
    // },
    // {
    //     name:"Libya",
    //     continent: "Africa"
    // }
    // {
    //     name:"Chad",
    //     continent: "Africa"
    // }
    "Chad",
    "Nigeria",
    "Angola",
    "Mali",
    "South-Africa",
    "Ethiopia",
    "Algeria",
    "Sudan",
    "Kenya"
];
//Read countries
function readCountries(countries) {
    document.querySelector("#countries").innerHTML = ""; 
    countries.forEach((country, i) => {
        document.querySelector("#countries").innerHTML += `
        <li>${country}
    <button onclick="deleteCountry(${i})" ${country} class="btn btn-danger">Delete</button>
       <button onclick="updateCountry(${i})" ${country} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
       </li>
       <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog">
         <div class="modal-content">
           <div class="modal-header">
           <!--  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>-->
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body">
             <input type="text" id="updateValue-${i}">
           </div>
           <div class="modal-footer">
             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
             <button type="button" class="btn btn-primary">Save changes</button>
           </div>
         </div>
       </div>
     </div>


`;
    });
};
readCountries(countries);
//create
function createCountry() {
    let country = document.querySelector("#input").value
    try {
        if (!country) throw new Error("Please type in a country");
        countries.push(country);
        readCountries(countries);
    }
    catch (err) {
        
        alert(err);
    }
}
//delete
function deleteCountry(i) {
    countries.splice(i,1);
    readCountries(countries);
};

//update
function updateCountry(i) {
    // let country = prompt("Please input country");
    // try {
    //     if (!country) throw new Error("No country to add");
    //    country=countries.push(country);
    //     readCountries(counstries);
    // }
    // catch (err) {
    //     alert(err);
    // }
};

