<template>
  <div>
      <div class="btn" v-on:click="getAPI()">
        API 가져오기 
      </div>
      <div class="btn" v-on:click="getCafeAPI()">
        Cafe 24API 
      </div>
      {{ this.$store.state.lap }}
      <ul>
        <li v-for="product in this.$store.state.products" v-bind:key="product.product_name">
          {{product.product_name}}
        </li>
         <!-- <li v-for="cloth in this.$store.state.clothes_outer" v-bind:key="cloth.id" v-on:click="clothCheck(cloth.cloName)"> -->
      </ul>
  </div>
</template>

<script>

export default {
  methods: {
    getAPI() {
        console.log('api');
        this.$store.dispatch('GET_OPENLAP');
    },
    getCafeAPI(){
      this.$store.dispatch('GET_CAFE');
    }
  },
  
}
</script>

<style scoped>
  .btn {padding: 0 3%; width: 200px; height: 100px; line-height: 100px; background: #000; color: #fff; cursor: pointer;}
</style>