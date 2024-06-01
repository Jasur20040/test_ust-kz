
<template>
    <nuxt-link :to="'/kurs/'+course.lat_name+'-'+course.id" class="block">
        <div class="imagesirti">
            <div class="image" :style="{backgroundImage: 'url('+$store.state.apiUrl+'/storage/files/' + course.image + ')'}"></div>
            <div class="arrow arrowmobile">
                <arrow />
            </div>
        </div>
        <div class="wrap">
            <div class="nameandlink">
                <div class="title">{{course.name}}</div>
                <div class="arrow">
                    <arrow />
                </div>
            </div>
            <div class="speaker">
                Спикер: <span>{{course.speaker}}</span>
                <div class="description">
                    {{course.speaker_des}}
                </div>
            </div>
            <div class="hoursandprice">
                <div class="hours">
                    <img src="~assets/images/timer.svg" alt="">
                    <div class="contentkurs">
                        <div class="content-title">Курс ұзақтығы:</div>
                        <div class="content-value">{{course.hours}} академиялық сағат</div>
                    </div>
                </div>
                <div class="price">
                    <img src="~assets/images/wallet.svg" alt="">
                    <div class="contentkurs">
                        <div class="content-title">Қатысу жарнасы:</div>
                        <div class="content-value">{{course.price}} ₸</div>
                    </div>
                </div>
            </div>
            
        </div>
    </nuxt-link>
</template>

<script>

    import arrow from '@/components/svg/index/arrow-top-right.vue'

    export default {
        props: ['course'],
        components: {
            arrow
        },
    }

</script>

<style scoped lang="scss">
.block {
        background: #fff;
        border-top: 1px solid #D7E3F0;
        // border-bottom: 1px solid #D7E3F0;
        padding: 30px 0;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 20px;
        gap: 20px;
        color: #363636;
        transition: 0.3s;

        @media all and (max-width: 991px) {
            grid-template-columns: auto;
        }

        &:hover {
            // text-decoration: none;
            // border: 1px solid #0045CB;
            .wrap .title {
                color: #0045CB;
            }
            svg {
                stroke: #fff;
            }
            .arrow {
                background: #0045CB;
                border: 1px solid #0045CB;
            }
        }

        .imagesirti {
            display: flex;
            justify-content: space-between;
            .image {
                height: 160px;
                width: 160px;
                background-image: url(~/assets/images/banner.png);
                background-position: 50% 50%;
                background-size: cover;
                border-radius: 10px;
                @media all and (max-width: 991px) {
                    height: 200px;
                    width: 200px;
                }
            }
            .arrow {
                width: 40px;
                height: 40px;
                border: 1px solid #AABDE1;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            svg {
                stroke: #AABDE1;
            }
            .arrowmobile {
                display: none;
                @media all and (max-width: 991px) {
                    display: flex;
                }
            }
        }

        

        .wrap {
            .nameandlink {
                display: flex;
                justify-content: space-between;
                .title {
                    font-size: 20px;
                    color: #172856;
                    font-weight: 500;
                    line-height: normal;
                    padding-right: 20px;
                    margin-bottom: 10px;
                    @media all and (max-width: 991px) {
                        margin-top: 0px;
                        font-size: 18px;
                    }
                }

                .arrow {
                    min-width: 40px;
                    height: 40px;
                    border: 1px solid #AABDE1;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    @media all and (max-width: 991px) {
                        display: none;
                    }
                }
                svg {
                    stroke: #AABDE1;
                }
            }
            
            .hoursandprice {
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
                margin-top: 15px;

                @media all and (max-width: 1199px) {
                    gap: 10px;
                }

                .price, .hours {
                    background: #F5F6F8;
                    border-radius: 30px;
                    padding: 10px 15px;
                    .contentkurs {
                        display: flex;
                        gap: 5px;
                        margin-left: 5px;
                        align-items: center;
                        font-weight: 500;
                        font-size: 16px;
                        .content-title {
                            color: #858A97;
                        }
                        .content-value {
                            color: #1E63E9;
                        }
                    }
                    display: flex;
                    img {
                        width: 30px;
                    }
                }
            }

            .speaker {
                color: #858A97;
                font-size: 14px;
                .description {
                    // margin-top: 5px;
                }
            }


        }
    }
    @media all and (max-width: 1199px) {

    }
    @media all and (max-width: 991px) {

        .block {
            flex-direction: column;
            .wrap {
                margin-left: 0;
                .title {
                    margin-top: 20px;
                }
            }
        }


    }
    @media all and (max-width: 500px) {
        .block {
            flex-direction: column;
            padding: 20px;
            .wrap {
                .title {
                    font-size: 16px;
                    line-height: 20px;
                }
                .hoursandprice {
                    align-items: flex-start;
                    flex-direction: column;
                    .hours {
                        padding: 7px 10px;
                        .contentkurs {
                            line-height: 16px;
                            .content-title {
                                font-size: 12px;
                            }
                            .content-value {
                                font-size: 14px;
                            }
                        }
                    }
                    .price {
                        padding: 7px 10px;
                        margin-left: 0;
                        // margin-top: 10px;
                        .contentkurs {
                            line-height: 16px;
                            .content-title {
                                font-size: 14px;
                            }
                            .content-value {
                                font-size: 14px;
                            }
                        }
                    }
                }
                .speaker {
                    font-size: 12px;
                }
            }
        }
    }
</style>
