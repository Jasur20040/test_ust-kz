<!-- <template>
    <div>
        <zhurnal_forma :isOpen="formaOpen" @closePopup="formaOpen=0" />
        <headLink :head='head' active=1 />
        <div class="zhurnal_my" @mousedown="hintClear">
            <div class="cst-ct">
                <div class="head_t">
                    <h1>Менің журналдарым</h1>
                </div>
                <transition name="fade">
                    <div v-show="ondiris" class="qualik">
                        <qualik @formaOpen="formaOpen=1" type=2 />
                    </div>
                </transition>
                <div class="value">Журналға жіберілген материалдар</div>
                <hr>
                <not_found v-if="loading == 2" text="Жинақ тізімі бос." desc="Басқа жинақтарды көру үшін 'Журнал' бөліміне өтіңіз" btnText="Журналға өту" link="/zhurnal" />
                <div v-show="loading == 1" class="loading">
                    <loader />
                </div>
                <div v-show="loading==0" class="list">
                    <template v-for="material in materials">
                        <div class="block">
                            <div class="pdx20" v-if="material.step != 3">
                                <div class="zh_wait">
                                    <div class="header">
                                        <div class="wait">
                                            <Lottie :width="34" :height="34" :options="defaultOptions" v-on:animCreated="handleAnimation" />
                                        </div>
                                        Журнал жасалып жатыр...
                                    </div>
                                    <div class="desc">
                                        Сіздің материалыңыз ең жақын арада журналға жарияланады. Қазір біз сіздің тапсырысыңыз бойынша жұмыс істеп жатырмыз. Сүрақтарыңыз болса: 8-771-234-55-99 номеріне WhatsApp-арқылы жазыңыз.
                                    </div>
                                </div>
                            </div>

                            <h2 class="pdx20">{{material.doc_name}}</h2>
                            <div class="marx">
                                <div class="info">
                                    <div class="name">
                                        <img src="~assets/images/user_material.svg" alt="">
                                        <span>{{material.username}}</span>
                                    </div>
                                    <div class="d-flex">
                                        <div class="date">
                                            <img src="~assets/images/note-text.svg" alt="">
                                            <span>{{material.date}}</span>
                                        </div>
                                        <div class="views">
                                            <img src="~assets/images/call8.svg" alt="">
                                            <span> {{material.user.tel_num}} </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="body">
                                    {{material.userwork}}
                                </div>
                            </div>
                            <div class="pdx20">
                                <div class="certBtns">
                                    <transition name='hint'>
                                        <div v-show="material.hint" class="hint_open" @mousedown.stop>
                                            «Ustaz tilegi» Республикалық ғылыми – әдістемелік орталығының педагогикалық журналына материалыңызды жариялағаныңыз үшін беріледі
                                        </div>
                                    </transition>
                                    <certdownload class="certBtn" text="Сертификатты жүктеу" img="importwhite.svg" />

                                    <div @click="material.hint = !material.hint" class="hint" @mousedown.stop>
                                        ?
                                    </div>
                                </div>
                            </div>
                            <div class="zh_go" v-if="material.step == 3">
                                <NuxtLink to="/zhurnal">

                                    <cstBtn class="cst_size_btn" text="Журналды көру" />
                                </NuxtLink>
                                <div class="green">Құттықтаймыз! Сіздің материалыңыз журналға сәтті жарияланды. Осы жерден жинақ пен сертификаттың электронды нұсқасын жүктеп алуыңызға болады. Сұрақтарыңыз болса: 8-771-234-55-99 номеріне WhatsApp-арқылы жазыңыз</div>
                            </div>
                        </div>
                    </template>
                    <div v-if="lastPage > 1" class="paginate">
                        <pagination :currentPage="currentPage" :lastPage="lastPage" @set-page="Pageload" :loading="loading" />
                    </div>
                </div>
            </div>
        </div>
        <div class="zh_footer">
            <div class="cst-ct">
                Бұл бетте сіз жариялаған барлық материалдар сайттан өшпей сақталып қалады. Өзіңіздің барлық материалдарыңызды осында тегін жариялап архив ретінде сақтауға болады
            </div>
        </div>
    </div>
