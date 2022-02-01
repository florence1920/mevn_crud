<template>
  <div>
      <div class="btn" v-on:click="getAPI()">
        API 가져오기 
      </div>
      {{ this.$store.state.lap }}
  </div>
</template>

<script>
export default {
  methods: {
    getAPI() {
        console.log('api');
        this.$store.dispatch('GET_OPENLAP');
    }
  },
}
</script>

<style scoped>
  .btn {padding: 0 3%; width: 200px; height: 100px; line-height: 100px; background: #000; color: #fff; cursor: pointer;}
</style>