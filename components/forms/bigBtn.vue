<template>
    <button class="btn cstBtn aj-c gap-10">
        <img v-if='img' :src='getImgUrl(img)' alt="">
        <slot />
    </button>
</template>

<script>
    //import Header from '@/components/Header.vue'
    export default {
        props: ['img'],
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
        font-family: Atyp Text;
        font-size: 16px;
        font-weight: 400;
        line-height: 22.78px;
        text-align: center;
        color: #FFFFFF !important;
        background: radial-gradient(58.11% 33.11% at 32.97% 40.67%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%);
        background-color: #1E63E9;
        background-size: 150% 300%;
        background-repeat: no-repeat;

        box-shadow: 2px 6px 10px 0px #00000026;
        transition: 0.2s all ease;
        display: flex;

        svg {
            stroke: #fff;
            transition: 0.15s;
        }

        background-position: 50% 50%;

        &:hover {
            animation: backgroundAnimation 0.2s;
            background-position: 0% 9%;
            background-color: #0045CB;
        }

        &:active {
            background-color: #0037A3 !important;
            box-shadow: none;
        }

        &:focus {
            background-color: #0045CB;
        }
    }

    @keyframes backgroundAnimation {
        0% {
            background-position: 50% 50%;
            background-color: #1E63E9;
        }

        100% {
            background-size: 150% 300%;
            background-position: 0% 9%;
            background-color: #0045CB;
        }
    }

</style>
