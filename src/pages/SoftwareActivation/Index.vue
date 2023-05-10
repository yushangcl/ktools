<script setup lang="ts">
import { System, Application, Windows as WindowsIcon, Word } from '@icon-park/vue-next'
import Windows from '@/pages/SoftwareActivation/Windows.vue'
import Office from '@/pages/SoftwareActivation/Office.vue'
import { type Component, Ref, shallowRef } from 'vue'

import RAR from '@/pages/SoftwareActivation/Rar.vue'
import Synergy from '@/pages/SoftwareActivation/Synergy.vue'
import VMware from '@/pages/SoftwareActivation/VMware.vue'
import Navicat from '@/pages/SoftwareActivation/Navicat.vue'


const checkedComponent: Ref<Component> = shallowRef(Windows)

const changeComponent = (component) => {
  checkedComponent.value = component
}
</script>

<template>
  <a-layout>
    <a-layout-sider>
      <a-menu :style="{ height: '100%' }" :default-open-keys="['0', '1']" :default-selected-keys="['0_0']">
        <a-sub-menu key="0">
          <template #icon><System /></template>
          <template #title>系统</template>
          <a-menu-item key="0_0" @click="changeComponent(Windows)">
            <template #icon><WindowsIcon /></template>
            Windows
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="1">
          <template #icon><Application /></template>
          <template #title>软件</template>
          <a-menu-item key="1_0" @click="changeComponent(Office)">
            <template #icon> <img src="@/assets/icons/logo-word.svg" alt="" ></template>
            Office
          </a-menu-item>
          <a-menu-item key="1_1" @click="changeComponent(RAR)">
            <template #icon> <img src="@/assets/icons/logo-rar.svg" alt="" ></template>
            RAR
          </a-menu-item>
          <a-menu-item key="1_2" @click="changeComponent(Synergy)">
            <template #icon> <img src="@/assets/icons/logo-synergy.svg" alt="" ></template>
            Synergy
          </a-menu-item>
          <a-menu-item key="1_3" @click="changeComponent(VMware)">
            <template #icon> <img src="@/assets/icons/logo-vmware.svg" alt="" ></template>
            VMware
          </a-menu-item>
          <a-menu-item key="1_4" @click="changeComponent(Navicat)">
            <template #icon> <img src="@/assets/icons/logo-navicat.svg" alt="" ></template>
            Navicat
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="2">
          <template #icon><Application /></template>
          <template #title>其他</template>

        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout-content class="ml-4">
      <component :is="checkedComponent"></component>
    </a-layout-content>
  </a-layout>
</template>
