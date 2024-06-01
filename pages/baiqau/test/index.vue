<template>
    <div>
        <kateSurakPopup :isOpen="appeals_active" @closePopup="appeals_active=0" @sendAppeals="sendAppeals" />
        <div class="test">
            <div class="header d-f a-c j-b">
                Байқау атауы: {{katysushy.bagyty.bagyt}}
                <div class="endler d-f a-c gap-30">
                    <div class="timer d-f a-c gap-10">
                        <img src="~/assets/images/olimp/timer_green.svg" alt="">
                        {{cT.minuts}}:{{cT.seconds}}
                    </div>
                    <cstBtn @click.native="testFinish" class="cstBtn">Байқауды аяқтау</cstBtn>
                </div>
            </div>
            <div class="cst-ct mt-20 ext">
                <div ref="scrollableElement" class="pagination d-f gap-10">
                    <template v-for="n in suraktar.length">
                        <qBtn :mode="
                            currentQuestion+1==n ? 3 :
                            suraktar[n-1].my_answer != 0 ? 1 : 0" :num=n @click.native="setQuestion(n)" />
                    </template>
                </div>
            </div>
            <div class="cst-ct">
                <div class="body">
                    <div class="head d-f a-c j-b">
                        №{{currentQuestion+1}}/20
                        <glassBtn @click.native="appeals_active=1" class="cstBtn">
                            <flag /> Аппеляцияға беру
                        </glassBtn>
                    </div>
                    <div class="cont">
                        <div class="question" v-html="suraktar[currentQuestion].surak"></div>
                        <div class="answers d-f fd-c gap-10 mt-20">
                            <label v-for="(zhauap, index) in suraktar[currentQuestion].zhauap" class="answer" :class="{'bg':index%2==1}">
                                <input v-model="suraktar[currentQuestion].my_answer" :value="zhauap.id" type="radio" @change="sendToSaveAnswer()"> <span v-html="zhauap.variant"></span>
                            </label>
                        </div>
                        <div class="paginate d-f a-c j-b">
                            <cstBtn @click.native="prevTo" class="cstBtn left">
                                <arrowRight />
                            </cstBtn>
                            {{currentQuestion+1}} / 20
                            <cstBtn @click.native="nextTo" class="cstBtn">
                                <arrowRight />
                            </cstBtn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import qBtn from '@/components/forms/qBtn.vue'
    import kateSurakPopup from '@/components/popups/kateSurakPopup.vue'
    import cstBtn from '@/components/forms/cstBtn.vue'
    import glassBtn from '@/components/forms/glassBtn.vue'
    import flag from '@/components/svg/olimp/flag.vue'
    import arrowRight from '@/components/svg/arrow-right.vue'

    export default {
        middleware: ['auth'],
        head() {
            return {
                title: 'Зияткерлік байқау | Тест',
                meta: [{
                    hid: 'description',
                    name: 'description',
                    content: 'Байқауларға барлық ұстаздар, тәрбиешілер, білім бөлімдерінің мамандары және мектепалды даярлық, балабақша, мектеп оқушылары, гимназия, лицей оқушылары, студенттер барлық қолданушылар қатыса алады.'
                }, {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'онлайн байқаулар, зияткерлік байқау, қазақстандық интернет байқаулар, қазахстанские интернет олимпиады, кио, cdo kz, оқушыларға арналған интернет байқау, қашықтық байқау, тегін олипиадалар, клевер байқау'
                }, ],
                link: [{
                    rel: 'canonical',
                    href: this.$store.state.appUrl + this.$route.path
                }]
            }
        },
        components: {
            qBtn,
            cstBtn,
            glassBtn,
            flag,
            arrowRight,
            kateSurakPopup
        },
        layout: 'second',
        data() {
            return {
                question: {
                    my_answer: null,
                },
                appeals_active: 0,
                timer: null,
                suraktar: [{
                    my_answer: 0,
                    surak: '',
                    zhauap: [],
                }],
                katysushy: {
                    o_tury: {
                        o_tury: ''
                    }
                },
                currentQuestion: 0,
            }
        },
        async asyncData({
            $axios,
            redirect,
            query
        }) {
            let res = await $axios.$get('/baiqau/test/load', {
                params: {
                    code: query.code
                }
            })
            var timer = 3600
            var katysushy = res.data[1];
            if (res.status == true) {
                var suraktar = res.data[0];
            } else if (res.status == 'continue') {
                var suraktar = new Array();
                res.data[0].forEach((e) => {
                    e.surak.my_answer = e.zhauap_id
                    suraktar.push(e.surak)
                });
                timer = res.date
            }
            let s = Number(timer)
            let currentQuestion = 0
            let chec = true
            suraktar.forEach((e, index) => {
                if (e.my_answer == 0 && chec) {
                    currentQuestion = index
                    chec = false
                }
            })
            return {
                suraktar: suraktar,
                katysushy: katysushy,
                currentQuestion: currentQuestion,
                cT: {
                    currentTime: s,
                    minuts: Math.floor(s / 60) / 10 < 1 ? '0' + Math.floor(s / 60) : Math.floor(s / 60),
                    seconds: Math.floor(s % 60) / 10 < 1 ? '0' + Math.floor(s % 60) : Math.floor(s % 60),
                },
            }
        },

        methods: {
            startTimer() {
                this.timer = setInterval(() => {
                    this.cT.currentTime--;
                    let s = this.cT.currentTime;
                    this.cT.minuts = Math.floor(s / 60) / 10 < 1 ? '0' + Math.floor(s / 60) : Math.floor(s / 60);
                    this.cT.seconds = Math.floor(s % 60) / 10 < 1 ? '0' + Math.floor(s % 60) : Math.floor(s % 60);
                    if (s < 1) this.testFinish();
                }, 1000)
            },
            stopTimer() {
                clearTimeout(this.timer)
            },
            testFinish() {
                if (this.checEnterAllVariants()) {
                    this.confirmToContinueTest(true)
                } else {
                    this.confirmToContinueTest()
                }
            },
            sendTestResult() {
                this.stopTimer()
                this.$api.$post('baiqau/test/finish', {
                    id: this.katysushy.idd
                }).then((res) => {
                    this.$bus.$emit('successPopup');
                    setTimeout(() => {
                        this.$router.push({
                            name: 'baiqau-test-id-result',
                            params: {
                                id: this.katysushy.idd,
                            }
                        })
                    }, 1500)
                })
            },
            sendAppeals(variable, text) {
                this.$api.post('/baiqau/appeals/create', {
                    variable: variable,
                    text: text,
                    code: this.katysushy.o_tizim.code,
                    surak: this.suraktar[this.currentQuestion]
                }).then((res) => {
                    if (res.data.status == true) {
                        console.log(res)
                        this.$bus.$emit('notification', {
                            text: 'Аппеляция сәтті жіберілді',
                            status: 'success',
                        })
                        this.$bus.$emit('successPopup')
                        this.appeals_active = 0
                    }
                }).catch((err) => {
                    console.log(err)
                })
            },
            checEnterAllVariants() {
                let count = true
                this.suraktar.forEach((e) => {
                    if (e.my_answer == 0) count = false
                })
                return count
            },
            confirmToContinueTest(variab = false) {
                this.$dialog.open({
                    message: variab ? 'Тестті аяқтауды растайсыз ба?' : 'Кейбір сұрақтарға жауап берілмеді. Тестті аяқтауды растайсыз ба?',
                    resolver: (async (result) => {
                        try {
                            const res = await result;
                            this.sendTestResult()
                        } catch (error) {
                            console.warn(error);
                        }
                    }),
                });
            },
            nextTo() {
                if (this.currentQuestion < 19) {
                    this.currentQuestion++
                    if (this.currentQuestion > 1) {
                        const scrollableElement = this.$refs.scrollableElement;
                        scrollableElement.scrollLeft += 50;
                    }
                }
            },
            prevTo() {
                if (this.currentQuestion > 0) {
                    this.currentQuestion--
                    if(this.currentQuestion < 18) {
                        const scrollableElement = this.$refs.scrollableElement;
                        scrollableElement.scrollLeft -= 50;
                    }
                }
            },
            setQuestion(e) {
                this.currentQuestion = e - 1;
            },
            sendToSaveAnswer() {
                let e = this.currentQuestion;
                this.$api.$post('baiqau/test/save/answer', {
                    user_code: this.katysushy.o_tizim.code,
                    surak_id: this.suraktar[e].id,
                    zhauap_id: this.suraktar[e].my_answer
                }).then(() => {
                    console.log('Успешно сохранен!')
                })
            },
        },
        mounted() {
            this.stopTimer()
            this.startTimer()
        }

    }

