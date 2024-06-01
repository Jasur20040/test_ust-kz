<template>
    <div style="background: #F5F6F8;">
        <deletePopup :isOpen="deletePopupOpen" :material_id="deleteMaterialId" @closePopup="deletePopupOpen=false" />
        <zhurnal_forma :isOpen="formaOpen" @closePopup="formaOpen=0" />
        <oplataPopup :price="oplataSell" :oplataOpen="oplataPopup" @closePopup="oplataPopup=0" @next="oplataPopup++" @setPopup="($event)=>{oplataPopup=$event}" @buyThisMaterial="buy(type)" :material_id="opIndex" />
        <!-- <headLink :head='head' active=1 /> -->
        <section class="main-1">
            <div class="cst-ct">
                <div class="wrapper-side">
                    <div class="hotslot"></div>
                    <div class="header">
                        <div class="moimater">
                            <img src="~assets/images/signal.gif" alt="">
                            <div class="satmat">
                                <b>Ескерту:</b> 
                                Сатылған материалдардың статистикасын Жеке кабинеттегі - 
                                <a href="/bonus">бонус бетінен</a> көре аласыз
                            </div>
                        </div>
                        <div class="h3">Менің материалдарым</div>
                        <div class="desc">Бұл бетте сіз жариялаған барлық материалдар сайттан өшпей сақталып қалады. Өзіңіздің барлық материалдарыңызды осында тегін жариялап архив ретінде сақтауға болады</div>
                        <NuxtLink to='/zharialau'>
                            <bigBtn img="add.svg"  class="myBtn">Материал жариялау</bigBtn>
                        </NuxtLink>
                    </div>
                    
                </div>
            </div>
        </section>
        <section class="main-2">
            <div class="cst-ct">
                <div class="wrapper-side">
                    <div class="hotslot"></div>
                    <div class="materials-list">
                        <div class="sssfg">
                            <div class="batlygy">
                                Барлығы: {{materials_count}}
                            </div>
                            <btnGroup :category='filter' placeholder='Барлығы' type='3' @entered-category='filterSearch($event)' />
                        </div>
                        <not_found v-if="loading == 2" text="Материалдар тізімі бос." desc="Материал жариялау үшін 'Метериалды жариялау' бастырмасын басыныз" btnText="Метериалды жариялау" link="/zharialau" />
                        <div v-show="loading == 1" class="loading">
                            <loader />
                        </div>
                        <template v-if="!loading" v-for="(material, index) in materials">
                            <template v-if="!material.purchase">
                                <myBlock :material="material" @certificate="getCertificate(material.id)" @getAlgys="getAlgys(index)" @thankLetter="getKurmet(index)" @zhinaq="formaOpen=1" />
                            </template>
                            <template v-else>
                                <block :material="material" />
                            </template>
                        </template>

                        <div class="paginate" v-if="lastPage > 1">
                            <pagination :currentPage="currentPage" :lastPage="lastPage" @set-page="Pageload" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
    import deletePopup from '@/components/popups/deletePopup.vue'
    import oplataPopup from '@/components/popups/oplataPopup.vue'
    // import headLink from '@/components/header.vue'
    import bigBtn from '@/components/forms/bigBtn.vue'
    import btnGroup from '@/components/forms/btnGroup.vue'
    import myBlock from '@/components/materials/forms/myBlock.vue'
    import block from '@/components/materials/forms/block.vue'
    import pagination from '@/components/pagination.vue'
    import not_found from '@/components/landing/not_found.vue'
    import loader from '@/components/Lottie/loader.vue'
    import zhurnal_forma from '@/components/popups/zhurnal_forma.vue'

    export default {
        middleware: ['auth'],
        head() {
            return {
                title: 'Менің материалдарым | Ustaz tilegi - Ұстаз тілегі Республикалық ұстаздар сайты',
                meta: [{
                    hid: 'description',
                    name: 'description',
                    content: 'Ұстаз тілегі Республикалық ұстаздар сайты. Ұстаздарға видео сабақтар, онлайн олимпиадалар, сертификаттар, алғыс хаттар, грамоталар, дипломдар, сабақ жоспарлары'
                }, {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'онлайн олимпиада, ұстаз тілегі, уст кз, ustaz tilegi, ust kz, ұстаздар сайты, ашық сабақтар, сабақ жоспарлары, видео сабақтар, вебинарлар'
                }, ],
                link: [{
                    rel: 'canonical',
                    href: this.$store.state.appUrl + this.$route.path
                }]
            }
        },

        components: {
            deletePopup,
            oplataPopup,
            bigBtn,
            // headLink,
            myBlock,
            block,
            btnGroup,
            loader,
            pagination,
            not_found,
            zhurnal_forma
        },
        data() {
            return {
                head: [{
                    link: '/material',
                    name: 'Материалдар',
                }, {
                    link: '/menin-materialdarym',
                    name: 'Менің материалдарым',
                }],
                categories: ['Материалдарым', 'Жинақтарым', 'Дайын ҚМЖ-ларым'],
                categoriesUrl: ['/menin-materialdarym', '/menin-materialdarym/zhinaq', '/menin-materialdarym/qmg'],
                deletePopupOpen: false,
                oplataPopup: 0,
                deleteMaterialId: null,
                filter: [{
                    name: 'Барлығы'
                }, {
                    name: 'Менің жариялағандарым'
                }, {
                    name: 'Сатып алғандарым'
                }],
                filterInner: 0,
                loading: 1,
                materials: [],
                materials_count: 0,
                oplataSell: 400,
                COUNT: 0,
                currentPage: 1,
                lastPage: 1,
                opIndex: 0,
                type: 1,
                formaOpen: 0,
            }
        },
        methods: {
            buy(type){
                type == 1 ? this.buyForAlgys(this.opIndex) : this.buyForKurmet(this.opIndex)
            },
            getData() {
                this.$api.$get('/menin-materialdarym', {
                    params: {
                        page: this.currentPage,
                        filter: this.filterInner,
                    }
                }).then((res) => {
                    console.log(res);
                    this.materials_count = res.data.total;
                    this.currentPage = res.data.current_page;
                    this.lastPage = res.data.last_page;
                    this.materials = res.data.data;
                    this.loading = 0;
                    if (res.data.data.length == 0) this.loading = 2;
                    var buy = this.$route.query.buy
                    var type = this.$route.query.type
                    if(buy && type) {
                        this.type = type
                        this.opIndex = buy
                        this.buy(type)
                    }
                }).catch(error => {
                    console.log('error: ' + error);
                });

            },
            zhinaq(index) {
                // console.log('daulet');
                let id = this.materials[index].id
                this.$api.$post('/menin-materialdarym/' + id + '/send_zhurnal').then((res) => {
                    this.materials[index].zhurnal = {
                        res: res.status
                    }
                    this.$bus.$emit('successPopup');
                })
            },
            filterSearch(e) {
                this.filterInner = e
                this.loading = 1
                this.getData()
            },
            getCertificate(id) {
                // console.log(id);
                this.$axios.$get('/word/' + id + '/certificate', {
                    responseType: 'blob'
                }).then((res) => {
                    this.downloadBlob(res)
                })
            },
            getAlgys(index) {
                if (this.materials[index].algys) {
                    this.$api.$get('/word/' + this.materials[index].id + '/getAlgys', {
                        responseType: 'blob'
                    }).then((res) => {
                        this.downloadBlob(res)
                    })
                } else this.buyForAlgys(index)
            },
            buyForAlgys(index) {
                this.oplataPopup = 6
                this.opIndex = index
                this.type = 1
                this.$api.$post('/word/' + this.materials[index].id + '/buyAlgys').then((res) => {
                    this.materials[index].algys = res.ser_id
                    this.oplataPopup = 7
                }).catch((err) => {
                    if (err.response.data.errors.balance) {
                        this.oplataPopup = 5
                        this.oplataSell = 1500
                    }
                })
            },
            getKurmet(index) {
                if (this.materials[index].kurmet) {
                    this.$api.$get('/word/' + this.materials[index].id + '/getKurmet', {
                        responseType: 'blob'
                    }).then((res) => {
                        this.downloadBlob(res)
                    })
                } else this.buyForKurmet(index)
            },
            buyForKurmet(index) {
                this.oplataPopup = 6
                this.opIndex = index
                this.type = 2
                this.$api.$post('/word/' + this.materials[index].id + '/buyKurmet').then((res) => {
                    this.materials[index].kurmet = res.ser_id
                    this.oplataPopup = 7
                }).catch((err) => {
                    if (err.response.data.errors.balance) {
                        this.oplataPopup = 5
                        this.oplataSell = 2000
                    }
                })
            },
            downloadBlob(res) {
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
            },
            Pageload(e) {
                this.currentPage = e;
                this.loading = 1;
                this.getData();
            },
        },
        mounted(){
            this.getData();
            // console.log(this.material);
            this.$bus.$on('deleteMaterial', (e) => {
                this.deletePopupOpen = true;
                this.deleteMaterialId = e;
            })
        }
    }

