<template>
  <div class>
    <h1>{{ msg }}</h1>
    <!-- <router-link :to="{name:'HelloWorld'}">Hello world</router-link> -->
    <a href="" @click.prevent="toWorld">Hello World</a>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function() {
    return {
      msg: "Home"
    };
  },
  methods: {
    toWorld: function() {
      this.$router.push('/hello_world');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>