<template>
    <transition name="fadePopup">
        <div v-show='isOpen' class="popupBg" @click="$emit('closePopup')">
            <transition name="fade">
                <div v-show='isOpen' class="popupBlock" @click.stop>
                    <div class="exitBtn">
                       <exitBtn @click.native="$emit('closePopup')" />
                    </div>
                    <div class="cst-pd">
                        <img src="~assets/images/kualik.jpeg" alt="">
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>


<script>
    import exitBtn from '@/components/forms/exitDefaultBtn.vue'

    export default {
        components: {
            exitBtn,
        },
        props: ['isOpen']
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
    .popupBg {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 20;
        background: rgba(0, 0, 0, 0.6);

        .popupBlock {
            width: 90%;
            max-width: 500px;
            background: #ffffff;
            max-height: 80vh;
            overflow-y: scroll;
            border-radius: 6px;
            .exitBtn {
                display: flex;
                justify-content: flex-end;
                width: 100%;
                padding: 10px 10px 0 0;

                .exit {
                    padding: 0;
                }
            }

            .h2 {
                font-size: 24px;
                font-weight: 800;
                line-height: 29px;
            }

            .cst-pd {
                padding: 0 20px 50px;
                position: relative;
                img{
                    width: 100%;
                    margin-top: 20px;
                }
            }

            ol{
                padding-left: 15px;
            }
        }
    }

</style>
