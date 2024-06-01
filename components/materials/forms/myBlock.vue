<template>
    <div class="block">
        <div class="headb">
            <div @click="$emit('zhinaq')" class="zhurnzhar">
                <zhurzhar />
                Журналға жариялау
            </div>
            <div class="comandalar">
                <NuxtLink class="ozgertu" :to="'ozgertu/'+material.lat_title+'-'+material.id+'.html'">
                    <ozgertu />
                    Өзгерту
                </NuxtLink>
                <div v-if="material.deleteorder !=1" class="zhoyu" @click="$bus.$emit('deleteMaterial', material.id)">
                    <zhoyu />
                    Жою
                </div>
            </div>
        </div>
        <div class="osnova">
            <div v-if="material.deleteorder == 1" class="tekserilude">
                <Lottie class="lotttt" :options="defaultOptions" v-on:animCreated="handleAnimation" />
                <span class="light-green">Тексерілуде...</span>
            </div>
            <div class="titlediv">
                <a class="title" target="_blank" :href="'word/'+material.lat_title+'-'+material.id+'.html'">
                    <span class="title">{{material.title}}</span>
                    <arrow />
                </a>
                <div v-if='material.sell>0' class="money">{{material.sell}} ₸</div>
            </div>
            <div class="info">
                <div class="name">
                    <img src="~assets/images/user.png" alt="">
                    <span>{{material.author}}</span>
                </div>
                <div class="parametrs">
                    <div class="date">
                        <img src="~assets/images/note-text.svg" alt="">
                        <span>{{material.date}}</span>
                    </div>
                    <div class="views">
                        <img src="~assets/images/eye_materials.svg" alt="">
                        <span> {{material.view}} </span>
                    </div>
                    <div class="downloads">
                        <img src="~assets/images/import.svg" alt="">
                        <span> {{material.download}} </span>
                    </div>
                </div>
            </div>
            <div v-if="material.description != null" class="description">
                {{material.description}}
            </div>
            <div class="knopkalar">

                <cstBtn2 @click="$emit('certificate')" status="1" class="zhuktepal">
                    Сертификатты жүктеу / тегін
                </cstBtn2>

                <cstBtn2 @click="$emit('getAlgys')" status="1" class="zhuktepal">
                    Алғыс хатты жүктеу {{material.algys ? '' : '/ 1500 ₸'}}
                </cstBtn2>

                <cstBtn2 @click="$emit('thankLetter')" status="1" class="zhuktepal">
                    Құрмет грамотасын жүктеу {{material.kurmet ? '' : '/ 2000 ₸'}}
                </cstBtn2>


<!--                 <button v-if="!material.zhurnal" @click="$emit('zhinaq')" class="btn certBtn">
                    Жинаққа жариялау
                </button>
                <button class="btn certBtn">
                    Рецензия жаздыру / 4000 ₸
                </button> -->
            </div>
        </div>
    </div>
</template>


<script>
    import download from '@/components/svg/download.vue'
    import zhurzhar from '@/components/svg/zhurzhar.vue'
    import ozgertu from '@/components/svg/ozgertu.vue'
    import zhoyu from '@/components/svg/zhoyu.vue'
    import Lottie from 'vue-lottie/src/lottie.vue'
    import animationData from "~/assets/lottie_files/upload_materials/96551-hourglass.json"
    import cstbtn from '@/components/forms/btn.vue'
    import arrow from '@/components/svg/index/arrow-top-right.vue'
    import cstBtn2 from '@/components/forms/cstBtn2.vue'

    export default {
        components: {
            download,
            cstbtn,
            zhurzhar,
            ozgertu,
            zhoyu,
            arrow,
            cstBtn2,
            Lottie
        },
        data() {
            return {
                defaultOptions: {
                    animationData: animationData
                },
                animationSpeed: 1,
            }
        },
        methods: {
            handleAnimation: function(anim) {
                this.anim = anim;
            }
        },
        props: ['material'],
    }

</script>


