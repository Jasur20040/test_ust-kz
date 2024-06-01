<template>
    <section class="section turnir">
        <div class="cst-ct">
            <div class="wrapper-side">
                <div class="hotslot"></div>
                <div class="content">
                    <div class="head">
                        <h1>{{month}} айының блиц-турнирі</h1>
                        <div class="info mt-20 d-f a-c gap-30">
                            <div class="timer d-f a-c gap-10">
                                <div class="time d-f fd-c aj-c">
                                    <div class="value">{{cT.days}}</div>
                                    <div class="name">Күн</div>
                                </div>
                                <div class="time d-f fd-c aj-c">
                                    <div class="value">{{cT.hours}}</div>
                                    <div class="name">Сағат</div>
                                </div>
                                <div class="time d-f fd-c aj-c">
                                    <div class="value">{{cT.minuts}}</div>
                                    <div class="name">Минут</div>
                                </div>
                                <div class="time d-f fd-c aj-c">
                                    <div class="value">{{cT.seconds}}</div>
                                    <div class="name">Секунд</div>
                                </div>
                            </div>
                            Турнирдің бітуіне қалды
                        </div>
                    </div>
                    <div class="buttons d-f">
                        <button @click="setCategory(2)" class="btn" :class="{active:category==2}">Ұстаздар</button>
                        <button @click="setCategory(1)" class="btn" :class="{active:category==1}">Тәрбиешілер</button>
                        <button @click="setCategory(3)" class="btn" :class="{active:category==3}">Оқушылар</button>
                        <button @click="setCategory(4)" class="btn" :class="{active:category==4}">
                        Студенттер</button>
                    </div>
                    <div class="turnirs">
                        <div class="list d-f fd-c">
                            <NuxtLink v-for="(turnir, index) in turnirs" :key="'turnir-' + turnir.id" class="item d-f a-c gap-20" :to="'turnir/'+turnir.lat_name + '-' + turnir.id">
                                <img v-if="turnir.icon" class="imgturnir" :src="$store.state.apiUrl+'/storage/files/turnir_icons/' + turnir.icon" alt="">
                                <img v-if="!turnir.icon" class="imgturnir" src="~assets/images/main_icon.svg" alt="">
                                {{ capitalizeFirstLetter(turnir.name) }}
                                <arrowRight />
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>


<script>
    import arrowRight from '@/components/svg/arrow-right.vue'
    export default {
        components: {
            arrowRight,
        },
        head() {
            return {
                title: 'Блиц-турнир ұстаздарға, оқушыларға, тәрбиешілерге, студенттерге арналған турнирлер, жарыстар, дипломдар',
                meta: [{
                    hid: 'description',
                    name: 'description',
                    content: 'Ұстаздарға, оқушыларға, тәрбиешілерге, студенттерге арналған турнирлер, жарыстар, олимпиадалар. Турнирге қатысу арқылы I, II, III дәрежелі дипломдар және сертификаттар мен марапаттаулар беріледі. Мұғалімдер біліктілігін арттырып онлайн тесттерді тапсыра алады.'
                }, {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'дипломдар, олимпиадалар, турнир, жарыстар,мұғалімдерге сертификаттар, ұстаздарға дипломдар, оқушыларға жарыстар, тәрбиешілерге жарыстар, блиц турнир, олимпиада сұрақтары, онлайн тест, мұғалімдерге жарыстар, олимпиадаға дайындық, I II III дәрежелі дипломдар, ұстаздарға марапаттаулар'
                }, ],
                link: [{
                    rel: 'canonical',
                    href: this.$store.state.appUrl + this.$route.path
                }]
            }
        },
        data() {
            return {
                category: 2,
            }
        },
        async asyncData({
            $axios,
            query,
            redirect
        }) {
            if (Object.keys(query).length === 0) {
                let res = await $axios.$get('turnirs', {
                    params: {
                        category: 2
                    }
                })
                return {
                    turnirs: res.turnirs,
                    cT: {
                        currentTime: res.time,
                        days: '...',
                        hours: '...',
                        minuts: '...',
                        seconds: '...',
                    },
                    loading: 0,
                    month: res.month
                }
            } else return redirect(302, '/turnir')
        },
        methods: {
            getData() {
                this.loading = 1
                this.$axios.get('/turnirs', {
                    params: {
                        category: this.category
                    }
                }).then((res) => {
                    this.turnirs = res.data.turnirs
                    this.cT.currentTime = res.data.time
                    this.loading = 0
                    this.month = res.data.month
                })
            },
            startTurnir(id) {
                let slug = this.turnirs[id].lat_name + '-' + this.turnirs[id].id
                if (this.$loginOrRoute()) {
                    this.$api.$get('/turnirs/' + slug).then((res) => {
                        this.$router.push({
                            name: 'turnir-slug',
                            params: {
                                slug: slug,
                                turnir: res.turnir,
                                turnir_users: res.turnir_users,
                                zhetekshi: res.zhetekshi,
                            }
                        });
                    });
                }
            },
            startTimer() {
                this.timer = setInterval(() => {
                    this.cT.currentTime--;
                    let s = this.cT.currentTime;
                    this.cT.days = Math.floor(s / 86400);
                    this.cT.hours = Math.floor((s % 86400) / 3600);
                    this.cT.minuts = Math.floor((s % 3600) / 60);
                    this.cT.seconds = Math.floor(s % 60);
                    if (s < 1) clearTimeout(this.timer);
                }, 1000)
            },
            setCategory(e) {
                this.category = e
                this.getData()
            },
            capitalizeFirstLetter(string) {
              if (!string) return '';
              return string.charAt(0).toUpperCase() + string.slice(1);
            }
        },
        mounted() {
            this.startTimer()
        }

    }

