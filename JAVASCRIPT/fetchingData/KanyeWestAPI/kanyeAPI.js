fetch("https://api.kanye.rest/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    //displaying the data on html
    document.getElementById("content").innerHTML += `
    <h1>${data.quote}<h1> ` //data is the name of the object & name is the property
});

