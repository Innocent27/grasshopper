const app = Vue.createApp({
    data(){
        return{
        sum :" ",
        operators:["0","1","2","3","4","5","6","7","8","9","+","/","*","-"]
                    }
                },
        methods:{
                addToSum(operators){
                    this.sum += operators;
                },

                evaluateSum(){
                    this.sum =eval(this.sum);
                },

                clearSum(){
                    this.sum="";
                }
            }         
})

app.mount("#app")