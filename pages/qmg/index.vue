<template>
    <div>
        <div class="qmg">
            
            <div class="main1">
                <div class="cst-ct ">
                    <div class="wrapper-side ws">
                        <div class="hotslot"></div>
                         <div class="zhenldik">
                             <zhenildik :skidka="skidka" :cT="cT" :startTimer="startTimer" :getQmg="getQmg"/>
                         </div>
                    </div>
                </div>
            </div>
            <div class="main2">
                <div class="cst-ct ">
                    <div class="wrapper-side ws2">
                            <div class="hotslot"></div>
                            <div class="qmg_list">
                                <div class="qmg_sany">
                                    <div class="value">ҚМЖ саны: {{materials_count}}</div>
                                    <div><btnGroup class="btngroup" :category='qmgCat' placeholder='Пән: таңдауㅤ' type=3 @entered-category='qmgSearch($event)' /></div>
                                </div>
                                <qmj_list :materials='materials' :loading='loading' />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>

    import zhenildik from '@/components/materials/qmg/zhenildik.vue'
    import btnGroup from '@/components/forms/btnGroup.vue'
    import qmj_list from '@/components/materials/qmj_list.vue'

    export default {
        components: {
            zhenildik,
            btnGroup,
            qmj_list,
        },
        head() {
            return {
                skidka: null,
                title: 'ҚМЖ, қысқа мерзімді сабақ жоспарлары',
                meta: [{
                    hid: 'description',
                    name: 'description',
                    content: 'ҚМЖ, 472 бұйрық бойынша жазылған дайын Қысқа мерзімді сабақ жоспарларын осы беттен жүктеп алып сабақ барысында қолдана аласыз. ҚР білім және Ғылым министірлігінің стандарты бойынша жазылған'
                }, {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'қмж, қысқа мерзімді сабақ жоспарлары, 472 бұйрықпен жазылған қмж, қысқа мерзімді жоспар, 472 бұйрық үлгісі, қмж үлгісі, қмж жүктеу, краткосрочный план урока, Поурочные планы, қмж тегін жүктеу'
                }, ],
                link: [{
                    rel: 'canonical',
                    href: this.$store.state.appUrl + this.$route.path,
                }]
            }
        },
        data() {
            return {
                head: [{
                    link: '/qmg',
                    name: 'Дайын ҚМЖ',
                }, {
                    link: '/menin-qmjlarym',
                    name: 'Менің ҚМЖ-ларым',
                }],
                qmgCat: [],
                materials_count: 0,
                loading: 1,
                lastPage: 0,
                currentPage: 0,
                qmgCatInner: 0,
                materials: [],
                skidka: 0,
                skidkaActive: 0,
                timer: null,
                cT: {
                    days: '...',
                    hours: '...',
                    minuts: '...',
                    seconds: '...',
                }
            }
        },
        async asyncData({$axios}) {
            const res = await $axios.$get('/word/skidka' )
            return {
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
            qmgSearch(e) {
                this.loading = 1
                this.qmgCatInner = this.qmgCat[e].id;
                this.currentPage = 1;
                this.getQmg();
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
            async getQmg() {
                await this.$axios.$get('/word/qmg/bolimder', {
                    params: {
                        page: this.currentPage,
                        category: this.qmgCatInner,
                    }
                }).then((res) => {
                    this.materials = res.data.bolimder.data
                    this.currentPage = res.data.bolimder.current_page
                    this.lastPage = res.data.bolimder.last_page
                    this.materials_count = res.data.bolimder.total
                    this.loading = 0;
                    this.qmgCat = res.data.subjects
                    var fit = {
                        id: null,
                        name: 'Барлық пән'
                    }
                    this.qmgCat.unshift(fit)
                })
            }
        },

        mounted() {
            this.startTimer()
            
        },
        async fetch() {
            await this.getQmg()
        },

    }

</script>

<style scoped lang="scss">
    .qmg {
        padding-bottom: 100px;

        .main1{
            background: linear-gradient(140.25deg, #DBF4FF 0.93%, #F3E7FF 82.61%);
            border: 1px solid var(--Line-color, rgba(226, 232, 244, 1));
            // width: 100%;
            min-height: 420px;
            padding-bottom: 50px;

            .ws{
                grid-gap: 45px;
            }
        }
        .main2{
            min-height: 100vh;
            .ws2{
                grid-gap: 70px;

            }

            .qmg_sany{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 40px;
            }

        }

        .value {
            font-family: 'Atyp Text';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 23px;
            color: #858A97;



          
        }
        .list{
            margin-top: 30px;
        }
    }

    @media all and (max-width: 991px) {
        .qmg .head_t h1 {
            font-size: 30px;
            line-height: 35px;
        }
        .qmg_sany{
            .value{
                font-size: 14px;
            }
            
                
        }

    }

    @media all and (max-width: 883px) {

        .qmg_list{
            padding: 0 10px;
        }
        .qmg .head_t h1 {
            font-size: 27px;
            line-height: 31px;
        }

        .qmg .head_t {
            padding-top: 40px;
        }
    }

    @media all and (max-width: 767px) {
        .qmg .main1 .ws{
            grid-gap: 30px;
        }
    }


    @media all and (max-width: 500px) {

        .qmg .main2 .ws2{
            grid-gap: 10px;
        }
        .qmg .head_t h1 {
            font-size: 23px;
            line-height: 27px;
        }

        .qmg .head_t {
            padding-top: 35px;
        }
    }

    @media all and (max-width: 417px) {
        .qmg .head_t h1 {
            font-size: 20px;
            line-height: 23px;
        }
        .qmg .head_t {
            padding-top: 30px;
        }
    }

</style>
