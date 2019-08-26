<template>
  <div class="sidebar">
    <div class="sidebar-top">
      <div>
        <a @click="jumpPage('active')">
          <i class="fas fa-bell icon-white"></i>
          <span class="notify-text">活动</span>
        </a>
      </div>
      <div>
        <a @click="jumpPage('chat')">
          <i class="fab fa-rocketchat icon-white"></i>
           <span class="chat-text">聊天</span>
        </a>
      </div>
      <div>
        <a @click="jumpPage('team')">
          <i class="fas fa-users icon-white"></i>
          <span class="notify-text">团队</span>
        </a>
      </div>
      <div>
        <a @click="jumpPage('hammer')">
          <i class="fas fa-hammer icon-white"></i>
           <span class="chat-text">作业</span>
        </a>
      </div>
      <div>
        <a @click="jumpPage('calendar')">
          <i class="fas fa-calendar-alt icon-white"></i>
          <span class="notify-text">日历</span>
        </a>
      </div>
      <div>
        <a @click="jumpPage('file')">
          <i class="fas fa-file icon-white"></i>
          <span class="chat-text">文件</span>
        </a>
      </div>
      <div>
        <a @click="jumpPage('more')">
          <i class="fas fa-ellipsis-h icon-white"></i>
        </a>
      </div>
    </div>
    <div class="sidebar-bottom">
      <div>
        <a @click="jumpPage('getapp')">
          <i class="fas fa-mobile icon-white"></i>
          <span class="chat-text">获取应用</span>
        </a>
      </div>
      <div>
        <a @click="jumpPage('application')">
          <i class="fab fa-app-store-ios icon-white"></i>
          <span class="chat-text">应用</span>
        </a>
      </div>
      <div>
        <a @click="jumpPage('help')">
          <i class="fas fa-question-circle icon-white"></i>
          <span class="chat-text">帮助</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    jumpPage (target) {
      try {
        if (this.$route.path.indexOf(target) === -1) {
          this.$router.push({ path: target })
        }
      } catch (err) {
        console.log(target, err)
      }
    }
  }
}
</script>

<style lang="scss" scope>
.sidebar {
  width: 60px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  position: relative;
  .sidebar-top {
    display: block !important;
    div {
      display: block !important;
      text-align: center;
      margin-top: 20px;
      a {
        .notify-text{
          display: block !important;
          color: #ffffff;
          font-size: 12px;
          font-weight: 200;
        }
        .chat-text{
          display: block !important;
          color: #ffffff;
          font-size: 12px;
          font-weight: 200;
        }
      }
    }
  }
  .sidebar-bottom {
    position: absolute;
    bottom: 0;
    width: 60px;
    div {
      display: block !important;
      text-align: center;
      margin-top: 20px;
      a{
        .chat-text{
          display: block !important;
          color: #ffffff;
          font-size: 12px;
          font-weight: 200;
        }
      }
    }
  }
}

.icon-white{
  color: #ffffff;
}
</style>
