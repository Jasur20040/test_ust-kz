<template>
    <div>
        <mainBanner />
        <section class="main">
            <div class="cst-ct cst-ct2">
                <div class="wrapper-side">
                    <div class="hotslot"></div>
                    <div class="content">
                        <h2 class="ourservices">Біздің қызметтер</h2>
                        <div class="wrap">
                            <NuxtLink v-for="n in 14" :key="n" :to="urls[n-1]" class="d-f a-c j-b gap-20 block">
                                <div class="d-f a-c gap-20">
                                    <div :style="'background: '+colors[n-1]" class="icon d-f aj-c" :class="'a'+n">
                                        <img :src='getImgUrl(n)' alt="">
                                    </div>
                                    <div class="text">
                                        <h4>{{ titles[n-1] }}</h4>
                                        {{ descriptions[n-1] }}
                                    </div>
                                </div>
                                <div class="arrow d-f aj-c">
                                    <arrow />
                                </div>
                            </NuxtLink>
                        </div>
                        <div class="course">
                            <div>
                                <h3>Біздің орталықтың барлық курстары Оқу ағарту министірлігімен келісілген, портфолиоға жарамды</h3>
                                <div class="desc">
                                    Курстар бірден министірліктің базасында тіркеліп, 3 күн ішінде министірлік сайтына жіберіледі. НОБД сайтында жеке кабинеттен көре аласыз.
                                </div>
                                <NuxtLink to="/kurs" class="cstBtn">
                                  <bigBtn>
                                    Курстар тізімін көру
                                  </bigBtn>
                                </NuxtLink>
                            </div>
                            <carousel />
                        </div>
                        <div class="course_block">
                            <div class="head">Курстарға қатысу реттілігі</div>
                            <div class="items d-f">
                                <div class="item">
                                    <div class="name">1</div>
                                    <div class="desc">Өзіңізге ұнаған <br>курсқа тіркеліңіз!</div>
                                </div>
                                <div class="item">
                                    <div class="name">2</div>
                                    <div class="desc">Курсқа қатысып, <br>материалдармен танысыңыз!</div>
                                </div>
                                <div class="item">
                                    <div class="name">3</div>
                                    <div class="desc">Тестілеуден <br>өтіңіз!</div>
                                </div>
                                <div class="item">
                                    <div class="name">4</div>
                                    <div class="desc">Курс сертификатын жүктеп <br>алыңыз</div>
                                </div>
                                <div class="item">
                                    <div class="name">5</div>
                                    <div class="desc">Сертификаттың түпнұсқасы министірлікке 3 жұмыс күні <br>ішінде жіберіледі. НОБД платформасында көре аласыз</div>
                                </div>
                            </div>
                            <!-- <cstBtn class="cstBtn">Курстар тізімін көру</cstBtn> -->
                            <NuxtLink to="/kurs" class="cstBtn">
                              <cstBtn>
                                Курстар тізімін көру
                              </cstBtn>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="other">
            <div class="cst-ct cst-ct2">
                <div class="wrapper-side">
                    <div class="hotslot"></div>
                    <div class="content">
                        <h3>Ustaz tilegi - орталығының артықшылықтары</h3>
                        <div class="wrap grid-3 gap-20">
                            <div class="block a1">
                                <div class="head">30 000</div>
                                <div class="desc">педагог күнделікті қолданады</div>
                            </div>
                            <div class="block a2">
                                <div class="head">150 000</div>
                                <div class="desc">астам педагог тіркелген</div>
                            </div>
                            <div class="block a3">
                                <div class="head">318 524</div>
                                <div class="desc">астам материал жарияланған</div>
                            </div>
                        </div>
                        <div class="search">
                            <p>Педагогтардың уақыты мен энергиясын үнемдеу мақсатында 400 000 ұстаздардың еңбегі мен тәжірибесін біріктіріп, ең үлкен материалдар базасын жасадық. Төменде пәніңізді белгілеп, керек материалды алып сабағыңызға қолдана аласыз</p>
                            <div class="filter">
                                <btnGroup class="btnGroups" :category='subjects' :placeholder='cat_text[0]' @entered-category='subjectsSearch($event)' @click.native="getCategory" />
                                <btnGroup class="btnGroups" :category='directions' :placeholder='cat_text[1]' @entered-category='directionsSearch($event)' @click.native="getCategory" />
                                <btnGroup class="btnGroups" :category='classes' :placeholder='cat_text[2]' @entered-category='classesSearch($event)' @click.native="getCategory" />
                                <cstBtn @click.native="search">Іздеу</cstBtn>
                            </div>
                        </div>

                        <div class="statBlock">
                            <div class="heads">Өз материалыңызды жариялап <span class="orange">табыс табыңыз!</span></div>
                            <div class="descs">
                                Авторлық материал, презентация, ашық сабақ, көрнекілік, дидактикалық материалдар жасап, сайтта сата аласыз
                            </div>
                            <Nuxt-Link to="/zharialau">
                                <cstBtn class="cst-btn-size" square=1>Толығырақ</cstBtn>
                            </Nuxt-Link>
                            <img class="img" src="~assets/images/businessFile.webp" alt="">
                        </div>

                        <div class="tekseru">
                            <h2>Берілген құжаттың заңдылығын тексеру</h2>
                            <div class="wrap">
                                <cstInput type="text" stringPlaceholder="Мысалы: KZ123456779" />
                                <bigBtn>Тексеру</bigBtn>
                            </div>
                            <div class="desc">«Ustaz tilegi» Республикалық ғылыми – әдістемелік орталығынан алған құжатыңыздың номерін жазып, тексеріп көруіңізге болады. Аттестациядан өту кезінде коммисия мүшелері құжаттың заңдылығын осы сервис арқылы тексереді</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
    import mainBanner from '@/components/landing/mainBanner.vue'
    import bigBtn from '@/components/forms/bigBtn.vue'
    import cstBtn from '@/components/forms/cstBtn.vue'
    import cstInput from '@/components/forms/cstInput.vue'
    import btnGroup from '@/components/forms/btnGroup.vue'
    import carousel from '@/components/carousel.vue'
    import arrow from '@/components/svg/index/arrow-top-right.vue'

    export default {
        components: {
            mainBanner,
            btnGroup,
            cstInput,
            cstBtn,
            bigBtn,
            carousel,
            arrow,
        },
        data() {
            return {
                urls: [
                    '/kurs', '/olimpiada', '/qmg', '/atest', '/material', '/seminar', '/baiqau', '/turnir', '/kornekilikter', '/zhurnal', '/calculator', '/test', '/kenes', '/news',
                ],
                titles: [
                    'Біліктілік арттыру курсы', 'Зияткерлік олимпиада', 'Дайын ҚМЖ', 'Аттестацияға дайындық', 'Материалдар', 'Семинарлар', 'Республикалық байқаулар', 'Блиц-турнир', 'Көрнекіліктер / Дидактика / Жұмыс парақтары', 'Журнал', 'Еңбекақы есептеу калькуляторы', 'Онлайн тесттер', 'Жеке кеңес', 'Жаңалықтар',
                ],
                descriptions: [
                    'Курстар министірлікпен келісілген. Аттестацияға жарамды', '10% пайыз бонус беріледі. Нәтижесі бірден шығады', 'ҚР Білім және Ғылым министірлігінің стандартымен жасалған', 'Педагогтердің білімін бағалауға онлайн дайындық', 'Оқу әдістемелік материалдар', 'Педагогтарға арналған семинарлар, конференциялар', 'Мұғалімдерге, тәрбиешілерге, оқушыларға арналған байқаулар', '10 минутта марапатты жүктеп алыңыз!', '10 000 астам көрнекілік материалдар жарияланған', '№KZ09VPY00029937 куәлігімен ресми тіркелген', 'Ұстаздарға айлық есептеу калькуляторы', 'Әріптестеріңіз жасаған дайын тесттерді қолданып уақытыңызды үнемдеңіз!', 'Үздік тренерлержен жеке кеңес алыңыз!', 'Білім саласындағы соңғы жаңалықтар',
                ],
                colors: [
                    '#E9FFE7', '#E1FFF8', '#FFE9FD', '#FAFFE5', '#E9FFE7', '#FFF0F0', '#EAF1FF', '#F0EBFF', '#E3FEFF', '#DEF5FF', '#FFE9DE', '#FFF2F2', '#FFFDE4', '#FFF3EB',
                ],
                
                cat_text: ['Пән', 'Бағыт', 'Сынып'],
                classes: [],
                classesInner: null,
                subjects: [],
                subjectsInner: null,
                directions: [],
                directionsInner: null,
                categoryLoading: 1,
            }
        },
        methods: {
            getImgUrl(pet) {
                var images = require.context('@/assets/images/index/', false)
                return images('./a' + pet + '.svg')
            },
            subjectsSearch(e) {
                this.subjectsInner = this.subjects[e]
            },
            directionsSearch(e) {
                this.directionsInner = this.directions[e]
            },
            classesSearch(e) {
                this.classesInner = this.classes[e]
            },
            getCategory() {
                if (this.categoryLoading) this.$axios
                    .$get("/word/getCategories")
                    .then((response) => {
                        this.subjects = response.subjects
                        this.directions = response.directions
                        this.classes = response.classes
                        this.categoryLoading = 0
                    }).catch((err) => {
                        console.log(err.response)
                    });
            },
            search() {
                var s = null
                var d = null
                var c = null
                var can = null
                c = this.classesInner ? this.classesInner.lat_name : null
                d = this.directionsInner ? this.directionsInner.lat_name :
                    (c ? 'barlik_materialdar' : null)
                s = this.subjectsInner ? this.subjectsInner.lat_name :
                    (d ? 'barlyk_pander' : (c ? 'barlyk_pander' : null))
                if (s || d || c)
                    can = '/materialdar/' + s + (d ? '/' + d : '') + (c ? '/' + c : '') + '.html'
                else can = '/material'
                this.$router.push(can)
            },
        }

    }

