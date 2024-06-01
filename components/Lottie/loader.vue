<template>
    <Lottie :width="124" :height="124" :options="defaultOptions" v-on:animCreated="handleAnimation" />
</template>
<script>
    import Lottie from 'vue-lottie/src/lottie.vue'
    import animationData from "~/assets/lottie_files/upload_materials/96551-hourglass.json";
    export default {
        components: {
            Lottie,
        },
        data() {
            return {
                defaultOptions: {
                    animationData: animationData
                },
                animationSpeed: 1,
            }
        },
        methods: {
            handleAnimation: function(anim) {
                this.anim = anim;
            }
        }
    }
</script>
