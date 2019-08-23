<template>
  <div class="container-dt">
    <div class="header">
      <Navbar />
    </div>
    <div class="content">
      <div class="left">
        <Sidebar />
      </div>
      <div class="right">自适应</div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
export default {
  data () {
    return {
      dropFiles: []
    }
  },
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style lang="scss" scope>
.container-dt {
  width: 100%;
  color: #ffffff;
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
