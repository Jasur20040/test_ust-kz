<template>
    <div>
        <!-- <headerLink :head='head' active=1 /> -->
        <section class="main-org">
            <div class="cst-ct">
                <div class="wrapper-side">
                    <div class="hotslot"></div>
                    <div class="myturnirler">
                        <div class="informer">
                            <Lottie class="animatgreen" :options="defaultOptions" v-on:animCreated="handleAnimation" />
                            <div><b>Ескерту,</b> Бұл бетте сіз қатысқан барлық турнирлер сақталынады. Жаңа турнирге қатысу үшін турнир бетіне өтіңіз.</div>
                        </div>
                        <div class="htitle">Менің тіркелген турнирлерім</div>
                        <belsendi_turnirler :loading="loading" :turnirs="turnirs" :thisMonth="thisMonth" :thisYear="thisYear" />
                        <otken_turnirs :thisMonth="thisMonth" :thisYear="thisYear" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
    import Lottie from 'vue-lottie/src/lottie.vue'
    import animationData from "@/assets/lottie_files/info/animation_kpny1i8h.json"
    // import headerLink from '@/components/header.vue'
    import belsendi_turnirler from '@/components/materials/my_turnirs/belsendi_turnirler.vue'
    import otken_turnirs from '@/components/materials/my_turnirs/otken_turnirs.vue'

    export default {
        middleware: ['auth'],
        head() {
            return {
                title: 'Менің турнирлерім',
                link: [{
                    rel: 'canonical',
                    href: this.$store.state.appUrl + this.$route.path
                }]
            }
        },
        components: {
            Lottie,
            belsendi_turnirler,
            otken_turnirs,
        },
        data() {
            return {
                head: [{
                        link: '/turnir',
                        name: 'Турнирлер',
                    }, {
                        link: '/turnir/myturnirs',
                        name: 'Менің турнирлерім',
                    }
                ],
                defaultOptions: {
                    animationData: animationData
                },
                active: 1,
                animationSpeed: 1,
                loading: 1,
                turnirs: [],
                muragat_count: null,
                thisYear: 2023,
                thisMonth: '',
            }
        },
        methods: {
            handleAnimation: function(anim) {
                this.anim = anim;
            },
            getData() {
                this.loading = 1
                this.$api.$get('/turnirs/my_turnirs/active').then((res) => {
                    this.loading = 0
                    this.muragat_count = res.muragat_count
                    this.thisYear = res.thisYear
                    this.thisMonth = res.thisMonth
                    if (res.tuser.length == 0) this.loading = 2;
                    else {
                        var mySet = new Array();
                        res.tuser.forEach((tuser) => {
                            tuser.turnir.user_count = 0
                        })
                        res.tuser.forEach((tuser) => {
                            if (!mySet.includes(tuser.turnir.id)) {
                                this.turnirs.push(tuser.turnir)
                                mySet.push(tuser.turnir.id)
                            }
                            this.turnirs[mySet.indexOf(tuser.turnir.id)].user_count++;
                        })
                        this.loading = 0
                    }
                })
            },
        },
        mounted() {
            this.getData()
        }
    }

</script>


<!-- <style scoped lang="scss" src="@/assets/myOlimpTurnir.scss"></style> -->
<style scoped lang="scss">
.main-org {
    padding-top: 35px;
    min-height: 1000px;
    background: linear-gradient(140deg, #DBF4FF 0.93%, #F3E7FF 82.61%);
    padding-bottom: 100px;

    @media all and (max-width: 767px) {
        .cst-ct {
            margin: 0;
            padding: 0 20px;
        }
    }

    .informer {
        border-radius: 6px;
        border: 1px solid #03B113;
        background: #E6F7E8;
        display: flex;
        padding: 20px 22px;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        color: #03B113;
        line-height: normal;
        gap: 10px;

        @media all and (max-width: 767px) {
            font-size: 14px;
            padding: 15px 15px;
        }

        .animatgreen {
            width: 34px !important;
            margin: 0 !important;
            padding: 0 !important;
        }
    }

    .htitle {
        color: #172856;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 30px; /* 93.75% */
        text-transform: uppercase;
        margin: 50px 0;

        @media all and (max-width: 991px) {
            font-size: 20px;
            margin: 25px 0;
        }
    }
}
</style>
