<template>
    <section class="search">
        <div class="cst-ct">
            <div class="wrapper-side">
                <div class="hotslot"></div>
                <div class="content">
                    <div class="h2">Материал іздеу</div>
                    <p>Сіз үшін 400 000 ұстаздардың еңбегі мен тәжірибесін біріктіріп, ең үлкен материалдар базасын жасадық. Төменде пәніңізді белгілеп, керек материалды алып сабағыңызға қолдана аласыз</p>
                    <div class="value">Барлығы 663 959 материал жиналған</div>
                    <search />
                </div>
            </div>
        </div>
    </section>
</template>


<script>
    import search from '@/components/materials/forms/search.vue'
    export default {
        components: {
            search,
        },

    }

</script>

<style lang="scss" scoped>
    .cst-ct {
        padding: 0;
    }
    .search {
        margin: 100px 0;
        padding: 50px 0;
        background: #F5F6F8;
        font-size: 18px;
        line-height: 25.38px;
        @media all and (max-width: 1199px) {
            font-size: 14px;
            margin: 0;
            padding: 65px 0;
        }

        .h2 {
            font-size: 32px;
            font-weight: 700;
            line-height: 46.4px;
            @media all and (max-width: 1199px) {
                font-size: 26px;
            }
        }
        p {
            margin: 5px 0;
            color: #858A97;
        }

        .content {
            margin: 0 30px;
            @media all and (max-width: 767px) {
                width: 100% !important;
                margin: 0;
                padding: 0 20px;

                .value {
                    font-weight: 500;
                }
            }
        }
    }

</style>
