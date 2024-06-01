<template>
    <div class="banner">
        <div class="cst-ct cst-ct2">
            <div class="wrap d-g gap-30">
                <div>
                    <h1 class="title">
                        <span>«Ustaz tilegi» - 300 000 астам</span><br> кәсіби педагогтар қауымдастығы
                    </h1>
                    <div class="desc">Порталда педагогтар бір-бірімен шексіз тәжірибе алмасуына барлық жағдай жасалған. Педагогтарға керекті біліктілікті арттыру курстары, семинарлар, ашық сабақтар жинағы, жаңалықтар, олимпиадалар мен 350 000 астам материалдар базасы жинақталған</div>
                </div>
                <div class="ust">
                    <div class="title">«Ustaz tilegi»</div>
                    <div class="desc">Республикалық ғылыми – әдістемелік орталығы білім беру қызметін ҚР Оқу ағарту министрлігінің №95 бұйрығына сәйкес жүзеге асырады</div>
                    <cstBtn class="glass mt-10" imgToRight="arr_right.svg">Орталық туралы</cstBtn>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    //import Header from '@/components/Header.vue'
    import cstBtn from '@/components/forms/cstBtn.vue'

    export default {
        components: {
            //Header,
            cstBtn,
        },

    }

</script>

<style lang="scss" scoped>
    .banner {
        background: #fff;
    }

    .wrap {
        grid-template-columns: auto 420px;
        padding: 50px 15px 60px 25px;
    }

    .ust {
        padding: 38px 40px;
        background: url(~/assets/images/main_landing.webp) 50% 50% / cover;
        height: min-content;
    }

    .title {
        font-family: Atyp Display;
        font-size: 40px;
        font-weight: 800;
        line-height: 58px;
        margin: 0;
        text-transform: uppercase;

        span {
            color: #FF8B0D;
        }
    }

    .desc {
        margin-top: 10px;
        font-size: 22px;
        line-height: 31.02px;
        color: #858A97;
    }

    .ust {
        border: 1px solid #E2D4C2;
        border-radius: 10px;

        .title {
            font-family: Atyp Text;
            font-size: 32px;
            font-weight: 700;
            line-height: 26px;
            text-transform: none;
        }

        .desc {
            font-size: 18px;
            line-height: 25.38px;
            color: #172856;
        }
    }

    .glass {
        border: 1px solid #1E63E9;
        border-radius: 25px;
        width: 200px;
        height: 50px;

        img {
            width: 28px;
            height: 28px;
        }
    }

    @media all and (max-width: 1439px) {
        br {
            display: none;
        }
    }

    @media all and (max-width: 1199px) {
        .title {
            font-size: 32px;
            line-height: 46px;
        }

        .desc {
            font-size: 20px;
            line-height: 28.02px;
        }

        .ust .title {
            font-size: 28px;
            line-height: 30px;
        }

        .ust .desc {
            font-size: 16px;
            line-height: 23.38px;
        }

        .ust {
            border-radius: 15px;
        }


    }

    @media all and (max-width: 991px) {
        .wrap {
            grid-template-columns: auto 310px;
            padding: 35px 15px 50px 15px;
        }

        .title {
            font-size: 28px;
            line-height: 39px;
        }

        .desc {
            font-size: 17px;
            line-height: 24.02px;
        }

        .ust {
            padding: 30px 25px;
        }

        .ust .title {
            font-size: 24px;
            line-height: 26px;
        }

        .ust .desc {
            font-size: 14px;
            line-height: 22.38px;
        }

        .glass {
            width: 190px;
            // min-width: 200px;
            height: 45px;
            // padding: 5px;
            font-size: 14px!important;

            margin-top: 15px;
            // justify-content: flex-end;
            // line-height: 14.78px;
        }

    }

    @media all and (max-width: 767px) {
        .cst-ct2 {
            padding: 0!important;
        }
        .wrap {
            grid-template-columns: 1fr;
            padding: 30px 20px 45px 20px;

            &.gap-30 {
                gap: 20px;
            }
        }

        .title {
            font-size: 24px;
            line-height: 35px;
        }

        .ust {
            padding: 22px 25px;
        }

        .ust .title {
            font-size: 20px;
            line-height: 23px;
        }

        .ust .desc {
            font-size: 13px;
            line-height: 19.38px;
            max-width: 80%;
        }

    }

    @media all and (max-width: 500px) {
        .title {
            font-size: 20px;
            line-height: 28px;
        }

        // .wrap {
        //     padding: 30px 10px 70px 10px;
        // }

        .desc {
            font-size: 16px;
            line-height: 20px;
        }

        .ust .title {
            font-size: 18px;
            line-height: 22px;
        }

        .ust .desc {
            max-width: 94%;
            font-size: 12px;
            line-height: 16px;
        }

    }

</style>
