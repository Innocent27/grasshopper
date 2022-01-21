// using promise and passing resolve and reject arguments
// promise is responsible for handling errors
//users is my promise
// if users is successful(resolve) then the code will continue else it will break and have an error(reject)
//.then is for success and .catch catches the errors
let users = new Promise((resolve,reject)=>{         // users is my promise
    fetch("https://randomuser.me/api/?results=100")
    .then((res)=>res.json())
    .then((data)=>{
        resolve(data.results);      // reading data from results array
        console.log(data);
    })
        .catch((err)=> reject(err));
});
        users.then((data)=>{            
            showUsers(data); // displaying all users using showUsers function
        });
            // function responsible for displaying users on the screen
        function showUsers(data){
           document.querySelector("#users").innerHTML ="";
            data.forEach((users)=>{             //looping through the data+diplay user first+last name
                document.querySelector("#users").innerHTML+=`
                <div class="card">  <!--Creating html tags-->
                    <h3>${users.name.first},${users.name.last} </h3>
                </div>                
                `;
            })
        }
        // function responsible for searching the users
        function searchProducts(){
            products.then((products)=>{
                let searchTerm = document.querySelector("#search").value.toLowerCase();
                if(searchTerm!=""){
                    const foundUsers = data.filter((users)=>{       //filtering by first+last name
                        return users.name.first.toLowerCase().includes(searchTerm) ||
                        users.name.last.toLowerCase().includes(searchTerm); 
                    });
                    if(foundUsers.length == 0){
                        return alert("Sorry no match for your pattern")
                    }
                    showUsers(foundUsers);
                }
                else{
                    alert("Search can't be empty")
                }
            });
        }