</template>
<script>
    import headLink from '@/components/header.vue'
    import qualik from '@/components/materials/my_materials/forms/qualik.vue'
    import Lottie from 'vue-lottie/src/lottie.vue'
    import * as animationData from "~/assets/lottie_files/upload_materials/96551-hourglass.json"
    import cstBtn from '@/components/forms/btn.vue'
    import certdownload from '@/components/forms/certdownload.vue'
    import not_found from '@/components/landing/not_found.vue'
    import pagination from '@/components/pagination.vue'
    import loader from '@/components/Lottie/loader.vue'
    import zhurnal_forma from '@/components/popups/zhurnal_forma.vue'

    export default {
        middleware: ['auth'],
        head() {
            return {
                title: 'Менің журналдарым',
                meta: [{
                    hid: 'description',
                    name: 'description',
                    content: 'Журналға жіберілген материалдар'
                }, {
                    hid: 'keywords',
                    name: 'keywords',
                    content: ''
                }, ],
                link: [{
                    rel: 'canonical',
                    href: this.$store.state.appUrl + this.$route.path
                }]
            }
        },
        components: {
            headLink,
            qualik,
            Lottie,
            certdownload,
            cstBtn,
            not_found,
            loader,
            zhurnal_forma,
        },
        data() {
            return {
                head: [{
                    link: '/zhurnal',
                    name: 'Журнал',
                }, {
                    link: '/zhurnal/my',
                    name: 'Менің журналдарым',
                }],
                defaultOptions: {
                    animationData: animationData
                },
                animationSpeed: 1,
                hint: 0,
                loading: 1,
                currentPage: 1,
                lastPage: 1,
                materials: [],
                ondiris: 0,
                formaOpen: 0,
            }
        },
        methods: {
            handleAnimation: function(anim) {
                this.anim = anim;
            },
            getData() {
                this.$api.$get('/word/zhinak/my_zhinak', {
                    params: {
                        page: this.currentPage
                    }
                }).then((res) => {
                    console.log(res)
                    this.materials = res.data
                    this.currentPage = res.current_page;
                    this.lastPage = res.last_page;
                    if (res.total == 0) this.loading = 2
                    else this.loading = 0
                    setTimeout(()=>{
                        this.ondiris = 1
                    },1000)
                })
            },
            hintClear() {
                this.materials.forEach((e) => {
                    e.hint = 0
                })
            },
            Pageload(n) {
                this.loading = 1
                this.currentPage = n
                this.getData()
            },
        },
        mounted() {
            this.getData()

        },
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
        transform: translateY(-15px);
        transition: 0.5s;
    }
    .loading {
        display: flex;
        justify-content: center;
        margin-top: 100px;
        padding-bottom: 40vh;
    }

    .hint-enter-active,
    .hint-leave-active {
        transition: 0.3s;
    }

    .hint-enter,
    .hint-leave-to {
        opacity: 0;
    }

    .block {
        border: 1px solid #F0F0F0;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
        border-radius: 6px;
        padding: 20px 0px 0px;
        margin-top: 20px;

        .pdx20 {
            padding: 0 20px;
        }

        .zh_wait {
            background: #EDFFED;
            border: 1px solid #03B113;
            border-radius: 16px;
            padding: 15px 20px 20px;

            .header {
                font-weight: 500;
                line-height: 20px;
                color: #03B113;
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .wait {
                background: #ffffff;
                width: 34px;
                height: 34px;
                border-radius: 10px;
            }

            .desc {
                line-height: 16px;
                color: #888888;
                margin-top: 6px;
            }
        }

        h2 {
            font-size: 20px;
            font-weight: 600;
            line-height: 23px;
            margin: 20px 0 12px;
        }

        .marx {
            padding: 0 40px;
            color: #888888;
        }

        .info {
            display: flex;

            @media all and (max-width: 883px) {
                flex-wrap: wrap;

                .name {
                    width: 100%;
                    margin-bottom: 10px;
                }
            }

            .name {
                max-width: 250px;
                display: flex;

                span {
                    display: block;
                    margin-left: 5px;
                }
            }

            img {
                width: 16px;
                height: 16px;
            }

            .name,
            .date,
            .views {
                margin-right: 20px;
            }

        }

        .body {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            margin-top: 10px;
        }

        .certBtns {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-top: 30px;
            padding-bottom: 30px;
            position: relative;

            .certBtn {
                height: 40px;
                width: 250px;
            }

            .hint {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                border: 1px solid #D6D6D6;
                background: #F9F9F9;
                display: flex;
                align-items: center;
                justify-content: center;

                &:hover {
                    cursor: pointer;
                }
            }

            .hint_open {
                position: absolute;
                max-width: 360px;
                padding: 10px 15px 15px;
                background: #ffffff;
                box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
                border-radius: 6px;
                border-bottom: 4px solid #03B113;
                font-size: 13px;
                line-height: 15px;
                transform: translate(284px, -47px);
            }
        }

        .zh_go {
            background: #F9F9F9;
            padding: 20px;
            display: grid;
            grid-template-columns: 190px auto;
            grid-gap: 20px;

            .cst_size_btn {
                height: 40px;
                font-size: 14px;
            }

            .green {
                font-size: 14px;
                font-weight: 400;
                line-height: 16px;
                color: #03B113;
            }
        }

    }

    .paginate {
        margin-top: 50px;
    }

    .zhurnal_my {
        padding-bottom: 100px;
    }

    .zh_footer {
        font-size: 16px;
        line-height: 23px;
        color: #888888;
        padding-bottom: 50px;
    }

    .head_t {
        padding-top: 40px;

        h1 {
            font-size: 24px;
            font-weight: 600;
            line-height: 30px;

        }
    }

    .qualik {
        margin-top: 40px;
    }

    .value {
        margin-top: 40px;
        font-size: 16px;
        line-height: 19px;
        color: #888888;
    }

    hr {
        margin-top: 40px;
    }

    .list {
        margin-top: 30px;
    }

    @media all and (max-width: 883px) {
        .block .zh_wait .desc {
            font-size: 12px;
            line-height: 14px;
        }

        .block h2 {
            font-size: 18px;
            line-height: 22px;
        }

        .block .marx {
            padding: 0 25px;
        }

        .block .info .name {
            margin-bottom: 5px;
        }

        .block .body {
            font-size: 12px;
            line-height: 16px;
        }

        .block .certBtns .hint_open {
            transform: translate(0, -47px);
            right: 0;
        }

        .zh_footer {
            font-size: 14px;
            line-height: 20px;
        }
    }

    @media all and (max-width: 767px) {
        .block .zh_go {
            background: #F9F9F9;
            padding: 20px;
            display: block;
        }

        .cst_size_btn {
            width: 190px;
            height: 40px;
        }

        .block .zh_go .green {
            margin-top: 10px;
        }
    }

    @media all and (max-width: 500px) {
        .block .zh_wait .desc {
            font-size: 10px;
        }

        .block .zh_wait {
            padding: 10px 15px 15px;
        }

        .block .pdx20 {
            padding: 0px 10px;
        }

        .block .zh_go {
            padding: 20px 10px;
        }

        .block .certBtns {
            padding-bottom: 20px;
        }

        .block .zh_go .green {
            font-size: 12px;
            line-height: 14px;
        }

        .block h2 {
            font-size: 16px;
            line-height: 19px;
        }

        .zh_footer {
            line-height: 16px;
        }

    }

    @media all and (max-width: 400px) {
        .block .marx {
            padding: 0 10px;
        }

        .block .zh_wait {
            padding: 5px 10px 10px;
        }

    }

</style>
 -->