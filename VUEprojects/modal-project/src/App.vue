<template>
 <h1>{{title}}</h1>
 <p>Welcome...</p>
 <div v-if="showModal">
 <Modal :theme="promo" @close="toggleModal">
   <template v-slot:links>
     <a href="#">SignUp</a>
     <a href="#"> Moreinfo</a>
   </template>
   <h1>Lindo</h1>
   <p>Lorem ipsum dolor sit amet.</p>
    </Modal>
 </div>

<div v-if="showModalTwo">
  <Modal  @close="toggleModalTwo">
    <template v-slot:links>
      <a href="#">SignUp</a>
      <a href="#"> Moreinfo</a>
    </template>
    <h1>Sign up to news letter</h1>
    <p>For Updates and promo codes! </p>
  </Modal>
 </div>
 <button @click.alt="toggleModal">Open modal</button>
 <button @click="toggleModalTwo">Open modal</button>
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
  name: 'App',
  components:{Modal},
  data(){
    return{
      title: 'My first Vue App',
      // header: 'Sign up to win a prize! ',
      // text:'Come get your 50% discount now whilst stock last!',
      showModal: false,
      showModalTwo: false
    }
  },
methods:{
  toggleModal(){
    this.showModal= !this.showModal
  },
  toggleModalTwo(){
    this.showModalTwo= !this.showModalTwo
  }
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  font-size: 4rem;
}
</style>
