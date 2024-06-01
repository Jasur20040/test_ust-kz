<template>
    <div>
        <img class="w-100 mt-40" src="~assets/images/turnir/diploms.webp" alt="" loading="lazy">
        <div class="twrap d-f">
            <div class="item">
                <img src="~/assets/images/success.svg" alt="">
                <div class="inf">
                    <div class="h">I Дәрежелі диплом</div>
                    <div class="b">{{olimp ? '20-19' : '9-10'}} дұрыс жауап</div>
                </div>
            </div>
            <div class="item">
                <img src="~/assets/images/success.svg" alt="">
                <div class="inf">
                    <div class="h">II Дәрежелі диплом</div>
                    <div class="b">{{olimp ? '18-16' : '7-8'}} дұрыс жауап</div>
                </div>
            </div>
            <div class="item">
                <img src="~/assets/images/success.svg" alt="">
                <div class="inf">
                    <div class="h">III Дәрежелі диплом</div>
                    <div class="b">{{olimp ? '15-13' : '5-6'}} дұрыс жауап</div>
                </div>
            </div>
            <div class="item">
                <img src="~/assets/images/success.svg" alt="">
                <div class="inf">
                    <div class="h">Сертификат</div>
                    <div class="b">Барлық қатысушыларға - сертификат</div>
                </div>
            </div>
            <div class="item">
                <img src="~/assets/images/success.svg" alt="">
                <div class="inf">
                    <div class="h">Алғыс хат</div>
                    <div class="b">Әр оқушы үшін жетекшіге - алғыс хат</div>
                </div>
            </div>

        </div>
    </div>
</template>


<script>
    export default {
        props: ['olimp']
    }
</script>

<style lang="scss" scoped>
    .twrap {
        gap: 5px;
        flex-wrap: wrap;
        margin-top: 30px;

        .item {
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 10px 20px;

            .h {
                font-size: 20px;
                font-weight: 500;
                line-height: 28.48px;
                color: #172856;

            }

            .b {
                font-size: 16px;
                line-height: 22.56px;
                color: #858A97;
            }
        }
    }

    @media all and (max-width: 575px) {
        .twrap {
            margin-top: 25px;
        }

        .twrap .item .h {
            font-size: 18px;
            line-height: 25.48px;
        }

        .twrap .item .b {
            font-size: 14px;
            line-height: 19.56px;
        }

        .twrap .item {
            padding: 10px 20px 0 0;
        }
    }

</style>
