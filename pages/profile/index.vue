<template>
    <div>
        <section class="main">
            <div class="cst-ct cst-ct2">
                <div class="wrapper-side">
                    <div class="hotslot"></div>
                    <div class="content-menin">
                        <div class="left_bar">
                            <headerprofile :head='head' active=0 />
                            <div class="profile-content">
                                <div class="content1">
                                    <div class="avatar" :style="{ backgroundImage: `url(${getApiImgUrl(avatar)})`}"></div>
                                    <div class="name">{{$auth.user.fio}}</div>
                                    <div class="info">
                                        {{$auth.user.tel_num}} <br>
                                        {{$auth.user.email}} <br>
                                    </div>
                                    <div class="myBtn">
                                        <!-- <glassBtn2 @click.native="()=>{$router.push('/profile/ozgertu')}" text='Өзгерту'/> -->
                                        <glassBtn2 text='Өзгерту'/>
                                    </div>
                                    <div @click='logout' class="exitBtn">
                                        <logoutSvg /><span>Кабинеттен шығу</span>
                                    </div>
                                </div>
                                <div class="content2">
                                    <div class="usheu">
                                        <div class="balance">
                                            Сіздің балансыңызда:
                                            <span>{{$auth.user.balance}} ₸</span>
                                            <div class="balanceadd">Толтыру</div>
                                        </div>
                                        <div class="bonus">
                                            Сіздің бонусыңыз:
                                            <span>{{$auth.user.bonus}} Б</span>
                                        </div>
                                        <div class="idnomer">
                                            ID номеріңіз:
                                            <span>
                                                {{$auth.user.id}}
                                                <img class="copy" src="@/assets/images/svg/copy.svg">
                                            </span>
                                        </div>
                                    </div>
                                     <div class="fullinfo">
                                        <div class="content">
                                            <div class="title">Облыс:</div>
                                            <div class="text">Түркістан облысы</div>
                                        </div>
                                        <div class="content">
                                            <div class="title">Қала/аудан:</div>
                                            <div class="text">Шымкент қаласы</div>
                                        </div>
                                        <div class="content">
                                            <div class="title">Мектеп:</div>
                                            <div class="text">№14 ЖББМ КММ</div>
                                        </div>
                                        <div class="content">
                                            <div class="title">Лауазым:</div>
                                            <div class="text">Химия және физика пәні мұғалімі</div>
                                        </div>
                                        <div class="description">
                                            Учительница истории и правоведения, магистр начального образования, учительница начальной школы. Воспитательница детей раннего и дошкольного возраста. Учительница начальной школы Вишневской ООШ №1 I-III ступеней
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div class="myrazdel">
                                <div class="title">Менің бөлімдерім</div>
                                <div class="razdelder">
                                    <NuxtLink class="razdel-blok" v-for="route in routes" :key="'route-'+route.route" :to="route.route" :style="{ backgroundImage: 'url(' + route.fon + '), ' + route.gradient }">
                                            <div class="text">
                                                <h4>{{ route.name }}</h4>
                                                {{ route.description }}
                                            </div>
                                            <div class="arrow">
                                                <arrow />
                                            </div>
                                    </NuxtLink>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
    import headerprofile from '@/components/header_profile.vue'
    import glassBtn2 from '@/components/forms/glassBtn2.vue'
    import logoutSvg from '@/components/svg/logout.vue'
    import arrow from '@/components/svg/index/arrow-top-right.vue'

    export default {
        middleware: ['auth'],
        components: {
            headerprofile,
            logoutSvg,
            arrow,
            glassBtn2
        },
        data() {
            return {
                routes: [
                {
                    name: 'Курстарым',
                    description: 'Сіз қатысқан барлық курстардың жазбалары мен сертификаттары сақталады',
                    route: '/menin-kurstarym',
                    fon: require('@/assets/images/profile/razdel1.png'),
                    gradient: 'linear-gradient(180deg, #E2E8FF 28%, #5E82DD 100%)',
                }, {
                    name: 'Материалдарым',
                    description: 'Сайтта жариялаған материалдар сақталады',
                    route: '/menin-materialdarym',
                    fon: require('@/assets/images/profile/razdel2.png'),
                    gradient: 'linear-gradient(180deg, #FFF9E2 41.5%, #FFE073 100%)',
                }, {
                    name: 'Менің ҚМЖ-ларым',
                    description: 'Сіз сатып алған барлық ҚМЖ-лар сақталады',
                    route: '/menin-qmglarym',
                    fon: require('@/assets/images/profile/razdel3.png'),
                    gradient: 'linear-gradient(180deg, #F3EFFF 31.5%, #C9B7EF 100%)',
                }, {
                    name: 'Олимпиадаларым',
                    description: 'Сіз қатысқан барлық олимпиада марапаттары мен нәтижелері сақталады',
                    route: '/menin-olimpiadalarym',
                    fon: require('@/assets/images/profile/razdel4.png'),
                    gradient: 'linear-gradient(180deg, #FFFAEC 48%, #EBBF99 100%)',
                }, {
                    name: 'Байқауларым',
                    description: 'Сіз қатысқан барлық байқаулар марапаттары мен нәтижелері сақталады',
                    route: '/menin-baiqaularym',
                    fon: require('@/assets/images/profile/razdel5.png'),
                    gradient: 'linear-gradient(180deg, #E8FBFF 37.5%, #99E4FF 100%)',
                }, {
                    name: 'Турнирлерім',
                    description: 'Сіз қатысқан барлық турнир марапаттары мен нәтижелері сақталады',
                    route: '/menin-turnirlerym',
                    fon: require('@/assets/images/profile/razdel6.png'),
                    gradient: 'linear-gradient(180deg, #FFF7F7 33.5%, #FFA7A7 100%)',
                }, {
                    name: 'Айлық есептеу калькуляторы',
                    description: 'Калькулятор арқылы өз айлығыңызды есептеп, PDF файлға жүктеп алуға болады',
                    route: '/calculator',
                    fon: require('@/assets/images/profile/razdel7.png'),
                    gradient: 'linear-gradient(180deg, #FFEFE4 50.5%, #EFB992 100%)',
                }, {
                    name: 'Вебинарларым',
                    description: 'Сіз қатысқан барлық вебинар марапаттары мен нәтижелері сақталады',
                    route: '/menin-vebinarlarym',
                    fon: require('@/assets/images/profile/razdel8.png'),
                    gradient: 'linear-gradient(180deg, #EFF7FF 31.5%, #99BCFF 100%)',
                }, {
                    name: 'Конференцияларым',
                    description: 'Сіз қатысқан барлық конференция марапаттары мен нәтижелері сақталады',
                    route: '/menin-conferencialarym',
                    fon: require('@/assets/images/profile/razdel9.png'),
                    gradient: 'linear-gradient(180deg, #F0EBFF 49.5%, #9992EF 100%)',
                }, {
                    name: 'Журналдарым',
                    description: 'Сіз сатып алған барлық журналдар сақталады',
                    route: '/menin-zhurnaldarym',
                    fon: require('@/assets/images/profile/razdel10.png'),
                    gradient: 'linear-gradient(180deg, #E5EFFF 41.5%, #8D88E2 100%)',
                }
                ],
                title: 'Ustaz tilegi - Ұстаз тілегі Республикалық ұастаздар сайты',
                head: [{
                    link: '/profile',
                    name: 'Жеке кабинет',
                }, {
                    link: '/profile/balance',
                    name: 'Баланс',
                }, {
                    link: '/profile/bonus',
                    name: 'Бонус',
                }],
                avatar: ''
            }
        },
        fetch() {
            this.avatar = this.$auth.user.img1 != '' ? this.$auth.user.img1 : 'userDefault.png'
        },
        methods: {
            getApiImgUrl(pet) {
                var images = this.$store.state.apiUrl+'/storage/files/images/avatars/'+pet;
                // var images = 'https://api.ust.kz/storage/files/images/avatars/'+pet;
                // console.log(images)
                return images
            },
            logout() {
                this.$auth.logout().then(() => {
                    this.router.push('/')
                });
            }
        },
        head() {
            return {
                title: this.title,
                link: [{
                    rel: 'canonical',
                    href: this.$store.state.appUrl + this.$route.path
                }]
            }
        }
    }

