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
          <input id="search-input" class="input is-small" type="text" placeholder="搜索或键入命令" />
        </div>
      </div>
    </div>
    <div class="navbar-right">
      <div>
        <a>
          <div class="dropdown" :class="showDropdown">
            <div class="dropdown-trigger">
              <figure class="image is-32x32 mr4" aria-haspopup="true" aria-controls="dropdown-menu" @click="handleDropdown">
                <img class="is-rounded" src="https://bulma.io/images/placeholders/32x32.png" />
              </figure>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <a href="#" class="dropdown-item">
                  <div class="user-content">
                    <div class="avatar-box">
                      <figure class="image is-32x32 mr4" aria-haspopup="true" aria-controls="dropdown-menu" @click="handleDropdown">
                        <img class="is-rounded" src="https://bulma.io/images/placeholders/32x32.png" />
                      </figure>
                    </div>
                    <div class="user-name">
                      <span>livis</span>
                      <span>更改图片</span>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item">
                  <span class="icon has-text-success">
                    <i class="fas fa-check-circle"></i>
                    <span>空闲</span>
                  </span>
                </a>
                <a href="#" class="dropdown-item is-active">设置状态消息</a>
                <a href="#" class="dropdown-item">已保存</a>
                <a href="#" class="dropdown-item">设置</a>
                <a href="#" class="dropdown-item">缩放</a>
                <a href="#" class="dropdown-item">键盘快捷方式</a>
                <a href="#" class="dropdown-item">关于</a>
                <a href="#" class="dropdown-item">检查更新</a>
                <a href="#" class="dropdown-item">下载移动应用</a>
                <hr class="dropdown-divider">
                <a href="#" class="dropdown-item">注销</a>
              </div>
            </div>
          </div>
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
  data () {
    return {
      showDropdown: ''
    }
  },
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
    },
    handleDropdown () {
      this.showDropdown = this.showDropdown === '' ? 'is-active' : ''
    }
  }
}
</script>

<style lang="scss" scope>
.navbar {
  min-height: 40px !important;
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
      line-height: 40px;
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
      line-height: 40px;
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
      line-height: 40px;
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

#search-input {
  width: 520px;
  margin-top: 6px;
}

.mr4 {
  margin-top: 4px;
}

.dropdown-item{
  background-color: #ffffff;
}

.user-content{
  display: flex;
  justify-content: flex-start;
  .avatar-box{

  }
  .user-name{
    span{
      font-size: 14px;
    }
  }
}
</style>
