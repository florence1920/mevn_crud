<template>
  <div class="hello">
    <ul class="boxWrap">
      <li class="box" v-on:click="axiosTest">
        Front&Back&DB Connect
      </li>
      <li>
        <p class="result">{{ this.$store.state.axios_try }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    axiosTest() {
      //console.log('click');
      this.$store.dispatch('GET_AXIOS');
    },

  },
}
</script>

<style scoped>
  .hello {padding: 30px;}
  .boxWrap {overflow: hidden; margin: 20px 0;  }
  .boxWrap li {float: left; margin: 0 20px 0 0; transition: 0.4s;}
  .box { padding:0 0 0 1%; width: 230px; height: 100px; line-height: 100px; background: #42b983; color: rgb(202, 202, 202); font-weight: bold; border-radius: 3px; cursor: pointer;}
  .box:hover {background: #00ff8c; color: #fff;}
  .result {height:100px; line-height: 100px; font-size: 40px; font-weight: bold; color: #00ff8c;}
</style>
