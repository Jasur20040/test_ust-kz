<template>
    <div class="list">
        <div v-if="loading==1" class="d-flex justify-content-center loader">
            <div class="spinner-border" role="status"></div>
        </div>
        <div v-show="loading==2" class="not_found">
            <Lottie :width="150" :height="150" :options="notFoundOption" v-on:animCreated="handleAnimation" />
            <div class="head">Cіз ешқандай турнирға қатыспағансыз.</div>
            <div class="body">Қатысу үшін турнирді таңдаңыз</div>
            <NuxtLink to="/olimpiada" class="cst_size_btn">
                <cstBtn text="Таңдау" square=1 />
            </NuxtLink>
        </div>
        <div v-if="loading==0" class="block_list">
            <div class="headerwrap">
                <div class="titlemonth">
                    {{thisYear}} жыл, {{thisMonth}} айының турнирі
                </div>
                <div class="belsendi">
                    <img src="~assets/images/flash.svg" alt="">
                    Белсенді
                </div>
            </div>
            <div class="mainwrap">
                <template v-for="(turnir, index) in turnirs">
                    <nuxt-link :to="'/turnir/'+turnir.lat_name+'-'+turnir.id" @click="startOlimp(index)" class="block">
                        <div class="head">{{turnir.month_name}} айының {{turnir.cat_name}} арасында ұйымдастырылған «{{turnir.name}}» Республикалық Блиц-турнирі</div>
                        <div class="body">
                            <div class="info clock">
                                <img src="~assets/images/clock.svg" alt="">
                                <div>
                                    {{'01.'+turnir.month+'.'+turnir.year+'-'+turnir.month_end+'.'+turnir.month+'.'+turnir.year}}
                                </div>
                            </div>
                            <div class="info people">
                                <img src="~assets/images/people.svg" alt="">
                                <div>Менің қатысушыларым: {{turnir.user_count}}</div>
                            </div>
                        </div>
                    </nuxt-link>
                </template>
            </div>
        </div>
    </div>
</template>


<script>
    import Lottie from 'vue-lottie/src/lottie.vue'
    import notFoundData from "@/assets/lottie_files/not_found/82408-search.json"
    import cstBtn from '@/components/forms/btn.vue'
    export default {
        components: {
            Lottie,
            cstBtn
        },
        props: ['loading', 'turnirs', 'thisYear', 'thisMonth'],
        data() {
            return {
                notFoundOption: {
                    animationData: notFoundData
                },
                animationSpeed: 1,
            }
        },
        methods: {
            startOlimp(id) {
                let slug = this.turnirs[id].lat_name + '-' + this.turnirs[id].idd
                this.$api.$get('olimpiada/' + slug).then((res) => {
                    this.$router.push({
                        name: 'olimpiada-slug',
                        params: {
                            slug: slug,
                            bagyt: res.bagyt,
                            o_users: res.o_users,
                            classes: res.classes,
                        }
                    });
                })
            },
            handleAnimation: function(anim) {
                this.anim = anim;
            },
        },
    }

</script>


<style scoped lang="scss">

