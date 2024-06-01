<template>
    <div class="bg">
        <div class="main">
            <div class="cst-ct">
                <header_kroshki class="pdd" :header="header" pd=1 />
                <div class="welcome_block">
                    <div class="pre-head">{{title}}</div>
                    <div class="head">{{katysushy_fio}}, байқауға қош келдіңіз!</div>
                    <bigBtn v-if="loading" class="cst-size-btn"><span class="spinner-border"></span></bigBtn>
                    <bigBtn v-else class="cst-size-btn" @click.native="testStart">{{ status == true ? 'Тестті бастау' : 'Тестті жалғастыру' }}</bigBtn>
                    <div class="informer">
                        <img src="~assets/images/olimp/kubok2.png" alt="">
                        <div>
                            <div class="h">Байқау тестілеу форматында өтеді. Тест 20 сұрақтан тұрады.</div>
                            <div class="desc">Сұрақтардың дұрыс немесе қате екендігін, яғни байқау нәтижесін тестті аяқтағаннан кейін қарап тексеруге болады.</div>
                            <div class="warning">
                                <Lottie class="warn" :options="defaultOptions" v-on:animCreated="handleAnimation" />
                                <div class="inBody">
                                    <div class="orange">Назар аударыңыз</div>
                                    Тесттен өтуге <span class="greentt">60 минут</span> беріледі
                                </div>
                            </div>
                            <div class="desc">Барлық тест сұрақтары оқу бағдарламасына сай жасалынған. Тест сұрағын зейінмен оқып, дұрыс жауапты таңдаңыз!</div>
                        </div>
                    </div>
                    <section>
                        <h3>Байқау марапаттары</h3>
                        <material_reklama11 olimp="1" />
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import header_kroshki from '@/components/header_kroshki.vue'
    import Lottie from 'vue-lottie/src/lottie.vue'
    import bigBtn from '@/components/forms/bigBtn.vue'
    import animationData from "~/assets/lottie_files/info_2/animation_kqc42oh6.json"
    import material_reklama11 from '@/components/landing/material_reklama11.vue'

    export default {
        middleware: ['auth'],
        head() {
            return {
                title: 'Байқау | Ереже',
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
            header_kroshki,
            bigBtn,
            material_reklama11,
            Lottie
        },
        layout: 'second',
        data() {
            return {
                defaultOptions: {
                    animationData: animationData
                },
                animationSpeed: 1,
                loading: 0,
            }
        },
        async asyncData({
            $axios,
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
            return {
                header: [{
                        name: 'Байқаулар',
                        link: '/baiqau'
                    },
                    {
                        name: katysushy.o_tury.o_tury
                    }
                ],
                title: katysushy.o_tury.o_tury,
                katysushy_fio: katysushy.o_katysushy_fio,
                status: res.status,
                suraktar: suraktar,
                katysushy: katysushy,
            }
        },

        methods: {
            handleAnimation: function(anim) {
                this.anim = anim;
            },
            testStart() {
                this.loading = 1
                if (this.status == true) {
                    this.$api.$post('baiqau/test/start', {
                        o_order_id: this.katysushy.o_order_id,
                        suraktar: this.suraktar,
                    }).then((res) => {
                        this.loading = 0
                        this.$router.push({
                            name: 'baiqau-test',
                            query: {
                                code: this.$route.query.code
                            },
                        });
                    }).catch((err) => {
                        this.loading = 0
                    })
                } else if (this.status == 'continue') {
                    this.loading = 0
                    this.$router.push({
                        name: 'baiqau-test',
                        query: {
                            code: this.$route.query.code
                        },
                    });
                }
            }
        },

    }

</script>
<style scoped lang="scss">
    .bg {
        background: linear-gradient(140.25deg, #DBF4FF 0.93%, #F3E7FF 82.61%);

    }

    h3 {
        font-size: 36px;
        font-weight: 600;
        line-height: 51.8px;
        margin: 50px 0 40px;
    }

    .cst-ct {
        padding: 0 170px;
    }

    .main {
        padding: 0 0 65px;

        .welcome_block {
            margin-top: 40px;
            background: #FFFFFF;
            box-shadow: 0px 10px 30px 0px #00000026;
            border-radius: 10px;
            padding: 50px 50px 70px;

            .pre-head {
                font-size: 20px;
                font-weight: 400;
                line-height: 30px;
                text-align: center;
            }

            .head {
                font-size: 32px;
                font-weight: 600;
                line-height: 38px;
                text-align: center;
                margin-top: 10px;
            }

            .cst-size-btn {
                width: 280px;
                height: 50px;
                margin: 40px auto 0;
            }

            .informer {
                padding: 40px;
                background: #FFF7E7;
                border: 1px solid #FF8B0D;
                border-radius: 6px;
                display: grid;
                grid-template-columns: auto 1fr;
                grid-gap: 40px;
                margin-top: 50px;

                .h {
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 23px;
                    padding-bottom: 10px;
                }

                .desc {
                    color: #363636;
                    font-family: Raleway;
                    font-size: 16px;
                    line-height: 19px;
                }

                .warning {
                    background: #FFFFFF;
                    border: 1px solid #FF8B0D;
                    border-radius: 6px;
                    display: grid;
                    grid-template-columns: 70px 1fr;
                    align-items: center;
                    grid-gap: 20px;
                    margin: 20px 0;
                    padding: 20px 30px 20px 20px;

                    .greentt {
                        color: #03B113;
                        font-weight: 600;
                    }

                    .inBody {
                        font-size: 16px;
                        line-height: 19px;

                        .orange {
                            font-size: 20px;
                            font-weight: 600;
                            line-height: 23px;
                            color: #FF8B0D;
                            margin-bottom: 5px;
                        }
                    }
                }
            }

            .block {
                margin-top: 130px;
            }

            .h2 {
                font-size: 40px;
                font-weight: 800;
                line-height: 47px;
                text-align: center;
                padding-top: 0;
            }


        }
    }

    @media all and (max-width: 1439px) {
        .cst-ct {
            padding: 0 70px;
        }

        h3 {
            font-size: 32px;
            line-height: 46.8px;
        }
    }

    @media all and (max-width: 1199px) {

        .h2 {
            font-size: 36px;
            line-height: 43px;
        }

        .main .welcome_block .head {
            font-size: 30px;
            line-height: 37px;
        }

        .main .welcome_block .pre-head {
            font-size: 17px;
            line-height: 26px;
        }

        .main .welcome_block .informer {
            grid-gap: 30px;
        }

        .informer img {
            width: 166px;
        }

        .main .welcome_block .h2 {
            font-size: 36px;
            line-height: 43px;
        }

        h3 {
            font-size: 28px;
            line-height: 41.8px;
        }

    }

    @media all and (max-width: 991px) {
        .main .welcome_block .h2 {
            font-size: 32px;
            line-height: 39px;
        }

        .informer img {
            width: 116px;
        }

        .main .welcome_block .informer .h {
            font-size: 19px;
            line-height: 22px;
        }

        .main .welcome_block .informer .desc {
            font-size: 15px;
            line-height: 18px;
        }

        .main .welcome_block .informer .warning .inBody .orange {
            font-size: 18px;
            line-height: 21px;
        }

        .main .welcome_block .informer .warning .inBody {
            font-size: 15px;
            line-height: 18px;
        }

        .main .welcome_block .informer .warning {
            grid-template-columns: 50px 1fr;
        }


        .main .welcome_block .h2 {
            font-size: 28px;
            line-height: 35px;
            margin: 0;
        }


        .main .welcome_block .informer {
            grid-template-columns: 1fr;
            justify-items: center;
            grid-gap: 20px;
        }


        .main .welcome_block {
            padding: 40px 35px 50px;
        }



        .main .welcome_block .block {
            margin-top: 100px;
        }



        .main .welcome_block .pre-head {
            font-size: 15px;
            line-height: 21px;
        }

        .main .welcome_block .head {
            font-size: 27px;
            line-height: 29px;
        }

        h3 {
            font-size: 24px;
            line-height: 37.8px;
            margin: 50px 0 25px;
        }
    }

    @media all and (max-width: 767px) {
        .h2 {
            font-size: 27px;
            line-height: 33px;
        }

        .cst-ct {
            padding: 0 20px;
        }



    }

    @media all and (max-width: 500px) {
        .main .welcome_block .head {
            font-size: 24px;
            line-height: 29px;
        }

        .main .welcome_block .pre-head {
            font-size: 14px;
            line-height: 20px;
        }

        .main .welcome_block .informer .h {
            font-size: 18px;
            line-height: 21px;
        }

        .main .welcome_block .informer .desc {
            font-size: 14px;
            line-height: 17px;
        }

        .main .welcome_block .informer .warning .inBody .orange {
            font-size: 16px;
            line-height: 19px;
        }

        .main .welcome_block .informer .warning .inBody {
            font-size: 14px;
            line-height: 17px;
        }

        .main .welcome_block .h2 {
            font-size: 24px;
            line-height: 31px;
            margin: 0;
        }

        .main .welcome_block .block {
            margin-top: 80px;
        }

        .main .welcome_block {
            padding: 40px 20px 50px;
        }

        h3 {
            font-size: 20px;
            line-height: 32.8px;
        }
    }

    @media all and (max-width: 445px) {
        .main .welcome_block .informer {
            padding: 40px 20px;
        }

        .cst-ct {
            padding: 0;

            .pdd {
                padding: 20px 20px 0;
            }
        }

        .main .welcome_block .head {
            font-size: 20px;
            line-height: 24px;
        }

        .main .welcome_block {
            padding: 30px 20px 50px;
        }

        .main .welcome_block .cst-size-btn {
            width: 300px;
            margin: 20px auto 0;
        }

        .main .welcome_block .informer .h {
            font-size: 16px;
            line-height: 19px;
        }

        .main .welcome_block .informer .desc {
            font-size: 13px;
            line-height: 16px;
        }

        .main .welcome_block .informer {
            padding: 20px;
        }




    }

</style>
