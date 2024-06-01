<template>
    <button class="btn exitBtn d-f aj-c">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L1 11M1 1L11 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
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
    .exitBtn {
        width: 33px;
        height: 33px;
        background: #172856;
        border: 1px solid #fff;
        border-radius: 50%;
        padding: 0;
        &:hover, &:focus {
            background: #0045CB;
        }
        &:active {
            background: #0037A3;
        }
        
    }
</style>
