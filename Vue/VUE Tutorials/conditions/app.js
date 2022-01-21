const app = Vue.createApp({
    data(){
        return{
            name:"xolani",
            sentence:"Good morning",
            Age: '27'
        }
    },
    methods:{
       // {this} is refering to property we want to update
        changeName(){ 
            //this.title = 'Updated title'
            this.name="Thabo"
        },
        change(){
            this.showBooks=false
        }
    }
})
app.mount("#app")