<template>
    <button class="btn my_btn">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L1 11M1 1L11 11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </button>
</template>


<script>
    import ex from '@/components/svg/ex.vue'

    export default {
        components: {
            ex
        }
    }

</script>


<style scoped lang="scss">
    .my_btn {
        padding: 6px 12px;
        svg {
            stroke: #909090;
            transition: 0.2s;
        }

        &:hover {
            svg {
                stroke: #0045CB;
            }
        }

        &:active {
            svg {
                stroke: #0037A1;
            }
        }

    }

</style>
