const app = Vue.createApp({
    data(){
        return{
            showBooks:true,
            title:"hellos",
            Author:"lindokuhle",
            Age: '27'
        }
    },
    methods:{
       // {this} is refering to property we want to update
        changeTitle(title){ 
            //this.title = 'Updated title'
            this.title=title
        },
        showBooks(){
            this.showBooks=false
        }
    }
})
app.mount("#app")