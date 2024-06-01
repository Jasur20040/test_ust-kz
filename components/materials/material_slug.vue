<template>
    <div class="material_slug">
        <oplataPopup :price="calcPercent(material.sell)" :oplataOpen="oplataPopup" @closePopup="oplataPopup=0" @next="oplataPopup++" :isMaterialPage=1 @buyThisMaterial="buyThisMaterialAndClosePopup()" @setPopup="($event)=>{oplataPopup=$event}" :material_id="material.id" />
        <conflictPopup :isOpen="conflict" @closePopup="conflict=0" :id="material.id" @successReport="successReport" :isSend="conflictIsSend" />
        <header_kroshki :header='header' gotoUrl='/material' />
        <section class="main">

            <div class="pdd">
                <material_reklama />
                <h1 class="head mt-20">{{material.title}}</h1>
                <div class="desc mt-10">
                    <div class="prefix">Материал туралы қысқаша түсінік</div>
                    {{material.description}}
                </div>
                <div class="materialBlock" :class="{payed:material.sell > 0}">
                    <div class="left">
                        <div class="header">Авторы:</div>
                        <div class="autor">
                            <div class="avatar"></div>
                            <NuxtLink to="#" class="name">{{material.author}}</NuxtLink>
                        </div>
                        <div v-if="material.sell > 0" class="autor payed">
                            <div class="guard"></div>
                            <div class="pay_info">
                                <span class="gradient">Автор материалды ақылы түрде жариялады.</span>
                                Сатылымнан түскен қаражат авторға автоматты түрде аударылады.
                                <a href="#">Толығырақ</a>
                            </div>
                        </div>
                        <div class="material_info">
                            <div>
                                <img src="~assets/images/note-text.svg" alt="">
                                <span>{{material.date}}</span>
                            </div>
                            <div>
                                <img src="~assets/images/eye_materials.svg" alt="">
                                <span>{{material.view}}</span>
                            </div>
                            <div>
                                <img src="~assets/images/import.svg" alt="">
                                <span>{{material.download}} рет жүктелген</span>
                            </div>
                        </div>
                        <div class="zhanr">
                            <nuxt-link :to="'/materialdar/'+material.zhanr_lat.lat_name+'.html'" class="zh">{{material.zhanr}}</nuxt-link>
                            <nuxt-link :to="'/materialdar/'+material.zhanr_lat.lat_name+'/'+material.zhanr2_lat.lat_name+'.html'" class="zh">{{material.zhanr2}}</nuxt-link>
                            <nuxt-link :to="'/materialdar/'+material.zhanr_lat.lat_name+'/'+material.zhanr2_lat.lat_name+'/'+material.zhanr3_lat.lat_name+'.html'" class="zh">{{material.zhanr3}}</nuxt-link>
                        </div>
                    </div>
                    <div class="right">
                        <div :class="{payment: true, akfon:material.sell > 0}">
                            <template v-if="!isPurchased && (($auth.user ? $auth.user.id : 0) != material.user_id)">
                                <div v-if="material.sell>0" class="t-c mt-10">
                                    <span class="new">{{calcPercent(material.sell)}} ₸</span>
                                    <span v-if="material.skidka" class="old">{{material.sell}} ₸</span>
                                </div>
                                <template v-if="material.sell>0">
                                    <div class="freemes">
                                        <template v-if="material.skidka">
                                            Бүгін алсаңыз
                                            <span class="skidka">
                                                {{material.skidka.skidka}}% жеңілдік
                                            </span><br>
                                            беріледі
                                        </template>
                                        <template v-else>
                                            Материал ақылы
                                        </template>
                                    </div>
                                </template>
                                <template v-else>
                                    <div class="free">
                                        Материал тегін
                                    </div>
                                </template>
                                <cstBtn img="download.svg" v-if="!loading && material.sell>0" @click.native="buyThisMaterial()" class="cst_size">{{calcPercent(material.sell) + ' ₸ - Сатып алу'}}</cstBtn>
                                <cstBtn v-else-if="loading" loading=1 class="cst_size" />
                                <cstBtn v-else @click.native="download()" img="download.svg" class="cst_size">Тегін жүктеу</cstBtn>
                            </template>
                            <template v-else>
                                <img src="~assets/images/wallet-check.svg" alt="">
                                <div class="free">
                                    <span v-if="$auth.user" class="gradient">
                                        {{$auth.user.id == material.user_id ? 'Материал' : 'Материал сатып'}}
                                        {{$auth.user.id == material.user_id ? '№'+material.id : 'алынған'}}
                                    </span>
                                </div>
                                <cstBtn @click.native="download()" img="download.svg" class="cst_size">Жүктеп алу</cstBtn>
                            </template>
                        </div>
                    </div>
                </div>
                <material_reklama6 class="mt-30" />
                <div class="padDocAccess mt-30">
                    <div class="docAccess"><img src="~assets/images/message-question-yellow.svg" alt="">
                        <div>Бұл бетте материалдың қысқаша нұсқасы ұсынылған. Материалдың толық нұсқасын жүктеп алып, көруге болады</div>
                    </div>
                </div>
                <div class="relative">
                    <template v-if="material.savehtml">
                        <template v-if="material.savehtml.is_url">
                            <div class="framer pptx d-f aj-c" @click="lastPage > currentPage ?  setPage(currentPage + 1) : ''">
                                <div v-if="currentPage > 3" class="blocker">
                                    <img src="~assets/images/logo2.png" alt="logo">
                                    <p class="mt-30 t-c">Материалдың толық нұсқасын <br> жүктеп алып көруге болады</p>
                                </div>
                                <img :src="$store.state.apiUrl+'/storage/files/' + material.savehtml.text[0][currentPage - 1]" :alt="'img_page_'+currentPage">
                            </div>
                        </template>
                        <template v-else>
                            <div class="top_html j-c a-c">
                                <img src="~assets/images/logo2.png" alt="logo">
                                <p class="mt-30 t-c">Материалдың толық нұсқасын <br> жүктеп алып көруге болады</p>
                            </div>
                            <div class="framer hideHood doc" :class="isPresentation()">
                                <div v-html="material.savehtml.text"></div>
                            </div>
                        </template>
                    </template>
                    <template v-else>
                        <template v-if="material.raw=='pdf'">
                            <div class="framer doc">
                                <iframe id="iframepdf" width='100%' height='600px' :src="$store.state.apiUrl+'/storage/files/'+material.file_doc+'#toolbar=0'" frameborder='0'></iframe>
                            </div>
                        </template>
                        <template v-else>
                            <div class="framer hideHood">
                                <iframe :src="'https://view.officeapps.live.com/op/embed.aspx?src='+$store.state.apiUrl+'/storage/files/'+material.file_doc" width='100%' height='600px' frameborder='0'></iframe>
                            </div>
                        </template>
                    </template>
                    <template v-if="material.savehtml">
                        <pagination v-if="material.savehtml.is_url" :currentPage="currentPage" :lastPage="lastPage" @set-page="setPage" :loading="loading" />
                    </template>
                </div>
                <bigBtn img="download.svg" v-if="checkPurchase()" @click.native="buyThisMaterial()" class="downloadBtn mt-30">{{calcPercent(material.sell) + ' ₸ - Сатып алу'}}</bigBtn>
                <bigBtn img="download.svg" v-else @click.native="download()" class="downloadBtn mt-30">Материалды жүктеу</bigBtn>
                <div class="share mt-30">
                    Материал ұнаса әріптестеріңізбен бөлісіңіз
                    <div class="seti">
                        <button @click="sendWhatsapp" class="btn whatsapp">
                            <img src="~assets/images/whatsapp.svg" alt="">
                            Ватсапта бөлісу
                        </button>
                        <button onclick="open('https://t.me/share/url?url=https://eduline.kz/materials/dadada-22.html&utm_source=share2','send',`scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=0,height=0,left=-1000,top=-1000`)" class="btn telegram">
                            <img src="~assets/images/telegram.svg" alt="">
                            Телеграммда бөлісу
                        </button>
                        <button onclick="open('https://www.facebook.com/sharer.php?src=sp&u=https://eduline.kz/materials/dadada-22.html&utm_source=share2','send',`scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=0,height=0,left=-1000,top=-1000`)" class="btn facebook">
                            <img src="~assets/images/facebook_fill.svg" alt="">
                            Фейсбукта бөлісу
                        </button>
                        <button @click="copyUrl" class="btn sharer">
                            <img src="~assets/images/share.svg" alt="">
                            Сілтемені көшіру
                        </button>
                    </div>
                </div>
                <div class="sertificate">
                    <div class="body">
                        <div class="info">
                            Материал жариялап тегін <br class="brrrr" /> сертификат алыңыз!
                        </div>
                        <div class="desc">
                            Бұл сертификат «Ustaz tilegi» Республикалық ғылыми – әдістемелік журналының желілік басылымына өз авторлық жұмысын жарияланғанын растайды. Журнал Қазақстан Республикасы Ақпарат және Қоғамдық даму министрлігінің №KZ09VPY00029937 куәлігін алған. Сондықтан аттестацияға жарамды
                        </div>
                        <div class="certBtns">
                            <nuxt-link to="/zharialau">
                                <cstBtn class="empty">Материал жариялау</cstBtn>
                            </nuxt-link>
                            <cstBtn @click.native="getCertificate" class="empty">Сертификатты жүктеу</cstBtn>
                        </div>
                    </div>
                    <img src="~assets/images/materialCertificate.webp" alt="">
                </div>
                <!--
                <div class="wrapper">
                    <reportBtn img="flag.svg" @click.native="conflict=1" text="Шағымдану" class="report" />
                    <div class="span">Сайтта заңсыз жарияланған материалды көрсеңіз бізге хабарласыңыз. Редакцияның көзқарасы автордың көзқарасымен сәйкес келмеуі мүмкін.</div>
                </div>
