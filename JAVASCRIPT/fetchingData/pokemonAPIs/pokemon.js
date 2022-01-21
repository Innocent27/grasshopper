function getList(url){
    fetch(url)
  .then((response)=> response.json())
  .then((pokemon)=>{
    console.log(pokemon);
    //   document.querySelector("#results").innerHTML = ''
         pokemon.results.forEach(poke=>{
             document.querySelector("#results").innerHTML+=`<button onclick="obtain('${poke.url}')"> ${poke.name}</button>`;
   });
            document.querySelector("#results").innerHTML+=`<button onclick="getList('${pokemon.previous}')" >Previous</button>
            <button onclick="getList('${pokemon.next}')" >Next</button>` 
  });
  }   
  
  getList("https://pokeapi.co/api/v2/pokemon")
  
  function obtain (url) {       //This function gets the pokemon
        fetch(url)
            .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    document.querySelector("#charizard").innerHTML = `
                        <h1>${data.name}</h1>  
                        <img src = ${data.sprites.front_default}>
                        <h2>Abilities</h2>
                        <li>${data.abilities[0].ability.name}</li>
                        <li>${data.abilities[1].ability.name}</li><br>  
                        <h2>Moves</h2>
                        <li>${data.moves[0].move.name}</li>
                        <li>${data.moves[1].move.name}</li>
                        <li>${data.moves[2].move.name}</li>
                        <li>${data.moves[3].move.name}</li>
                        <li>${data.moves[4].move.name}</li>
                        <li>${data.moves[5].move.name}</li>
                        <li>${data.moves[6].move.name}</li>
                        <li>${data.moves[7].move.name}</li>
                        <li>${data.moves[8].move.name}</li>  
  `})
  }
   function searchPokeMon(){       // this function takes the input search and add it to the 
        const searchTerm= document.querySelector("#search").value;
        const url = "https://pokeapi.co/api/v2/pokemon/"+searchTerm;
        obtain(url);
  }