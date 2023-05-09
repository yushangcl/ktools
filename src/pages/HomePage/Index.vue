<<<<<<< Updated upstream
<script setup lang="ts">
import README from '../../../README.md'
</script>

<template>
  <a-card>
    <README></README>
  </a-card>
</template>

<style lang="less" scoped>
=======
<script setup lang='ts'>
import { Application } from '@icon-park/vue-next'
import README from '../../../README.md'

const readerUrl = 'https://reader.itbat.cn'
const qlUrl = 'https://ql.itbat.cn'
const msUrl = 'https://ms.itbat.cn'
const panUrl = 'https://pan.itbat.cn'


const openUrl = (url: string): void => {
  window.open(`${url}`, '_blank')
}
</script>

<template>
  <a-layout>
    <a-layout-sider>
      <a-menu :style="{ height: '100%' }" :default-open-keys="['0', '1']" :default-selected-keys="['0_0']">
        <a-sub-menu key='1'>
          <template #icon>
            <Application />
          </template>
          <template #title>链接导航</template>
          <a-menu-item key='1_0'>
            <template #icon><img src='@/assets/icons/logo-home.svg' alt=''></template>
            首页
          </a-menu-item>
          <a-menu-item key='1_1' @click='openUrl(panUrl)'>
            <template #icon><img src='@/assets/icons/logo-pan.svg' alt='MS 管理'></template>
            在线网盘
          </a-menu-item>
          <a-menu-item key='1_2' @click='openUrl(qlUrl)'>
            <template #icon><img src='@/assets/icons/logo-ql.svg' alt=''></template>
            青龙面板
          </a-menu-item>
          <a-menu-item key='1_3' @click='openUrl(readerUrl)'>
            <template #icon><img src='@/assets/icons/logo-reader.svg' alt='开源阅读'></template>
            开源阅读
          </a-menu-item>
          <a-menu-item key='1_4' @click='openUrl(msUrl)'>
            <template #icon><img src='@/assets/icons/logo-microsoft.svg' alt='MS 管理'></template>
            微软订阅
          </a-menu-item>
        </a-sub-menu>

      </a-menu>
    </a-layout-sider>
    <a-layout-content class='ml-4'>
      <a-card class='container'>
        <README></README>
      </a-card>
    </a-layout-content>
  </a-layout>
</template>


<style lang='less' scoped>
>>>>>>> Stashed changes
.markdown-body {
  padding: 16px;

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
<<<<<<< Updated upstream
=======

<style scoped>
.container {
  /*height: 84vh; !* 设置容器高度为屏幕高度 *!*/
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
>>>>>>> Stashed changes
