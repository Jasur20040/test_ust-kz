<template>
    <div>
        <div class="head_drop"></div>
        <header class="header">
            <div class="cst-ct cst-ct2">
                <div class="d-f a-c j-b">
                    <div class="d-f a-c gap-50 wrap">
                        <NuxtLink to="/">
                            <img class="logo" src="~/assets/images/logo.svg" alt="">
                        </NuxtLink>
                        <div class="navs d-f a-c">
                            <NuxtLink to="/kurs" class="nav-item a1">Курс</NuxtLink>
                            <NuxtLink to="/olimpiada" class="nav-item a1">Олимпиада</NuxtLink>
                            <NuxtLink to="/qmg" class="nav-item a1">Дайын ҚМЖ</NuxtLink>
                            <NuxtLink to="/atest" class="nav-item a2">Аттестация</NuxtLink>
                            <NuxtLink to="/material" class="nav-item a2">Материалдар</NuxtLink>
                            <div class="line"></div>
                            <div class="dropdown">
                                <button class="btn cstBtn d-f a-c gap-10">
                                    Қызметтер
                                    <img src="~/assets/images/svg/menu.svg" alt="">
                                </button>
                                <div class="dropdown-menu">
                                    <div class="grid-2 gap-50 dropdown-wrap">
                                        <div class="dropdown-items">
                                            <NuxtLink to="/atest" class="dropdown-item nav-item b2">Аттестация</NuxtLink>
                                            <NuxtLink to="/seminar" class="dropdown-item nav-item">Семинарлар</NuxtLink>
                                            <NuxtLink to="/baiqau" class="dropdown-item nav-item">Байқау</NuxtLink>
                                            <NuxtLink to="/turnir" class="dropdown-item nav-item">Турнир</NuxtLink>
                                            <NuxtLink to="/kornekilikter" class="dropdown-item nav-item">Көрнекіліктер</NuxtLink>
                                        </div>
                                        <div class="dropdown-items">
                                            <NuxtLink to="/material" class="dropdown-item nav-item b2">Материалдар</NuxtLink>
                                            <NuxtLink to="/zhurnal" class="dropdown-item nav-item">Журнал</NuxtLink>
                                            <NuxtLink to="/test" class="dropdown-item nav-item">Тест</NuxtLink>
                                            <NuxtLink to="/news" class="dropdown-item nav-item">Жаңалықтар</NuxtLink>
                                            <NuxtLink to="/kenes" class="dropdown-item nav-item">Жеке кеңестер</NuxtLink>
                                            <NuxtLink to="/calculator" class="dropdown-item nav-item">Айлық есептеу калькуляторы</NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <NuxtLink to="/zharialau">
                        <bigBtn class="bigBtn">Жариялау</bigBtn>
                    </NuxtLink>
                </div>
            </div>
        </header>
    </div>
</template>


<script>
    import bigBtn from '@/components/forms/bigBtn.vue'
    export default {
        components: {
            bigBtn,
        },

    }

</script>

<style lang="scss" scoped>
    .head_drop {
        height: 81.77px;
        width: 100%;
    }

    .header {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 80%);
        backdrop-filter: blur(10px);
        box-shadow: 0px 10px 30px 0px #00000026;
        position: fixed;
        top: 0;
        width: 100%;
        padding: 15px 0 16px;
        z-index: 18;
    }

    .logo {
        width: 177px;
        height: auto;
    }

    .navs {
        font-size: 16px;
        font-weight: 500;

    }

    .nav-item {
        padding: 6px 10px;
        border-radius: 10px;

        &:hover {
            background: #EAF1FF;
            color: #0045CB;
        }
    }

    .b2 {
        display: none;
    }

    .line {
        height: 30px;
        margin: 0 10px;
        border-left: 1px solid #E2E8F4;
    }

    .cstBtn {
        padding: 6px 10px;
        font-weight: 500;
        color: #172856;
    }

    .bigBtn {
        width: 220px;
        padding: 13px;
    }

    .grid-2 {
        grid-template-columns: 1fr 1fr;
    }

    .grid-2>div {
        min-width: 253px;
    }

    .dropdown-items {
        display: flex;
        flex-direction: column;
        gap: 9px;
    }

    @media all and (max-width: 1439px) {
        .logo {
            width: 152px;
        }

        .wrap {
            gap: 30px;
        }
    }

    @media all and (max-width: 1199px) {
        a {
            font-size: 14px;
            line-height: 16px;
        }

        .cstBtn {
            font-size: 14px;
        }

        .bigBtn {
            width: 130px;
            padding: 13px;
        }

        .dropdown-menu {
            left: auto;
            right: 0;
            transform: none;
        }
    }

    @media all and (max-width: 991px) {
        .head_drop {
            height: 69.77px;
        }

        .a2 {
            display: none;
        }

        .b2 {
            display: block;
        }

        .line {
            display: none;
        }

        .bigBtn {
            width: 115px;
            padding: 7px;
        }

        .dropdown-menu {
            padding: 25px 25px 35px;
        }

        .dropdown-wrap {
            gap: 30px;
        }

        .grid-2>div {
            min-width: 226px;
        }
    }

    @media all and (max-width: 767px) {
        .cst-ct2 {
            padding: 0  10px !important;
        }
        .navs {
            display: none;
        }

        .bigBtn {
            width: 152px;
            padding: 7px;
        }

        .header {
            padding: 10px;
        }

        .head_drop {
            height: 58.77px;
        }
    }

    @media all and (max-width: 575px) {
        // .logo[data-v-1a9bb128] {
        //     width: 119px;
        // }

        // .bigBtn[data-v-1a9bb128] {
        //     width: 100px;
        //     padding: 7px;
        //     font-size: 13px;
        //     line-height: 18px;
        // }

        .head_drop {
            height: 54px;
        }

    }
    @media all and (max-width: 330px) {
        .bigBtn {
            width: 110px;
        }
    }

</style>
