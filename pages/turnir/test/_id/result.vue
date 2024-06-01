<template>
    <div>
        <oplataPopup :price="tuser.price" :oplataOpen="oplataPopup" @closePopup="oplataPopup=0" @next="oplataPopup++" @setPopup="($event)=>{oplataPopup=$event}" @buyThisMaterial="getCertificate()" />
        
        <div class="result d-f aj-c">
            <div class="modal_block">
               <div class="head">
                   <header_kroshki :header="header" :gotoUrl="'/turnir/'+tuser.turnir.lat_name+'-'+tuser.turnir.id" />
               </div>
                <div class="body">
                    <div v-if="tuser.diplom" class="green">Турнир нәтижесіне сай, Сіз {{tuser.diplom}} ДӘРЕЖЕЛІ ДИПЛОМ жеңіп алдыңыз</div>
                    <div v-else class="info">Турнир нәтижесі</div>
                    <div class="list">
                        <div class="list_item">
                            <img src="~assets/images/turnir/turnir_Profile.svg" alt="">
                            <span class="light">Қатысушы: </span><span>{{tuser.fio_user}}</span>
                        </div>
                        <div class="list_item">
                            <img src="~assets/images/turnir/turnir_Bookmark.svg" alt="">
                            <span class="light">Турнир атауы: </span><span>"{{tuser.turnir.name}}"</span>
                        </div>
                        <div class="list_item">
                            <img src="~assets/images/turnir/turnir_flag.svg" alt="">
                            <span class="light">Деңгейі: </span><span>Республикалық</span>
                        </div>
                        <div class="list_item">
                            <img src="~assets/images/turnir/turnir_user-octagon.svg" alt="">
                            <span class="light">Қатысушы санаты: </span><span>{{tuser.turnir.cat_name}}</span>
                        </div>
                        <div class="list_item">
                            <img src="~assets/images/turnir/turnir_Star.svg" alt="">
                            <span class="light">Жинаған балыңыз: </span><span>{{tuser.kate+tuser.durys}}/{{tuser.durys}} балл</span>
                        </div>
                        <div v-if="tuser.diplom" class="list_item">
                            <img src="~assets/images/turnir/turnir_diploma.svg" alt="">
                            <span class="light">Марапатыңыз: </span><span>{{certCalc2(tuser.diplom)}}</span>
                        </div>
                        <div class="list_item">
                            <img src="~assets/images/turnir/turnir_Calendar.svg" alt="">
                            <span class="light">Уақыты: </span><span>{{tuser.date}}</span>
                        </div>
                    </div>
                    <div class="btn_group">
                        <cstBtn @click.native="getCertificate()" class="cst_size_btn glass"><download /> {{certCalc(tuser.diplom) + (tuser.success ? '' : ' '+tuser.price +'тг')}}</cstBtn>
                        <template v-if="tuser.success">
                            <cstBtn v-if="checkBagyt() && tuser.zh_name" @click.native="getAlgys(0)" img='3' class="cbtn cst_size_btn glass">Жетекші алғыс хатын жүктеу</cstBtn>
                            <cstBtn v-if="tuser.turnir.category == 3" @click.native="getAlgys(1)" img='3' class="cbtn cst_size_btn glass">Ата-ана алғыс хатын жүктеу</cstBtn>
                        </template>
                        <glassBtn v-if="tuser.chance>0" @click.native="testTapsyru(tuser.id)" svg=1 class="cst_size_btn">Қайта тапсыру</glassBtn>
                        <nuxt-link v-else :to="'/turnir/'+tuser.turnir.lat_name+'-'+tuser.turnir.id">
                            <glassBtn class="cst_size_btn">Артқа қайту</glassBtn>
                        </nuxt-link>
                    </div>
                    <hr class="hr">
                    <div v-if="tuser.chance" class="try">
                        Сіз бұл турнирге {{tuser.chance}} рет қайта қатыса аласыз.
                    </div>
                    <div class="try_desc">
                        Қатысу барысында ең жоғары жинаған балыңызға сай марапат беріледі
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
    import cstBtn from '@/components/forms/cstBtn.vue'
    import glassBtn from '@/components/forms/glassBtn.vue'
    import header_kroshki from '@/components/header_kroshki.vue'
    import oplataPopup from '@/components/popups/oplataPopup.vue'
    import download from '@/components/svg/download.vue'
    
    export default {
        components: {
            cstBtn,
            glassBtn,
            header_kroshki,
            oplataPopup,
            download,
        },
        data() {
            return {
                oplataPopup: 0,
            }
        },
        layout: 'second',
        async asyncData({
            $axios,
            params,
        }) {
            if (!params.id) redirect('/turnir')
            let id = params.id
            let res = await $axios.$get(`turnirs/test/${id}/load_result`)
            return {
                status: res.status,
                tuser: res.data.tuser,
                header: [{
                    name: 'Турнир',
                    link: '/turnir'
                }, {
                    name: res.data.tuser.turnir.name,
                }],
            }
        },
        methods: {
            getCertificate() {
                var id = this.tuser.id
                this.$api.get('/turnirs/' + id + '/certificate', {
                    responseType: 'blob'
                }).then((res) => {
                    var fileURL = window.URL.createObjectURL(new Blob([res.data]));
                    var fileLink = document.createElement('a');
                    fileLink.href = fileURL;
                    var d = new Date();
                    fileLink.setAttribute('download', d.toLocaleString() + '.pdf');
                    document.body.appendChild(fileLink);
                    fileLink.click();
                }).catch((err) => {
                    if (err.response.status == 422) {
                        this.active = 0
                        this.oplataPopup = 6
                        this.oplataToGetCertificate()
                    }
                })
            },
            getAlgys(e) {
                var id = this.tuser.id
                this.$api.get('/turnirs/' + id + '/thankLetter', {
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
            oplataToGetCertificate() {
                var id = this.tuser.id
                this.$api.get('/turnirs/' + id + '/purchase').then((res) => {
                    if (res.data.success) {
                        this.oplataPopup = 7
                        this.tuser.success = 1
                    }
                }).catch((err) => {
                    if (err.response.data.errors.no_balance) {
                        this.oplataPopup = 5
                    }
                })
            },
            testTapsyru(id) {
                this.tuser.loading = 1
                this.$router.push({
                    name: 'turnir-test',
                    query: {
                        tuser_id: id
                    },
                });
            },
            checkBagyt() {
                switch (this.tuser.turnir.category) {
                    case 1:
                    case 2:
                        return false;
                    case 3:
                    case 4:
                        return true;
                }
            },
            certCalc(id) {
                if (id == 4) {
                    return 'Сертификатты жүктеу'
                } else {
                    return id + ' дәрежелі дипломды жүктеу'
                }
            },
            certCalc2(id) {
                if (id == 4) {
                    return 'Сертификат'
                } else {
                    return id + ' дәрежелі диплом'
                }
            },
        },
        mounted() {
            console.log(this.o_katysushy)
        }
    }

</script>


<style scoped lang="scss">
    .result {
        min-height: 100vh;
        background: linear-gradient(140.25deg, #DBF4FF 0.93%, #F3E7FF 82.61%);
        padding-bottom: 60px;
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
                        font-weight: 500;
                        line-height: 21px;

                        &.light {
                            font-weight: 400;
                            color: #858A97;
                        }
                    }
                }
            }

            .buttons {
                max-width: 650px;

                .cst_size_btn {
                    width: 100%;
                    min-height: 50px;
                }
            }

            .btn_group {
                margin-top: 30px;
                display: grid;
                grid-template-columns: 1fr 1fr;
                max-width: 600px;
                gap: 20px;

                .cst_size_btn {
                    width: 100%;
                    min-height: 50px;
                }

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

</style>
