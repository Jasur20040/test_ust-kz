<template>
     <div>
        <div class="qmg_my">
            
            <div class="main1">
                <div class="cst-ct ">
                    <div class="wrapper-side ws">
                        <div class="hotslot"></div>
                            <div class="head_t">
                                <h1>Менің ҚМЖ-ларым</h1>
                                <hr>
                            </div>
                            
                        </div>
                </div>
            </div>
            <div class="main2">
                <div class="cst-ct ">
                    <div class="wrapper-side ws2">
                            <div class="hotslot"></div>
                            <div class="qmg_list">
                                <div class="qmg_sany">
                                    <div class="value">Барлығы: {{count}}</div>
                                    <!-- <div><btnGroup :category='qmgCat' placeholder='Пән: таңдауㅤ' type=3 @entered-category='qmgSearch($event)' /></div> -->
                                </div>
                                <not_found v-if="loading == 2" text="ҚМЖ тізімі бос." desc="Басқа ҚМЖ-ларды көру үшін 'Дайын ҚМЖ' бөліміне өтіңіз" btnText="Дайын ҚМЖ бөліміне өту" link="/qmg" />
                                    <div v-show="loading == 1" class="loading">
                                        <loader />
                                    </div>
                                    <div v-show="loading == 0" class="zhinaktar">
                                        <template v-for="(material,index) in materials">
                                            <nuxt-link :to="'/qmg/'+material.bolim.lat_title+'-'+material.bolim.id+'.html'">
                                                <qmjBlock :material="material.bolim" />
                                            </nuxt-link>
                                        </template>
                                    </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    //import headLink from '@/components/header.vue'
    import not_found from '@/components/landing/not_found.vue'
    import qmjBlock from '@/components/materials/forms/qmjBlock.vue'
    import loader from '@/components/Lottie/loader.vue'
    import btnGroup from '@/components/forms/btnGroup.vue'
    export default {
        components: {
            //headLink,
            not_found,
            qmjBlock,
            loader,
            btnGroup
        },
        head() {
            return {
                title: 'Менің ҚМЖ-ларым',
                meta: [{
                    hid: 'description',
                    name: 'description',
                    content: 'Менің сатып алған ҚМЖ-ларым'
                }, {
                    hid: 'keywords',
                    name: 'keywords',
                    content: ''
                }, ],
                link: [{
                    rel: 'canonical',
                    href: this.$store.state.appUrl + this.$route.path
                }]
            }
        },
        data() {
            return {
                head: [{
                    link: '/qmg',
                    name: 'Дайын ҚМЖ',
                }, {
                    link: '/menin-qmjlarym',
                    name: 'Менің ҚМЖ-ларым',
                }],
                materials: [],
                loading: 1,
                count: 0,
                
            }
            
        },
        methods: {
            getData() {
                this.$api.get('/word/qmg/my_qmg').then((res) => {
                    this.materials = res.data.data
                    this.count = res.data.total
                    if (res.data.total == 0) this.loading = 2
                    else this.loading = 0
                })
            },
        },
        mounted() {
            this.getData()
        }

    }
</script>


<style scoped lang="scss">
    .loading {
        display: flex;
        justify-content: center;
        height: 414px;
        padding-top: 100px;
    }

    .qmg_my {
        padding-bottom: 100px;

        .main1{
            padding: 0 10px;

            .ws{
                grid-gap: 45px;
                @media all and (max-width: 767px) {
                grid-gap: 0px;
            }
            }
        }
        .main2{
            min-height: 100vh;
            padding: 0 10px;
            .ws2{
                grid-gap: 70px;
                @media all and (max-width: 767px) {
                    grid-gap: 0px;
                }

                .qmg_list{
                    max-width: 950px;
                }
            }

            .qmg_sany{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                
            }
        }

        .head_t {
            margin-top: 30px;
            padding: 20px 0px 0px;
            
            font-family: 'Atyp Text';
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            line-height: 40px;
            color: #172856;
            

            h1 {
                max-width: 950px;
                margin: 0 auto;
                font-size: 24px;
                font-weight: 600;
                line-height: 30px;
                

            }

            hr{
                margin: 30px 0;
                width: 100%;
                height: 1px;
                border: none;
                background: #E2E8F4;
                border-radius: 6px;



            }

        }

        .value {
            margin-top: 10px;
            font-size: 16px;
            font-weight: 400;
            line-height: 19px;
            padding-bottom: 40px;

        }

        .zhinaktar {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 20px;
            a{
            width: 100%;
            }
            @media all and (max-width: 1439px) {
                max-width: 800px;
                grid-template-columns: 1fr 1fr;      
            
            }
            @media all and (max-width: 992px) {
                    grid-template-columns: 1fr ;
                    .block{
                        padding-bottom: 15px;
                    }
                
            }

            @media all and (max-width: 767px) {

                grid-template-columns: 1fr 1fr;
                    
              
            }
            @media all and (max-width: 500px) {

                    
                    gap: 5px;
                    margin-top: 10px;
                
            }

            

            @media all and (max-width: 350px) {

                    grid-template-columns: 1fr;
                    gap: 10px;

                
            }
            

        }
    }

</style>
