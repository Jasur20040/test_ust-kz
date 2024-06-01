<template>
    <div>
        <div class="qmg_slug">
                <div class="cst-ct">
                    <div class="wrapper-side">
                        <div class="hotslot"></div>
                            <div class="main_sl">
                                <oplataPopup :price="balanceSell" :oplataOpen="oplataPopup" @closePopup="oplataPopup=0" @next="oplataPopup++" @setPopup="($event)=>{oplataPopup=$event}" @buyThisMaterial="getBuyType(oplataIndex)" material_id="oplataIndex" :type="oplataType" />
                                <header_kroshki :header="header" gotoUrl="/qmg" />
                                <div class="header">
                                    <div class="cst-ct">
                                        <div class="wrap">
                                            <div class="left">
                                                <h1 class="h3">
                                                    {{bolim.title}}
                                                </h1>
                                                <div class="list">
                                                    <img src="~assets/images/qmg/tick-circle.png" alt="">
                                                    <div class="li">Қазақ тілінде оқытатын мектептерге арналған</div><img src="~assets/images/qmg/tick-circle.png" alt="">
                                                    <div class="li">ҚР Білім және Ғылым министірлігінің стандарты бойынша жасалған</div><img src="~assets/images/qmg/tick-circle.png" alt="">
                                                    <div class="li">{{bolim.date}} арналған</div>
                                                </div>
                                            </div>
                                            <div class="right">
                                                <div class="image" :style="{backgroundImage: 'url('+$store.state.apiUrl+'/storage/files/' + bolim.path + ')'}"></div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="qmain">
                                    <div class="d-f tandatext">
                                        <img src="~assets/images/qmg/leftarrow.png" alt="arrow">
                                        <div class="h2">Тоқсанды және сыныптарды таңдаңыз</div>
                                        <img src="~assets/images/qmg/rightarrow.png" alt="arrow">
                                    </div>
                                    
                                                <div class="qmg_block">
                                                    
                                                    <div class="head">
                                                        
                                                            <div class="wrap">
                                                                <button v-for="(n,index) in 4" class="btn tBtn" :class="{active:user.toqsan==index}" @click="user.toqsan=index">{{n}}-тоқсан</button>
                                                            </div>
                                             

                                                    </div>
                                                    <div class="body">
                                                        <div class="qmg">
                                                            <div class="h">ҚМЖ {{user.toqsan+1}}-тоқсан</div>
                                                            <div v-if="qmgFilterValue(user.toqsan+1, 1)" class="wrap">
                                                                <template v-for="(qmg, index) in qmgs">
                                                                    <template v-if="qmg.qmg_order != null & qmg.toksan == user.toqsan+1 & qmg.type==1">
                                                                        <div @click="downloadFile(qmg)" class="block">
                                                                            <div>
                                                                                <div class="up">
                                                                                    <img src="~assets/images/qmg/iconfile.png" alt="">
                                                                                    <div class="text">ҚМЖ</div>
                                                                                </div>
                                                                                <div class="bottom">
                                                                                    <div class="title">
                                                                                        {{qmg.synyp_text}}
                                                                                    </div>
                                                                                    <div class="price">
                                                                                        {{qmg.price}} тг
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="cst_size_btn">
                                                                                <svg class="icon1" viewBox="0 0 20 21"  xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M17.5 18H2.5M15 9.66667L10 14.6667M10 14.6667L5 9.66667M10 14.6667V3"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                                </svg>
                                                                                <button class="btn cst_btn green">Жүктеу </button>
                                                                            </div>
                                                                        </div>
                                                                    </template>
                                                                    <template v-else>
                                                                        <div v-if="qmg.toksan == user.toqsan+1 & qmg.type==1" class="block" @click="buyNow(index)">
                                                                            <div>
                                                                                <div class="up">
                                                                                    <img src="~assets/images/qmg/iconfile.png" alt="">
                                                                                    <div class="text">ҚМЖ</div>
                                                                                </div>
                                                                                <div class="bottom">
                                                                                    <div class="title">
                                                                                        {{qmg.synyp_text}}
                                                                                    </div>
                                                                                    <div class="price">
                                                                                        {{qmg.price}} тг
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="cst_size_btn">
                                                                                <button class="btn cst_btn">Сатып алу </button>
                                                                                <svg class="icon2" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 8 13" fill="none">
                                                                                    <path d="M1.5 11.5L6.5 6.5L1.5 1.5"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                                </svg>

                                                                            </div>
                                                                        </div>
                                                                    </template>
                                                                </template>
                                                            </div>
                                                            <div v-else class="error-list d-f j-c a-c">
                                                                <img class="error_img" src="~assets/images/qmg/iconfile.png" alt="">
                                                                <div class="desc">Ақпарат енгізілмеген</div>
                                                            </div>
                                                            <div class="h">Презентациялар {{user.toqsan+1}}-тоқсан</div>
                                                            <div v-if="qmgFilterValue(user.toqsan+1, 2)" class="wrap present">
                                                                <template v-for="(qmg, index) in qmgs">
                                                                    <template v-if="qmg.qmg_order != null & qmg.toksan == user.toqsan+1 & qmg.type==2">
                                                                        <div @click="downloadFile(qmg)" class="block">
                                                                            <div>
                                                                                <div class="up">
                                                                                    <img src="~assets/images/qmg/iconpdf.png" alt="">
                                                                                    <div class="text">Презентация</div>
                                                                                </div>
                                                                                <div class="bottom">
                                                                                    <div class="title">
                                                                                        {{qmg.synyp_text}}
                                                                                    </div>
                                                                                    <div class="price">
                                                                                        {{qmg.price}} тг
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="cst_size_btn">
                                                                                <svg class="icon1"  viewBox="0 0 20 21"  xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M17.5 18H2.5M15 9.66667L10 14.6667M10 14.6667L5 9.66667M10 14.6667V3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                                </svg>
                                                                                <button class="btn cst_btn green">Жүктеу</button>
                                                                            </div>
                                                                        </div>
                                                                    </template>
                                                                    <template v-else>
                                                                        <div v-if="qmg.toksan == user.toqsan+1 & qmg.type==2" class="block" @click="buyNow(index)">
                                                                            <div>
                                                                                <div class="up">
                                                                                    <img src="~assets/images/qmg/iconpdf.png" alt="">
                                                                                    <div class="text">Презентация</div>
                                                                                </div>
                                                                                <div class="bottom">
                                                                                    <div class="title">
                                                                                        {{qmg.synyp_text}}
                                                                                    </div>
                                                                                    <div class="price">
                                                                                        {{qmg.price}} тг
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="cst_size_btn">
                                                                                <button class="btn cst_btn">Сатып алу</button>
                                                                                <svg class="icon2" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 8 13" fill="none">
                                                                                    <path d="M1.5 11.5L6.5 6.5L1.5 1.5"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                    </template>
                                                                </template>
                                                            </div>
                                                            <div v-else class="error-list d-f j-c a-c">
                                                                <img class="error_img" src="~assets/images/qmg/iconpdf.png" alt="">
                                                                <div class="desc">Ақпарат енгізілмеген</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div v-if="skidka" class="skidka">
                                                    <div class="h_title">Жеңілдікпен алу</div>
                                                    <div class="h_desc">Бір тоқсанның ішіне барлық сыныптар ҚМЖ және презентациялар кіреді</div>
                                                    <div class="s_block">
                                                        <div class="left">
                                                            <div class="to_date">{{skidka.to_date.day}} - {{skidka.to_date.month}} дейін</div>
                                                            <div class="same_skidka">{{skidka.skidka}}% жеңілдік</div>
                                                            <div class="desc">Жеңілдік уақыты шектеулі, алып үлгеріңіз!</div>
                                                        </div>
                                                        <div class="right">
                                                            <div class="desce">Жеңілдіктің бітуіне қалды</div>
                                                            <div class="timer">
                                                                <div class="time">
                                                                    <div class="block d-flex aj-c">{{cT.days}}</div>
                                                                    <div class="info">Күн</div>
                                                                </div>
                                                                <div class="time">
                                                                    <div class="block d-flex aj-c">{{cT.hours}}</div>
                                                                    <div class="info">Сағат</div>
                                                                </div>
                                                                <div class="time">
                                                                    <div class="block d-flex aj-c">{{cT.minuts}}</div>
                                                                    <div class="info">Минут</div>
                                                                </div>
                                                                <div class="time">
                                                                    <div class="block d-flex aj-c">{{cT.seconds}}</div>
                                                                    <div class="info">Секунд</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="toqsandar">
                                                        <div v-for="n in 4" class="t_block" >
                                                            <div class="head d-f a-c">
                                                                <div class="left d-f a-c j-b w-100">
                                                                    <div class="name">{{n}} - тоқсан</div>
                                                                    <div  v-if="calculate(n)" class="left other d-f a-c">
                                                                        <div class="skidkatext d-f a-c "><img src="~assets/images/qmg/verify.png" alt=""><div class="textt">ҚМЖ {{n}} тоқсан: <template v-for="qmg in qmgs">{{qmg.toksan == n & qmg.type == 1 ? qmg.synyp_text : ''}}</template></div></div>
                                                                        <div class="skidkatext d-f a-c"><img src="~assets/images/qmg/verify.png" alt=""> <div class="textt">Презентация {{n}}-тоқсан: <template v-for="qmg in qmgs">{{qmg.toksan == n & qmg.type == 1 ? qmg.synyp_text : ''}}</template></div></div>
                                                                        <div class="price d-f a-c">
                                                                            <div class="newPrice"><span>{{calculate(n, skidka.percent)}}</span> тг</div>
                                                                            <div class="oldPrice"><span>{{calculate(n)}}</span> тг</div>
                                                                        </div>
                                                                        <cstBtn @click.native="buySetQmgs(n)" class="cst_size_btn" text="Сатып алу" />
                                                                    </div>
                                                                    <div v-else  class="left isBuying">
                                                                        <div class="skidkatext d-f a-c "><img src="~assets/images/qmg/verify.png" alt=""><div class="textt">ҚМЖ {{n}} тоқсан: <template v-for="qmg in qmgs">{{qmg.toksan == n & qmg.type == 1 ? qmg.synyp_text : ''}}</template></div></div>
                                                                        <div class="skidkatext d-f a-c"><img src="~assets/images/qmg/verify.png" alt=""> <div class="textt">Презентация {{n}}-тоқсан: <template v-for="qmg in qmgs">{{qmg.toksan == n & qmg.type == 2 ? qmg.synyp_text : ''}}</template></div></div>
                                                                        <div class=" price d-f a-c">
                                                                            <div class="newPrice"><span>{{calculate(n, skidka.percent)}}</span> тг</div>
                                                                            <div class="oldPrice"><span>{{calculate(n)}}</span> тг</div>
                                                                        </div>
                                                                        <div class="text_buy"><img src="~assets/images/qmg/tick-circleqmg.png">Сатып алынды</div>
                                                                    </div>
                                                                </div>
                                                                
                                                            </div>
                                                          
                                                            <cstBtn v-if="calculate(n)" @click.native="buySetQmgs(n)" class="w-100 mobile" text="Сатып алу" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                                                </div>
                                                            </div>
                                                    </div>
                                            </div>
                                            <qmg class="qmg_video" :youtube="bolim.video" />
           
       
     </div>