</script>


<style scoped lang="scss">
.main {
    background: linear-gradient(140deg, #DBF4FF 0.93%, #F3E7FF 82.61%);
    padding-bottom: 1550px;
}
.content-menin {
    width: 100%;
    height: 800px;
    font-size: 16px;
    line-height: 20px;
    padding-top: 30px;

    .left_bar {
        // padding: 30px 45px;
        background: #fff;
        border-radius: 10px 10px 0px 0px;
        padding: 0;

        .profile-content {
            // padding: 25px 45px;
            // padding-bottom: 50px;
            display: flex;

            .content1 {
                border-right: 2px solid #E2E8F4;
                border-bottom: 2px solid #E2E8F4;
                padding: 50px 45px;
                width: 30%;
                text-align: center;
                .avatar {
                    background-repeat: no-repeat!important;
                    background-size: contain!important;
                    width: 150px;
                    height: 150px;
                    background: #dedede;
                    border-radius: 50%;
                    margin: 0 auto;
                }
                .name {
                    color: #172856;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: normal;
                    margin: 15px 0;
                }
                .info {
                    font-size: 14px;
                    color: #363636;
                    line-height: 22px;
                }
                .myBtn {
                    margin: 15px 0;
                    height: 40px;
                    width: 100%;
                }
                .exitBtn {
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 20px;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    svg {
                        margin-right: 15px;
                        stroke: #172856;
                    }
                    &:hover{
                        cursor: pointer;
                        color: #0045CB;
                        svg{
                            stroke: #0045CB;
                        }
                    }
                    &:active{
                        color: #0037A1;
                        svg{
                            stroke: #0037A1;
                        }
                    }

                }
            }

            .content2 {
                border-bottom: 2px solid #E2E8F4;
                padding: 25px;
                width: 70%;

                .usheu {
                    display: flex;
                    gap: 5px;
                    justify-content: space-between;
                    div {
                        width: 33%;
                        min-height: 119px;
                        border-radius: 10px;
                        color: #fff;
                        font-size: 14px;
                        padding: 15px 20px;
                        span {
                            display: block;
                            font-size: 22px;
                            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
                            margin-top: 5px;
                            font-weight: 700;
                        }
                    }
                    .balance {
                        background-image: url(~/assets/images/svg/balance-svg.svg), linear-gradient(256deg, #3AA7F6 16.25%, #1E63E9 78.84%);
                        background-repeat: no-repeat, repeat;
                        background-position: right top;
                        .balanceadd {
                            font-size: 16px;
                            text-decoration-line: underline;
                            margin-top: 15px;
                            padding: 0;
                            width: auto;
                            height: auto;
                            min-height: auto;
                            cursor: pointer;
                            &:hover {
                                text-decoration-line: none;
                            }
                        }
                    }
                    .bonus {
                        background-image: url(~/assets/images/svg/bonus-svg.svg), linear-gradient(259deg, #2AD3C9 -7.1%, #16B013 78.71%);
                        background-repeat: no-repeat, repeat;
                        background-position: right top;
                    }
                    .idnomer {
                        background: #F1F7FF;
                        border: 1px solid #E2E8F4;
                        color: #172856;
                        padding: 30px 35px;
                        font-weight: 500;
                        span {
                            display: flex;
                            color: #1E63E9;
                            font-size: 20px;
                            text-shadow: none;
                            margin-top: 3px;

                            img.copy {
                                margin-left: 10px;
                                width: 24px;
                                cursor: pointer;
                            }
                        }
                    }
                }

                .fullinfo {
                    padding: 20px 10px;
                    font-size: 16px;
                    font-style: normal;
                    line-height: normal;
                    .content {
                        width: 100%!important;
                        margin-bottom: 12px;
                        display: flex;
                        justify-content: flex-start;
                        .title {
                            color: #858A97;
                            width: 180px;
                        }
                        .text {
                            color: #172856;
                            font-weight: 500;
                        }
                    }
                    .description {
                        color: #172856;
                        font-weight: 500;
                        margin-top: 25px;
                    }
                }
            }
        }
        .myrazdel {
            padding: 45px;
            padding-bottom: 200px;
            .title {
                color: #172856;
                font-size: 36px;
                line-height: normal;
                margin-bottom: 20px;
            }
            .razdelder {
                display: flex;
                justify-content: space-between;
                flex-direction: row;
                flex-wrap: wrap;
                a.razdel-blok {
                    width: 32%;
                    min-height: 320px; 
                    border-radius: 10px;
                    padding: 30px;
                    border: 1px solid #E2E8F4;
                    background-repeat: no-repeat, repeat;
                    background-position: right bottom;
                    margin-bottom: 20px;
                    .text {
                        color: #172856;
                        font-size: 16px;
                        height: 100px;
                        h4 {
                            font-size: 20px;
                            font-weight: 700;
                            text-transform: uppercase;
                            display: block;
                            margin-bottom: 5px;
                        }
                    }
                    .arrow {
                        width: 40px;
                        height: 40px;
                        border: 1px solid #fff;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-top: 15px;
                    }

                    svg {
                        stroke: #fff;
                    }

                    &:hover {
                        svg {
                            stroke: #fff;
                        }
                        .arrow {
                            background: #0045CB;
                            border: 1px solid #0045CB;
                        }
                    }

                }
            }
        }
    }
}

@media(max-width: 1199px) {
    .main {
        padding-bottom: 2100px!important;
    }
    .profile-content {
        flex-direction: column;
        .content1 {
            width: 100%!important;
            border-right: none!important;
            padding: 40px 0!important;
            .myBtn {
                margin: 15px auto!important;
                width: 80%!important;
            }
        }
        .content2 {
            width: 100%!important;
        }
    }
    .razdel-blok {
        width: 49%!important;
    }

}
@media(max-width: 991px) {
    .cst-ct {
        padding: 0!important;
    }
    .content-menin {
        padding-top: 10px;
        .left_bar {
            .profile-content {
                font-size: 16px!important;
                padding: 25px 20px!important;
                padding-bottom: 0px!important;
                flex-direction: column;
                .content2 {
                    padding: 40px 0;
                    .usheu {
                        flex-wrap: wrap;
                        .balance {
                            width: 49%;
                        }
                        .bonus {
                            width: 49%;
                        }
                        .idnomer {
                            width: 100%;
                        }
                    }
                    .title {
                        width: 150px;
                    }
                }
            }
            .myrazdel {
                padding: 25px;
                .title {
                    font-size: 24px!important;
                }
                .razdelder {
                    .razdel-blok {
                        margin-bottom: 10px!important;
                        width: 100% !important;
                    }
                }
            }
        }
    }
    .main {
        padding-bottom: 4100px !important;
    }
}
@media(max-width: 767px) {
    .content-menin {
        padding: 0;
    }
    .fullinfo {
        font-size: 14px!important;
        padding: 20px 0px!important;
        .title {
            width: 90px!important;
        }
    }
    .razdel-blok {
        min-height: 210px !important;
        background-size: 30% !important;
        padding: 20px !important;
    }
    .main {
        padding-bottom: 2800px !important;
    }
}
@media(max-width: 425px) {
    .usheu {
        div {
            padding: 15px!important;
            span {
                font-size: 22px!important;
            }
        }
        .balance {
            font-size: 12px!important;
            .balanceadd {
                padding: 0!important;
            }
        }
        .bonus {
            font-size: 12px!important;
        }
        .idnomer {
            padding: 20px 25px!important;
        }
    }
}
</style>
