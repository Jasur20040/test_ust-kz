<template>
    <header>
        <div class="main_header">
            <div class="profilemenubutton">
                <template v-for="(h, index) in head">
                    <NuxtLink :to="h.link" class="NuxtLink-item" :class="{active: index==active}">
                        {{h.name}}
                    </NuxtLink>
                </template>
            </div>
        </div>
    </header>
</template>


<script>
    // import certBtn from '@/components/forms/certBtn.vue'
    // import notification from '@/components/svg/notification.vue'
    export default {
        components: {
            // certBtn,
            // notification
        },
        props: ['head', 'active']
    }

</script>


<style scoped lang="scss">
.main_header {
    border-radius: 10px 10px 0px 0px;
    background: var(--Background, #F5F6F8);
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.10);

    .profilemenubutton {
        display: flex;
        gap: 55px;
        padding: 0 45px;

        .nuxt-link-exact-active {
            border-bottom: 3px solid #363636;
        }

        a {
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: #172856;
            padding: 20px 0;
        }
    }
}

@media(max-width: 991px) {
    .profilemenubutton {
        gap: 25px!important;
        padding: 0 20px!important;
        margin-top: 5px;
        a {
            padding: 15px 0!important;
            margin-top: 10px!important;
            font-size: 16px!important;
        }
    }
}
    // .main_header {
    //     font-family: Raleway;
    //     font-size: 16px;
    //     font-weight: 500;
    //     line-height: 19px;
    //     background: #ffffff;

    //     .cst-ct {
    //         height: 100%;

    //         .d-flex {
    //             height: 100%;
    //         }
    //     }

    //     .overflow {
    //         max-width: 100vw;
    //         overflow-x: scroll;

    //         &::-webkit-scrollbar {
    //             height: 0;
    //         }
    //     }

    //     .free-cert {
    //         position: absolute;
    //         right: 66px;

    //         .free-cert-button {
    //             @media all and (max-width: 883px) {
    //                 display: none;
    //             }
    //         }

    //         .notification {
    //             cursor: pointer;
    //             stroke: #363636;

    //             &:hover {
    //                 stroke: #0045CB;
    //             }

    //             &:active {
    //                 stroke: #0037A1;
    //             }
    //         }
    //     }

    //     .NuxtLink-item {
    //         display: flex;
    //         align-items: center;
    //         color: #363636;
    //         height: 100%;
    //         margin-right: 40px;
    //         white-space: nowrap;

    //         &:hover {
    //             text-decoration: none;
    //         }
    //     }

    //     .NuxtLink-item.active {
    //         border-bottom: 2px solid #363636;
    //     }
    // }

</style>
