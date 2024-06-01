<template>
    <nuxt-link :to="'/seminar/'+seminar.lat_name+'-'+seminar.id" class="block">
        <div class="imagesirti">
            <div class="img" :style="'background-image: url('+$store.state.apiUrl+'/storage/files/' +  seminar.image+');'"></div>
            <div class="arrow arrowmobile">
                <arrow />
            </div>
        </div>
        <div class="body">
            <div class="nameandlink">
                <div class="h">{{seminar.name}}</div>
                <div class="arrow">
                    <arrow />
                </div>
            </div>
            <div class="info">
                Спикер: {{seminar.speaker}}
            </div>
            <div class="desc">
                {{seminar.speaker_des}}
            </div>
            <div class="wrap">
                <div class="type" :class="{web:seminar.type==2}">{{getType(seminar.type)}}</div>
                <div class="hour"><img :src="getImgUrl('timer.svg')" alt="">{{seminar.hours}} академиялық cағат</div>
                <div class="cash"><img :src="getImgUrl('wallet.svg')" alt="">{{seminar.price}} ₸</div>
            </div>
            
        </div>
    </nuxt-link>
</template>


<script>
    import arrow from '@/components/svg/index/arrow-top-right.vue'

    export default {
        props: ['seminar'],
        components: {
            arrow
        },
        methods: {
            getImgUrl(pet) {
                var images = require.context('@/assets/images/', false)
                return images('./' + pet)
            },
            getType(type) {
                switch (type) {
                    case 1:
                        return 'Семинар'
                    case 2:
                        return 'Конференция'
                }
            },
        }
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
            // box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
            // background: #f6f6f6;
            // border-top: 1px solid #3294ff;
            // border-bottom: 1px solid #3294ff;

        }

        .imagesirti {
            display: flex;
            justify-content: space-between;
            .img {
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

        .body {
            &:hover {
                svg {
                    stroke: #fff;
                }
                .arrow {
                    background: #0045CB;
                    border: 1px solid #0045CB;
                }
            }
            .nameandlink {
                display: flex;
                justify-content: space-between;
                .h {
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
            

            .wrap {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
                margin-top: 15px;
            }

            .type,
            .hour,
            .cash {
                font-size: 16px;
                font-weight: 500;
                line-height: normal;
                border-radius: 30px;
                padding: 10px 20px;
                background: #F5F6F8;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 5px;
                @media all and (max-width: 991px) {
                    font-size: 14px;
                    padding: 7px 10px !important;
                }
            }

            .type {
                padding: 10px 20px;
                color: #FFFFFF;
                background: linear-gradient(266.4deg, #00BFCB 15.75%, #00A1AB 70.45%);

                &.web {
                    background: linear-gradient(266.4deg, #C700CB 15.75%, #88028B 70.45%);
                }
            }

            .hour {
                color: #1E63E9;
            }

            .cash {
                color: #1E63E9;
            }

            .info,
            .desc {
                font-size: 14px;
                font-weight: 400;
                line-height: 16px;
                color: #858A97;

            }

            .info {
                // margin-top: 15px;

                b {
                    color: #363636;
                }
            }

            .desc {
                margin-top: 5px;
            }
        }
    }

    @media all and (max-width: 883px) {
        .title {
            font-size: 32px;
            line-height: 38px;
            margin-top: 42px;
        }

        .block .body .h {
            margin: 0;
            font-size: 18px;
            font-weight: 700;
            line-height: 21px;
        }

        .block {
            grid-template-columns: 1fr;
        }

        .block .img {
            height: 230px;
            width: 230px;
        }
    }

    @media all and (max-width: 500px) {
        .block {
            padding: 20px;
        }
    }

    @media all and (max-width: 420px) {

        .block .body .h {
            font-size: 16px;
            line-height: 18px;
        }

        .block .body .info,
        .block .body .desc {
            font-size: 12px;
            line-height: 14px;
        }

        .block .img {
            height: 200px;
            width: 200px;
        }


    }

</style>