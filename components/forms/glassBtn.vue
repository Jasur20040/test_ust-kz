<template>
    <button class="btn glassBtn aj-c">
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
    .glassBtn {
        display: flex;
        gap: 5px;
        padding: 0;
        border-radius: 5px;
        color: #AABDE1;

        svg {
            stroke: #AABDE1;
            transition: 0.3s;
        }
        &:hover {
            background: #EAF1FF;
            color: #0045CB;
            svg {
                stroke: #0045CB;
            }
        }
        &:active {
            background: #EAF1FF;
            color: #0037A3;
            svg {
                stroke: #0037A3;
            }
        }
        
    }
</style>