-->
                <material_reklama9 class="mt-30" />
                <template v-if="material.savehtml">
                    <div v-if="material.savehtml.is_url" class="dop_content">
                        <template v-for="page in lastPage">
                            <img :src="$store.state.apiUrl+'/storage/files/'+material.savehtml.text[0][page - 1]" :alt="limitText(material.savehtml.text[1][page - 1]) || null" loading="lazy" :title="limitText(material.savehtml.text[1][page - 1]) || null">
                            <p><b>{{page}} слайд</b><br>{{material.savehtml.text[1][page - 1]}}</p>
                        </template>
                    </div>
                </template>
            </div>
        </section>
    </div>
</template>


<script>
    import download from '@/components/svg/download.vue'
    import block from '@/components/materials/forms/block.vue'
    import header_kroshki from '@/components/header_kroshki.vue'
    import bigBtn from '@/components/forms/bigBtn.vue'
    import reportBtn from '@/components/forms/reportBtn.vue'
    import oplataPopup from '@/components/popups/oplataPopup.vue'
    import cstBtn from '@/components/forms/cstBtn.vue'
    import conflictPopup from '@/components/popups/conflictPopup.vue'
    import material_reklama from '@/components/landing/material_reklama5.vue'
    import material_reklama6 from '@/components/landing/material_reklama6.vue'
    import material_reklama9 from '@/components/landing/material_reklama9.vue'
    import seminarBlock from '@/components/materials/seminar/block.vue'
    import courseBlock from '@/components/materials/course/courseBlock.vue'

    export default {
        components: {
            download,
            block,
            header_kroshki,
            bigBtn,
            reportBtn,
            oplataPopup,
            conflictPopup,
            material_reklama,
            material_reklama6,
            material_reklama9,
            seminarBlock,
            courseBlock,
            cstBtn
        },
        data() {
            return {
                material: this.res.material,
                header: [{
                    name: 'Материалдар',
                    link: '/material'
                }, {
                    name: this.res.material.title,
                }],
                lastPage: this.res.material.savehtml ? this.res.material.savehtml.is_url ? this.res.material.savehtml.text[1].length : 1 : 1,
                currentPage: 1,
                oplataPopup: 0,
                isPurchased: this.res.isPurchased,
                loading: 0,
                conflict: 0,
                conflictIsSend: 0,
                reklama_item: {
                    title: 'Дайын ҚМЖ. Барлық пәндерден 2022-2023 оқу жылына, жаңа бұйрыққа сай жасалған',
                    sell: 1,
                    author: 'Сертификатталған тренер жасаған',
                    date: '01.01.2023',
                    view: '17 863',
                    download: '13 694',
                    description: 'ҚР Білім және Ғылым министірлігінің стандарты бойынша жасалған. 2022-2023 оқу жылына арналған',
                    description: 'ҚР Білім және Ғылым министірлігінің стандарты бойынша жасалған. 2022-2023 оқу жылына арналған',
                    zhanr: 'Барлық пәндер',
                    zhanr2: 'Барлық материалдар',
                    zhanr3: 'Барлық сыныптар',
                },
                beforeLoad: false,
                // others: [],
                // seminars: [],
                // courses: [],
                // authors_materials: [],
            }
        },
        props: ['res'],
        beforeMount() {
            window.addEventListener('scroll', this.handleScroll)
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll)
        },
        methods: {
            setPage(e) {
                if (e <= 4 || this.isPurchased || this.material.sell == 0) {
                    this.currentPage = e
                }
            },
            checkPurchase() {
                return !this.isPurchased && this.material.sell > 0 && (this.$auth.user ? this.$auth.user.id : 0) != this.material.user_id && (this.$auth.user ? this.$auth.user.admin : 0) != 2
            },
            limitText(text) {
                if (text.length > 128) {
                    text = text.slice(0, 128);
                    return text.replace(/\s+/g, ' ').trim();
                }
                return text.replace(/\s+/g, ' ').trim();
            },
            buyThisMaterial() {
                if (this.$loginOrRoute()) {
                    this.oplataPopup = 6
                    this.loading = 1
                    this.$api.post('/word/' + this.material.id + '/purchase', {
                        sell: this.calcPercent(this.material.sell),
                        skidka: this.material.skidka ? this.material.skidka.skidka : 0,
                    }).then((res) => {
                        console.log(res);
                        if (res.data.purchase) {
                            this.oplataPopup = 7
                            this.isPurchased = 1
                            const userToUpdate = {
                                ...this.$auth.user
                            }
                            userToUpdate.balance = res.data.balance
                            this.$auth.setUser(userToUpdate)
                            this.download()
                        } else this.oplataPopup = 5
                        this.loading = 0
                    }).catch((err) => {
                        console.log(err);
                        this.loading = 0
                    })
                }
            },
            buyThisMaterialAndClosePopup() {
                this.oplataPopup = 0
                this.buyThisMaterial()
            },
            sendWhatsapp() {
                window.open('https://api.whatsapp.com/send?text=' + this.$store.state.appUrl + '/word/' + this.$route.params.slug + '&amp;utm_source=share2', 'send', `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=0,height=0,left=-1000,top=-1000`);
            },
            isPresentation() {
                switch (this.material.raw) {
                    case 'ppt':
                    case 'pptx':
                    case 'PPT':
                    case 'PPTX':
                        return 'pptx'
                    default:
                        return false
                }
            },
            getCertificate() {
                this.$axios.$get('/word/' + this.material.id + '/certificate', {
                    responseType: 'blob'
                }).then((res) => {
                    const url = window.URL.createObjectURL(new Blob([res]));
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = url;
                    // the filename you want
                    var d = new Date();
                    a.download = d.toLocaleString() + '.pdf';
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url)
                })
            },
            calcPercent(e) {
                return Math.round(e - e * (this.material.skidka ? this.material.skidka.skidka : 0) / 100);
            },
            copyUrl() {
                let tempInput = document.createElement('textarea');
                let copyUrlBtn = document.querySelector('.sharer');
                tempInput.style.fontSize = '12pt';
                tempInput.style.border = '0';
                tempInput.style.padding = '0';
                tempInput.style.margin = '0';
                tempInput.style.position = 'absolute';
                tempInput.style.left = '-9999px';
                tempInput.setAttribute('readonly', '');
                tempInput.value = window.location.href;
                copyUrlBtn.parentNode.appendChild(tempInput);
                tempInput.select();
                tempInput.setSelectionRange(0, 99999);
                document.execCommand('copy');
                tempInput.parentNode.removeChild(tempInput);
                alert('Сілтеме сәтті көшірілді!');
            },
            download() {
                this.$axios.$get('/word/' + this.material.id + '/download', {
                    responseType: 'blob'
                }).then((response) => {
                    const blob = new Blob([response]);
                    const link = document.createElement('a');
                    link.href = window.URL.createObjectURL(blob);
                    link.download = this.material.filename;
                    link.click();
                })
            },
            more() {
                this.$router.push('/word/' + this.material.user_id + '/materials')
            },
            successReport() {
                this.conflict = 0
                setTimeout(() => {
                    this.conflictIsSend = 1
                }, 500)
                setTimeout(() => {
                    this.conflict = 1
                }, 1000)
            },
        },
        mounted() {
            if (this.$route.query.buy)
                this.buyThisMaterial()
        },
        created() {
            if (process.client) {
                window.addEventListener('scroll', this.handleScroll);
            }
        },
    }

</script>

<style scoped lang="scss" src="@/assets/material_slug.scss"></style>
<style lang="scss">
    .main .sertificate .body .certBtns {
        button {
            width: auto;
            padding: 10px 18px;
            @media all and (max-width: 767px) {
                width: auto!important;
            }
        }
        .empty {
            @media all and (max-width: 767px) {
                max-width: 230px;
            }
        }
    }

    .WACStatusBarContainer {
        display: none !important;
    }

    @media all and (max-width: 767px) {
        .pdd {
            padding: 0 20px !important;
        }
    }

</style>
