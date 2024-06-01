<template>
    <transition name="fadePopup">
        <div v-show='isOpen' class="popupBg" @mousedown="$emit('closePopup')">
            <transition name="fade">
                <div v-show='isSend == 0' class="popupBlock" @mousedown.stop>
                    <div class="exitBtn">
                        <exitBtn @click.native="$emit('closePopup')" />
                    </div>
                    <div class="cst-pd">
                        <div class="h2">Материалға шағымдану</div>
                        <p>Назар аударыңыз. Бұл материалды сайт қолданушысы жариялаған. Егер материал сіздің авторлық құқығыңызды бұзса, осында жазыңыз. Біз ең жылдам уақытта материалды сайттан өшіреміз</p>
                        <div class="span">Шағым жылдам қаралу үшін барынша толық ақпарат жіберіңіз</div>
                        <cstTextarea class="mt-10" placeholder="Себебін осында жазыңыз" v-model="conflict.message" />
                        <cstInput class="mt-6" typeName="text" stringPlaceholder="Толық аты-жөніңіз" :dangerText="dangerName" :danger="dangerName" v-model="conflict.name" @click.native="dangerName=null" />
                        <cstInput class="mt-10" typeName="text" nameWrap="tel_num" stringPlaceholder="+7 (___) - ___ - __ - __" :dangerText="dangerPhone" :danger="dangerPhone" v-model="conflict.phone" @click.native="dangerPhone=null" />
                        <reportBtn @click.native="sendData" class="cst_btn_size" text="Шағымды қалдыру" />
                    </div>
                </div>
            </transition>
            <transition name="fade">
                <div v-show='isSend == 1' class="popupBlock" @mousedown.stop>
                    <div class="exitBtn">
                        <exitBtn @click.native="$emit('closePopup')" />
                    </div>
                    <div class="cst-pd">
                        <div class="h2 green">Сіздің сұранысыңыз сәтті жіберілді!</div>
                        <p>Жақын арада сайт әкімшілігі сізбен хабарласады</p>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>


<script>
    import reportBtn from '@/components/forms/reportBtn.vue'
    import exitBtn from '@/components/forms/exitBtn.vue'
    import cstTextarea from '@/components/forms/cstTextarea.vue'
    import cstInput from '@/components/forms/cstInput.vue'

    export default {
        components: {
            reportBtn,
            exitBtn,
            cstTextarea,
            cstInput,
        },
        props: ['isOpen','isSend', 'id'],
        data() {
            return {
                conflict: {
                    message: null,
                    name: this.$auth.user ? this.$auth.user.fio : null,
                    phone: this.$auth.user ? this.$auth.user.tel_num : null,
                },
                dangerName: null,
                dangerPhone: null,
            }
        },
        methods: {
            sendData(){
                var num = this.conflict.phone
                if(this.conflict.name == null) this.dangerName = 'Аты-жөні жолы толтырылуы керек'
                if(this.conflict.phone == null) this.dangerPhone = 'Нөмір жолы толтырылу керек'
                else if(num.length != 17) this.dangerPhone = 'Нөмір жолы толық жазылу керек'
                if(this.conflict.name != null && this.conflict.phone != null)
                    this.$axios.post('/word/'+this.id+'/report', this.conflict).then((res)=>{
                    if(res.data == 1) this.$emit('successReport')
                })
            }
        },


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

    .cst_btn_size {
        margin-top: 20px;
        max-width: 250px;
        height: 50px;
    }

    .popupBg {
        width: 100%;
        height: 100%;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 20;
        background: rgba(0, 0, 0, 0.6);

        .popupBlock {
            width: 100%;
            max-width: 600px;
            background: #ffffff;
            max-height: 100vh;
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
                margin-top: 10px;
                font-size: 24px;
                font-weight: 800;
                line-height: 28px;
            }

            p {
                font-size: 16px;
                line-height: 19px;
                margin: 11px 0 0 0;
                color: #888888;
            }

            .span {
                font-size: 16px;
                line-height: 23px;
                margin-top: 20px;
                color: #4E4E4E;
            }

            .mt-10 {
                margin-top: 10px;
                font-family: Raleway;
                font-size: 14px;
                font-weight: 400;
                line-height: 16px;

            }
            .danger{
                margin: 0 0 20px;
                input{
                    margin-bottom: 6px;
                }
            }
            .mt-6 {
                margin-top: 6px;
            }

            .cst-pd {
                padding: 0 50px 50px;
            }
        }
    }

    @media all and (max-width: 767px) {
        .popupBg .popupBlock .h2 {
            font-size: 22px;
            line-height: 26px;
        }

        .popupBg .popupBlock p {
            font-size: 14px;
            line-height: 17px;
        }

        .popupBg .popupBlock .span {
            font-size: 14px;
            line-height: 19px;
        }
    }

    @media all and (max-width: 500px) {
        .popupBg .popupBlock .cst-pd {
            padding: 0 30px 40px;
        }

    }

</style>
