let countries = localStorage.getItem("countries")? JSON.parse(localStorage.getItem("countries")):[];
//Read countries
function readCountries(countries) {
    document.querySelector("#countries").innerHTML = ""; 
    countries.forEach((country, i) => {
         document.querySelector("#countries").innerHTML += `
            <li>${country.name} is in ${country.continent}
              <button onclick="deleteCountry(${i})" ${country} class="btn btn-danger">Delete</button>
              <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#update-modal-${i}">Update</button>
            </li>
            <!-- the beginning of a modal-->
      <div class="modal fade" id="update-modal-${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <!--<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>-->
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <input type="text" id="update-country-${i}" value="${country.name}" placeholder="Enter country">
                <input type="text" id="update-continent-${i}" value="${country.continent}" placeholder="Enter continent">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary">Close</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="updateCountry(${i})" ${country.name} >Save changes</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });
};
readCountries(countries);
//create
function createCountry() 
{
    let country = document.querySelector("#input").value;
    let continent = document.querySelector("#addContinent").value;
    try {
        if (!country) throw new Error("Please type in a country");
            countries.push
            ({
              name:country,
              continent,
            });
            localStorage.setItem("countries", JSON.stringify(countries));
        readCountries(countries);
        }
        catch (err) 
        {
        alert(err);
        }
}
//delete
function deleteCountry(i) 
{
  let confirmation = confirm("Are you sure you want to delete this country?");
  if (confirmation)
  {
    countries.splice(i,1);
    localStorage.setItem("countries", JSON.stringify(countries));
    readCountries(countries);
  }
}
//update
function updateCountry(i) 
{
    let country = document.querySelector(`#update-country-${i}`).value;
    let continent = document.querySelector(`#update-continent-${i}`).value;
    try 
    {
      if (!country) throw new Error("");
        countries[i] = {
        name: country,
        continent,}
        localStorage.setItem("countries", JSON.stringify(countries));
        readCountries(countries);
    }
      catch (err) {
        alert(err);
      }
  }

