<template lang="">
    <n-modal v-model:show="showRef" transform-origin="center">
        <n-card class="rounded-xl my-2" :style="'width: ' + width + ';background-color:rgb(250, 250, 250)'"
                :title="title"
                :bordered="false"
                size="huge"
                role="dialog"
                aria-modal="true">
            <slot />
        </n-card>
    </n-modal>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { NModal, NCard } from 'naive-ui'

export default defineComponent({
    name: 'Modal',
    components: {
        NModal,
        NCard
    },
    props: {
        show: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: "600px"
        }
    },
    emits: ['modalClosed'],
    setup(props, { emit }) {
        const showRef = ref(props.show)
        watch(() => props.show, (val) => {
            showRef.value = val
        })
        watch(() => showRef.value, (val) => {
            if(!val) emit('modalClosed')
        })
        return {
            showRef
        }
    }
})

</script>
<style lang="">
    
</style>