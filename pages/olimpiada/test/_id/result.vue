<template>
    <div>
        <div class="result d-f aj-c">
            <div class="modal_block">
                <div class="head">
                    <header_kroshki :header="header" :gotoUrl="'/olimpiada/'+o_katysushy.o_bagyt.lat_name+'-'+o_katysushy.o_bagyt.idd" />
                </div>
                <div class="body">
                    <div class="green">Олимпиада нәтижесіне сай, Сіз <span class="uppercase">{{marapat(o_katysushy.o_tizim.result)}}</span> жеңіп алдыңыз</div>
                    <div class="list">
                        <div class="list_item">
                            <img src="~assets/images/turnir/turnir_Profile.svg" alt="">
                            <span class="light">Қатысушы: <b>{{o_katysushy.o_katysushy_fio}}</b></span>
                        </div>
                        <div class="list_item">
                            <img src="~assets/images/turnir/turnir_Bookmark.svg" alt="">
                            <span class="light">Олимпиада атауы: <b>{{o_katysushy.o_tury.o_tury}}</b></span>
                        </div>
                        <div class="list_item">
                            <img src="~assets/images/turnir/turnir_flag.svg" alt="">
                            <span class="light">Деңгейі: <b>{{oblys(o_katysushy.o_bagyt.type)}}</b></span>
                        </div>
                        <div class="list_item">
                            <img src="~assets/images/turnir/turnir_user-octagon.svg" alt="">
                            <span class="light">Қатысушы: <b>{{katysushy(o_katysushy.o_katysushy_idd)}}</b></span>
                        </div>
                        <div class="list_item">
                            <img src="~assets/images/turnir/turnir_Star.svg" alt="">
                            <span class="light">Жинаған балыңыз: <b>20/{{o_katysushy.o_tizim.result}} балл</b></span>
                        </div>
                        <div class="list_item">
                            <img src="~assets/images/turnir/turnir_diploma.svg" alt="">
                            <span class="light">Марапатыңыз: <b>{{marapat(o_katysushy.o_tizim.result)}}</b></span>
                        </div>
                        <div class="list_item">
                            <img src="~assets/images/turnir/turnir_Calendar.svg" alt="">
                            <span class="light">Уақыты: <b>{{o_katysushy.o_tizim.date}}</b></span>
                        </div>
                    </div>
                    <div class="btn_group mt-30 d-f gap-10 f-wrap">
                        <cstBtn @click.native="getCertificate()" class="cst_size_btn glass">
                            <download /> {{marapat(o_katysushy.o_tizim.result) + ' жүктеу'}}
                        </cstBtn>
                        <cstBtn v-if="checStudent() && o_katysushy.o_zhetekshi_id" @click.native="getAlgys(0)" class="cbtn cst_size_btn glass">
                            <download /> Жетекші алғыс хатын жүктеу
                        </cstBtn>
                        <cstBtn v-if="o_katysushy.o_katysushy_idd == 3" @click.native="getAlgys(1)" class="cbtn cst_size_btn glass">
                            <download /> Ата-ана алғыс хатын жүктеу
                        </cstBtn>
                    </div>
                    <hr class="hr">
                    <div class="d-f j-b f-wrap gap-20">
                        <bigBtn @click.native="katemenJumys" class="cst_size_btn">
                            <refresh /> Қатемен жұмыс
                        </bigBtn>
                        <nuxt-link :to="'/olimpiada/'+o_katysushy.o_bagyt.lat_name+'-'+o_katysushy.o_bagyt.idd" class="cst_size_btn">
                            <cstBtn class="cst_size_btn empty">
                                <undo />
                                Олимпиада бетіне қайту
                            </cstBtn>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
    import cstBtn from '@/components/forms/cstBtn.vue'
    import bigBtn from '@/components/forms/bigBtn.vue'
    import header_kroshki from '@/components/header_kroshki.vue'
    import download from '@/components/svg/download.vue'
    import refresh from '@/components/svg/olimp/refresh.vue'
    import undo from '@/components/svg/olimp/undo.vue'

    export default {
        components: {
            bigBtn,
            cstBtn,
            header_kroshki,
            download,
            undo,
            refresh,
        },
        layout: 'second',
        async asyncData({
            $axios,
            params
        }) {
            if (!params.id) redirect('/olimpiada')
            let id = params.id
            let res = await $axios.$get(`olimpiada/test/${id}/load_result`)
            return {
                status: res.status,
                o_katysushy: res.data.o_katysu,
                header: [{
                    name: 'Олимпиадалар',
                    link: '/olimpiada'
                }, {
                    name: res.data.o_katysu.o_bagyt.o_bagyty,
                }],
            }
        },
        methods: {
            getCertificate() {
                this.$api.get('/olimpiada/' + this.o_katysushy.idd + '/certificate', {
                    responseType: 'blob'
                }).then((response) => {
                    var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                    var fileLink = document.createElement('a');
                    fileLink.href = fileURL;
                    var d = new Date();
                    fileLink.setAttribute('download', d.toLocaleString() + '.pdf');
                    document.body.appendChild(fileLink);
                    fileLink.click();
                })
            },
            getAlgys(e) {
                let id = e ? this.o_katysushy.idd : this.o_katysushy.o_zhetekshi_id
                this.$api.get('/olimpiada/' + id + '/thankLetter', {
                    responseType: 'blob',
                    params: {
                        type: e
                    }

                }).then((response) => {
                    var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                    var fileLink = document.createElement('a');
                    fileLink.href = fileURL;
                    var d = new Date();
                    fileLink.setAttribute('download', d.toLocaleString() + '.pdf');
                    document.body.appendChild(fileLink);
                    fileLink.click();
                })
            },
            checStudent() {
                return this.o_katysushy.o_katysushy_idd == 2 ? true : this.o_katysushy.o_katysushy_idd == 3 ? true : false;
            },
            oblys(id) {
                switch (id) {
                    case 1: {
                        return 'Облыстық'
                    }
                    case 2: {
                        return 'Республикалық'
                    }
                    case 3: {
                        return 'Халықаралық'
                    }
                }
            },
            katysushy(id) {
                let text = this.o_katysushy.o_bagyt.bagyt + ' пәнінен '
                switch (id) {
                    case 1: {
                        return text + 'ұстаздар арасында'
                    }
                    case 2: {
                        return text + 'студенттер арасында'
                    }
                    case 3: {
                        return text + this.o_katysushy.o_bagyt.first_child.synyp + '-' + this.o_katysushy.o_bagyt.last_child.synyp + ' сынып оқушылар арасында'
                    }
                    case 4: {
                        return text + 'тәрбиешілер арасында'
                    }
                }
            },
            marapat(value) {
                if (value >= 19) return '1 дәрежелі диплом'
                else if (value >= 16) return '2 дәрежелі диплом'
                else if (value >= 13) return '3 дәрежелі диплом'
                else return 'Сертификат'
            },

            marapatOrph(value) {
                if (value >= 19) return '1 дәрежелі дипломды'
                else if (value >= 16) return '2 дәрежелі дипломды'
                else if (value >= 13) return '3 дәрежелі дипломды'
                else return 'Сертификатты'
            },
            katemenJumys() {
                this.$router.push({
                    name: 'olimpiada-test-katemen-jumys',
                    query: {
                        user_code: this.o_katysushy.o_tizim.code,
                        code: this.o_katysushy.obwcode
                    }
                });
            }
        },
    }