</script>

<style lang="scss" scoped>
    .turnir {
        background: linear-gradient(140.25deg, #DBF4FF 0.93%, #F3E7FF 82.61%);
    }

    .content {
        margin-top: 50px;
        padding-bottom: 100px;

        .head {
            padding: 0 35px;
        }

        h1 {
            font-family: Atyp Display;
            font-size: 36px;
            font-weight: 700;
            line-height: 52.2px;
            text-transform: uppercase;
            margin: 0;
        }

        .info {
            font-size: 20px;
            line-height: 28.2px;
        }

        .time {
            width: 130px;
            height: 81px;
            border-radius: 20px;
            background: #F5F6F8;
            box-shadow: -8px -8px 16px 0px #CFD5E1 inset, 8px 8px 15px 0px #CFD5E199;
            font-size: 16px;
            line-height: 20.56px;
            color: #7386A9;

            .value {
                font-size: 26px;
                font-weight: 700;
                line-height: 26px;
            }
        }

        .buttons {
            margin-top: 50px;
            padding-left: 45px;
            gap: 60px;
            overflow-x: auto;
            box-shadow: 0px 3px 6px 0px #0000001A;
            background: #F5F6F8;
            border-radius: 10px 10px 0px 0px;

            &::-webkit-scrollbar {
                display: none;
            }

            .btn {
                padding: 30px 0;
                font-size: 24px;
                line-height: 34.18px;
                color: #858A97;
                border-radius: 0;

                &.active {
                    color: #363636;
                    padding: 30px 0 26px;
                    border-bottom: 4px solid #363636;
                }
            }
        }

        .turnirs {
            border-radius: 0 0 10px 10px;
            background: #FFFFFF;
            padding: 20px 65px 40px;
            box-shadow: 0px 5px 10px 0px #0000000D;


            .list {
                background: #E2E8F4;
                gap: 1px;
            }

            .item {
                padding: 20px 0;
                font-size: 18px;
                line-height: 25.38px;
                color: #363636;
                background: #fff;

                img.imgturnir {
                    width: 40px;
                    height: 40px;
                }

                svg {
                    stroke: #363636;
                    min-width: 24px;
                    height: 24px;
                }

                &:hover {
                    color: #0045CB;

                    svg {
                        stroke: #0045CB;
                    }
                }
            }
        }
    }

    @media all and (max-width: 1439px) {
        .content .buttons {
            gap: 45px;
        }
    }

    @media all and (max-width: 1199px) {
        .content .info {
            flex-direction: column;
            gap: 15px;
        }

        .content h1 {
            font-size: 32px;
            line-height: 47.2px;
            text-align: center;
        }

        .content .time {
            width: 120px;
            height: 81px;
        }
    }

    @media all and (max-width: 991px) {
        .content .head {
            padding: 0;
        }

        .timer {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }

        .content .time {
            width: auto;
            height: 81px;
        }

        .content .time .value {
            font-size: 22px;
            line-height: 22px;
        }

        .content .buttons {
            margin-top: 40px;
            padding-left: 35px;
        }

        .content .turnirs {
            padding: 20px 35px 40px;
        }

        .content .buttons .btn {
            padding: 25px 0;
            font-size: 21px;
            line-height: 30.18px;

            &.active {
                padding: 25px 0 21px;
            }
        }
    }

    @media all and (max-width: 575px) {
        .content h1 {
            font-size: 28px;
            line-height: 43.2px;
        }

        .content .info {
            gap: 10px;
            font-size: 18px;
            line-height: 24.2px;
        }

        .content .time .value {
            font-size: 18px;
            line-height: 18px;
        }

        .content .time {
            font-size: 14px;
            line-height: 18.56px;
            height: 70px;
        }

        .timer {
            padding: 0 30px;
        }

        .content {
            margin-top: 40px;
            padding-bottom: 80px;
        }

    }

    @media all and (max-width: 445px) {
        .content {
            margin-top: 30px;
            padding-bottom: 60px;
        }

        .content h1 {
            font-size: 24px;
            line-height: 37.2px;
        }

        .timer {
            padding: 0 15px;
        }

        .content .info {
            font-size: 16px;
            line-height: 20.2px;
        }

        .content .buttons {
            margin-top: 30px;
            padding-left: 25px;
            gap: 30px;
        }

        .content .turnirs {
            padding: 10px 25px 30px;
        }

        .content .buttons .btn {
            padding: 20px 0;
            font-size: 18px;
            line-height: 21.18px;

            &.active {
                padding: 20px 0 18px;
            }
        }

        .content .turnirs .item {
            font-size: 16px;
            line-height: 22.38px;
        }


    }

</style>
