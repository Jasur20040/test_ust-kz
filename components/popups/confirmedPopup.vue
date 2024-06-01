<template>
    <transition name="fadePopup">
        <div v-show="open" class="popup_bg d-f j-c" @mousedown.self="cancel">
            <transition name="fade">
                <div v-show="open" class="popup">
                    <div class="header d-f a-c j-b">
                        <div></div>
                        <exitBtn @click.native="cancel" />
                    </div>
                    <div class="body">
                        <Lottie :width="100" :height="100" :options="defaultOptions" v-on:animCreated="handleAnimation" />
                        <div class="h">{{ message }}</div>
                    </div>
                    <div class="foot">
                        <div class="wrap">
                            <cstBtn class="cstBtn" @click.native="confirm">Ия</cstBtn>
                            <cstBtn class="cstBtn glass" @click.native="cancel">Артқа қайту</cstBtn>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>


<script>
    import Lottie from 'vue-lottie/src/lottie.vue'
    import animationData from "@/assets/lottie_files/info_2/animation_kqc42oh6.json"
    import cstBtn from '@/components/forms/cstBtn.vue'
    import exitBtn from '@/components/forms/exitBtn.vue'

    export default {
        components: {
            Lottie,
            cstBtn,
            exitBtn
        },
        data() {
            return {
                open: false,
                Animate: false,
                defaultOptions: {
                    animationData: animationData,
                    loop: true,
                },
                animationSpeed: 1,
                message: '',
                resolver: () => null,
            }
        },
        mounted() {
            this.$nuxt.$on('dialog', this.dialog);
        },
        methods: {
            handleAnimation: function(anim) {
                this.anim = anim;
            },
            confirm() {
                this.resolver(new Promise((resolve) => resolve('confirmed')));
                this.close();
            },
            cancel() {
                this.resolver(new Promise((resolve, reject) => reject(new Error('cancelled'))));
                this.close();
            },
            close() {
                this.open = false;
            },
            dialog({
                message,
                open,
                resolver
            }) {
                this.message = message;
                this.open = open;
                this.resolver = resolver;
            }
        }
    }

</script>


<style scoped lang="scss">
    .fade-enter-active,
    .fade-leave-active {
        transition: .5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
        transform: translateY(-15%);
        transition: 0.5s;
    }

    .fadePopup-enter-active,
    .fadePopup-leave-active {
        transition: .5s;
    }

    .fadePopup-enter,
    .fadePopup-leave-to {
        opacity: 0;
        transition: 0.3s;
    }

    .header {
        padding: 10px 10px 0;
    }

    .popup_bg {
        top: 0;
        width: 100%;
        height: 100%;
        align-items: flex-start;
        position: fixed;
        z-index: 20;
        background: rgba(0, 0, 0, 0.6);
        padding: 60px 0 0;
    }

    .popup {
        width: 100%;
        max-width: 360px;
        background: #ffffff;
        border-radius: 6px;
    }

    .body {
        padding: 0 50px 20px;
        font-size: 21px;
        font-weight: 800;
        line-height: 26px;
        text-align: center;
    }

    .foot {
        padding-bottom: 40px;
    }

    .wrap {
        display: flex;
        justify-content: center;
        gap: 10px;
        padding: 0 20px;
    }
    
    .cstBtn {
        height: 40px;
        width: 135px;
    }

</style>
