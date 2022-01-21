fetch("https://pokeapi.co/api/v2/pokemon/charizard")
.then((response) => response.json())
.then((data)=>{
        console.log(data);
        //reading from the data file
            document.getElementById("content").innerHTML += ` 
            <h1>Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. 
            Expedita, hic.</h1><img src="${data.sprites.back_default}">
            ` 
});

