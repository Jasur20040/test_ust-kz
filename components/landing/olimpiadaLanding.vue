<template>
    <div class="landing">
        <section class="pdd">

            <h3>Қатысу нұсқаулығы</h3>

            <div class="wrap d-f a-c j-b gap-50">
                <div class="left">
                    <ol>
                        <li>Қатысушының аты-жөнін енгізіңіз (Бірнеше қатысушы болса барлығының аты-жөнін жазыңыз)</li>
                        <li>Жарнасын төлеңіз (тегін {{baiqau ? 'байқау' : 'олимпиада'}} болған жағдай төлем жасаудың қажеті жоқ)</li>
                        <li>Тестті бастау батырмасын басып тест тапсырыңыз (Басқа қолданушыға көмек ретінде тіркесеңіз қатысу кодын беріңіз. Өзі сайтта код арқылы тапсыра алады)</li>
                        <li>Марапатты жүктеп алыңыз (Қатысушы тест біткен соң нәтижесі шыққан беттен өзі жүктеп алуына болады)</li>
                    </ol>
                    <cstBtn class="glassBtn pdd">
                        Кодты енгізу беті
                        <exportsvg />
                    </cstBtn>
                </div>
                <div @mousedown="$emit('videoOpen')" class="video d-f aj-c fd-c">
                    <img src="~assets/images/olimp/pdf.png" alt="">
                    <div class="mt-10">
                        <dw /> Қатысу нұсқаулығы.pdf
                    </div>
                </div>
            </div>
        </section>
        <section class="pd">
            <h3>Сіз тіркелген {{baiqau ? 'байқау' : 'олимпиада'}}лар тізімі</h3>
            <div class="listBlock">
               <div class="h3">{{thisYear}} жыл</div>

                <div class="list">
                    <template v-for="(olimp, index) in olimps">
                        <nuxt-link v-if="index<3" :to="'/olimpiada/'+olimp.o_bagyt.lat_name+'-'+olimp.o_bagyt.idd" class="item d-f fd-c">
                            <div class="title">{{olimp.o_bagyt.month_name}} айының {{olimp.o_bagyt.o_bagyty}}</div>
                            <div class="info d-f a-c gap-30">
                                <div class="it d-f a-c gap-10">
                                    <img src="~/assets/images/svg/clock.svg" alt="">
                                    {{'01.'+olimp.o_bagyt.month+'.'+olimp.o_bagyt.year+'-'+olimp.o_bagyt.month_end+'.'+olimp.o_bagyt.month+'.'+olimp.o_bagyt.year}}
                                </div>
                                <div class="it d-f a-c gap-10">
                                    <img src="~/assets/images/svg/group.svg" alt="">
                                    Менің қатысушыларым: {{olimp.total}}
                                </div>
                            </div>
                        </nuxt-link>
                    </template>
                    <template v-if="olimps.length==0">
                        <div class="not_found d-f aj-c fd-c gap-20">
                            <img src="~/assets/images/svg/document.svg" alt="">
                            <div class="head">{{thisYear}} жылы ешқандай {{baiqau ? 'байқау' : 'олимпиада'}}ға тіркелмегенсіз</div>
                        </div>
                    </template>
                    <template v-if="olimps.length<=1">
                        <div class="h3">{{thisYear-1}} жыл</div>
                        <div class="not_found d-f aj-c fd-c gap-20">
                            <img src="~/assets/images/svg/document.svg" alt="">
                            <div class="head">{{thisYear-1}} жылы ешқандай {{baiqau ? 'байқау' : 'олимпиада'}}ға тіркелмегенсіз</div>
                        </div>
                    </template>
                    <nuxt-link :to="baiqau ? '/menin-baiqaularym' : '/menin-olimpiadalarym'">
                        <cstBtn class="cstBtn">
                            Барлығын көру
                            <arrowRight />
                        </cstBtn>
                    </nuxt-link>
                </div>
            </div>
        </section>
        <section>
            <h3>{{baiqau ? 'Байқау' : 'Олимпиада'}} марапаттары</h3>
            <material_banner11 olimp="1" />
        </section>
        <section class="pd">
            <material_banner10 only="1" />
            <material_banner10 only="2" />
        </section>
        <section>
            <h3>Жиі қойылатын сұрақтар</h3>
            <faqs />
        </section>
    </div>
</template>


<script>
    import cstBtn from '@/components/forms/cstBtn.vue'
    import dw from '@/components/svg/download.vue'
    import exportsvg from '@/components/svg/exportsvg.vue'
    import arrowRight from '@/components/svg/arrow-right.vue'
    import material_banner11 from '@/components/landing/material_reklama11.vue'
    import material_banner10 from '@/components/landing/material_reklama10.vue'
    import faqs from '@/components/landing/faqs.vue'

    export default {
        components: {
            cstBtn,
            arrowRight,
            exportsvg,
            dw,
            material_banner11,
            faqs,
            material_banner10,
        },
        props: ['olimps', 'thisYear', 'baiqau']
    }

</script>

<style lang="scss" scoped>
    
    .h3 {
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
        padding: 0 20px;
        color: #D0D3DB;
    }
    
    .landing {
        padding-bottom: 100px;
    }

    section {
        margin-top: 100px;
    }

    h3 {
        margin: 0;
        font-size: 36px;
        font-weight: 600;
        line-height: 51.8px;
    }

    .wrap {
        margin-top: 30px;
        align-items: center;
        font-size: 18px;
        font-weight: 400;
        line-height: 25.38px;

        .left {
            max-width: 507px;
        }


        .glassBtn {
            margin-top: 20px;
            padding: 20px 40px;
            background: transparent;
            color: #1E63E9;
            border: 1px solid #1E63E9;

            svg {
                stroke: #1E63E9;
            }
        }

        li {
            margin-top: 20px;
        }



        .video {
            &:hover {
                cursor: pointer;
                outline: 1px solid #1E63E9;
            }

            max-width: 312px;
            min-width: 312px;
            height: 302px;
            background: #F8F8F8;
            color: #1E63E9;
            font-size: 18px;
            line-height: 25.38px;
            text-align: center;

            width: 100%;

            svg {
                stroke: #1E63E9;
            }
        }

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
            flex-wrap: wrap;
            gap: 20px;
        }

        .wrap .video {
            max-width: none;
            min-width: none;
            height: auto;
            flex-direction: row;
            gap: 25px;
            border-radius: 20px;
            padding: 15px;

            img {
                width: 70px;
            }
        }

        .wrap .left {
            max-width: none;
        }

        .wrap .glassBtn {
            width: 100%;
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

        .wrap .video img {
            width: 45px;
        }

        .wrap {
            margin-top: 20px;
            font-size: 16px;
            line-height: 22.38px;
        }

        .wrap li {
            margin-top: 15px;
        }

        ol {
            padding: 0 0 0 20px;
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

        .wrap li {
            margin-top: 10px;
        }

        .wrap {
            margin-top: 0px;
            font-size: 14px;
            line-height: 19.38px;
        }

        .wrap .video img {
            width: 41px;
        }

        .wrap .video {
            font-size: 16px;
            line-height: 23.38px;
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
