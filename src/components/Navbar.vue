<template>
  <div class="navbar">
    <div class="navbar-left">
      <div>
        <a href>
          <i class="fas fa-angle-left"></i>
        </a>
      </div>
      <div>
        <a href>
          <i class="fas fa-angle-right"></i>
        </a>
      </div>
    </div>
    <div class="navbar-center">
      <div>
        <a href>
          <i class="fas fa-edit"></i>
        </a>
      </div>
      <div>
        <div>
          <input id="search-input" class="input is-small" type="text" placeholder="搜索或键入命令">
        </div>
      </div>
    </div>
    <div class="navbar-right">
      <div>
        <a>
          <img src alt />
        </a>
      </div>
      <div>
        <a href @click="handleRightMenuSubmit('minbt')">
          <i class="fas fa-minus"></i>
        </a>
      </div>
      <div>
        <a href @click="handleRightMenuSubmit('maxbt')">
          <i class="fas fa-window-maximize"></i>
        </a>
      </div>
      <div>
        <a href @click="handleRightMenuSubmit('closebt')">
          <i class="fas fa-times"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer as ipc } from 'electron'
export default {
  methods: {
    handleRightMenuSubmit (menuType) {
      if (menuType === 'minbt') {
        ipc.send('window-min')
      } else if (menuType === 'maxbt') {
        ipc.send('window-max')
      } else if (menuType === 'closebt') {
        ipc.send('window-close')
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="scss" scope>
.navbar {
  height: 40px;
  display: flex;
  justify-content: space-between;
  background-color: #464775 !important;
  .navbar-left {
    display: flex;
    flex-direction: row;
    div {
      margin-left: 20px;
      height: 40px;
      line-height: 52px;
      font-size: 18px;
      a {
        .fa-angle-left {
          color: #ffffff;
        }
        .fa-angle-right {
          color: #ffffff;
        }
      }
    }
  }
  .navbar-center {
    display: flex;
    flex-direction: row;
    div {
      margin-left: 20px;
      height: 40px;
      line-height: 52px;
      font-size: 18px;
      a {
        .fa-edit {
          color: #ffffff;
        }
      }
    }
  }
  .navbar-right {
    display: flex;
    flex-direction: row;
    div {
      margin-right: 20px;
      height: 40px;
      line-height: 52px;
      font-size: 18px;
      a {
        .fa-minus {
          color: #ffffff;
        }
        .fa-window-maximize {
          color: #ffffff;
        }
        .fa-times {
          color: #ffffff;
        }
      }
    }
  }
}

#search-input{
  width: 520px;
  margin-top: 12px;
}
</style>
