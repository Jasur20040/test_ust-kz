<template>
    <section class="material">
        <div class="cst-ct">
            <div class="wrapper-side">
                <div class="hotslot"></div>
                <div class="content">
                    <material />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import material from '@/components/materials/material.vue'
    export default {
        components: {
            material,
        },
    }
</script>

<style lang="scss" scoped>
    .material {
        padding: 50px 0 100px;
    }
    .cst-ct {
        @media all and (max-width: 767px) {
            padding: 0;
        }
    }
    @media (max-width: 767px) {
        .content {
            width: 100%;
        }
    }
</style>