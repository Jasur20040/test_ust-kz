<template>
    <button class="btn cst_btn" :class="{radian:radian}">
       <!-- <refresh v-if="svg==1" /> -->
       <!-- <download class="svg" v-if="svg==2" /> -->
       <img v-if='img' :src='getImgUrl(img)' alt="">
        {{text}}
       <arrowLeft class="arrow" v-if='imgToRight' />
       <!-- <newbe class="ml-3" v-if="newbe" /> -->
    </button>
</template>


<script>
    // import refresh from '@/components/svg/refresh.vue'
    import arrowLeft from '@/components/svg/arrow-left.vue'
    // import download from '@/components/svg/dwb.vue'
    // import newbe from '@/components/svg/newbe.vue'

export default {
    props: ['text','img', 'radian', 'svg', 'imgToRight', 'newbe'],
    // components: {refresh,arrowLeft,download,newbe},
    components: {arrowLeft},
    methods: {
        getImgUrl(pet) {
            var images = require.context('@/assets/images/', false)
            return images('./' + pet)
        },
    }
}
</script>


<style scoped lang="scss">
    .cst_btn{
        width: 100%;
        height: 100%;
        border-radius: 5px;
        border: 1px solid #E2E8F4;
        background: #EAF1FF;
        color: #1C77FD;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
            background: #0045CB;
            color: #FFFFFF;
            svg{
                stroke: #FFFFFF !important;
            }
            .svg{
                fill: #FFFFFF !important;
                stroke: none !important;
            }
        }
        &:active{
            background: #0037A1;
            color: #FFFFFF;
            svg{
                stroke: #FFFFFF;
            }
        }
        &.radian{
            border-radius: 999px;
        }
        img{
            margin-right: 10px;
        }
        svg{
            margin-right: 10px;
            stroke: #1E63E9 !important;
            transition: 0.2s;
        }
        .svg{
            fill: #1E63E9 !important;
            stroke: none !important;
            width: 20px;
            height: 20px;
        }
        .arrow{
            transform: rotate(180deg);
            margin-left: 10px;
        }
    }
</style>
