fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    let highPrice = data.filter((product) => {
      return product.price >= 60;
    })
    // Looping through array to fetch data
for(let item of highPrice){
  document.getElementById("content").innerHTML += `
  <h1>${item.price}</h1> 
   ` 
  }
});

  

