<template>
  <n-notification-provider>
    <n-config-provider :theme-overrides="themeOverrides">
      <div class="content text-white" v-if="!loading">
          <div class="flex flex-col">
              <router-view v-slot="{ Component }">
                <transition name="slide-fade">
                  <component :is="Component" />
                </transition>
              </router-view>
          </div>
            <SideBar :class="[sidebarVisible?'opacity-100 transition-all duration-500':'opacity-0 transition-all duration-500']" />
      </div>
      <div class="h-screen flex justify-center items-center" v-else>
        <loading/>
      </div>
    </n-config-provider>
  </n-notification-provider>
</template>
<script lang="ts">
import { NConfigProvider, GlobalThemeOverrides, NNotificationProvider } from 'naive-ui'
import { computed, defineComponent, onMounted, ref } from 'vue';
import SideBar from './components/navigation/SideBar.vue';
import { useRoute } from 'vue-router';
import loading from './components/commons/Loading.vue';

import { useblockchainDataStore } from './store/blockchainData';

export default defineComponent({
  components: {
    NConfigProvider,
    SideBar,
    NNotificationProvider,
    loading
  },
  setup() {
    const loading = ref(true);
    const sidebarVisible = ref(false);
    const themeOverrides: GlobalThemeOverrides = {
      common: {
        primaryColor: '#51C7FF',
        primaryColorHover: '#51C7FF',
        primaryColorPressed: '#61a8fe',
      }
    }
    onMounted(async () => {
      addEventListener("scroll", (event) => {
        if (window.scrollY > 550) {
          sidebarVisible.value = true;
        } else {
          sidebarVisible.value = false;
        }
      });
      await useblockchainDataStore().fetchData();
      loading.value = false;
    })
    return {
      themeOverrides,
      loading,
      sidebarVisible
    }
  }
})
</script>
<style>
body,
html {
  font-family: Montserrat;
  background-color: #090A0B;
}

li {
  padding: 10px;
}

.fade-enter-active {
  opacity: 1;
  transition: opacity .5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity .5s;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-in-out;
}
.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
  position: absolute;
}
button, [type='button'], [type='reset'], [type='submit'] {
    background-color: var(--n-color) !important;
}
</style>