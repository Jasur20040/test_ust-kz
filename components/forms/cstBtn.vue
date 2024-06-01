<template>
    <button class="btn cstBtn aj-c gap-10">
        <img v-if='img' :src='getImgUrl(img)' alt="">
        <slot />
        <img v-if='imgToRight' :src='getImgUrl(imgToRight)' class="right" alt="">
    </button>
</template>


<script>
    export default {
        props: ['img', 'imgToRight', 'loading'],
        methods: {
            getImgUrl(pet) {
                var images = require.context('@/assets/images/svg/', false)
                return images('./' + pet)
            },
        }
    }
</script>

<style lang="scss" scoped>
    .cstBtn {
        display: flex;
        background: #1E63E9;
        border-radius: 5px;
        border: 1px solid transparent;
        color: #FFF;
        font-size: 16px;
        line-height: 22.78px;
        transition: 0.15s;
        &:focus {
            background: #0045CB !important;
            border: 1px solid #0045CB !important;
        }
        &:hover {
            background: #0045CB !important;
            border: 1px solid #0045CB !important;
        }
        &:active {
            background: #0037A3 !important;
            border: 1px solid #0037A3 !important;
        }
        &:hover, &:active, &:focus {
            color: #fff !important;
            svg {
                stroke: #fff !important;
            }
        }
        svg {
            stroke: #fff;
            transition: 0.15s;
        }
        &.glass{
            border-radius: 25px;
            border: 1px solid #1e63e9;
            background: #EAF1FF;
            color: #1E63E9;
            svg {
                stroke: #1E63E9;
            }
        }
        &.empty{
            background: transparent;
            border: 1px solid #1E63E9;
            color: #1E63E9;
            svg {
                stroke: #1E63E9;
            }
        }
        
    }
</style>