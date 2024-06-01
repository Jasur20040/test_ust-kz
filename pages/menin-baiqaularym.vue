<template>
    <div>
        <section class="main">
            <div class="cst-ct cst-ct2">
                <div class="wrapper-side">
                    <div class="hotslot"></div>
                    <div class="content-menin">
                        Менің байқауларым
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
    .content-menin {
        width: 100%;
        height: 600px;
        font-size: 24px;
        font-weight: 600;
    }
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
        .content-menin {
            padding-left: 20px;
        }
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