</template>

<script>
    import header_kroshki from '@/components/header_kroshki.vue'
    import cstBtn from '@/components/forms/btn.vue'
    import qmg from '@/components/landing/qmg.vue'
    import oplataPopup from '@/components/popups/oplataPopup.vue'
    import zhenildik from '@/components/materials/qmg/zhenildik.vue'

    export default {
        head() {
            return {
                title: this.headTitle,
                meta: [{
                    hid: 'description',
                    name: 'description',
                    content: this.headDescription
                }],
                link: [{
                    rel: 'canonical',
                    href: this.$store.state.appUrl + this.$route.path
                }]
            }
        },
        components: {
            header_kroshki,
            cstBtn,
            qmg,
            oplataPopup,
            zhenildik,
        },
        data() {
            return {
                user: {
                    toqsan: 0,
                    qmg: [],
                },
                skidka: 0,
                skidkaActive: 0,
                link: '',
                loading: 0,
                error: '',
                balanceSell: 3000,
                oplataPopup: 0,
                oplataIndex: 0,
                oplataType: 0,
                timer: null,
                cT: {
                    days: '...',
                    hours: '...',
                    minuts: '...',
                    seconds: '...',
                }
            }
        },
        async asyncData({$axios,params}) {
            const res = await $axios.$get('/word/qmg/' + params.slug)
            return {
                bolim: res.bolim,
                header: [{
                        name: 'Дайын ҚМЖ',
                        link: '/qmg',
                    },
                    {
                        name: res.bolim.title
                    },
                ],
                qmgs: res.qmg,
                headTitle: res.bolim.title + ' - ҚМЖ',
                headDescription: res.bolim.title + ' - жүктеп сабақ барысында қолдануға болады.  (Оқу жылы) оқу жылына  арналған - ҚР Білім және Ғылым министірлігінің стандарты бойынша жасалған',
                skidka: res.skidka,
                cT: {
                    currentTime: res.skidka ? res.skidka.total : 0,
                    days: '...',
                    hours: '...',
                    minuts: '...',
                    seconds: '...',
                },
            }
        },
        

        methods: {
            openSkidkaInfo(n) {
                this.skidkaActive == n ? this.skidkaActive = 0 : this.skidkaActive = n
            },
            buyNow(index) {
                if (this.$loginOrRoute()) {
                    this.loading = 1
                    this.oplataPopup = 6
                    this.oplataIndex = index
                    this.oplataType = 0
                    console.log(index)
                    this.$api.$post('/word/qmg/buy', {
                        qmg_id: this.qmgs[index].id,
                        bolim_id: this.bolim.id,
                        bolimname: this.bolim.title
                    }).then((res) => {
                        if (res.status == false) {
                            this.oplataPopup = 5
                            this.balanceSell = this.qmgs[index].price
                        } else {
                            this.oplataPopup = 7
                            this.qmgs[index].qmg_order = res.qmg_order
                            this.clearFeedBack()
                        }
                        this.loading = 0
                    }).catch((err) => {
                        this.loading = 0
                    })
                }
            },
            buySetQmgs(toksan) {
                if (this.$loginOrRoute()) {
                    this.oplataPopup = 6
                    this.oplataIndex = toksan
                    this.oplataType = 1
                    this.$api.$post('/word/qmg/' + this.bolim.id + '/buy-set-qmgs/' + toksan).then((response) => {
                        if (response.status == true) {
                            this.qmgs = response.qmgs
                            this.oplataPopup = 7
                        } else if (response.status == false) {
                            this.balanceSell = response.total
                            this.oplataPopup = 5
                        }
                    }).catch((err)=>{
                        console.log(err)
                    })
                }
            },
            getBuyType(e) {
                this.oplataType ? this.buySetQmgs(e) : this.buyNow(e)
            },
            downloadFile(qmg) {
                this.$axios.$get('/word/qmg/' + qmg.id + '/download', {
                    responseType: 'blob'
                }).then(res => {
                    const blob = new Blob([res]);
                    const link = document.createElement('a');
                    link.href = window.URL.createObjectURL(blob);
                    link.download = qmg.path.slice(4);
                    link.click();
                    console.log('success download');
                })
            },
            clearFeedBack() {
                this.user.qmg = []
            },
            calculate(toksan, skidka = null) {
                var price = 0
                var result = this.qmgs.reduce((total, qmg) => {
                    price = qmg.toksan == toksan & qmg.qmg_order == null ? qmg.price : 0
                    return total + price
                }, 0)
                return Math.trunc(skidka ? result * skidka : result);
            },
            qmgFilterValue(toksan, type) {
                var result = this.qmgs.reduce((total, qmg) => {
                    var value = qmg.toksan == toksan & qmg.type == type ? 1 : 0
                    return total + value
                }, 0)
                return result;
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
            }
        },
        mounted() {
            this.startTimer()
            var buy = this.$route.query.buy
            var type = this.$route.query.type ?? 0
            if(buy){
                this.oplataType = type
                this.getBuyType(buy)
            }
        }
    }
