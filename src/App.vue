<template>
  <div id="app">
    <div class="header">
      <Navbar />
    </div>
    <div class="content">
      <div class="left">
        <Sidebar />
      </div>
      <div class="right">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
export default {
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
}

a{
  -webkit-app-region: no-drag;
}

button{
  -webkit-app-region: no-drag;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  display: table;
  overflow: hidden;
  .header {
    width: 100%;
    height: 40px;
    background-color: #464775;
  }
  .content {
    width: 100%;
    display: table;
    div {
      display: table-cell;
    }
    .left {
      // height: 100vh;
      width: 60px;
      background-color: #3d3e5e;
    }
    .right {
      color: #252423;
      background-color: #f3f2f1;
    }
  }
}
</style>
