<script setup lang="ts">

import README from '../../data/navicat/README.md'
import { useScript } from '@/hooks/useScript'
import { reactive } from 'vue'

</script>

<template>
  <div class="flex flex-col gap-4">
    <a-card class='container'>
      <README></README>
    </a-card>
  </div>
</template>

<style lang="less" scoped>
.markdown-body {
  padding: 8px;

  :deep(a) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1px 4px;
    color: rgb(var(--link-6));
    font-size: 14px;
    line-height: 1.5715;
    text-decoration: none;
    background-color: transparent;
    border-radius: var(--border-radius-small);
    cursor: pointer;
    transition: all 0.1s cubic-bezier(0, 0, 1, 1);

    &:hover {
      color: rgb(var(--link-6));
      background-color: var(--color-fill-2);
    }
  }

  :deep(img) {
    max-width: 100%;
  }

  :deep(pre) {
    padding: 16px;
    overflow: auto;
  }
}
</style>

<style scoped>
.container {
  /*height: 84vh; !* 设置容器高度为屏幕高度 *!*/
  /*overflow: hidden; !* 隐藏溢出内容 *!*/
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
