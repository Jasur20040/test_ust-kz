<template>
    <div class="reklama d-f a-c j-b">
        <div class="left">
            <div class="h uppercase">
                Ресми байқаулар тізімі
            </div>
            <div class="desc">
                Республикалық байқауларға қатысып жарамды дипломдар алып санатыңызды көтеріңіз!
            </div>
        </div>
        <nuxt-link to="/baiqau" class="tizimkoru">
            <emptyBtn class="cst_btn empty" imgToRight="arrow-right.svg" radian=1>Тізімді көру</emptyBtn>
        </nuxt-link>
    </div>
</template>


<script>
    import emptyBtn from '@/components/forms/cstBtn.vue'

    export default {
        components: {
            emptyBtn
        },
    }

</script>


<style scoped lang="scss">
    .reklama {
        padding: 20px 30px;
        background: #44658D;
        gap: 30px;
        color: White;
        border-radius: 20px;

        .h {
            font-weight: 600;
            font-size: 20px;
            line-height: 23px;
            color: darkorange;
        }

        .desc {
            margin-top: 5px;
            font-size: 16px;
            font-weight: 400;
            line-height: 19px;

        }

        .cst_btn {
            width: 180px;
            height: 50px;
            border: 1px solid #fff;
            color: #fff;
        }
    }

    @media all and (max-width: 991px) {

        .reklama {
            flex-direction: column;
            .h {
                font-size: 17px;
                line-height: 20px;
            }
            .desc {
                font-size: 15px;
                line-height: 18px;
            }

        }

    }

    @media all and (max-width: 883px) {
        .reklama {
            flex-direction: column;
            gap: 15px;
        }

        .reklama .h {
            font-size: 20px;
            line-height: 24px;
        }

        .reklama .desc {
            font-size: 17px;
            line-height: 20px;
        }

    }

    @media all and (max-width: 500px) {
        .tizimkoru {
            width: 100%;
        }
        .reklama .h {
            font-size: 16px;
            line-height: 21px;
        }

        .reklama .desc {
            font-size: 14px;
            line-height: 18px;
        }

        .reklama .cst_btn {
            width: 100%;
        }
    }

    @media all and (max-width: 422px) {
        .reklama .h {
            font-size: 15px;
            line-height: 18px;
        }

        .reklama .desc {
            font-size: 12px;
            line-height: 14px;
        }

    }

</style>
