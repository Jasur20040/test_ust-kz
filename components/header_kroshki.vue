<template>
    <div class="main_header">
        <div class="d-f a-c gap-20">
            <button @click="gotoBack" class="btn cstBack aj-c">
                <arrowRight />
            </button>
            <div class="kroshki">
                <template v-for='(head, index) in header'>
                    <span v-if='index>0'> / </span>
                    <span v-if='head.link'>
                        <NuxtLink :to="head.link">{{head.name}}</NuxtLink>
                    </span>
                    <span v-else>{{head.name}}</span>
                </template>
            </div>
        </div>
    </div>
</template>


<script>
    import arrowRight from '@/components/svg/arrow-right.vue'
    export default {
        components: {
            arrowRight,
        },
        props: ['header', 'pd', 'gotoUrl'],
        methods: {
            gotoBack() {
                this.gotoUrl ? this.$router.push(this.gotoUrl) : this.$router.go(-1);
            }
        }
    }

</script>

<style lang="scss" scoped>
    .main_header {
        padding: 30px 30px 20px 30px;
        border-bottom: 1px solid #E2E8F4;

        .cstBack {
            display: flex;
            background: #1E63E9;
            border-radius: 50%;
            min-width: 44px;
            height: 44px;
            padding: 0;

            svg {
                stroke: #fff;
                transform: rotate(180deg);
                min-width: 24px;
                height: 24px;
            }

            &:active {
                background: #0037A3;
            }
        }

        .kroshki,
        a {
            font-family: Atyp Text;
            font-size: 14px;
            font-weight: 400;
            line-height: 20.3px;
            text-align: left;
        }

        a {
            color: #1E63E9;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    @media all and (max-width: 992px) {
        .main_header {
            padding: 15px 20px;
            .gap-20 {
                gap: 10px;
            }
        }
    }
    @media all and (max-width: 445px) {
        .main_header {
            // padding: 15px 0px;
            margin-top: 10px;
        }
        .main_header .cstBack {
            min-width: 36px;
            height: 36px;
            svg {
                min-width: 16px;
                height: 16px;
            }
        }
    }

</style>
