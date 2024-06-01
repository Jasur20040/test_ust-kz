<template>
    <div class="main">
        <div class="cst-ct">
            <div class="wrapper-side">
               <div></div>
                <div class="content">
                    <div class="not_found aj-c">
                        <div class="block">
                            <Lottie :width="150" :height="150" :options="defaultOptions" v-on:animCreated="handleAnimation" />
                            <h3>Бет табылмады</h3>
                            <p>Бұл бет табылмады немесе жасалу барысында.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
    import Lottie from 'vue-lottie/src/lottie.vue'
    import animationData from "@/assets/lottie_files/not_found/82408-search.json"
    import Sidebar from '@/components/Sidebar.vue'
    export default {
        components: {
            Lottie,
            Sidebar,
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
            },
        }

    }

</script>


<style scoped>
    .main {
        min-height: 770px;
    }
    .not_found {
        height: calc(100vh - 111.77px);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .block {
        text-align: center;
        width: 100%;
        max-width: 350px;
    }

    h3 {
        font-size: 36px;
        font-weight: 600;
        line-height: 42px;
        margin: 20px 0 0;
    }

    p {
        font-size: 24px;
        line-height: 28px;
        margin: 12px 0 20px;
    }

</style>
