<script setup lang="ts"></script>

<template>
  <div class="container">
<!--    <iframe class="iframe" src="https://pan.itbat.cn/%E9%98%BF%E9%87%8C%E4%BA%91%E7%9B%98/%E5%BA%94%E7%94%A8" frameborder="0"></iframe>-->
    <iframe class="iframe" src="https://zfile.itbat.cn/2" frameborder="0"></iframe>
  </div>
</template>

<style scoped>
.container {
  height: 84vh; /* 设置容器高度为屏幕高度 */
  overflow: hidden; /* 隐藏溢出内容 */
}

.iframe {
  width: 100%;
  height: 100%; /* 设置 iframe 高度为容器高度 */
  border: none; /* 移除边框 */
}
.el-footer {
  visibility: hidden;
}
</style>
