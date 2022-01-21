let countries = ["Angola","Nigeria", "South Africa", "Germany","Zimbabwe"];
function displayCountries(){   
    document.querySelector("#countryNames").innerHTML = ''; 
    for(let i=0;i<countries.length;i++){
       document.querySelector("#countryNames").innerHTML+=`
       <li>${countries[i]}</li> 
        `
    }
}