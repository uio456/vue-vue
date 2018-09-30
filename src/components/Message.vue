<div id="app">
  <h1>parent</h1>
  {{message}}
  <child-box></child-box>
</div>

<script type="text/x-template" id="child-box">
  <div class="box">
    <h2>child box</h2>
    <input v-model="message">
    <button>Update</button>
  </div>
</script>

<script>
  
var childBox = {
  template: "#child-box",
  data: function() {
    return {
      message: "write somthing..."
    }
  }
};

export default {
  data: function() {
    return {
      message: "message form root instance"
    }
  },
  components: {
    "child-box": childBox
  }
};

</script>

<style>
  #app {
  background: #35c2ce;
  width: 600px;
  margin: 30px;
  padding: 20px;
}

.box{
  width: 400px;
  border: 1px solid #aaa;
  background-color: #ffd600;
  padding: 10px;
}
</style>