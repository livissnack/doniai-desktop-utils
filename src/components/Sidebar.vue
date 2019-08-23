<template>
  <div class="sidebar">
    <div class="sidebar-top">
      <div>
        <a href>
          <i class="fas fa-bell icon-white"></i>
          <span class="notify-text">活动</span>
        </a>
      </div>
      <div>
        <a href>
          <i class="fab fa-rocketchat icon-white"></i>
           <span class="chat-text">聊天</span>
        </a>
      </div>
      <div>
        <a href>
          <i class="fas fa-users icon-white"></i>
          <span class="notify-text">团队</span>
        </a>
      </div>
      <div>
        <a href>
          <i class="fas fa-hammer icon-white"></i>
           <span class="chat-text">作业</span>
        </a>
      </div>
      <div>
        <a href>
          <i class="fas fa-calendar-alt icon-white"></i>
          <span class="notify-text">日历</span>
        </a>
      </div>
      <div>
        <a href>
          <i class="fas fa-file icon-white"></i>
          <span class="chat-text">文件</span>
        </a>
      </div>
      <div>
        <a href>
          <i class="fas fa-ellipsis-h icon-white"></i>
        </a>
      </div>
    </div>
    <div class="sidebar-bottom">
      <div>
        <a href>
          <i class="fas fa-edit icon-white"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scope>
.sidebar {
  width: 60px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;
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
    bottom: 0;
    display: block !important;
    text-align: center;
    div {
      display: block !important;
    }
  }
}

.icon-white{
  color: #ffffff;
}
</style>
