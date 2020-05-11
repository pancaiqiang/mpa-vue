<template>
  <div id="app">
    <a href="/">root</a> |
    <a href="/home/home.html">home</a> |
    <a href="/aboutus/aboutus.html">aboutus</a>
    <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <div>home page</div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  mounted() {
    console.log('22');
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
