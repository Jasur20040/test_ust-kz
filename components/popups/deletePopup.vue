<template>
    <transition name="fadePopup">
        <div v-show='isOpen' class="popupBg" @click="$emit('closePopup')">
            <transition name="fade">
                <div v-show='isOpen&&category==1' class="popupBlock" @click.stop>
                    <div class="exitBtn">
                        <exitBtn @click.native="$emit('closePopup')" class="exit" />
                    </div>
                    <div class="cst-pd">
                        <div class="h2">Материалды жоюға сенімдісіз бе?</div>
                        <div class="desc">Материалмен қоса, материал статисткасы жойылады және материал үшін берілген марапаттарды жүктеу мүмкіндігі де қол жетімсіз болады.</div>
                        <label for="delete">Материалды жоюға өтініш жазыңыз</label>
                        <textarea v-model="message" name="delete" id="delete" cols="30" rows="6" class="form-control tesdfgg8" placeholder="Минимум 15 таңбадан көп болу керек. Себебін нақты, әрі толық жазсаңыз, материал жылдам өшіріледі"></textarea>
                        <reportBtn @click.native="sendToDeleteMaterial" class="myBtn" text="Материалды жою" img="trash.svg" />
                    </div>
                </div>
            </transition>
            <transition name="fade">
                <div v-show='isOpen&&category==2' class="popupBlock cat2" @click.stop>
                    <div class="exitBtn">
                        <exitBtn @click.native="closePopup" class="exit" />
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
    import reportBtn from '@/components/forms/reportBtn.vue'
    import exitBtn from '@/components/forms/exitDefaultBtn.vue'
    export default {
        props: ['isOpen', 'material_id'],
        components: {
            exitBtn,
            reportBtn,
        },
        data() {
            return {
                category: 1,
                message: null,
            }
        },
        methods: {
            sendToDeleteMaterial() {
                const token = this.$auth.strategy.token.get();
                console.log(this.message);
                console.log(this.material_id);
                this.$api.$post('/menin-materialdarym/' + this.material_id + '/delete', {
                    deleteordertext: this.message
                }).then((res) => {
                    this.category = 2;
                    // console.log(res);
                    // this.$bus.$emit('refreshMyMaterials');
                });
            },
            closePopup() {
                this.$emit('closePopup');
                this.reloadPage();
            },
            reloadPage() {
                window.location.reload();
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

    .myBtn {
        border-radius: 5px;
        max-width: 250px;
        height: 50px;
        margin-top: 20px;
    }

    .popupBg {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 20;
        background: rgba(0, 0, 0, 0.6);

        .popupBlock {
            position: absolute;
            width: 100%;
            max-width: 600px;
            background: #ffffff;
            max-height: 90vh;
            overflow: scroll;
            border-radius: 6px;
            @media all and (max-width: 500px) {
                max-width: 90%;
            }
            &.cat2{
                width: 90%;
                max-width: 470px;
                .cst-pd{
                    padding: 0 50px 40px;
                    @media all and (max-width: 500px) {
                        padding: 0 20px 25px;
                    }
                }
            }
            .green{
                font-size: 16px;
                color: #03B113;
                line-height: normal;
                text-align: center;
                font-weight: 500;
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
                line-height: normal;
            }

            .desc {
                font-size: 16px;
                color: #858A97;
                line-height: 23px;
                display: block;
                margin-top: 15px;
                margin-bottom: 5px;
            }

            label {
                font-size: 16px;
                font-weight: 500;
                line-height: normal;
                display: block;
                margin-top: 10px;
                margin-bottom: 10px;

            }

            .cst-pd {
                padding: 0 50px 50px;
                @media all and (max-width: 500px) {
                    padding: 0 25px 40px;
                }
            }

            ol {
                padding-left: 15px;
            }
            .tesdfgg8 {
                border-radius: 5px;
                border: 1px solid #E2E8F4;
                background: #FAFAFA;
                resize: vertical;
            }
        }
    }

</style>
