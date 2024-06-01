<template>
    <footer>
        <div class="footer_layout">
            <div class="cst-ct cst-ct2 d-f gap-20 wrap j-b footer1">
                <div class="logo d-f fd-c">
                    <img src="~/assets/images/logo.svg" alt="">
                    <div class="gilim t-no-wrap">
                        Ғылыми-әдістемелік орталығы
                    </div>
                </div>
                <div class="redaccia">
                    <div class="title">
                        Редакциямен байланыс
                    </div>
                    <div class="d-f gap-30 items mt-20 j-b fffffftr">
                        <div class="d-f gap-10 no-wrap">
                            <img src="~/assets/images/svg/call.svg" alt="">
                            <div>
                                <div class="phone t-no-wrap">+7 (771) 234-55-99</div>
                                <div class="desc">
                                    Жұмыс кестесі: Дүйсенбі – <br>жұма, 9:00 – 18:00
                                </div>
                            </div>
                        </div>
                        <div class="d-f gap-30 j-b no-wrap items adresandpochta">
                            <div class="d-f gap-10 item">
                                <img src="~/assets/images/svg/location.svg" alt="">
                                <div>
                                    <div class="desc">Мекенжай:</div>
                                    <div class="name">
                                        Қазақстан, Алматы, Гоголья 86,<br/>
                                        4 этаж, 406-кабинет
                                    </div>
                                </div>
                            </div>
                            <div class="d-f gap-10 item">
                                <img src="~/assets/images/svg/sms.svg" alt="">
                                <div>
                                    <div class="desc">Электронды пошта</div>
                                    <div class="name">ustaztilegi@gmail.com</div>
                                </div>
                            </div>
                        </div>
                        <div class="d-f no-wrap gap-10">
                            <a target="_blank" href="https://www.instagram.com/ustaz.tilegi" aria-label="..." class="soc_item">
                                <img src="~/assets/images/svg/instagram.svg" alt="">
                            </a>
                            <a target="_blank" href="https://www.youtube.com/channel/UCGxzKx-XzQuKiWrX3zBwnLg" aria-label="..." class="soc_item">
                                <img src="~/assets/images/svg/youtube.svg" alt="">
                            </a>
                            <a target="_blank" href="https://t.me/ustaztilegi" aria-label="..." class="soc_item">
                                <img src="~/assets/images/svg/telegram.svg" alt="">
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="footer_default d-f aj-c">
            <div class="cst-ct cst-ct2 t-c">
                Сайт Peaksoft веб-студиясында жасалған - Peaksoft.kz
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    .logo {
        width: 25%;
    }
    .redaccia {
        width: 75%;
    }
    footer {
        background: #F5F6F8;
    }

    .footer_layout {
        padding: 40px 0 30px;
    }

    .logo {
        img {
            width: 259px;
            height: auto;
        }

        font-size: 16px;
        line-height: 22.42px;
        text-transform: uppercase;
    }

    .title {
        font-size: 16px;
        font-weight: 600;
        line-height: 23.02px;
    }

    .items img {
        width: 24px;
        height: 24px;
    }

    .phone {
        font-size: 24px;
        font-weight: 500;
        line-height: 34.18px;

    }

    .gilim {
        margin-top: 7px;
    }

    .desc {
        line-height: 19.61px;

        opacity: 0.5;
    }

    .name {
        font-size: 16px;
        font-weight: 500;
        line-height: 22.78px;

    }

    .soc_item {
        width: 40px;
        height: 40px;
        background: #172856;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .footer_default {
        padding: 15px;
        background: #fff;
        color: #858A97;
    }

    @media all and (max-width: 1439px) {
        // .item {
        //     flex-direction: column;
        // }
    }

    @media all and (max-width: 1199px) {
        .logo {
            font-size: 13px;
            line-height: 21.42px;

            img {
                width: 210px;
            }
        }

        .wrap {
            gap: 40px;
        }

        .name {
            font-size: 14px;
            line-height: 19.78px;
        }

        .items {
            gap: 15px;
        }

        .adresandpochta {
            flex-direction: column;
        }
    }

    @media all and (max-width: 991px) {
        .items.mt-20 {
            flex-wrap: wrap;
            gap: 20px;
            margin-top: 10px;
        }

        .footer_layout {
            padding: 30px 0 30px;
        }

        .footer1 {
            flex-direction: column;
        }

        .fffffftr {
            flex-direction: column;
        }
    }

    @media all and (max-width: 767px) {
        .cst-ct2 {
            padding: 0  20px !important;
        }
        .wrap {
            gap: 30px;
        }
        .logo {
            width: 100%;
        }
        .redaccia {
            width: 100%;
        }
        

    }

    @media all and (max-width: 575px) {
        .wrap {
            gap: 20px;
            flex-direction: column;
        }

        .logo {
            align-items: flex-start;
        }

        .cst-ct {
            padding: 0 20px;
        }

        .logo {
            font-size: 16px;
            line-height: 24.42px;

            img {
                width: 264px;
            }
        }
        .footer_layout {
            padding: 30px 0 55px;
        }
    }

</style>
