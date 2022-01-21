<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        Click Me
    </div>
</template>

<script>
export default {
    props: ['delay'],
    data(){
        return{
            showBlock: false,
            timer: null,
            reactionTime: 0
        }
    },
    //This will execute as soon as this component is mounted to the dom (on the index.html ) in the div where where the id ="app"
    mounted(){
        //we are delaying the time it will take the code to execute using the prop, delay
        setTimeout(()=>{
            //The div block is displayed after the delay is complete
            this.showBlock = true;
            this.startTimer();
            // We are waiting for the delay time before the actions are performed above 
        }, this.delay);
    },
    methods: {
        startTimer(){
            // We are performing an action every 10 milliseconds which is being stored in a timer variable
            this.timer = setInterval(()=>{
                // We are increasing the reactionTime by 10 milliseconds every 10 milliseconds
                this.reactionTime += 10
            }, 10);
        },
        stopTimer(){
        // Stopping the timer and clearing the timer variable
        clearInterval(this.timer);
        // We are sending the data up to the parent component(App.vue)
        this.$emit('done', this.reactionTime);
        }
    }
}
</script>
<style >
    .block {
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>