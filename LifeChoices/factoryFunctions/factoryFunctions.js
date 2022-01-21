// tryng to copy the data from one array to an empty array


function myfunc(){
    let age =document.getElementById("age").value;//getting input from the user
    let results =[];
    let name =[ "L","I","N","D","A",];
   
     
     for(let i=0;i<name.length;i++){
        results +=name[i];       
     }
     console.log(results);
     document.getElementById("demo").innerHTML = results;// setting the paragraphy to display the results
    //  console.log(results);
    //  console.log(name);
    //  console.log(results);
    // if(age > 18){
    //     console.log(results+" "+"Over age");
    // }
    // else{
    //     console.log("Sorry your are Under age");
    // }
}