<style scoped lang="scss">
.block {
    border-radius: 6px;
    border: 1px solid #E2E8F4;
    background: #FFF;
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.15);

    .headb {
        display: flex;
        justify-content: space-between;
        border-radius: 6px 6px 0px 0px;
        background: #F5F6F8;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.10);
        padding: 15px 30px;
        font-size: 16px;
        font-weight: 500;
        color: #AABDE1;

        @media all and (max-width: 991px) {
            font-size: 12px;
        }

        @media all and (max-width: 767px) {
            padding: 15px 20px;
            gap: 15px;
        }

        .zhurnzhar {
            display: flex;
            gap: 10px;
            align-items: center;
            cursor: pointer;
            @media all and (max-width: 767px) {
                gap: 5px;
            }
            svg {
                stroke: #AABDE1;
            }
            &:hover {
                color: #0045CB;
                svg {
                    stroke: #0045CB;
                }
            }
        }
        .comandalar {
            display: flex;
            gap: 30px;
            align-items: center;

            @media all and (max-width: 991px) {
                gap: 10px;
            }

            a.ozgertu {
                display: flex;
                gap: 10px;
                align-items: center;
                color: #AABDE1;
                @media all and (max-width: 991px) {
                    font-size: 12px;
                }
                @media all and (max-width: 767px) {
                    gap: 5px;
                }
                svg {
                    stroke: #AABDE1;
                    width: 20px;
                    height: 20px;
                    @media all and (max-width: 991px) {
                        width: 15px;
                        height: 15px;
                    }
                }
                &:hover {
                    color: #0045CB;
                    svg {
                        stroke: #0045CB;
                    }
                }
            }

            .zhoyu {
                display: flex;
                gap: 10px;
                align-items: center;
                cursor: pointer;
                @media all and (max-width: 767px) {
                    gap: 5px;
                }
                svg {
                    stroke: #AABDE1;
                    width: 20px;
                    height: 20px;
                    @media all and (max-width: 991px) {
                        width: 15px;
                        height: 15px;
                    }

                }
                &:hover {
                    color: red;
                    svg {
                        stroke: red;
                    }
                }
            }
        }
    }

    .osnova {
        padding: 30px;
        @media all and (max-width: 767px) {
            padding: 30px 20px;
        }

        .tekserilude {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-bottom: 10px;
            .lotttt {
                width: 34px !important;
                height: 34px !important;
                margin: 0 !important;
                padding: 0 !important;
            }
            .light-green {
                color: #03B113;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
            }
        }
        .titlediv {
            display: flex;
            justify-content: space-between;
            align-items: center;
            @media all and (max-width: 991px) {
                flex-direction: column;
                align-items: flex-start;
            }
            .title {
                display: flex;
                font-size: 20px;
                font-weight: 600;
                gap: 10px;
                align-items: flex-end;
                @media all and (max-width: 991px) {
                    font-size: 18px;
                }
                svg {
                    stroke: #1E63E9;
                    width: 18px;
                    height: 18px;
                }
                :hover {
                    text-decoration: underline;
                }
            }
            .money {
                font-size: 22px;
                color: #03B113;
                font-weight: 700;
                min-width: 80px;
                display: flex;
                justify-content: flex-end;
                @media all and (max-width: 991px) {
                    min-width: auto;
                    margin-top: 15px;
                    font-size: 20px;
                }
            }
        }
        
        .info {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin: 20px 0 15px 0;
            gap: 20px;
            .name {
                display: flex;
                align-items: center;
                gap: 7px;
                img {
                    width: 20px;
                    height: 20px;
                }
            }
            .parametrs {
                display: flex;
                align-items: center;
                gap: 20px;
                color: #858A97;
                font-size: 14px;

                div {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
            }
        }

        .description {
            color: #858A97;
            font-size: 16px;
            line-height: normal;
            padding-bottom: 20px;
            border-bottom: 1px solid #E2E8F4;
            @media all and (max-width: 767px) {
                font-size: 14px;
            }

        }

        .knopkalar {
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            .zhuktepal {
                border-radius: 5px;
                border: 1px solid #E2E8F4;
                background: #EAF1FF;
                padding: 12px 20px;
                color: #1E63E9;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                display: flex;
                align-items: center;
                gap: 5px;
                cursor: pointer;

                @media all and (max-width: 500px) {
                    font-size: 13px;
                    padding: 10px 15px;
                    gap: 3px;
                }

                svg {
                    stroke: #1E63E9 !important;
                }

                &:hover {
                    background: #1E63E9;
                    color: #fff;
                }
            }
        }
                

    }
}
</style>