.list {
    

    .block_list{
        border-radius: 10px;
        background: #FFF;
        box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.15);
        .headerwrap {
            padding: 20px 30px;
            border-radius: 10px 10px 0px 0px;
            background: #F5F6F8;
            box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.10);
            display: flex;
            justify-content: space-between;
            align-items: center;

            @media all and (max-width: 991px) {
                // flex-wrap: wrap;
                gap: 10px;
            }
            @media all and (max-width: 767px) {
                padding: 20px;
            }

            .titlemonth {
                color: #172856;
                font-size: 24px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                @media all and (max-width: 767px) {
                    font-size: 16px;
                }
            }
            .belsendi {
                display: flex;
                gap: 10px;
                background: #03B113;
                padding: 10px 20px;
                color: #fff;
                font-size: 16px;
                border-radius: 3px;
                align-items: center;

                @media all and (max-width: 767px) {
                    gap: 5px;
                    padding: 5px 10px;
                    font-size: 14px;
                }

                img {
                    width: 24px;
                    height: 24px;
                }
            }
        }
        .mainwrap {
            padding: 25px 30px;
            @media all and (max-width: 767px) {
                padding: 20px 20px;
            }
            .block {
                border-top: 2px solid #F0F0F0;
                padding: 15px 0;
                display: block;

                &:hover {
                    .head {
                        text-decoration: underline;
                    }
                }
                .head {
                    color: #1E63E9;
                    font-size: 20px;
                    font-weight: 500;
                    line-height: normal;
                    @media all and (max-width: 991px) {
                        font-size: 16px;
                    }
                }
                .body {
                    display: flex;
                    padding-bottom: 10px;
                    gap: 30px;
                    align-items: center;
                    margin-top: 15px;

                    @media all and (max-width: 991px) {
                        flex-wrap: wrap;
                        gap: 15px;
                    }
                    .info {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        color: #858A97;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: normal;

                        @media all and (max-width: 991px) {
                            font-size: 14px;
                        }

                        img {
                            width: 20px;
                            height: 20px;
                        }
                    }
                }
            }
        }
    }
}
    // .list {

    //     padding-bottom: 100px;

    //     .loader {
    //         padding-top: 30px;
    //         padding-bottom: 380px;

    //         .spinner-border {
    //             width: 2.5rem;
    //             height: 2.5rem;
    //         }
    //     }

    //     .block_list {
    //         padding: 30px;
    //         border: 1px solid #03B113;
    //         background: #FFFFFF;
    //         display: flex;
    //         flex-direction: column;
    //         border-radius: 30px;
    //         margin-top: 30px;
    //         gap: 1px;

    //         .wrap {
    //             display: flex;
    //             align-items: center;
    //             gap: 20px;
    //             font-size: 24px;
    //             font-weight: 800;
    //             line-height: 30px;
    //             margin-bottom: 30px;

    //             .belsendi {
    //                 display: flex;
    //                 padding: 5px 20px;
    //                 background: #E6F7E8;
    //                 border-radius: 30px;
    //                 align-items: center;
    //                 font-size: 18px;
    //                 font-weight: 700;
    //                 line-height: 30px;
    //                 color: #03B113;

    //             }
    //         }

    //         .block {
    //             background: #FFFFFF;
    //             border-radius: 10px;
    //             padding: 10px 30px;

    //             &:hover {
    //                 cursor: pointer;

    //                 .head {
    //                     color: #0045CB;
    //                     text-decoration: underline;
    //                 }
    //             }

    //             .head {
    //                 font-size: 24px;
    //                 font-weight: 600;
    //                 line-height: 28px;
    //                 color: #1E63E9;
    //             }

    //             .body {
    //                 margin-top: 15px;
    //                 display: grid;
    //                 grid-template-columns: auto 1fr;
    //                 align-items: center;
    //                 grid-gap: 10px 30px;
    //                 flex-wrap: wrap;
    //                 font-family: 'Gilroy-Bold';
    //                 font-size: 14px;
    //                 font-weight: 600;
    //                 line-height: 17px;

    //                 @media all and (max-width: 883px) {
    //                     grid-template-columns: 1fr;
    //                 }

    //                 .clock {
    //                     color: #03B113;
    //                 }

    //                 .clock,
    //                 .tusers {
    //                     display: grid;
    //                     align-items: center;
    //                     grid-template-columns: auto auto 1fr;
    //                     grid-gap: 10px;
    //                 }

    //                 .tusers {
    //                     color: #888888;
    //                     grid-template-columns: auto 1fr;
    //                 }
    //             }
    //         }
    //     }

    //     .not_found {
    //         display: flex;
    //         flex-direction: column;
    //         justify-content: center;
    //         align-items: center;
    //         text-align: center;
    //         padding-top: 115px;

    //         .head {
    //             font-size: 36px;
    //             font-weight: 600;
    //             line-height: 42px;
    //             color: #002A4D;
    //             margin-top: 20px;
    //         }

    //         .body {
    //             font-size: 24px;
    //             font-weight: 400;
    //             line-height: 28px;
    //             margin-top: 12px;
    //         }

    //         .cst_size_btn {
    //             width: 230px;
    //             height: 50px;
    //             margin-top: 40px;
    //         }
    //     }
    // }

    // @media all and (max-width: 500px) {
    //     .list .block_list[data-v-cbc8b6e6] {
    //         padding: 30px 10px;
    //     }

    //     .list .block_list .wrap[data-v-cbc8b6e6] {
    //         font-size: 20px;
    //         line-height: 26px;
    //     }
    // }

</style>
