<template>
    <div>
        <section class="olimp">
            <div class="cst-ct">
                <div class="wrapper-side">
                    <div class="hotslot"></div>
                    <div class="content">
                        <div class="pd">
                            <div class="headtitle">{{month}} айының <span>зияткерлік олимпиадасы</span></div>
                            <div class="wrap d-f a-c gap-30">
                                <div class="timer d-f a-c gap-10">
                                    <div class="time d-f aj-c fd-c">
                                        <div class="name">{{getNumber(cT.days)}}</div>
                                        Күн
                                    </div>
                                    <div class="time d-f aj-c fd-c">
                                        <div class="name">{{getNumber(cT.hours)}}</div>
                                        Сағат
                                    </div>
                                    <div class="time d-f aj-c fd-c">
                                        <div class="name">{{getNumber(cT.minuts)}}</div>
                                        Минут
                                    </div>
                                    <div class="time d-f aj-c fd-c">
                                        <div class="name">{{getNumber(cT.seconds)}}</div>
                                        Секунд
                                    </div>

                                </div>
                                Олимпиаданың бітуіне қалды
                            </div>
                            <nuxt-link to="/olimpiada/test/enter-code">
                                <cstBtn class="cstBtn">Код арқылы тапсыру
                                    <ar />
                                </cstBtn>
                            </nuxt-link>
                        </div>
                        <div class="buttons d-f">
                            <button @click="changeCatType(1)" class="btn" :class="{active:cat_category==1}">Ұстаздар</button>
                            <button @click="changeCatType(4)" class="btn" :class="{active:cat_category==4}">Тәрбиешілерге</button>
                            <button @click="changeCatType(3)" class="btn" :class="{active:cat_category==3}">Оқушыларға</button>
                            <button @click="changeCatType(2)" class="btn" :class="{active:cat_category==2}">Студенттерге</button>
                            <button @click="changeCatType(5)" class="btn" :class="{active:cat_category==5}">Тегін</button>
                        </div>
                        <div class="turnirs">
                            <div class="list d-f fd-c">
                                <NuxtLink v-for="(olimp, index) in olimps" :key="'olimp-' + olimp.idd" class="item d-f a-c gap-20" :to="'/olimpiada/'+olimp.lat_name+'-'+olimp.idd">
                                    <img v-if="olimp.img" class="imgturnir" :src="$store.state.apiUrl+'/storage/files/olimp_icons/' + olimp.img" alt="">
                                    <img v-if="!olimp.img" class="imgturnir" src="~assets/images/main_icon.svg" alt="">
                                    {{ capitalizeFirstLetter(olimp.bagyt ? olimp.bagyt : olimp.o_bagyty) }}
                                    <ar />
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
            material_banner,
        },
        head() {
            return {
                title: 'Зияткерлік олимпиада | Қазақстандық интернет олимпиадалар',
                meta: [{
                    hid: 'description',
                    name: 'description',
                    content: 'Олимпиадаларға барлық ұстаздар, тәрбиешілер, білім бөлімдерінің мамандары және мектепалды даярлық, балабақша, мектеп оқушылары, гимназия, лицей оқушылары, студенттер барлық қолданушылар қатыса алады.'
                }, {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'онлайн олимпиадалар, зияткерлік олимпиада, қазақстандық интернет олимпиадалар, қазахстанские интернет олимпиады, кио, cdo kz, оқушыларға арналған интернет олимпиада, қашықтық олимпиада, тегін олипиадалар, клевер олимпиада'
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
                    link: '/olimpiada',
                    name: 'Олимпиада',
                }, {
                    link: '/menin-olimpiadalarym',
                    name: 'Менің олимпиадаларым',
                }, {
                    link: '/olimpiada/reiting',
                    name: 'Рейтинг',
                }, ],
                cat_category: 1,
                loading: 0,
                videoOpen: 0,
                youtubeLink: 'https://www.youtube.com/watch?v=Ka0lRluiGmk',
                practice_classes: ['a bg', 'b', 'c bg', 'd', 'e bg', 'f'],
                practice_plusses: [{
                        title: 'Ата-ана мен жетекшіге тегін алғыс хат',
                        desc: 'Оқушы және студенттер олимпиаданы аяқтаған соң өзінің диплом немесе сертификатымен қоса Жетекшісіне және оқушы ата-анасына арналған алғыс хатты тегін жүктеп алуына болады.',
                        img: 'list_ol.png'
                    },
                    {
                        title: 'Әр қатысушыға сұрақтар реті мен нұсқалар реті кездейсоқ форматта беріледі',
                        desc: 'Кездейсоқ форматты берілу арқылы оқушылар бір-бірінен көшіре алмайды. Сол арқылы академиялық адалдық сақталынады.',
                        img: 'refresh_olimp.png'
                    },
                    {
                        title: 'Нәтижесі бірден шығады',
                        desc: 'Олимпиаданы аяқтаған соң нәтижесі бірден шығады. Арнайы код арқылы бірден білуге болады. Олимпиада біткен соң нәтижесін ешкім өзгерте алмайды.',
                        img: 'apllie_olimp.png'
                    },
                    {
                        title: 'Қатемен жұмыс жасауға болады',
                        desc: 'Олимпиаад біткен соң, бірден қай сұрақтардан қателескеніңізді көре аласыз. Сол арқылы барлық сұрақтар мен жауаптарды талдауға болады',
                        img: 'book_olimp.png'
                    },
                    {
                        title: '10% бонус беріледі',
                        desc: 'Ақылы олимпиадаға қатысқан кезде жарнасын төлеген соң сол сумманың 10% бонус ретінде беріледі. Сол ақшаға келесі олимпиадаға жеңілдікпен қатыса аласыз немесе картаға шығаруға болады',
                        img: 'percent_olimp.png'
                    },
                    {
                        title: 'Жетекшілерге сыйлықтар',
                        desc: 'Жетекшілерге әр этап сайын бағалы сыйлықтар (ноутбуктар, телефондар, бағалы сыйлықтар) беріледі. Сыйлықтар туралы ақпаратты рейтинг бетінде жариялап отырамыз',
                        img: 'minigift_olimp.png'
                    },

                ],
            }
        },
        async asyncData({
            $axios,
            redirect,
            query
        }) {
            if (Object.keys(query).length === 0) {
                let res = await $axios.$get('olimpiada/tury', {
                    params: {
                        katysushy_id: 1,
                        type: 2
                    }
                })
                return {
                    olimps: res.olimps,
                    loading: 0,
                    cT: {
                        currentTime: res.time,
                        days: '...',
                        hours: '...',
                        minuts: '...',
                        seconds: '...',
                    },
                    month: res.month,
                }
            } else return redirect(302, '/olimpiada')
        },
        methods: {
            getNumber(s) {
                return s < 10 ? '0' + s : s;
            },
            getImgUrl(pet) {
                var images = require.context('../../assets/images/olimp/', false)
                return images('./' + pet)
            },
            changeCatType(e) {
                this.loading = 1
                this.cat_category = e
                this.getData()
            },
            getData() {
                this.$axios.get('/olimpiada/tury', {
                    params: {
                        katysushy_id: this.cat_category,
                        type: 2,
                    }
                }).then((res) => {
                    this.olimps = res.data.olimps
                    this.loading = 0
                    this.cT.currentTime = res.data.time
                    this.month = res.data.month
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
                    if (s < 1) clearTimeout(this.timer);
                }, 1000)
            },
            stopTimer() {
                clearTimeout(this.timer)
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
img.imgturnir {
    width: 40px;
    height: 40px;
}
</style>