</script>

<style lang="scss" scoped>
    h2 {
        font-size: 40px;
        font-weight: 400;
        line-height: 56.04px;
        letter-spacing: 0.1em;
        margin: 0;
    }

    h4 {
        font-size: 18px;
        font-weight: 600;
        line-height: 25.9px;
        text-align: left;
        color: #172856;
        margin: 0;
    }

    h3 {
        font-family: Atyp Display;
        font-size: 36px;
        font-weight: 400;
        line-height: 46px;
        text-align: left;
        margin: 0;

    }

    .ourservices {
        text-transform: uppercase;
        margin-bottom: 25px;
    }

    .main {
        background: #F5F6F8;
        padding-top: 80px;
        padding-bottom: 150px;

        .wrap {
            margin-top: 20px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 23px 20px;
        }

        .block {
            padding: 20px;
            background: #FFFFFF;
            border-radius: 20px;
            box-shadow: 0px 10px 30px 0px #00000026;

            .arrow {
                width: 24px;
                height: 24px;
            }

            svg {
                stroke: #E2E8F4;
            }

            .icon {
                min-width: 70px;
                height: 70px;
                border-radius: 20px;

                img {
                    width: 44px;
                    height: 44px;
                }
            }

            .text {
                font-size: 16px;
                font-weight: 400;
                line-height: 22.56px;
                color: #858A97;
            }

            &:hover {
                outline: 1px solid #1E63E9;

                svg {
                    stroke: #1E63E9;
                }
            }
        }

        .course {
            margin-top: 150px;
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 50px;

            .desc {
                color: #858A97;
                font-size: 20px;
                line-height: 28.2px;
                margin-top: 20px;
            }

            .cstBtn {
                padding: 20px 80px;
                margin-top: 50px;
            }
        }

        .course_block {
            margin-top: 50px;
            padding: 50px;
            border-radius: 50px;
            background: linear-gradient(140.25deg, #DBF4FF 0.93%, #F3E7FF 82.61%);

            .head {
                font-family: Atyp Display;
                font-size: 36px;
                font-weight: 600;
                line-height: 51.8px;
            }

            .items {
                margin-top: 10px;
                flex-wrap: wrap;
                gap: 5px;
            }

            .item {
                display: flex;
                align-items: center;
                gap: 10px;
                background: #F5F6F8;
                border: 1px solid #E2E8F4;
                border-radius: 10px;
                padding: 15px 20px;
            }

            .name {
                font-family: Atyp Display;
                font-size: 40px;
                font-weight: 600;
                line-height: 50px;
                background: linear-gradient(169.39deg, #E0E7FF 15.86%, #353840 69.59%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            .desc {
                font-size: 16px;
                line-height: 20px;
            }

            .cstBtn {
                margin-top: 40px;
                padding: 20px 80px;
            }
        }
    }

    .other {
        background: #FFF;
        padding: 126px 0 226px;

        .wrap {
            margin-top: 20px;

            .block {
                padding: 20px 125px 28px 30px;
                background-size: 40%, 100%;
                background-position: 120% 50%, 50% 50%;
                background-repeat: no-repeat;
                border-radius: 10px;

                &.a1 {
                    background-image: url(~assets/images/index/learning.png), radial-gradient(50% 128.38% at 77.05% 50%, #46FF57 0%, #E0FFE3 100%);
                }

                &.a2 {
                    background-image: url(~assets/images/index/verified.png), radial-gradient(50% 128.38% at 77.05% 50%, #46FF57 0%, #E0FFE3 100%);
                }

                &.a3 {
                    background-image: url(~assets/images/index/books.png), radial-gradient(50% 128.38% at 77.05% 50%, #46FF57 0%, #E0FFE3 100%);
                }

                .head {
                    font-size: 32px;
                    font-weight: 700;
                    line-height: 46.4px;
                }

                .desc {
                    font-size: 16px;
                    line-height: 22.56px;
                }
            }
        }

        .search {
            margin-top: 100px;

            p {
                font-size: 18px;
                line-height: 25.38px;
                color: #858A97;
                margin-bottom: 20px;
            }

            .filter {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 174px;
                grid-template-rows: 50px;
                gap: 20px;
            }
        }

        .tekseru {
            margin-top: 100px;

            h2 {
                letter-spacing: 0;
                text-align: left;
            }

            .wrap {
                display: grid;
                grid-template-columns: 1fr 164px;
                gap: 10px;
                grid-template-rows: 54px;
            }

            .desc {
                font-size: 16px;
                line-height: 22.56px;
                color: #858A97;
                margin-top: 30px;

            }
        }
    }

    .statBlock {
        margin-top: 120px;
        background: #F8F8F8;
        border-radius: 30px;
        padding: 60px 70px 70px;
        position: relative;

        .heads {
            font-size: 38px;
            font-weight: 800;
            line-height: 45px;
            color: #363636;
            max-width: 562px;
            position: relative;
            z-index: 2;
        }

        .heads .orange {
            color: #FF8B0D;
        }

        .descs {
            max-width: 650px;
            margin-top: 14px;
            font-size: 20px;
            font-weight: 400;
            line-height: 23px;
            color: #363636;
            position: relative;
            z-index: 2;
        }

        .cst-btn-size {
            margin-top: 30px;
            height: 50px;
            width: 220px;
        }

        .img {
            position: absolute;
            right: 39px;
            bottom: 0;
            z-index: 1;
        }
    }


    @media all and (max-width: 1439px) {
        h3 {
            font-size: 32px;
            line-height: 41px;
        }

        .other .wrap .block {
            padding: 20px 75px 28px 30px;
        }

        .statBlock .heads {
            font-size: 36px;
            line-height: 42px;
            max-width: 465px;
        }

        .statBlock .descs {
            max-width: 388px;
            font-size: 18px;
            line-height: 23px;
        }

    }

    @media all and (max-width: 1199px) {
        h2 {
            font-size: 36px;
            line-height: 51.04px;
        }

        .main .wrap {
            grid-template-columns: 1fr;
            grid-gap: 15px;
        }

        .main .course {
            grid-template-columns: 1fr;
        }

        .main .course_block .head {
            font-size: 32px;
            line-height: 46.8px;
        }

        .main {
            padding-top: 70px;
        }

        .other .wrap {
            grid-template-columns: 1fr;
        }

        .other .wrap .block {
            background-size: 20%, 100%;
            background-position: 103% 50%, 50% 50%;
        }

        .statBlock {
            padding: 40px 40px 60px;
        }

        .statBlock .img {
            right: 0;
            width: 280px;
        }

    }

    @media all and (max-width: 991px) {
        .main .block .arrow {
            display: none;
        }

        .main .block .icon {
            min-width: 60px;
            height: 60px;
        }

        .main .block .icon img {
            width: 34px;
            height: 34px;
        }

        .main .course {
            margin-top: 135px;
        }

        .main .course .cstBtn {
            margin-top: 35px;
        }

        h3 {
            font-size: 28px;
            line-height: 36px;
        }

        .main .course .desc {
            font-size: 18px;
            line-height: 24.2px;
        }

        .main .course_block .head {
            font-size: 28px;
            line-height: 38.8px;
        }

        .main .course_block {
            margin-top: 65px;
            padding: 50px 25px;
        }

        .main .course_block .name {
            font-size: 34px;
            line-height: 42px;
        }

        .other .wrap .block .head {
            font-size: 28px;
            line-height: 40.4px;
        }

        .statBlock .heads {
            font-size: 28px;
            line-height: 34px;
        }

        .statBlock .img {
            right: 0;
            width: 150px;
        }

        .statBlock .descs {
            max-width: 296px;
            font-size: 16px;
            line-height: 21px;
        }

        .other .search .filter {
            grid-template-columns: 1fr;
            grid-template-rows: 50px 50px 50px 50px;
            gap: 10px;
        }

        .other .search p {
            font-size: 16px;
            line-height: 20.38px;
        }
    }

    @media all and (max-width: 767px) {
        h2 {
            font-size: 32px;
            line-height: 47.04px;
            text-align: center;
        }

        .main .course {
            margin-top: 120px;
        }

        h3 {
            font-size: 26px;
            line-height: 34px;
        }

        .main .course .cstBtn {
            margin-top: 25px;
        }

        .main .course .desc {
            margin-top: 15px;
        }

        .main .course_block .cstBtn {
            margin-top: 20px;
        }

        .other .wrap .block .head {
            font-size: 24px;
            line-height: 36.4px;
        }

        .statBlock .img {
            right: 0;
            width: 206px;
        }


    }

    @media all and (max-width: 575px) {
        .ourservices {
            margin-bottom: 25px;
        }
        .content {
            padding: 30px 15px 70px 15px!important;
            width: 100vw;
        }
        .cst-ct {
            padding: 0 10px!important;
        }
        .cst-ct2 {
            padding: 0!important;
        }
        .other {
            padding: 55px 0 120px;
        }
        .main {
            padding-bottom: 50px;
        }
        h2 {
            font-size: 28px;
            line-height: 36.04px;
        }

        .main {
            padding-top: 60px;
        }

        .main .block .icon {
            min-width: 50px;
            height: 50px;
        }

        .main .block .icon img {
            width: 24px;
            height: 24px;
        }

        h4 {
            font-size: 16px;
            line-height: 21.9px;
        }

        .main .block .text {
            font-size: 13px;
            line-height: 19.56px;
        }

        .main .wrap {
            grid-gap: 10px;
        }

        h3 {
            font-size: 24px;
            line-height: 33px;
        }

        .main .course .desc {
            margin-top: 10px;
        }

        .main .course .cstBtn {
            margin-top: 20px;
            width: 100%;
        }

        .carousel {
            transform: translateX(-50%);
            left: 50%;
        }

        .main .course_block .desc {
            font-size: 12px;
            line-height: 16px;
        }

        .main .course_block .name {
            font-size: 24px;
            line-height: 34px;
        }

        .main .course_block .items {
            display: grid;
            grid-template-areas: 'a b''c d''e e';
            grid-template-columns: 1fr 1fr;

            br {
                display: none;
            }
        }

        .main .course_block .item:last-child {
            grid-area: e;
        }

        .main .course_block .head {
            font-size: 24px;
            line-height: 34.8px;
        }

        .main .course_block {
            margin-top: 80px;
            padding: 50px 20px;
            border-radius: 30px;
        }

        .main .course_block .cstBtn {
            margin-top: 10px;
            width: 100%;
            padding: 20px;
        }

        .main .course_block .item {
            padding: 10px 15px;
        }

        .other .wrap .block .head {
            font-size: 20px;
            line-height: 28.4px;
        }

        .other .wrap .block .desc {
            font-size: 14px;
            line-height: 18.56px;
        }

        .other .wrap .block {
            padding: 20px;
        }

        .other .wrap {
            gap: 10px;
        }

        .statBlock {
            margin-top: 30px;
            background-image: url(~/assets/images/businessFile_mobile.webp);
            background-position: 50% 74%;
            background-repeat: no-repeat;
            background-size: 78%;
        }

        .statBlock .img {
            display: none;
        }

        .statBlock .heads {
            font-size: 24px;
            line-height: 28px;
            max-width: 100%;
        }

        .statBlock .descs {
            max-width: 100%;
        }

        .statBlock .cst-btn-size {
            margin-top: 300px;
            height: 50px;
            width: 100%;
        }

        .statBlock {
            padding: 40px 30px;
        }

    }


    @media all and (max-width: 445px) {
        .main .block .text {
            font-size: 11px;
            line-height: 15.56px;
        }

        .main .block .gap-20 {
            gap: 10px;
        }

        .other .wrap .block .head {
            font-size: 18px;
            line-height: 24.4px;
        }

        .other .wrap {
            gap: 5px;
        }

        .other .search p {
            font-size: 14px;
            line-height: 18.38px;
        }

        .statBlock .heads {
            font-size: 20px;
            line-height: 28px;
        }

        .statBlock .descs {
            margin: 0;
        }

        .statBlock .cst-btn-size {
            margin-top: 210px;
        }

        .other .tekseru .wrap {
            grid-template-columns: 1fr;
            grid-template-rows: 50px 50px;
        }

        .other .tekseru .desc {
            font-size: 14px;
            line-height: 19.56px;
            margin-top: 10px;
        }

        .other .tekseru {
            margin-top: 80px;
        }

        .other .wrap {
            margin-top: 10px;
        }

        .other .wrap .cstBtn {
            max-width: 70%;
        }



    }

</style>