</script>

<style lang="scss" scoped>
    .cst-ct {
        width: 900px;
    }
    
    .test {
        background: linear-gradient(140.25deg, #DBF4FF 0.93%, #F3E7FF 82.61%);
        min-height: 100vh;

        .header {
            padding: 18px 65px;
            font-weight: 500;
            font-size: 24px;
            line-height: 24px;
            flex-wrap: wrap;
            gap: 15px;

            .endler {
                font-size: 20px;
                font-weight: 500;
                line-height: 20px;
                color: #03B113;
            }

            .cstBtn {
                padding: 14px 40px;
                color: #fff;
                background: #172856;
            }
        }

        .pagination {
            padding: 0 14px 10px;
            overflow-x: auto;

            &::-webkit-scrollbar {
                display: none;
            }
        }

        .body {
            margin-top: 15px;
            border: 1px solid #E2E8F4;
            box-shadow: 0px 10px 30px 0px #00000026;

            .head {
                padding: 15px 30px;
                border-radius: 10px 10px 0px 0px;
                box-shadow: 0px 3px 6px 0px #0000001A;
                background: #F5F6F8;
                font-weight: 500;
                font-size: 16px;
                line-height: 23.2px;
                color: #A2ABB8;

                .cstBtn {
                    padding: 10px;
                }
            }

            .cont {
                outline: 2px solid #E7ECF3;
                background: #fff;
                padding: 30px 90px 40px;
            }

            .question {
                font-size: 18px;
                font-weight: 500;
                line-height: 25.63px;
            }

            .answer {
                padding: 15px 10px;
                display: flex;
                gap: 10px;
                align-items: center;
                border-radius: 5px;
                font-size: 18px;
                line-height: 21px;

                margin: 0;

                &.bg {
                    background: #EAF1FF;
                }

                &:hover {
                    background: #F9FBFF;
                    cursor: pointer;
                }

                input {
                    position: absolute;
                    opacity: 0;
                    z-index: -1;
                }

                span {
                    display: inline-flex;
                    align-items: center;
                    user-select: none;
                }

                span::before {
                    content: '';
                    display: inline-block;
                    position: relative;
                    flex-shrink: 0;
                    flex-grow: 0;
                    margin-right: 10px;
                    background-position: 55% 50%;
                    background-size: 55%;
                    background-repeat: no-repeat;
                    width: 22px;
                    height: 22px;
                    background: #fff;
                    border: 1px solid #1E63E9;
                    border-radius: 50%;
                }

                input:checked+span::before {
                    background: #3464E7;
                    outline: 2px solid #fff;
                    outline-offset: -3px;
                }
            }

            .paginate {
                max-width: 335px;
                margin: 40px auto 0;
                font-size: 20px;
                line-height: 28.2px;
                text-align: center;

                .cstBtn {
                    padding: 13px 28px;
                    background: #172856;

                    &.left {
                        transform: rotate(180deg);
                    }

                    &:focus {
                        background: #172856 !important;
                    }

                    &:hover {
                        background: #0045CB !important;
                    }

                    &:active {
                        background: #0037A3 !important;
                    }
                }
            }
        }
    }

    @media all and (max-width: 991px) {

        .test .header {
            font-size: 20px;
            line-height: 20px;
        }

        .test .header .endler {
            font-size: 18px;
            line-height: 18px;
        }

        .test .header .cstBtn {
            padding: 14px 30px;
        }

        .test .body .cont {
            padding: 30px 60px 40px;
        }
    }

    @media all and (max-width: 767px) {
        .test .body .cont {
            padding: 25px 40px 40px;
        }

        .test .body .head {
            padding: 10px 40px;
        }

        .test .header {
            padding: 20px 30px 10px;
        }
    }

    @media all and (max-width: 575px) {
        .cst-ct {
            padding: 0;
        }

        .test .header {
            flex-direction: column;
            align-items: flex-start;
        }

        .test .header .endler {
            width: 100%;
            justify-content: space-between;
        }

        .test .body .cont {
            padding: 20px 30px 40px;
        }

        .test .body .head {
            padding: 10px 30px;
        }

        .test .body {
            margin-top: 30px;
        }

        .test .body .paginate {
            max-width: 100%;
        }

        .test .header {
            padding: 25px 20px 10px;
        }
    }

    @media all and (max-width: 445px) {
        .test .body .head {
            padding: 10px 20px;
        }

        .test .body .cont {
            padding: 20px 20px 40px;
        }

        .test .body .question {
            font-size: 16px;
            font-weight: 500;
            line-height: 22.63px;
        }

        .test .header {
            font-size: 16px;
            line-height: 16px;
        }

        .test .body .answer {
            padding: 10px;
            gap: 15px;
            font-size: 14px;
            line-height: 19px;
        }

        .test .body .paginate .cstBtn {
            padding: 15px;
        }

        .test .header .cstBtn {
            padding: 14px 20px;
        }

        .test .header .endler {
            gap: 10px;
        }

        .test .header {
            padding: 25px 10px 10px;

            .timer {
                padding-left: 10px;
            }
        }
    }

</style>
