<template>
    <div class="banner">
        <div class="wrap">
            <div class="left">
                <div class="h">
                    {{month}} айының <span>зияткерлік олимпиадасына</span> тіркеліп үлгеріңіз!
                </div>
                <div class="desc">Портфолиоңызды толтыруға арналған ДИПЛОМДАР МЕН СЕРТИФИКАТТАР алып, санатыңызды көтеріңіз!</div>
            </div>
            <div class="right">
                <div class="timer">
                    <div class="time">
                        <div class="block d-flex aj-c">{{cT.days}}</div>
                        <div class="info">күн</div>
                    </div>
                    <div class="time">
                        <div class="block d-flex aj-c">{{cT.hours}}</div>
                        <div class="info">сағат</div>
                    </div>
                    <div class="time">
                        <div class="block d-flex aj-c">{{cT.minuts}}</div>
                        <div class="info">минут</div>
                    </div>
                    <div class="time">
                        <div class="block d-flex aj-c">{{cT.seconds}}</div>
                        <div class="info">секунд</div>
                    </div>
                </div>
                <div class="desc">
                    Олимпиаданың бітуіне қалған уақыт
                </div>
            </div>
            <nuxt-link to="/olimpiada">
                <bigBtn class="cstbtn">Толығырақ</bigBtn>
            </nuxt-link>
        </div>
    </div>
</template>


<script>
    import bigBtn from '@/components/forms/bigBtn.vue'
    export default {
        components: {
            bigBtn
        },
        data() {
            return {
                cT: {
                    currentTime: 0,
                    days: '...',
                    hours: '...',
                    minuts: '...',
                    seconds: '...',
                },
                month: '',
                timer: null,
            }
        },
        
        methods: {
            async firstGetData(){
                await this.$axios.$get('olimpiada/timer').then((res)=>{
                    let s = res.time
                    this.cT.currentTime = s
                    this.cT.days = Math.floor(s / 86400);
                    this.cT.hours = Math.floor((s % 86400) / 3600);
                    this.cT.minuts = Math.floor((s % 3600) / 60);
                    this.cT.seconds = Math.floor(s % 60);
                    this.startTimer()
                })
            },
            startTimer() {
                this.timer = setInterval(() => {
                    this.cT.currentTime--;
                    let s = this.cT.currentTime;
                    this.cT.days = Math.floor(s / 86400);
                    this.cT.hours = Math.floor((s % 86400) / 3600);
                    this.cT.minuts = Math.floor((s % 3600) / 60);
                    this.cT.seconds = Math.floor(s % 60);
                    if (s < 1) this.stopTimer();
                }, 1000)
            },
            stopTimer() {
                clearTimeout(this.timer)
            }
        },
        mounted(){
            var num = new Date().getMonth()
            const months = [ "Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр",  "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан" ]
            this.month = months[num]
            this.firstGetData()
        }
    }
</script>


<style scoped lang="scss">
    .banner {
        background: url('~assets/images/rek5_bg.png');
        background-size: cover;
        background-position: 50% 50%;
        border-radius: 20px;
        padding: 30px 40px 36px;

        .wrap {
            display: grid;
            grid-template-columns: 1fr auto;
            grid-gap: 20px;
        }

        .left {
            color: #FFFFFF;

            .h {
                font-size: 33px;
                font-weight: 800;
                line-height: 39px;

                span {
                    color: #FF8B0D;
                }
            }

            .desc {
                margin-top: 5px;
                font-size: 18px;
                font-weight: 400;
                line-height: 21px;
            }

        }

        .right {
            padding: 10px 24px;
            width: 276px;

            .timer {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-gap: 10px;
            }


            .time {
                display: flex;
                flex-direction: column;
                align-items: center;

                .block {
                    width: 50px;
                    height: 40px;
                    // font-family: "Gilroy-Bold";
                    font-size: 20px;
                    line-height: 25px;
                    color: #0A2342;
                    background: #FF8B0D;
                    border-radius: 6px;
                    box-shadow: 0px 11px 19px -7px rgb(255, 255, 255);
                    color: #fff;
                    text-align: center;
                    display: flex;
                    font-weight: 600;
                }

                .info {
                    // font-family: "Gilroy-Regular";
                    font-size: 12px;
                    line-height: 14px;
                    color: #FF8B0D;
                    margin-top: 10px;
                    text-transform: uppercase;
                }
            }

            .desc {
                font-size: 16px;
                font-weight: 400;
                line-height: 19px;
                text-align: center;
                color: #FF8B0D;
                margin-top: 10px;

            }
        }

        .cstbtn {
            width: 250px;
            height: 50px;
        }
    }
    @media all and (max-width: 1199px) {
        .banner {
            .wrap {
                display: flex;
                grid-gap: 20px;
                flex-direction: column;
                .right {

                }
            }
        }

        
    }
    @media all and (max-width: 1099px) {
        .banner .left .h {
            font-size: 23px;
            line-height: 28px;
        }

        .banner .left .desc {
            margin-top: 5px;
            font-size: 15px;
            font-weight: 400;
            line-height: 18px;
        }
    }

    @media all and (max-width: 991px) {
        .banner .wrap {
            grid-template-columns: 1fr;
        }

        .banner .right {
            margin: 0 auto;
        }

        .banner .left {
            text-align: center;
        }

        .banner .cstbtn {
            margin: 0 auto;
        }
    }

    @media all and (max-width: 767px) {
        .banner .left .desc {
            margin-top: 10px;
            font-size: 18px;
            font-weight: 400;
            line-height: 21px;
        }

        .banner {
            background: url('~assets/images/rek5_bg_mini.png');
            background-size: cover;
            background-position: 50% 87%;
            padding: 30px 20px;
            margin-top: 20px;
            .left {
                text-align: left;
                .h {
                    font-size: 20px;
                    line-height: 24px;
                }
                .desc {
                    font-size: 14px;
                    line-height: normal;
                }
            }
            .cstbtn {
                margin: 0px auto 15px;
                width: 100%;
            }
        }
    }

</style>
