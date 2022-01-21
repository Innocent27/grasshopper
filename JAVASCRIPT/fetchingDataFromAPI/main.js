
//Creating array of objects
let content = [
    {
        image: "https://picsum.photos/200/300?random=1",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maxime delectus dolorem deserunt",
    },
    {
        image: "https://picsum.photos/200/300?random=2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit deserunt",
    },
    {
        image:"https://picsum.photos/200/300?random=3" ,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit deserunt",
    },
    {
        image: 'https://picsum.photos/200/300?random=4',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit deserunt",
    },
    {
        image: 'https://picsum.photos/200/300?random=5',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit deserunt",
    },
    {
        image: 'https://picsum.photos/200/300?random=6',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit deserunt",
    },
    {
        image: 'https://picsum.photos/200/300?random=7',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit deserunt",
    },
    {
        image: 'https://picsum.photos/200/300?random=8',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit deserunt",
    },
    {
        image: 'https://picsum.photos/200/300?random=9',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit deserunt",
    },
    {
        image: 'https://picsum.photos/200/300?random=10',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit deserunt",
    },

]
// Looping through array 
for(let item of content){
document.getElementById("content").innerHTML += `
<img src="${item.image}"> 
 <p>${item.text}</p>` //setting the paragraph from objects data
};