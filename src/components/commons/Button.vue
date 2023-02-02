<template>
  <div
    class="flex h-8 w-auto border-0 justify-center items-center rounded px-5 transition-all duration-200"
    :class="{
      'btn-primary': type === 'primary',
      'from-[#4CD1FF] to-[#61A8FE] bg-gradient-to-r': type === 'gradient',
      'opacity-70': loading || disabled,
      'cursor-pointer': !loading && !disabled,
    }">
    <span class="text-white uppercase text-sm">{{ text }}</span>
    <svg v-if="loading" class="animate-spin ml-1 h-3 w-3 text-white"
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
      </path>
    </svg>
  </div>
  
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Button',
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'medium'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
  },
  setup(props, { emit }) {

    return {

    }
  }
})
</script>