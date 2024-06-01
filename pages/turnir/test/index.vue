<template>
    <div class="main pre_test">
        <div v-if="active==0">
            <div class="cst-ct">
                <header_kroshki :header="header" gotoUrl="/turnir" />
            </div>
            <div class="cst-ct d-f aj-c">
                <div class="block">
                    <div class="head">{{turnir.month}} айының Республикалық {{turnir.name}} {{turnir.cat_name}} турнирі</div>
                    <div class="title">{{tuser.fio_user}}, блиц-турнирге қош келдіңіз!</div>
                    <div class="body">Блиц-турнир – біліміңізді шыңдап, шапшаң ойлау қабілетіңізді дамытады. Уақытыңызды тиімді пайдаланып, {{question_count}} минутта {{question_count}} сұраққа жауап беріңіз!</div>
                    <bigBtn class="cst_size_btn" @click.native="testStart">Тестті бастау</bigBtn>
                    <div class="foot">Сіз жеңімпаз болуға лайықсыз!</div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="cst-ct">
                <div class="test">
                    <div class="header">
                        {{turnir.month}} айының Республикалық {{turnir.name}} {{turnir.cat_name}} турнирі
                    </div>
                    <div class="wrap">
                        <div class="sector d-f a-c gap-10">
                            <img src="~/assets/images/turnir/user.svg" alt="">
                            Қатысушы: {{tuser.fio_user}}
                        </div>
                        <div class="sector d-f a-c gap-10">
                            <img src="~/assets/images/turnir/clock.svg" alt="">
                            Турнирдің бітуіне қалды:<span class="green">{{cT.minuts}}:{{cT.seconds > 9 ?cT.seconds : '0'+cT.seconds}}</span>
                        </div>
                    </div>
                    <div class="test_head">
                        Тест сұрақтарына тиянақты жауап беріңіз
                    </div>
                    <div class="test_block">
                        <div v-for="(question, index) in questions" class="question">
                            <div class="numeric">{{index+1}}.</div>
                            <div class="q" v-html="question.question"></div>
                            <div></div>
                            <div class="answers">
                                <label class="answer">
                                    <input v-model="question.my_answer" value="1" type="radio"> <span v-html="question.answer1"></span>
                                </label>
                                <label class="answer">
                                    <input v-model="question.my_answer" value="2" type="radio"> <span v-html="question.answer2"></span>
                                </label>
                                <label class="answer">
                                    <input v-model="question.my_answer" value="3" type="radio"> <span v-html="question.answer3"></span>
                                </label>
                                <label class="answer">
                                    <input v-model="question.my_answer" value="4" type="radio"> <span v-html="question.answer4"></span>
                                </label>
                            </div>
                        </div>
                        <cstBtn class="cst_btn_size" v-if="loading" loading=1>Тестті аяқтау</cstBtn>
                        <cstBtn class="cst_btn_size" v-else @click.native="finishTest">Тестті аяқтау</cstBtn>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<script>
    import header_kroshki from '@/components/header_kroshki.vue'
    import cstBtn from '@/components/forms/cstBtn.vue'
    import bigBtn from '@/components/forms/bigBtn.vue'

    export default {
        middleware: ['auth'],
        head() {
            return {
                link: [{
                    rel: 'canonical',
                    href: this.$store.state.appUrl + this.$route.path
                }]
            }
        },
        components: {
            header_kroshki,
            cstBtn,
            bigBtn,
        },
        layout: 'second',
        data() {
            return {
                active: 0,
                questions: [{
                    question: "",
                    answer1: "",
                    answer2: "",
                    answer3: "",
                    answer4: "",
                    my_answer: null,
                }, ],
                timer: null,
                question_count: null,
                loading: 0,
            }
        },
        async asyncData({
            $axios,
            query,
            redirect,
        }) {
            if (!query.tuser_id) return redirect(302, '/turnir')
            else {
                let res = await $axios.$get('/turnirs/' + query.tuser_id + '/test')
                return {
                    turnir: res.tuser.turnir,
                    questions: res.questions,
                    tuser: res.tuser,
                    question_count: res.questions.length,
                    header: [{
                        name: 'Турнир',
                        link: '/turnir'
                    }, {
                        name: res.tuser.turnir.month + ' айының Республикалық ' + res.tuser.turnir.name + ' ' + res.tuser.turnir.cat_name + ' турнирі',
                    }],
                    cT: {
                        currentTime: 60 * res.questions.length,
                        minuts: res.questions.length,
                        seconds: 0,
                    },
                }
            }
        },
        methods: {
            testStart() {
                this.active = 1;
                this.startTimer();
            },
            finishTest() {
                let durys = 0
                let kate = 0
                this.questions.forEach((q) => {
                    q.my_answer == q.correct_answer ? durys++ : kate++;
                })
                const form = {
                    durys: durys,
                    kate: kate,
                    id_user: this.tuser.id
                }
                this.$api.$post('/turnirs/test/store', form).then((res) => {
                    this.$bus.$emit('successPopup')
                    setTimeout(() => {
                        this.$router.push('/turnir/test/' + this.tuser.id + '/result')
                    }, 1500)
                }).catch((err) => {
                    console.log(err);
                })
            },
            startTimer() {
                this.timer = setInterval(() => {
                    this.cT.currentTime--;
                    let s = this.cT.currentTime;
                    this.cT.minuts = Math.floor((s % 3600) / 60);
                    this.cT.seconds = Math.floor(s % 60);
                    if (s < 1) clearTimeout(this.timer);
                }, 1000)
            },
            stopTimer() {
                clearTimeout(this.timer)
            },
        }

    }

