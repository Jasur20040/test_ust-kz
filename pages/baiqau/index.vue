<template>
    <div>
        <section class="olimp baiqau">
            <div class="cst-ct">
                <div class="wrapper-side">
                    <div class="hotslot"></div>
                    <div class="content">
                        <div class="pd">
                            <div class="headtitle">Республикалық байқаулар кестесі</span></div>
                            <nuxt-link to="/olimpiada/test/enter-code">
                                <bigBtn class="cstBtn">Код арқылы тапсыру</bigBtn>
                            </nuxt-link>
                        </div>
                        <div class="buttons d-f">
                            <button @click="changeCatType(1)" class="btn" :class="{active:cat_category==1}">Ұстаздар</button>
                            <button @click="changeCatType(4)" class="btn" :class="{active:cat_category==4}">Тәрбиешілер</button>
                            <button @click="changeCatType(3)" class="btn" :class="{active:cat_category==3}">Оқушылар</button>
                            <button @click="changeCatType(2)" class="btn" :class="{active:cat_category==2}">Студенттер</button>
                            <button @click="changeCatType(5)" class="btn" :class="{active:cat_category==5}">Тегін</button>
                        </div>
                        <div class="turnirs">
                           <template v-if="baiqaus.length==0">
                            <div class="not_found d-f aj-c fd-c gap-20 t-c">
                                <img src="~/assets/images/svg/document.svg" alt="">
                                <div class="head">Бұл жерде {{getQatysushy()}} арналған<br>байқаулар жақын арада пайда болады.</div>
                            </div>
                        </template>
                            <div class="list baiqau grid-2 gap-20">
                                <NuxtLink v-for="(baiqau, index) in baiqaus" :key="'baiqau-' + baiqau.idd" :to="'/baiqau/'+baiqau.lat_name+'-'+baiqau.idd" class="block">
                                    <div class="d-f a-c j-b gap-20">
                                        <div class="title">{{baiqau.bagyt}}</div>
                                        <div class="socket d-f aj-c">
                                            <atr />
                                        </div>
                                    </div>
                                    <div class="d-f a-c gap-10 mt-10">
                                        <img src="~assets/images/baiqau/calendar.svg" alt="">
                                        <div class="info"><span>Уақыты:</span> 1-{{baiqau.lastDayInMonth}} {{getMonth(baiqau.month)}} аралығында</div>
                                    </div>
                                    <div class="d-f a-c gap-10 mt-10">
                                        <img src="~assets/images/baiqau/wallet.svg" alt="">
                                        <div class="info"><span>Жарнасы:</span> {{baiqau.price}} тг</div>
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="landing">
                            <div class="video_block pdd">
                                <div class="h2">
                                    Қатысу нұсқаулығы
                                </div>
                                <div class="wrap d-f a-c gap-50">
                                    <div class="left">
                                        <ol>
                                            <li>Өзіңізге керекті олимпиаданы таңдаңыз</li>
                                            <li>Ашылған бетте толық аты-жөніңізді жазыңыз</li>
                                            <li>Жарнасын төлеңіз (тегін олимпиада болған жағдай төлем жасаудың қажеті жоқ)</li>
                                            <li>Тестті бастау батырмасын басып тест тапсырыңыз</li>
                                            <li>Марапатты жүктеп алыңыз</li>
                                        </ol>
                                        <cstBtn class="glassBtn pdd">
                                            <dw /> Фото нұсқаулықты жүктеу.pdf
                                        </cstBtn>
                                    </div>
                                    <div @click="videoOpen=1" class="video d-f aj-c fd-c">
                                        <img src="~assets/images/play.png" alt="">
                                        <div class="mt-10">
                                            Видео нұсқаулықты<br>көру
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-100">
                                <material_banner class="" only="1" />
                                <material_banner only="2" />
                            </div>
                            <div class="present_plus_block mt-100">
                                <div class="h2 pdd tc">Олимпиадаға қатысудың артықшылықтары</div>
                                <div class="wrap">
                                    <div v-for="(practice, index) in practice_plusses" class="block" :class="practice_classes[index]">
                                        <div class="title">{{practice.title}}</div>
                                        <div class="desc">{{practice.desc}}</div>
                                        <img :src="getImgUrl(practice.img)" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="mt-100 pdd">
                                <nuxt-link class="subject" to="/olimpiada">
                                    <bigBtn class="bigBtn">Пәнді таңдау</bigBtn>
                                </nuxt-link>
                            </div>
                            <div class="mt-100">
                                <div class="h2 pdd tc">Жиі қойылатын сұрақтар</div>
                                <faqs />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import cstBtn from '@/components/forms/cstBtn.vue'
    import bigBtn from '@/components/forms/bigBtn.vue'
    import ar from '@/components/svg/arrow-right.vue'
    import dw from '@/components/svg/download.vue'
    import faqs from '@/components/landing/faqs.vue'
    import material_banner from '@/components/landing/material_reklama10.vue'
    import atr from '@/components/svg/index/arrow-top-right.vue'
    import '@/assets/scss/olimp.scss'

    //import Header from '@/components/Header.vue'
    export default {
        components: {
            //Header,
            bigBtn,
            cstBtn,
            faqs,
            ar,
            dw,
            atr,
            material_banner,
        },
        head() {
            return {
                title: 'Мұғалімдерге, оқушыларға, тәрбиешілерге, студенттерге арналған байқаулар конкурстар',
                meta: [{
                    hid: 'description',
                    name: 'description',
                    content: 'Байқауларға мұғалімдер, оқушылар, тәрбиешілер мен студенттер қатыса алады. Конкурсқа қатысып сертификат, диплом және грамоталар жеңіп алуға болады'
                }, {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'байқаулар, конкурстар, конкурстар мұғалімдерге, интернет байқаулар, оқушыларға арналған байқаулар, республикалық конкурстар, дарын конкурс, клевер, кио, нио, дарын байқау'
                }, ],
                link: [{
                    rel: 'canonical',
                    href: this.$store.state.appUrl + this.$route.path
                }]
            }
        },
        data() {
            return {
                head: [{
                    link: '/baiqau',
                    name: 'Байқаулар',
                }, {
                    link: '/menin-baiqaularym',
                    name: 'Менің байқауларым',
                }],
                cat_category: 1,
            }
        },
        async asyncData({
            $axios,
            redirect,
            query
        }) {
            if (Object.keys(query).length === 0) {
                let res = await $axios.$get('baiqau/tury', {
                    params: {
                        katysushy_id: 1
                    }
                })
                return {
                    baiqaus: res.baiqaus,
                    loading: 0,
                }
            } else return redirect(302, '/baiqau')

        },
        methods: {
            getData() {
                this.$axios.get('/baiqau/tury', {
                    params: {
                        katysushy_id: this.cat_category,
                    }
                }).then((res) => {
                    this.baiqaus = res.data.baiqaus
                    this.loading = 0
                    // this.cT.currentTime = res.data.time
                    // this.month = res.data.month
                })
            },
            changeCatType(e) {
                this.loading = 1
                this.cat_category = e
                this.getData()
            },
            getMonth(e) {
                switch (e) {
                    case '1':
                        return 'қаңтар';
                    case '2':
                        return 'ақпан';
                    case '3':
                        return 'наурыз';
                    case '4':
                        return 'сәуір';
                    case '5':
                        return 'мамыр';
                    case '6':
                        return 'маусым';
                    case '7':
                        return 'шілде';
                    case '8':
                        return 'тамыз';
                    case '9':
                        return 'қыркүйек';
                    case '10':
                        return 'қазан';
                    case '11':
                        return 'қараша';
                    case '12':
                        return 'желтоқсан';
                }
            },
            getQatysushy() {
                
                switch (this.cat_category) {
                    case 1:
                        return 'ұстаздарға';
                    case 2:
                        return 'студенттерге';
                    case 3:
                        return 'оқушыларға';
                    case 4:
                        return 'тәрбиешілерге';
                }
            }
        }
    }

</script>
