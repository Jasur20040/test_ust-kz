<template>
    <div class="landing">
        <section>
            <h3>Турнирге қатысу үшін:</h3>
            <div class="wrap">
                <div @mousedown="$emit('videoOpen')" class="video">
                    <img src="~assets/images/play.png" alt="">
                    <div class="title">Қатысу нұсқаулығы</div>
                </div>
                <ul>
                    <li>Аты-жөніңізді жазыңыз</li>
                    <li>Турнирді бастаңыз</li>
                    <li>Жарнасын төлем, марапатты жүктеңіз</li>
                </ul>
            </div>
        </section>
        <section class="pd">
            <h3>Сіз тіркелген турнирлер тізімі</h3>
            <div class="listBlock">
                <div class="h3">{{thisYear}} жыл</div>
                <div class="list">
                    <template v-for="(turnir, index) in turnirs">
                        <nuxt-link v-if="index<3" :to="'/turnir/'+turnir.lat_name+'-'+turnir.id" class="item d-f fd-c">
                            <div class="title">{{turnir.month_name}} айының {{turnir.cat_name}} арасында ұйымдастырылған «{{turnir.name}}» Республикалық Блиц-турнирі</div>
                            <div class="info d-f a-c gap-30">
                                <div class="it d-f a-c gap-10">
                                    <img src="~/assets/images/svg/clock.svg" alt="">
                                    {{'01.'+turnir.month+'.'+turnir.year+'-'+turnir.month_end+'.'+turnir.month+'.'+turnir.year}}
                                </div>
                                <div class="it d-f a-c gap-10">
                                    <img src="~/assets/images/svg/group.svg" alt="">
                                    Менің қатысушыларым: {{turnir.user_count}}
                                </div>
                            </div>
                        </nuxt-link>
                    </template>
                    <template v-if="turnirs.length==0">
                        <div class="not_found d-f aj-c fd-c gap-20">
                            <img src="~/assets/images/svg/document.svg" alt="">
                            <div class="head">{{thisYear}} жылы ешқандай турнирге тіркелмегенсіз</div>
                        </div>
                    </template>
                    <template v-if="turnirs.length<=1">
                        <div class="h3">{{thisYear-1}} жыл</div>
                        <div class="not_found d-f aj-c fd-c gap-20">
                            <img src="~/assets/images/svg/document.svg" alt="">
                            <div class="head">{{thisYear-1}} жылы ешқандай турнирге тіркелмегенсіз</div>
                        </div>
                    </template>

                    <nuxt-link to="/turnir/myturnirs">
                        <cstBTn class="cstBtn">Барлығын көру
                            <arrowRight />
                        </cstBTn>
                    </nuxt-link>
                </div>
            </div>
        </section>
        <section class="pd">
            <material_banner10 only="2" />
        </section>
        <section>
            <h3>Турнир марапаттары</h3>
            <material_banner11 />
        </section>
        <section>
            <h3>Жиі қойылатын сұрақтар</h3>
            <faqs />
        </section>
    </div>
</template>


<script>
    import cstBTn from '@/components/forms/cstBtn.vue'
    import arrowRight from '@/components/svg/arrow-right.vue'
    import material_banner10 from '@/components/landing/material_reklama10.vue'
    import material_banner11 from '@/components/landing/material_reklama11.vue'
    import faqs from '@/components/landing/faqs.vue'

    export default {
        props: ['turnirs', 'thisYear'],
        components: {
            cstBTn,
            arrowRight,
            material_banner11,
            material_banner10,
            faqs,
        },

    }

</script>

<style lang="scss" scoped>
    .landing {
        padding-bottom: 100px;
    }

    section {
        margin-top: 100px;
    }

    .h3 {
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
        padding: 0 20px;
        color: #D0D3DB;
    }

    h3 {
        margin: 0;
        font-size: 36px;
        font-weight: 600;
        line-height: 51.8px;
    }

    .wrap {
        margin-top: 40px;
        display: grid;
        grid-template-columns: 400px 1fr;
        gap: 100px;
    }

    .video {
        width: 100%;
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #EFF3FF;
        border-radius: 10px;

        &:hover {
            cursor: pointer;
            outline: 1px solid #1E63E9;
        }

        .title {
            font-size: 18px;
            font-weight: 500;
            line-height: 22px;
            margin-top: 20px;
            color: #1E63E9;
        }
    }

    ul {
        font-size: 24px;
        font-weight: 400;
        line-height: 29px;
        color: #858A97;

        li:not(:last-child) {
            margin-bottom: 15px;
        }

        li::marker {
            color: #03B113;
        }

        padding-left: 20px;
    }

    .listBlock {
        box-shadow: 0px 10px 30px 0px #00000026;
        padding: 30px;
        border-radius: 10px;
        background: #fff;
        margin-top: 20px;

        .list {
            .item {
                padding: 15px 20px 27px;
                border-top: 1px solid #F0F0F0;
                transition: 0.15s;
                outline: 1px solid #fff;

                &:hover {
                    outline: 1px solid #1E63E9;

                }

                .title {
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 28.48px;
                    color: #1E63E9;

                }

                .info {
                    margin-top: 10px;
                }
            }
        }

        .not_found {
            padding: 50px 0 70px;

            .head {
                max-width: 300px;
                font-size: 18px;
                line-height: 21.6px;
                color: #D0D3DB;
                text-align: center;
            }
        }

        .cstBtn {
            background: #EAF1FF;
            color: #1E63E9;
            height: 50px;
            width: calc(100% - 40px);
            margin: 0 auto;

            svg {
                stroke: #1E63E9;
            }
        }
    }

    @media all and (max-width: 1439px) {
        .wrap {
            gap: 70px;
        }

    }

    @media all and (max-width: 1199px) {
        .wrap {
            grid-template-columns: 1fr;

            gap: 20px;
        }

        ul {
            margin: 0;
        }

        h3 {
            font-size: 32px;
            line-height: 46.8px;
        }

        ul {
            font-size: 22px;
            line-height: 27px;
        }

        .listBlock {
            padding: 25px 20px 30px;
        }


    }

    @media all and (max-width: 991px) {
        h3 {
            font-size: 28px;
            line-height: 41.8px;
        }

        .wrap {
            margin-top: 30px;
        }

        ul {
            font-size: 20px;
            line-height: 25px;
        }

        .video .title {
            font-size: 16px;
            line-height: 20px;
        }

        .video {
            height: 225px;
        }

        .listBlock {
            padding: 20px 10px 25px;

        }

        .listBlock .list .item .title {
            font-size: 18px;
            line-height: 25.48px;
        }

        .listBlock .list .item .info {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
        }

    }

    @media all and (max-width: 575px) {
        section {
            padding: 0 20px;
        }

        h3 {
            font-size: 24px;
            line-height: 37.8px;
        }

        ul {
            font-size: 18px;
            line-height: 23px;

        }

        section.pd {
            padding: 0;

            h3 {
                padding: 0 20px;
            }
        }

        .listBlock {
            padding: 10px 0px 20px;
        }

    }

    @media all and (max-width: 445px) {
        h3 {
            font-size: 20px;
            line-height: 28.8px;
        }

        ul {
            font-size: 16px;
            line-height: 22px;
        }

        .video .title {
            font-size: 14px;
            line-height: 18px;
        }

        .video {
            height: 200px;
        }

        .listBlock {
            padding: 0 0 20px;
        }

        .listBlock .list .item .title {
            font-size: 16px;
            line-height: 22.48px;
        }

        .listBlock .list .info {
            font-size: 14px;
            line-height: 19px;
        }

    }

</style>
