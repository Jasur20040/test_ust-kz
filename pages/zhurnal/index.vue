<!-- <template>
    <div>
        <zhurnal_forma :isOpen="formaOpen" @closePopup="formaOpen=0" />
        <headLink :head='head' active=0 />
        <div class="zhurnal">
            <div class="cst-ct">
                <div class="head_t">
                    <h1>«Ustaz tilegi» Республикалық ғылыми – әдістемелік журналы</h1>
                </div>
                <transition name="fade">
                    <div v-show="ondiris">
                        <div class="folder1">
                            <div class="fbody">
                                <div class="body">
                                    Журналға мақала жариялағыңыз келсе немесе мақалаңыз журналға шықпай қалса <span class="orange">8-771-234-55-99 номеріне WhatsApp-арқылы жазыңыз</span>
                                </div>
                                <div class="bgfolder"></div>
                            </div>
                            <img src="~assets/images/Empty-Files.svg" alt="" class="folder">
                        </div>
                        <qualik @formaOpen="formaOpen=1" />
                    </div>
                </transition>
                <div class="material_count">
                    Журналдар: <b>{{materials_count}}</b> материал
                </div>
                <not_found v-if="loading == 2" text="Журнал тізімі бос." desc="Материял жариялау үшін 'Журналға жариялау' батырмасын басыңыз" btnText="Материалдарға өту" link="/menin-materialdarym" />
                <div v-if="lastPage>1" class="paginate">
                    <pagination :currentPage="currentPage" :lastPage="lastPage" @set-page="Pageload" :loading="loading" />
                </div>
            </div>
        </div>
        <div class="application">
            <div class="cst-ct">
                <img class="image" src="~assets/images/applicationCert.png" alt="">
                <div class="advice">
                    <div class="head">Мақалаңызды "Ұстаз тілегі" Республикалық ғылыми педагогикалық журналына жариялаңыз!</div>
                    <div class="content">«Ustaz tilegi» Республикалық ғылыми – әдістемелік журналы министірліктің №KZ09VPY00029937 куәлігімен ресми тіркелген. Журнал министірлікте тіркелгендіктен сертификат аттестацияға жарамды.</div>
                </div>
                <div class="title">Осы айдың журналына жіберу үшін өтінішті бүгін жіберіңіз</div>
                <div class="cst_size_btn">
                    <bigBtn @click.native="formaOpen=1" text="Өтініш қалдыру" />
                </div>
                <div class="foot">
                    Егер редактордың жазғанын күткіңіз келмесе <br>8-771-234-55-99 номеріне WhatsApp- арқылы жазыңыз
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import qualik from '@/components/materials/my_materials/forms/qualik.vue'
    import zhinak_list from '@/components/materials/zhinak_list.vue'
    import headLink from '@/components/header.vue'
    import pagination from '@/components/pagination.vue'
    import bigBtn from '@/components/forms/bigBtn.vue'
    import zhurnal_forma from '@/components/popups/zhurnal_forma.vue'
    import not_found from '@/components/landing/not_found.vue'

    export default {
        components: {
            qualik,
            headLink,
            zhinak_list,
            pagination,
            bigBtn,
            zhurnal_forma,
            not_found,
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
                materials: [],
                materials_count: null,
                loading: 0,
                currentPage: null,
                lastPage: null,
                formaOpen: 0,
                ondiris: 0,
            }
        },
        head() {
            return {
                title: '«Ustaz tilegi» Республикалық ғылыми – әдістемелік журналы',
                meta: [{
                    hid: 'description',
                    name: 'description',
                    content: '«Ustaz tilegi» Республикалық ғылыми – әдістемелік журналы министірліктің №KZ09VPY00029937 куәлігімен ресми тіркелген. Журнал министірлікте тіркелгендіктен сертификат аттестацияға жарамды'
                }, {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'журнал, жинақ, жинаққа материал жариялау, тегін сертификат, жинақтарды көру, ұстаз тілегі журналы, журналға жазылу, журнал сертификаты'
                }, ],
                link: [{
                    rel: 'canonical',
                    href: this.$store.state.appUrl + this.$route.path,
                }]
            }
        },
        methods: {
            getData() {
                this.$axios.$get('word/zhinak', {
                    params: {
                        page: this.currentPage,
                    }
                }).then((res) => {
                    this.materials_count = res.materials.total;
                    this.currentPage = res.materials.current_page;
                    this.lastPage = res.materials.last_page;
                    this.materials = res.materials.data;
                    this.loading = 0;
                    if(res.materials.total == 0) this.loading = 2;

                })
            },
        },
        async asyncData({$axios, redirect, query}){
            let res = await $axios.$get('word/zhinak', {params: {page: 1}})
            let loading = res.materials.total == 0 ? 2 : 0;
            return {
                materials_count: res.materials.total,
                currentPage: res.materials.current_page,
                lastPage: res.materials.last_page,
                materials: res.materials.data,
                loading: loading,
            }
        },
        mounted(){
            setTimeout(()=>{
                this.ondiris = 1
            },1000)
        }
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

    .zhurnal {
        padding-bottom: 100px;

        .head_t {
            padding-top: 50px;

            h1 {
                font-size: 32px;
                font-weight: 600;
                line-height: 38px;
                letter-spacing: 0.05em;
                text-align: center;
                text-transform: uppercase;
            }
        }

        .folder1 {
            margin: 70px 0 20px;
            position: relative;
            width: 100%;
            background: #FFF7E7;
            border-radius: 4px;

            .folder {
                position: absolute;
                right: 0;
                transform: translate(-37px, -164px);

                @media all and (max-width: 883px) {
                    transform: translate(-11px, -176px);
                }

                @media all and (max-width: 500px) {
                    width: 125px;
                    height: 125px;
                    transform: translate(-27px, -141px);
                }

                @media all and (max-width: 422px) {
                    width: 100px;
                    height: 100px;
                    transform: translate(-13px, -112px);
                }
            }

            .bgfolder {
                position: absolute;
                width: 132px;
                height: 137px;
                background: url(assets/images/Empty-Files.svg) no-repeat;
                filter: blur(18px);
                transform: translate(-54px, -21px);
                right: 0;

                @media all and (max-width: 1099px) {
                    transform: translate(-54px, -14px);
                }

                @media all and (max-width: 991px) {
                    transform: translate(-54px, -1px);
                }

                @media all and (max-width: 883px) {
                    transform: translate(-19px, 30px);
                }

                @media all and (max-width: 767px) {
                    transform: translate(-21px, -24px);
                }

                @media all and (max-width: 500px) {
                    filter: blur(23px);
                }

                @media all and (max-width: 422px) {
                    width: 100px;
                    height: 100px;
                    transform: translate(-32px, 5px);
                }
            }

            .fbody {
                display: flex;
                justify-content: space-between;
                overflow: hidden;
                position: relative;
            }

            .body {
                padding: 30px 40px;
                max-width: 67%;
                font-size: 16px;
                font-weight: 600;
                line-height: 19px;
                color: #363636;

                @media all and (max-width: 767px) {
                    font-size: 14px;
                    line-height: 17px;
                    padding: 25px 30px;
                }

                @media all and (max-width: 500px) {
                    font-size: 12px;
                    line-height: 15px;
                    padding: 20px;
                }

                .orange {
                    color: #FF8B0D;
                }
            }
        }

        .material_count {
            margin-top: 30px;
            font-size: 18px;
            font-weight: 400;
            line-height: 21px;

            b {
                font-weight: 700;
                line-height: 22px;
            }
        }

        .paginate {
            margin-top: 30px;
        }
    }

    .application {
        padding: 70px 0 112px;
        background: url("~assets/images/zhurnal_bg.jpg");
        background-size: cover;
        color: #ffffff;

        .cst-ct {
            position: relative;
        }

        .advice {
            padding: 20px 40px 20px 50px;
            background: #363636;
            border-left: 10px solid #03B113;
            border-radius: 4px;

            .head {
                font-size: 20px;
                font-weight: 600;
                line-height: 23px;
            }

            .content {
                font-size: 14px;
                font-weight: 500;
                line-height: 16px;
                color: #03B113;
                margin-top: 10px;
            }
        }

        .title {
            font-size: 48px;
            font-weight: 600;
            line-height: 56px;
            margin-top: 30px;
            max-width: 600px;
        }

        .cst_size_btn {
            max-width: 320px;
            height: 60px;
            margin-top: 30px;
            z-index: 2;
            position: relative;
        }

        .foot {
            margin-top: 30px;
            max-width: 400px;
            z-index: 2;
            position: relative;
        }

        .image {
            position: absolute;
            transform: translate(74px, 171px);
            right: 0;
        }
    }

    @media all and (max-width: 1099px) {
        .application .title {
            font-size: 40px;
            line-height: 50px;
            max-width: 500px;
        }

        .application .image {
            transform: translate(74px, 178px);
            width: 380px;
        }

        .application .advice .head {
            font-size: 18px;
            line-height: 21px;
        }

        .application .advice .content {
            font-size: 12px;
        }
    }

    @media all and (max-width: 991px) {
        .zhurnal .head_t h1 {
            font-size: 30px;
            line-height: 35px;
        }

        .application .title {
            font-size: 32px;
            line-height: 41px;
            max-width: 380px;
        }

        .application .advice .head {
            font-size: 16px;
            line-height: 19px;
        }

        .application .advice .content {
            font-size: 11px;
            line-height: 14px;
        }

        .application .advice {
            padding: 15px 25px 15px 30px;
        }

        .application .image {
            transform: translate(68px, 157px);
            width: 325px;
        }
    }

    @media all and (max-width: 883px) {
        .zhurnal .head_t h1 {
            font-size: 27px;
            line-height: 31px;
        }

        .zhurnal .head_t {
            padding-top: 40px;
        }

        .zhurnal .folder1 {
            margin: 60px 0 20px;
        }

        .application .title {
            font-size: 28px;
            line-height: 37px;
            max-width: 335px;
            margin-top: 20px;
        }

        .application .image {
            width: 271px;
        }

        .application .advice {
            padding: 15px 20px 15px 20px;
        }

        .application .advice .head {
            font-size: 14px;
            line-height: 18px;
        }

        .application .advice .content {
            font-size: 10px;
            line-height: 13px;
        }

        .application .foot {
            margin-top: 20px;
            max-width: 400px;
        }
    }

    @media all and (max-width: 767px) {
        .application .title {
            font-size: 26px;
            line-height: 34px;
            max-width: 304px;
        }

        .application .cst_size_btn {
            margin-top: 81px;
        }

        .application .image {
            transform: translate(0px, 191px);
            width: 273px;
        }

        .application .foot br {
            display: none;
        }
    }

    @media all and (max-width: 500px) {
        .application .cst-ct {
            position: relative;
            padding: 0 30px;
        }

        .application .advice .head {
            font-size: 12px;
            line-height: 14px;
        }

        .application .advice .content {
            line-height: 11px;
        }

        .application .title {
            line-height: 30px;
        }

        .application .cst_size_btn {
            margin-top: 139px;
        }

        .application .image {
            transform: translate(0px, 235px);
        }

        .zhurnal .head_t h1 {
            font-size: 23px;
            line-height: 27px;
        }

        .zhurnal .head_t {
            padding-top: 35px;
        }

        .zhurnal .folder1 {
            margin: 55px 0 10px;
        }
    }

    @media all and (max-width: 417px) {
        .zhurnal .head_t h1 {
            font-size: 20px;
            line-height: 23px;
        }

        .zhurnal .head_t {
            padding-top: 30px;
        }

        .zhurnal .folder1 {
            margin: 50px 0 10px;
        }
    }

    @media all and (max-width: 398px) {
        .application .image {
            transform: translate(0px, 260px);
        }

        .application .cst_size_btn {
            margin-top: 145px;
        }
    }

    @media all and (max-width: 359px) {
        .application .cst-ct {
            padding: 0 15px;
        }
    }

</style>
 -->