</script>


<style scoped lang="scss">
    .result {
        min-height: 100vh;
        background: linear-gradient(140.25deg, #DBF4FF 0.93%, #F3E7FF 82.61%);
        padding: 30px 0 60px;
    }

    .returnBtn {
        width: 100%;
        max-width: 658px;
        margin-top: 60px;
        height: 50px;
        margin-bottom: 80px;
    }

    .modal_block {
        width: 100%;
        max-width: 800px;
        background: #ffffff;
        height: auto;
        border-radius: 6px;

        &::-webkit-scrollbar {
            display: none;
        }

        .head {
            box-shadow: 0px 3px 6px 0px #0000001A;
            background: #F5F6F8;
            border-radius: 10px 10px 0px 0px;


        }

        .header {
            padding: 10px;
        }

        .body {
            padding: 40px 40px 50px;


            .uppercase {
                text-transform: uppercase;
            }

            .green {
                font-size: 32px;
                font-weight: 600;
                line-height: 38.4px;
                text-align: left;
            }

            .info {
                font-size: 28px;
                font-weight: 700;
                line-height: 32px;
                width: 100%;
                max-width: 500px;
                margin: 0 auto;
                text-align: center;
            }

            .list {
                margin-top: 30px;

                .list_item {
                    &:not(:first-child) {
                        margin-top: 10px;
                    }

                    display: flex;
                    align-items: center;
                    gap: 5px;

                    span {
                        font-size: 18px;
                        line-height: 21px;
                        font-weight: 400;
                        color: #858A97;
                        b {
                            font-weight: 500;
                            color: #172856;
                        }
                    }
                }
            }

            .cst_size_btn {
                min-width: 290px;
                height: 50px;
                @media all and (max-width: 445px) {
                    width: 100%;
                }
                
            }

            .btn_group {


                @media all and (max-width: 500px) {
                    grid-template-columns: 1fr;

                    .cst_size_btn {
                        max-width: 100%;
                        height: 40px;
                    }
                }

            }

            .hr {
                margin: 40px 0;
                border-top: 1px solid #E2E8F4;
            }

            .try {
                font-size: 24px;
                font-weight: 600;
                line-height: 28px;
            }

            .try_desc {
                margin-top: 8px;
                font-size: 18px;
                font-weight: 400;
                line-height: 21px;
            }

            video {
                width: 100%;
            }

            &.mini {
                .success {
                    display: grid;
                    grid-template-columns: auto 1fr;
                    grid-gap: 20px;
                    align-items: center;

                    .green {
                        text-align: left;
                        margin: 0;
                    }

                    img {
                        width: 44px;
                        height: 44px;
                    }

                    .foot {
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 21px;
                    }
                }

                @media all and (max-width: 767px) {
                    padding: 10px 30px 50px;
                }

                @media all and (max-width: 500px) {
                    padding: 10px 20px 40px;
                }
            }
        }
    }

    @media all and (max-width: 991px) {
        .modal_block {
            max-width: 650px;
        }

        .modal_block .body .green {
            font-size: 22px;
            font-weight: 700;
        }

        .modal_block .body .list .list_item span {
            font-size: 16px;
            line-height: 19px;
        }

        .modal_block .body .list .list_item:not(:first-child) {
            margin-top: 8px;
        }

        .modal_block .body {
            padding: 30px 25px 50px;
        }
    }

</style>
<style lang="scss">
    .modal .modal_block .body .btn_group .cst_size_btn button {
        font-size: 14px;
        font-weight: 600;
        line-height: 16px;
    }
    @media all and (max-width: 445px) {
        .main_header {
            padding: 20px 10px !important;
        }
        
    }
    

</style>
