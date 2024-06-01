<template>
    <div>
        <div v-if="only==1" class="gift_block">
            <div class="title">Жетекшілерге сыйлықтар</div>
            <div class="mt-20">
                <div class="desc"><span class="gold">Ноутбук, телефон және ақшалай сыйлықтарды</span> ең белсенді жетекшілерге береміз!</div>
                <div class="desc">Рейтинг бөлімінде барлық нәтижелер туралы жариялап отырамыз!</div>
            </div>
            <cstbtn class="cstbtn">Толығырақ</cstbtn>
        </div>
        <div v-if="only==2" class="gift_block guard">
            <div class="title"><span class="blue">10% бонус</span> қалай беріледі?</div>
            <div class="mt-20">
                <div class="desc">Әр қатысушыға төлем жасаған соң сол сумманың 10% сізге бонус ретінде беріледі</div>
                <div class="desc">Бонусты сайттағы олимпиадаға төлем жасауға немесе картаға ақша ретінде шығарып алуға болады</div>
            </div>
            <cstbtn class="cstbtn">Бонусты көру</cstbtn>
        </div>
    </div>
</template>


<script>
    import cstbtn from '@/components/forms/cstBtn.vue'
    export default {
        props: ['only'],
        components: {
            cstbtn
        },
    }

</script>


<style scoped lang="scss">
    span.gold {
        color: #A48A16;
    }

    span.blue {
        color: #6E64BD;
    }

    .gift_block {
        padding: 50px 70px;
        background: url(~assets/images/gift_olimp.png) no-repeat 100%/382px, linear-gradient(140.25deg, #C8EFFF 0.93%, #ECDAFF 82.61%);
        ;
        border-radius: 30px;

        .title {
            font-size: 38px;
            font-weight: 800;
            line-height: 45px;
        }

        .desc {
            margin-top: 5px;
            font-size: 18px;
            font-weight: 400;
            line-height: 25.38px;
            max-width: 562px;
        }

        .cstbtn {
            width: 220px;
            height: 50px;
            margin-top: 20px;
        }

        &.guard {
            margin-top: 30px;
            background: url(~assets/images/guard_olimp.png) no-repeat 100%/382px, linear-gradient(140.25deg, #C8EFFF 0.93%, #ECDAFF 82.61%);
        }

    }

    @media all and (max-width: 1439px) {
        .gift_block.guard, .gift_block {
            background-position: 120%, 100%;
            background-size: 49%, cover;
        }

        .gift_block .desc {
            max-width: 511px;
        }
    }

    @media all and (max-width: 1199px) {
        .gift_block {
            padding: 30px 70px 30px 40px;
        }

        .gift_block .title {
            font-size: 32px;
            line-height: 38px;
        }

        .gift_block .com {
            font-size: 19px;
            line-height: 20px;
        }

        .gift_block .desc {
            font-size: 16px;
            line-height: 20px;
            max-width: 383px;
        }




    }

    @media all and (max-width: 991px) {
        .gift_block {
            padding: 30px 70px 80px 40px;
        }

        .gift_block.guard, .gift_block {
            background-position: 154% 131%, 100%;
            background-size: 70%, cover;
        }

        .gift_block .cstbtn {
            width: 100%;
        }

        .gift_block .desc {
            max-width: 100%;
        }
    }

    @media all and (max-width: 767px) {
        .gift_block {
            padding: 30px 160px 30px 30px;
        }

        .gift_block.guard, .gift_block {
            background-position: 144% 50%, 100%;
            background-size: 64%, cover;
        }

        .gift_block .title {
            font-size: 28px;
            line-height: 34px;
        }

    }

    @media all and (max-width: 575px) {
        .gift_block .title {
            font-size: 24px;
            line-height: 30px;
        }

        .gift_block.guard, .gift_block {
            background-position: calc(100% + 123px) 80px, 100%;
            background-size: 403px, cover;
        }

    }

    @media all and (max-width: 445px) {
        .gift_block .title {
            font-size: 20px;
            line-height: 28px;
        }

        .gift_block {
            padding: 30px 132px 30px 30px;
        }

        .gift_block .desc {
            font-size: 14px;
            line-height: 18px;
        }

        .gift_block.guard, .gift_block {
            background-position: calc(100% + 123px) 112px, 100%;
            background-size: 361px, cover;
        }
    }

</style>
