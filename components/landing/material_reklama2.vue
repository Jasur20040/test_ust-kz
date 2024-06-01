<template>
    <div>
        <div class="block">
            <div class="left">
                <div class="head">
                    <div class="value">{{count}}</div>
                    <div class="desc">материал <br>жарияланған</div>
                </div>
                <div class="body">
                    <div>
                        Өз тәжірибеңізбен бөлісіп, мыңдаған педагогтың алғысы мен аттестацияға жарамды сертификат алыңыз!
                    </div>
                    <nuxt-link to="/zharialau">
                        <bigBtn class="cst_size_btn" square=1>Материал жариялау</bigBtn>
                    </nuxt-link>
                    <div class="foot">«Ustaz tilegi» Республикалық ғылыми – әдістемелік журналы министірліктің №KZ09VPY00029937 куәлігімен ресми тіркелген.</div>
                </div>
            </div>
            <div class="right">
                <img src="~assets/images/material_zan.webp" alt="">
            </div>
        </div>
        <h3>Жүйелі-әдістемелік кешен</h3>
        <p>Еліміздің барлық ұстаздардың еңбегі мен тәжірибесін біріктіріп Республика бойынша ең үлкен материалдар базасын жасап, барлық педагогтардың тәжірибе алмасу алаңын қалыптастырып отырмыз. Барлық материалдарды педагогтар жүктеп алып сабағына қолдана алады</p>
        <p class="desc">Ustaz tilegi – Ұстаз тілегі Республикалық ұстаздар сайтында ашық сабақтар, сабақ жоспарлары, қмж, омж, ұмж, ктп, сценарийлер, олимпиада есептерін, тәрбие сағаттарды, мұғалімдерге керекті барлық құжаттарды таба аласыз. Сайтта барлық пәндерден, қазақ тілінде ақпараттар бар. смк еду кз, ашық сабақтар, қысқа мерзімді жоспарлар, тәрбие сағаттың сцеранийлері жарияланған. Сайтта олимпиадаларға қатысып өз біліміңізді тексеріп көрсеңіз болады. Жалпы, орталығымыздың басты мақсаты: ұстаздарға кез-келген жерде, кез-келген уақытта білім алуына мүмкіндік беру. Ұстаздардың барлық өзекті мәселелеріне инновациялық шешім тауып, шығармашылық жұмыспен айналысуына уақыт сыйлау. «Ұстаздарға сапалы білім бере алсақ, бүкіл Қазақ еліне білім бере аламыз» - деген сенімдеміз.</p>
    </div>
</template>


<script>
    import bigBtn from '@/components/forms/bigBtn.vue'
    export default {
        props: ['count'],
        components: {
            bigBtn
        }
    }

</script>


<style scoped lang="scss">
    .block {
        background: #F8F8F8;
        border-radius: 20px;
        padding: 30px 10px 0 40px;
        display: flex;
        align-items: flex-end;

        .left {
            padding-bottom: 30px;
        }

        .head {
            display: flex;
            align-items: center;
            gap: 20px;

            .value {
                font-weight: 700;
                font-size: 64px;
                line-height: 73px;
            }

            .desc {
                font-size: 24px;
                font-weight: 600;
                line-height: 28px;
            }
        }

        .body {
            font-size: 18px;
            line-height: 21px;
            margin-top: 10px;

            .cst_size_btn {
                margin-top: 20px;
                width: 250px;
                height: 50px;
            }

            .foot {
                color: #03B113;
                margin-top: 40px;
                font-size: 14px;
                font-weight: 400;
                line-height: 16px;

            }
        }

        .right {
            img {
                width: 304px;
            }
        }
    }

    h3 {
        margin-top: 50px;
        margin-bottom: 0px;
        font-size: 48px;
        font-weight: 600;
        line-height: 69.6px;

    }

    p {
        margin: 10px 0 0;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;

        &.desc {
            color: #888888;
        }
    }

    @media all and (max-width: 1439px) {
        .block .head .value {
            font-size: 60px;
            line-height: 68px;
        }

        .block .head .desc {
            font-size: 22px;
            font-weight: 600;
            line-height: 25px;
        }
    }

    @media all and (max-width: 1199px) {
        .block {
            flex-direction: column;
            align-items: center;
            padding: 20px 30px 0;
        }

        .block .right img {
            width: 251px;
        }

        .block .head .value {
            font-size: 47px;
            line-height: 51px;
        }

        .block .head .desc {
            font-size: 18px;
            line-height: 21px;
        }

        .block .body {
            font-size: 16px;
            line-height: 18px;
            margin-top: 10px;
        }

        .block .head {
            gap: 10px;
        }


    }

    @media all and (max-width: 991px) {

        .block .body .foot {
            margin-top: 30px;
        }

        .block .left {
            padding-bottom: 10px;
        }

        h3 {
            font-size: 28px;
            line-height: 34px;
        }

        p {
            font-size: 16px;
            line-height: 19px;
        }


    }

    @media all and (max-width: 500px) {
        .block {
            padding: 20px 20px 0;
        }

        .block .right img {
            width: 70vw;
        }

        h3 {
            font-size: 24px;
            line-height: 30px;
        }

        p {
            font-size: 14px;
            line-height: 16px;
        }
    }

    @media all and (max-width: 422px) {
        h3 {
            font-size: 20px;
            line-height: 26px;
        }

        .block .head .value {
            font-size: 40px;
            line-height: 53px;
        }

        .block .head .desc {
            font-size: 16px;
            line-height: 18px;
        }

        .block .body {
            font-size: 14px;
            line-height: 16px;
            margin-top: 10px;
        }

        .block .body .foot {
            font-size: 12px;
            line-height: 14px;
        }


    }

</style>