</script>

<style scoped lang="scss">
    .loading {
        margin-top: 100px;
        height: 50vh;
    }

    .paginate {
        margin-top: 50px;
    }
    .otstup {
        padding-bottom: 66px;

        @media all and (max-width: 767px) {
            padding-bottom: 132px;
        }
    }

    .main-1 {
        background: #ffffff;
        padding-bottom: 50px;
        border-bottom: 1px solid #E2E8F4;
        @media all and (max-width: 767px) {
            .cst-ct {
                padding: 0;
            }
        }
        .header {
            padding: 40px 30px 0 30px;
            @media all and (max-width: 767px) {
                padding: 30px 20px 0 20px;
            }

            .h3 {
                font-size: 28px;
                font-weight: 600;
                line-height: 30px;
                color: #172856;
                @media all and (max-width: 767px) {
                    font-size: 24px;
                }
            }

            .desc {
                font-size: 16px;
                font-weight: 400;
                line-height: 22px;
                color: #858A97;
                margin-top: 20px;
                @media all and (max-width: 767px) {
                    font-size: 14px;
                    line-height: 18px;
                    margin-top: 10px;
                }

            }

            .moimater {
                display: flex;
                align-items: flex-end;
                padding: 15px 20px;
                border-radius: 5px;
                border: 0.5px solid #03B113;
                background: #E6F7E8;
                color: #03B113;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                gap: 6px;
                margin-bottom: 30px;

                @media all and (max-width: 1199px) {
                    align-items: center;
                }

                @media all and (max-width: 767px) {
                    padding: 10px 15px;
                    font-size: 14px;
                }

                img {
                    width: 20px;
                    height: 20px;
                }

                a {
                    text-decoration: none;
                    color: #03B113;
                    font-weight: 500;
                    &:hover {
                        text-decoration: underline;
                    }
                }

            }

            .myBtn {
                margin-top: 20px;
                max-width: 250px;
                height: 50px;
                width: 100%;
            }
        }
    }

    .materials-list {
        position: relative;
        z-index: 2;
        padding: 30px 30px 100px 30px;

        @media all and (max-width: 767px) {
            padding: 30px 20px 100px 20px;
        }

        hr {
            margin: 30px 0 0;
            padding-bottom: 10px;
        }

        .sssfg {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 30px;
            @media all and (max-width: 767px) {
                align-items: center;
            }

            .batlygy {
                color: #858A97;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                @media all and (max-width: 767px) {
                    font-size: 14px;
                }
            }

            .btn-group {
                button.btn.myBtn {
                    display: flex;
                    padding: 10px 15px;
                    align-items: center;
                    gap: 30px;
                    border-radius: 5px;
                    border: 0.5px solid #E2E8F4;
                    background: #FFF;
                    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
                    color: #172856;
                    @media all and (max-width: 767px) {
                        font-size: 14px;
                        padding: 5px 10px;
                        gap: 20px;
                    }
                }
            }
        }


    }

    .main-2 {
        @media all and (max-width: 767px) {
            .cst-ct {
                padding: 0;
            }
        }
    }

    .block {
        margin: 10px 0 0 0;
    }

    @media all and (max-width: 991px) {
        .main .header .h3 {
            font-size: 22px;
            line-height: 28px;
        }

        .main .header .desc {
            font-size: 15px;
            line-height: 21px;
        }

        @media all and (max-width: 500px) {
            .main .header .h3 {
                font-size: 20px;
                line-height: 26px;
            }

            .main .header .desc {
                font-size: 13px;
                line-height: 19px;
            }
        }

        @media all and (max-width: 415px) {
            .main .header .h3 {
                font-size: 18px;
                line-height: 24px;
            }

            .main .header .desc {
                font-size: 12px;
                line-height: 16px;
            }
        }

    }

</style>