</script>


<style scoped lang="scss">
    .main {
        min-height: 100vh;
        background: linear-gradient(140.25deg, #DBF4FF 0.93%, #F3E7FF 82.61%);
        padding-bottom: 60px;
    }

    hr {
        margin: 0;
    }

    .block {
        background: #FFFFFF;
        box-shadow: 0px 10px 30px 0px #00000026;
        border-radius: 10px;
        margin-top: 70px;
        padding: 50px 35px;

        text-align: center;
        max-width: 840px;

        .head {
            font-size: 20px;
            line-height: 30px;
        }

        .title {
            font-size: 32px;
            font-weight: 600;
            line-height: 38px;
            text-align: center;

            margin-top: 20px;
        }

        .body {
            margin-top: 20px;
            font-size: 20px;
            line-height: 30px;
        }

        .cst_size_btn {
            margin: 0 auto;
            margin-top: 40px;
            width: 100%;
            max-width: 280px;
            height: 50px;
        }

        .foot {
            margin-top: 10px;
            color: #858A97;
            font-size: 20px;
            line-height: 30px;
        }
    }

    .test {
        padding-top: 40px;

        .header {
            font-size: 24px;
            font-weight: 600;
            line-height: 30px;
            text-align: center;

        }

        .wrap {
            margin-top: 30px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 40px;

            .sector {
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #E2E8F4;
                border-radius: 6px;
                font-size: 18px;
                font-weight: 400;
                line-height: 21px;

                height: 70px;

                .green {
                    color: #03B113;
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 21px;
                    margin-left: 5px;
                }
            }
        }
        .test_head {
            margin-top: 30px;
            font-size: 24px;
            line-height: 33.62px;
            letter-spacing: 0.1em;
            text-align: center;
            text-transform: uppercase;
            border-radius: 10px 10px 0px 0px;
            padding: 18px;
            background: #F5F6F8;
            box-shadow: 0px 3px 6px 0px #0000001A;
            color: #858A97;
        }
        .test_block {
            
            padding: 0 40px 50px;
            background: #FFFFFF;
            box-shadow: 0px 4px 54px rgba(0, 0, 0, 0.05);
            border-radius: 0 0 10px 10px;
            max-height: calc(100vh - 200px);
            overflow-y: scroll;
            position: relative;

            &::-webkit-scrollbar {
                width: 5px;
            }

            &::-webkit-scrollbar-thumb {
                background: #1E63E9;
            }

            

            .question {
                display: grid;
                grid-template-columns: auto 1fr;
                align-items: center;
                grid-gap: 20px;
                margin-top: 30px;

                .answer {
                    padding: 15px 10px;
                    display: flex;
                    gap: 10px;
                    align-items: center;
                    font-size: 18px;
                    line-height: 21px;

                    margin: 0;
                    border-bottom: 1px solid #F0F0F0;

                    &:first-child {
                        border-top: 1px solid #F0F0F0;
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
                        border: 1px solid #1E63E9;
                        border-radius: 50%;
                    }

                    input:checked+span::before {
                        background: #3464E7;
                        outline: 2px solid #fff;
                        outline-offset: -3px;
                    }


                }
            }

            .numeric {
                font-size: 20px;
                font-weight: 600;
                line-height: 23px;
            }

            .q {
                font-size: 20px;
                font-weight: 500;
                line-height: 23px;
            }

            .cst_btn_size {
                width: 280px;
                height: 50px;
                margin: 40px auto 0;
            }
        }
    }

    @media all and (max-width: 883px) {
        .test .wrap {
            grid-template-columns: 1fr;
            gap: 15px;
        }

        .test .header {
            font-size: 22px;
            line-height: 25px;
        }

        .test .wrap .sector {
            height: 45px;
        }

        .block .head {
            font-size: 17px;
            line-height: 24px;
        }

        .block .title {
            font-size: 28px;
            line-height: 33px;
        }

        .block .body {
            font-size: 18px;
            line-height: 27px;
        }

        .block .foot {
            font-size: 17px;
            line-height: 25px;
        }
        .test .test_head {
    margin-top: 25px;
    font-size: 20px;
    line-height: 28.62px;
}
        
        




    }

    @media all and (max-width: 767px) {
        .test .test_head {
            font-size: 18px;
            line-height: 25px;
        }

        .test .test_block .q {
            font-size: 18px;
            line-height: 22px;
        }

        .block .head {
            font-size: 15px;
            line-height: 22px;
        }

        .block .title {
            font-size: 25px;
            line-height: 29px;
        }

        .block .body {
            font-size: 16px;
            line-height: 25px;
        }

    }

    @media all and (max-width: 575px) {
        .block {
            padding: 35px 35px 50px;
        }

        .test .header {
            font-size: 20px;
            line-height: 23px;
        }

        .test .test_block .head {
            font-size: 19px;
            line-height: 21px;
        }

        .test .test_block .q {
            font-size: 16px;
            line-height: 19px;
        }

        .test .test_block .question .answer {
            font-size: 16px;
            line-height: 19px;
        }

        .test .wrap .sector {
            font-size: 17px;
            line-height: 20px;
        }

        .test .test_block .question {
            grid-gap: 10px;
        }

        .test .test_block .cst_btn_size {
            width: 100%;
        }

        .block .head {
            font-size: 14px;
            line-height: 19px;
        }

        .block .title {
            font-size: 22px;
            line-height: 26px;
        }

        .block .body {
            font-size: 14px;
            line-height: 21px;
        }

        .block .cst_size_btn {
            margin-top: 30px;
            width: 100%;
            max-width: 100%;
        }

        .block .foot {
            font-size: 15px;
            line-height: 22px;
        }
        
        

    }

    @media all and (max-width: 452px) {

        .test .header {
            font-size: 18px;
            line-height: 22px;
        }

        .test .wrap {
            margin-top: 20px;
            grid-gap: 10px;
        }

        .test .wrap .sector {
            height: 50px;
        }

        .test .test_block {
            padding: 0 20px 50px;
        }

        .test .test_block .head {
            font-size: 18px;
            line-height: 21px;
            padding: 30px 0;
        }

        .block {
            padding: 30px 20px;
        }
        .test .test_head {
            margin-top: 20px;
            padding: 14px 20px 12px;
            font-size: 16px;
            line-height: 22.42px;

        }
    }

    @media all and (max-width: 380px) {
        .test .test_block .q {
            font-size: 14px;
            line-height: 16px;
        }

        .test .test_block .question .answer {
            font-size: 14px;
            line-height: 16px;
        }

        .test .header {
            font-size: 16px;
            line-height: 18px;
        }
    }

</style>
<style lang="scss">
    .test .test_block .q p,
    .test .test_block .question .answer span p {
        margin-bottom: 0;
    }

</style>
