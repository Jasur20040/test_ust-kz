<template>
    <div class="reklama">
        <div class="cst-ct">
            <div class="h">
                Портфолиоңызды толтыруға арналған <br>
                <span class="gradient">ДИПЛОМДАР</span> мен <span class="gradient">СЕРТИФИКАТТАР</span> алып, санатыңызды көтеріңіз!
            </div>
            <div class="wrap">
                <nuxt-link to="/olimpiada">
                    <bigBtn class="cst_btn" text="Пәндерді көру" />
                </nuxt-link>
                Ата-анаға және Жетекшіге алғыс хат тегін
            </div>
            <exitBtn class="exitBtn" @click.native="$emit('close')" />
        </div>
        <img class="serts" src="@/assets/images/reklama8_item.png" alt="">
    </div>
</template>


<script>
    import bigBtn from '@/components/forms/bigBtn.vue'
    import exitBtn from '@/components/forms/exitBtn.vue'

    export default {
        components: {
            bigBtn,
            exitBtn,
        },
    }

</script>


<style scoped lang="scss">
    .reklama {
        position: fixed;
        width: 100%;
        bottom: 0;
        padding: 30px 0 40px;
        background-image: url(~/assets/images/reklama8_bg.jpg);
        background-size: cover;
        background-position: 50% 50%;
        z-index: 11;

        .h {
            font-size: 20px;
            font-weight: 400;
            line-height: 23px;
            color: #FFFFFF;
        }

        .gradient {
            font-weight: 800;
            text-transform: uppercase;
            background: linear-gradient(45deg, #FFA858 13%, #FF00F3);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .wrap {
            margin-top: 13px;
            display: flex;
            align-items: center;
            gap: 20px;
            font-size: 16px;
            font-weight: 400;
            line-height: 19px;
            color: #fff;
            text-decoration: underline;


            .cst_btn {
                width: 250px;
                height: 50px;
            }
        }

        .serts {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(60%);
        }

        .exitBtn {
            position: absolute;
            top: 20px;
            right: 20px;
        }
    }

    @media all and (max-width: 1099px) {
        .serts {
            display: none;
        }
    }
    @media all and (max-width: 500px) {
            .reklama .wrap {
    flex-direction: column-reverse;
}
        }

</style>
