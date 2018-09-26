<template>
  <div class>
    <h1>{{ msg }}</h1>
    <!-- <router-link :to="{name:'Home'}">Home</router-link> -->
    <a href="" @click.prevent="toHome">Home</a>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function() {
    return {
      msg: "Hello World"
    };
  },
  methods: {
    toHome: function() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
</style>