</script>



<style scoped lang="scss">
    .ws{
        grid-gap: 65px;
}
    

    .fade-enter-active,
    .fade-leave-active {
        transition: .2s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
        transition: .2s;
    }
    .qmg_slug{
        background: linear-gradient(140.25deg, #DBF4FF 0.93%, #F3E7FF 82.61%);

    }
    .header {
        
        padding: 30px 35px;

        /*        border-bottom: 1px solid #D6D6D6;*/
        .h3 {
            font-size: 28px;
            font-weight: 600;
            line-height: 40.29px;
            text-align: left;
        }

        .wrap {
            display: grid;
            grid-template-columns: 1fr auto;
            grid-gap: 30px;
           

            .list {
                margin-top: 10px;
                display: grid;
                grid-template-columns: auto 1fr;
                align-items: center;
                grid-gap: 10px;

                .li {
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 22.56px;
                    text-align: left;

                }
            }

            .right .image {
                width: 198px;
                height: 250px;
                border-radius: 20px;
                background-position: 50% 50%;
                background-size: cover;
                margin: 0 auto;
            }

            .cstBtn {
                width: 225px;
                height: 50px;
                margin-top: 30px;
            }
        }
    }
    

    .qmain {
        position: relative;
        

        .tandatext{
            padding: 0px 20px;
            justify-content: center;
            align-items: flex-start;
            gap: 10px;
            margin-bottom: 20px;
            .h2 {
            font-family: Raleway;
            font-size: 24px;
            font-weight: 500;
            line-height: 28.18px;
            text-align: start;
            color: var(--Icon-color, rgba(170, 189, 225, 1));
                }
        }
        


        .qmg_block {
            width: 100%;
            background: #FFFFFF;
            box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            padding-bottom: 50px;
            margin-bottom: 80px;

            .head {
                border-radius: 10px 10px 0px 0px;
                background: var(--Background, #F5F6F8);
                box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.10);

                .wrap {
                    width: 100%;
                    display: inline-flex;
                    align-items: start;
                    justify-content: center;
                    gap: 100px;
                }
                .tBtn {
                    color: var(--Text-color-2, #858A97);
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: normal;
                    padding: 26px 0 ;
                    border-radius: 0;
                    

                    &:hover {
                        color: var(--Text-color-1, #172856);
                        border-bottom: 2px solid #172856;
                    }

                    &.active {
                        color: var(--Text-color-1, #172856);
                        border-bottom: 2px solid #172856;
                        
                    }

                }
            }

            .body {
                padding: 0 24px;


                .qmg {
                    .h {
                        color: var(--Text-color-1, #172856);
                        font-family: "Atyp Text";
                        font-size: 32px;
                        font-weight: 300;
                        letter-spacing: 3.2px;
                        text-align: center;
                        line-height: normal;
                        margin: 40px 0 30px 0;

                    }

                    .wrap {
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr 1fr;
                        grid-gap: 20px;

                        .block {
                            background: #FFFFFF;
                            border-radius: 10px;
                            box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.15);
                            
                            text-align: start;
                            transition: 0.2s;
                            position: relative;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            overflow: hidden;
                            outline: 1px solid #ffffff;

                            .up {
                                display: flex;
                                justify-content: start;
                                align-items: center;
                                padding: 5px 10px;
                                border-radius: 10px;
                                background: var(--Background, #F5F6F8);
                                margin: 10px;
                                gap: 5px;

                                .text {
                                    color: var(--Yellow, #FF8B0D);
                                    text-align: center;
                                    font-family: "Atyp Text";
                                    font-size: 16px;
                                    font-style: normal;
                                    font-weight: 500;
                                    line-height: normal;

                                }
                            }

                            .bottom {
                                padding: 0 30px 0;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;

                                .title {
                                    font-size: 24px;
                                    font-style: normal;
                                    font-weight: 600;
                                    line-height: normal;
                                }

                                .price {
                                    font-size: 16px;
                                    font-style: normal;
                                    font-weight: 400;
                                    line-height: normal;
                                }
                            }

                            .cst_size_btn {
                            
                                display: flex;
                                align-items: center ;
                                grid-gap: 10px;
                                margin-top: 15px;
                                border-top: 1px solid var(--Line-color, #E2E8F4);
                                border-radius:0;
                                
                                padding: 15px 30px ;

                      
                            }
                            .icon1, .icon2{
                                stroke: #1E63E9;
                                transition: 0.3s;
                            }
                                .icon2{
                                    margin-top: 3px;
                                width: 15px;
                                height: 15px;
                                }
                                .icon1{
                                width: 20px;
                                height: 20px;
                                }
                                

                            .cst_btn {
                                color: #1E63E9;
                                font-size: 16px;
                                font-weight: 500;
                                padding: 0;
                                line-height: 22.78px;
                                border: none;
                                

                                // &.green {
                                //     border: 1px solid #0045CB;
                                //     background: #0045CB !important;
                                //     color: #FFFFFF;
                                // }
                            }

                            &:hover {

                                cursor: pointer;
                                outline: 1px solid #0045CB;

                                .cst_size_btn {
                                    background: #0045CB;
                                }
                                .cst_btn{
                                    color: var(--White, #FFF);
                                }
                                .icon1, .icon2{
                                stroke: #fff;

                            }

                            
                            }

                        }

                        &.present {
                            .up {
                                background: var(--Background, #F5F6F8);

                                .text {
                                    color: #E03303;
                                }
                            }
                        }
                    }

                    .error-list {
                        flex-direction: column;
                        margin-top: 30px;
                        padding-bottom: 44px;

                        .desc {
                            color: #888888;
                            font-size: 20px;
                            font-weight: 700;
                            line-height: 23px;
                            margin-top: 10px;
                        }
                    }
                }
            }
        }


        .skidka {
            width: 100%;
            margin: 100px auto 0;
            padding: 70px 10px 80px;
            font-family: Atyp Text;
            color: rgba(23, 40, 86, 1);

            .h_title {
                font-size: 32px;
                font-weight: 600;
                line-height: 46.05px;
                text-align: left;

            }

            .h_desc {
                font-size: 16px;
                font-weight: 400;
                line-height: 22.56px;

            }

            .s_block {
                background: linear-gradient(140.25deg, #C8FFE5 0.93%, #F5FFDA 82.61%);
                border: 1px solid #E2E8F4;
                border-radius: 10px;
                padding: 35px 26.5px;
                margin-top: 30px;
                display: flex;
                justify-content: space-between;

                .to_date {
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 21.6px;
                    

                }

                .same_skidka {
                    font-size: 40px;
                    font-weight: 600;
                    line-height: 43.2px;
                    color: rgba(255, 139, 13, 1);
                    margin: 10px 0;

                }

                .desc {
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 22.56px;
                    color: rgba(133, 138, 151, 1);

                }
                .right{


                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 10px 40px;
                        gap: 10px;
                        background: #172856;
                        border-radius: 20px;

                }

                .desce {

                    font-size: 16px;
                    font-weight: 400;
                    line-height: 22.78px;
                    color: rgba(255, 255, 255, 1);


                }

                .timer {
                    margin-top: 15px;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    grid-gap: 10px;

                    .time {
                        display: flex;
                        flex-direction: column;
                        align-items: center;

                        .block {
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            padding: 4px 12px;
                            width: 49px;
                            height: 37px;
                            background: #FF8B0D;
                            border-radius: 6px;
                            font-size: 20px;
                            font-weight: 400; 
                            line-height: 28.78px;
                            color: #fff;

                        }

                        .info {
                            font-family: 'Gilroy-Regular';
                            font-size: 12px;
                            line-height: 14px;
                            color: rgba(133, 138, 151, 1);
                            margin-top: 5px;
         

                        }
                    }
                }
            }

            .toqsandar {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                width: 100%;
                justify-content: center;
                justify-items: center;
                align-content: center;
                gap: 20px;
                margin-top: 50px;

                .t_block {
                    width: 100%;
                    flex-shrink: 0;
                    border-radius: 10px;
                    border: 1px solid var(--Line-color, #E2E8F4);
                    background: var(--Background, #F5F6F8);
                    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.15);
                    padding: 30px 30px 30px 40px;

                    &:hover {
                        cursor: pointer;
                        

                    }

                    .skidkatext{
                        gap: 10px;
                        .textt{
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 500;
                            line-height: normal;
                        }
                    }

                    .head {
                        display: flex;
                        flex-direction: column;
                        gap: 20px;

                        .left {
                            display: inline-flex;
                            flex-direction: column;
                            align-items: flex-start;
                            gap: 10px;
                            line-height: normal;
                   

                            .name {
                                font-size: 24px;
                                font-weight: 700;
                                line-height: 28px;
                            }

                            .isBuying .text_buy {
                                margin-top: 10px;
                                display: flex;
                                width: 220px;
                                height: 40px;
                                padding: 10px;
                                justify-content: center;
                                align-items: center;
                                gap: 10px;
                            }

                            .newPrice {
                                color: var(--Green, #03B113);
                                text-align: center;
                                font-size: 24px;
                                font-style: normal;
                                font-weight: 600;
                                

                               
                            }

                            .oldPrice {
                                color: var(--Icon-color, #AABDE1);
                                text-align: center;
                                font-size: 16px;
                                font-style: normal;
                                font-weight: 400;
                                padding: 5px 0 0 0;
                                text-decoration-line: line-through;
                                
                            
                            }
                            .price{
                                column-gap: 10px;
                            }

                            .cst_size_btn {
                                margin-top: 10px;
                                display: flex;
                                width: 220px;
                                height: 40px;
                                padding: 10px;
                                justify-content: center;
                                align-items: center;
                                gap: 10px;
                                border-radius: 5px;
                                background: var(--Button-color-1, #1E63E9);

                                &:hover{
                                    background: var(--Hover, rgba(0, 69, 203, 1));
                                }
                            }
                        }

                        .right {
                            display: flex;
                            align-items: center;
                            gap: 20px;

                            &:hover {
                                cursor: default;
                            }

                            .openBtn {
                                padding: 0;
                            }

                            img {
                                width: 24px;
                                height: 24px;
                            }
                        }
                    }

                    .mobile {
                        display: none;
                        height: 46px;
                        margin-top: 20px;
                    }

                    .body {
                        overflow: hidden;

                        &:hover {
                            cursor: default;
                        }

                        .li {
                            margin-top: 15px;
                            display: flex;
                            gap: 10px;
                            font-size: 16px;
                            line-height: 19px;
                        }
                    }
                }
            }
            .qmain .qmg_block .body .qmg .error-list .error_img{
                
                 filter: grayscale(100%);
                 width: 40px;
        }

        }
    }
    @media all and (max-width: 1439px) {
        .qmain{
            .qmg_block {
            .body{
                .qmg{
                    .wrap{
                        
                        grid-template-columns: 1fr 1fr 1fr;
        
                    }
                }
            }
        }

        }
    
        .qmain .skidka{

            .toqsandar{
                 grid-template-columns: 1fr 1fr;
                }
        } 
    }


    @media all and (max-width: 1199px) {
        .qmain{
            .qmg_block  .head .wrap{
                gap: 50px
            }
             .skidka {   
            max-width: 940px;
            padding: 0;
            padding-bottom: 70px;
        }}
    }

    @media all and (max-width: 1099px) {
        .qmain .qmg_block {
           width: 100%;
        }

        .qmain .skidka .s_block {

            display: block;
            text-align: center;
            .right{
                margin-top: 10px;
            }
        }

        .qmain .qmg_block .body .qmg .wrap {
            grid-template-columns: 1fr 1fr 1fr;
        }

        .qmain .skidka .h_title {
            font-size: 28px;
            line-height: 34px;
        }

    

    }

    @media all and (max-width: 991px) {
        .header .wrap {
            grid-template-columns: 1fr;

        }
        .left {
            grid-row: 2;
        }
        .qmain .qmg_block {
            max-width: 570px;
        }

        .qmain .qmg_block .body .qmg .wrap {
            grid-template-columns: 1fr 1fr;
        }

        .qmain .qmg_block .head {
            .tBtn{
                font-size: 14px;
            }
            .h2 {
            font-size: 22px;
            line-height: 25px;
            padding-bottom: 20px;
        }
    }
    
    .qmain .qmg_block  .head .wrap{
                gap: 30px;


            }

        .qmain .qmg_block .body .qmg {
            .wrap {
                .block .up{
                    img{
                        width: 25px;
                    }
                    .text{
                    font-size: 14px;
                }
                }
                .block .cst_btn{
                    font-size: 14px;
                }
                .h {
                        font-size: 20px;
                        line-height: 25px;
                        margin-top: 40px;
            
        }
            }
        }
        .qmain .tandatext{
            .h2{
            font-size: 20px;
            text-align: center;
        }
        img{
            width: 20px;
          
        }
        }
        .qmain .qmg_block .body .qmg .wrap .block .bottom
        {

            padding: 0 25px  ;
        
        .title {
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 5px;
        }
        } 

        .header .h3 {
            font-size: 22px;
            line-height: 26px;
        }

        .header .wrap .list .li {
            font-size: 15px;
        }

        .qmain .skidka {
            .toqsandar{
                 grid-template-columns: 1fr;
                }
            
        }

        .qmain .skidka .s_block .to_date {
            font-size: 18px;
            line-height: 20px;
        }

        .qmain .skidka .s_block .same_skidka {
            font-size: 36px;
            line-height: 39px;
        }

        .qmain .skidka .s_block .desc {
            font-size: 12px;
            line-height: 16px;
        }

        .qmain .skidka .s_block .desce {
            font-size: 18px;
            line-height: 19px;
        }

        .qmain .skidka .toqsandar .t_block .head .left .newPrice {
            font-size: 20px;
            line-height: 24px;
        }

        .qmain .skidka .toqsandar .t_block .head .left .oldPrice {
            font-size: 18px;
            line-height: 20px;
        }


    }

    @media all and (max-width: 883px) {



        .qmain .skidka .h_title {
            font-size: 24px;
            line-height: 32px;
        }

        .qmain .skidka .h_desc {
            font-size: 14px;
            line-height: 16px;
        }

        .qmain .skidka .s_block {
            padding: 30px 30px 30px;
            margin-top: 20px;
          
        }

        .qmain .skidka .s_block .timer {
            width: 90%;
            margin: 10px auto 0;
        }

        .qmain .skidka .s_block .desce {
            font-size: 16px;
            line-height: 17px;
            text-align: center;
        }

       

        .qmain .skidka .toqsandar .t_block .head .left .cst_size_btn {
            display: none;
        }

        .qmain .skidka .toqsandar .t_block .mobile {
            display: block;
            border-radius: 5px;
        }

   

    }

    @media all and (max-width: 767px) {
        .header .wrap {
            grid-template-columns: 1fr;
        }
        .header{
            padding:  30px 10px;
        }
        .main_header{
            padding: 30px 0;
        }
        .left {
            grid-row: 2;
        }

        .qmain {
            position: relative;
            transform: translateY(-60px);
            padding: 0 10px;
        }

        .header .h3 {
            font-size: 20px;
            line-height: 24px;
        }
        .qmain .tandatext{
            margin-top: 15%;
        }

    }

    @media all and (max-width: 575px) {
        .qmain {
            padding: 0;
        }
        .header{
            padding:  30px 0px;
        }
        .qmain .qmg_block .head .h2 {
            font-size: 20px;
            line-height: 23px;
            padding-bottom: 20px;
        }

        .qmain .qmg_block .body .qmg .h {
            font-size: 24px;
            line-height: 33.62px;
            margin-top: 30px;

        }

        .qmain .qmg_block .head .tBtn {
            font-size: 16px;
        }

        .qmain .qmg_block .body .qmg .wrap .block .bottom .title {
            font-size: 18px;
            line-height: 22px;
        }

        .qmain .qmg_block .body .qmg .wrap .block .bottom {
            padding: 15px 30px 0;
        }

        // .qmain .qmg_block .head {
        //     padding: 40px 50px 0;
        // }

       

        .qmain .skidka .toqsandar .t_block {
            padding: 25px;
        }

        .qmain .skidka .toqsandar {
            margin-top: 40px;
        }
    }

    @media all and (max-width: 500px) {


        .qmain .qmg_block .head .h2 {
            padding: 0 40px 20px;
        }

        .qmain .qmg_block .body {
            padding: 0 20px 50px;
        }

        .qmain .qmg_block .body .qmg .wrap {
            grid-gap: 10px;
        }

        .header .h3 {
            font-size: 18px;
            line-height: 22px;
        }

        

        .qmain .skidka .toqsandar .t_block {
            padding: 20px;
        }

        .qmain .skidka .toqsandar {
            margin-top: 35px;
        }

        .qmain .skidka,
        .qmain .qmg_block {
            border-radius: 26px;
        }

        .qmain .qmg_block .body {
            border-radius: 0 0 26px 26px;
        }

        .qmain .skidka .toqsandar .t_block .body .li {
            margin-top: 10px;
            font-size: 14px;
            line-height: 16px;
        }

        .qmain .skidka .toqsandar .t_block .head {
            padding-bottom: 10px;
        }



    }

    @media all and (max-width: 440px) {
        .qmain .qmg_block .body .qmg .wrap .block {
            .cst_size_btn{
                padding: 15px ;
            }   
        }
        .qmain .qmg_block .body .qmg .wrap .block .bottom {
            padding: 5px 15px 0;
        }
        .qmain .qmg_block .body .qmg .wrap .block .bottom .price{
            font-size: 14px;
            line-height: 19.74px;
        }
        
        .qmain .qmg_block .body .qmg .wrap .block .bottom .title {
            font-size: 16px;
            line-height: 23.02px;
        }
        .qmain .qmg_block .head .tBtn {
            font-size: 14px;
        }
        .qmain .qmg_block .head{
           
            width: 100%;
            overflow-x: auto; 
            

            
        }


        }


        .qmain .qmg_block .head .wrap {
            display: flex;
            white-space: nowrap; 
            
            

            &::-webkit-scrollbar {
                display: none;
                -ms-overflow-style: none; 
                scrollbar-width: none; 
            }
        }

        .qmain .qmg_block .head .head-wrap .tBtn {

            width: 110px;
        }
        .qmain .skidka .s_block .right{
            padding: 10px 25px;
        }



        @media all and (max-width: 375px){
            .qmain .qmg_block .body .qmg .wrap .block .up .text {
                font-size: 12px;
            }
            .qmain .qmg_block .body .qmg .wrap .block .up img{
                width: 20px;
            }
            .qmain .qmg_block .head .tBtn {
            font-size: 12px;
        }
        .qmain .qmg_block .head .wrap{
            gap: 15px;
        }
        .qmain .qmg_block .body .qmg .wrap .block {
            .cst_size_btn{
                padding: 10px;
            }   
        }
        .qmain .skidka .s_block {
            .timer{
                grid-gap: 4px;
            }
            .right{
            padding: 10px;
        }

        }

        .icon1{
            min-width: 15px;
            min-height: 15px;
        }
        .icon2{
            min-width: 15px;
            min-height: 15px;
        }
        }
        @media all and (max-width: 335px){
            .qmain .skidka .s_block {
            .right{
            padding: 5px;
        }
    }
        }


    

</style>
