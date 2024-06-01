<template>
    <NuxtLink :to="getLink()" class="block" :class='{green: material?.sell > 0}'>
        <div class="h2">
            <div class="title d-f a-c gap-10">
                <img v-if="material?.raw" :src="require('@/assets/images/material/' + material.raw.toLowerCase() + '.svg')" alt="">
                <span>{{material?.title}}</span>
            </div>
            <div v-if='material?.sell > 1' class="money d-f a-c gap-10">
                <img v-if='material?.sell > 0' src="~assets/images/shield-tick.svg" alt="">
                {{skidka ? Math.round(skidka * material.sell) : material.sell}} ₸
            </div>
        </div>
        <div class="info">
            <div class="name">
                <div class="namefull">
                    <div v-if="material?.user?.img1" class="avatar" :style="'backgroundImage: url(' + $store.state.apiUrl + '/storage/files/images/avatars/' + material.user.img1 + ')'"></div>
                    <div v-else class="avatar" :style="'backgroundImage: url(' + $store.state.apiUrl + '/images/user-material.svg)'"></div>
                    <div class="author">{{material?.author}}</div>
                </div>
                <div v-if='material?.sell > 1' class="money2 d-f a-c gap-10">
                    <img v-if='material?.sell > 0' src="~assets/images/shield-tick.svg" alt="">
                    {{skidka ? Math.round(skidka * material.sell) : material.sell}} ₸
                </div>
            </div>
            <div class="d-f">
                <div class="date">
                    <img src="~assets/images/note-text.svg" alt="">
                    <span>{{material?.date}}</span>
                </div>
                <div class="views">
                    <img src="~assets/images/eye_materials.svg" alt="">
                    <span>{{material?.view}}</span>
                </div>
                <div class="downloads">
                    <img src="~assets/images/import.svg" alt="">
                    <span>{{material?.download}}</span>
                </div>
            </div>
        </div>
        <div v-if="material?.description != null" class="body">
            {{material.description}}
        </div>
        <div class="zhanr">
            <div class="zh">{{material?.zhanr}}</div>
            <div class="zh">{{material?.zhanr2}}</div>
            <div class="zh">{{material?.zhanr3}}</div>
        </div>
    </NuxtLink>
</template>

<script>
    export default {
        props: ['material', 'native_link', 'skidka'],
        methods: {
            wordType(e) {
                switch (e) {
                    case "ppt":
                    case "pptx":
                        return 'powerpoint'
                    default:
                        return 'word'
                }
            },
            getLink() {
                return this.native_link ?? '/' + this.wordType(this.material?.raw) + '/' + this.material?.lat_title + '-' + this.material?.id + '.html';
            }
        }
    }
</script>



<style scoped lang="scss">
    .block {
        display: block;
        width: 100%;
        padding: 30px 20px;
        border-bottom: 1px solid #F0F0F0;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        color: #888888;
        transition: 0.15s;
        position: relative;
        z-index: 3;

        @media all and (max-width: 767px) {
            // font-size: 12px;
            padding: 20px;
        }

        &:first-child {
            border-top: 1px solid #F0F0F0;
        }

        &:hover {
            box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            text-decoration: none;
            z-index: 4;

            .h2 span {
                text-decoration: underline;
            }
        }

        .h2 {
            font-size: 20px;
            font-weight: 500;
            line-height: 23px;
            color: #1E63E9;
            overflow-wrap: anywhere;
            margin-bottom: 12px;
            display: flex;
            justify-content: space-between;

            @media all and (max-width: 767px) {
                font-size: 18px;
                margin-bottom: 5px;
            }

            .title {
                display: flex;
                align-items: center;

                @media all and (max-width: 883px) {
                    align-items: flex-start;
                }

                @media all and (max-width: 767px) {
                    align-items: flex-start;

                    img {
                        margin-bottom: 5px;
                        margin-top: 3px;
                    }
                }

            }

            .money {
                color: #03B113;
                white-space: nowrap;

                @media all and (max-width: 883px) {
                    display: none;
                }
            }

            img {
                width: 24px;
                height: 24px;
            }
        }

        .info {
            display: flex;
            @media all and (max-width: 991px) {
                flex-direction: column;
            }
            @media all and (max-width: 883px) {
                flex-wrap: wrap;
                .name {
                    width: 100%;
                    margin-bottom: 10px;
                    justify-content: space-between;
                }
            }

            .name {
                display: flex;

                .namefull {
                    display: flex;
                    align-items: center;
                    margin-right: 20px;
                    @media all and (max-width: 767px) {
                        margin-right: 0px;
                    }

                    .avatar {
                        width: 20px;
                        height: 20px;
                        background-position: 50% 50%;
                        background-size: cover;
                        border-radius: 50%;
                    }

                    .author {
                        max-width: 250px;
                        display: block;
                        margin-left: 14px;
                        line-height: 15px;
                        height: 100%;
                        display: flex;
                        align-items: center;
                    }
                }

                .money2 {
                    display: none;
                    color: #03B113;
                    white-space: nowrap;
                    gap: 5px;
                    font-size: 18px;

                    img {
                        width: 24px;
                        height: 24px;
                    }

                    @media all and (max-width: 883px) {
                        display: flex;
                    }
                }
            }

            img {
                width: 16px;
                height: 16px;
            }

            .date,
            .views,
            .downloads {
                margin-right: 20px;
                display: flex;
                align-items: center;
                gap: 5px;
                @media all and (max-width: 883px) {
                    gap: 5px;
                }
            }

        }

        .body {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            margin-top: 10px;

        }

        .zhanr {
            margin-top: 15px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;

            @media all and (max-width: 500px) {
                gap: 6px;
            }

            .zh {
                background: #EEF2F9;
                border-radius: 6px;
                padding: 5px 8px;
            }
        }
    }

    .green {
        background: #EDFFED;
    }

</style>
