<template>
    <button class="btn successBtn aj-c">
        <slot />
    </button>
</template>


<script>
    //import Header from '@/components/Header.vue'
    export default {
        components: {
            //Header,
        },

    }

</script>

<style lang="scss" scoped>
    .successBtn {
        display: flex;
        padding: 0;
        border-radius: 5px;
        color: #fff;
        width: 180px;
        height: 40px;
        background: #03B113;
        &:hover, &:focus {
            background: #058B12;
        }
        &:active {
            background: #066A0F;
        }
        &.red {
            background: #FF0000;
            &:hover, &:focus {
                background: #C40000;
            }
            &:active {
                background: #A10000;
            }
        }
    }

</style>
