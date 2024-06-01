<template>
    <button @click="$emit('click')">
        <!-- <img v-if='imgToLeft' :src='getImgUrl(imgToLeft)' class="left" alt=""> -->
        <download class="svg" v-if='status==1'  />
        <slot />
        <arrowright class="svg" v-if='status==2'  />
        <!-- <img v-if='imgToRight' :src='getImgUrl(imgToRight)' class="right" alt=""> -->
    </button>
</template>


<script>
    import download from '@/components/svg/download.vue'
    import arrowright from '@/components/svg/arrow-right.vue'

    export default {
        props: ['status'],
        components: {
            download,
            arrowright
        },
    }
</script>

<style lang="scss" scoped>
    .zhuktepal {
        svg.svg {
            stroke: #1E63E9;
        }
        &:hover {
            svg.svg {
                stroke: #fff;
            }
        }
    }
    
</style>