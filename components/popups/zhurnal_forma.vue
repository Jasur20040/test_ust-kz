<template>
    <transition name="fadePopup">
        <div v-show='isOpen' class="popupBg" @mousedown="$emit('closePopup')">
            <transition name="fade">
                <div v-show='isOpen&&category==1' class="popupBlock" @mousedown.stop>
                    <div class="exitBtn">
                        <exitBtn @click.native="$emit('closePopup')" />
                    </div>
                    <div class="cst-pd">
                        <div class="h2">Журналға жариялау</div>
                        <cstInput class="aadfff" typeName="text" stringName="Аты-жөніңіз" stringPlaceholder="Аты-жөніңіз" :danger="errors.username" :dangerText="errors.username" v-model="form.username" />
                        <br>
                        <cstInput class="aadfff" typeName="text" stringName="Телефон номер" nameWrap="tel_num" stringPlaceholder="+7 (___) ___ __ __" :danger="errors.phone" :dangerText="errors.phone" v-model="form.phone" :class="{danger2:errors.username}" />
                        <div class="custom-control custom-radio" :class="{danger2:errors.phone}">
                            <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" v-model="form.type" value=1>
                            <label class="custom-control-label" for="customRadio1">Электронды түрде - 3000 ₸</label>
                        </div>
                        <div class="custom-control custom-radio mgt-15">
                            <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" v-model="form.type" value=2>
                            <label class="custom-control-label" for="customRadio2">Қағаз түрде - 5000 ₸</label>
                        </div>
                        <div class="rastaudesc">
                            Сізге редактор хабарласып, сіздің жұмыс орныңыз және мекен-жайыңызды нақтылап, журнал сертификатын казпочта арқылы жібереді. Сондықтан жұмыс істеп тұрған номерді көрсетіңіз.
                        </div>
                        <div class="cst_btn_size">
                            <cstBtn class="rastau" v-if="loading" loading=1 @click.native="submit" />
                            <cstBtn class="rastau" v-else text="Растау" @click.native="submit" />
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="fade">
                <div v-show='isOpen&&category==2' class="popupBlock cat2" @click.stop>
                    <div class="exitBtn">
                        <exitBtn @click.native="$emit('closePopup')" class="exit" />
                    </div>
                    <div class="cst-pd">
                        <div class="green">
                            Сіздің сұранысыңыз сәтті қабылданды. 
                            Сайттың әкімшілігі тексерген соң өзгертеді.
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>


<script>
    import cstBtn from '@/components/forms/btn.vue'
    import exitBtn from '@/components/forms/exitDefaultBtn.vue'
    import cstInput from '@/components/forms/cstInput.vue'

    export default {
        components: {
            cstBtn,
            exitBtn,
            cstInput,
        },
        data() {
            return {
                form: {
                    username: this.$auth.user ? this.$auth.user.fio : null,
                    phone: this.$auth.user ? this.$auth.user.tel_num : null,
                    type: 1,
                    email: this.$auth.user ? this.$auth.user.email : null,
                },
                errors: {
                    username: null,
                    phone: null,
                },
                loading: 0,
                category: 1,
            }
        },
        methods: {
            submit(){
                this.loading = 1;
                this.$axios.post('/word/zhurnal-tapsyrys', this.form).then((res)=>{
                    if(res.status == 200) this.$bus.$emit('successPopup')
                    this.loading=0
                    this.$emit('closePopup')
                    console.log(res);
                }).catch((error)=>{
                    console.log(error.response)
                    const data = error.response.data.errors;
                    for (let [key, value] of Object.entries(this.errors))
                        this.errors[key] = data[key] !== undefined ? data[key].join() : null;
                    this.loading=0
                })
            }
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

    .cst_btn_size {
        width: 100%;
        max-width: 250px;
        height: 50px;
        margin-top: 30px;
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
            width: 100%;
            max-width: 500px;
            background: #ffffff;
            max-height: 90vh;
            overflow: scroll;
            border-radius: 6px;
            @media all and (max-width: 500px) {
                max-width: 90%;
            }
            .danger2{
                padding-top: 8px;
            }

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
                padding-bottom: 20px;
            }

            .cst-pd {
                padding: 0 50px 50px;
                @media all and (max-width: 500px) {
                    padding: 0 25px 40px;
                }

                .rastaudesc {
                    font-size: 14px;
                    margin-top: 15px;
                    line-height: normal;
                    color: #858A97;
                }
                button.rastau {
                    border-radius: 5px;
                    font-size: 16px;
                }
            }

        }
    }

    .custom-control-label::after {
        top: 0;
        left: -1.75rem;
        width: 1.25rem;
        height: 1.25rem;
        background: 50% / 100% 80% no-repeat;

    }

    .custom-control-label::before {
        top: 0;
        left: -1.75rem;
        width: 1.25rem;
        height: 1.25rem;
        transition: 0s;
    }

    .custom-control {
        display: flex;
        margin-top: 20px;
        gap: 5px;
        align-items: center;
    }

    .mgt-15 {
        margin-top: 15px;
    }

    .custom-control-label {
        margin-left: 0.25rem;
        color: #172856;
        font-size: 16px;
        font-weight: 600;
    }

    // @media all and (max-width: 500px) {
    //     .popupBg .popupBlock .cst-pd {
    //         padding: 0 40px 45px;
    //     }

    // }

</style>
