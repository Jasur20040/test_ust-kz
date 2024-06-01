<template>
    <div class="reklama">
        <div class="h">Ресми Республикалық<br>байқаулар кестесі</div>
        <div class="desc">
            Портфолиоңызды толтыруға арналған ДИПЛОМДАР МЕН СЕРТИФИКАТТАР алып, санатыңызды көтеріңіз!
        </div>
        <nuxt-link to="/baiqau"  class="cst_btn"><bigBtn  class="cst_btn">Тізімді көру</bigBtn></nuxt-link>
    </div>
</template>


<script>
    import bigBtn from '@/components/forms/bigBtn.vue'

    export default {
        components: {
            bigBtn
        },
    }

</script>


<style scoped lang="scss">
    .reklama {
        padding: 30px 40px 43px;
        border-radius: 20px;
        background-image: url(~/assets/images/reklama7_bg.webp);
        background-size: cover;
        background-position: 100% 50%;
        color: #fff;

        .h {
            font-size: 36px;
            font-weight: 800;
            line-height: 42px;
        }

        .desc {
            max-width: 363px;
            font-size: 18px;
            font-weight: 400;
            line-height: 21px;
            margin-top: 10px;
        }

        .cst_btn {
            margin-top: 20px;
            max-width: 250px;
            width: 100%;
            height: 50px;
        }
    }

    @media all and (max-width: 1439px) {
        .reklama {
    background-position: 82% 50%;
}

        .reklama .h {
            font-size: 32px;
            line-height: 38px;
        }

        .reklama .desc {
            font-size: 16px;
            line-height: 23px;
        }

    }

    @media all and (max-width: 1199px) {
        .reklama {
    background-position: 59% 50%;
}
        .reklama .h {
            font-size: 28px;
            line-height: 33px;
        }

    }

    @media all and (max-width: 991px) {
        .reklama {
            background-image: url(~/assets/images/reklama7_bg_mini.webp);
            padding: 30px;
            background-position: 50% 75%;
        }

        .reklama .cst_btn {
            margin-top: 158px;
            max-width: 100%;
        }

        .reklama .desc {
            font-size: 16px;
            line-height: 21px;
        }

        .reklama .h {
            font-size: 24px;
            line-height: 30px;
        }

    }
    
    @media all and (max-width: 767px) {
        .reklama .cst_btn {
    margin-top: 205px;
}
        .reklama {
    background-position: 50% 75%;
}
    }

    @media all and (max-width: 500px) {
        .reklama .h {
            font-size: 26px;
            line-height: 32px;
        }

        .reklama .desc {
            font-size: 16px;
            line-height: 22px;
        }

        .reklama .cst_btn {
            margin-top: 44%;
        }

        .reklama {
            padding: 20px;
        }

        @media all and (max-width: 422px) {
            .reklama .h {
                font-size: 24px;
                line-height: 30px;
            }
            .reklama .desc {
                font-size: 14px;
                line-height: 19px;
            }
            
        }


    }

</style>
