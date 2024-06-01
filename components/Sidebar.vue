<template>
    <div class="side" :class="{inp:currentRoute == 'index', 'd-fi':sideActive}" @mousedown.self="$emit('closePopup')">
        <div class="sidebar">
           <exitBtn class="exitBtn" @click.native="$emit('closePopup')" />
            <div v-if="$auth.user" class="p-10">
                <div class="profile">
                    <div class="item d-f a-c j-b">
                        <div class="type">Баланс</div>
                        <div class="value"><span><b>{{$auth.user.balance}}</b> ₸</span></div>
                    </div>
                    <div class="item d-f a-c j-b">
                        <div class="type">Бонус</div>
                        <div class="value"><span><b>{{$auth.user.bonus}}</b> Б</span></div>
                    </div>
                    <div class="item d-f a-c j-b">
                        <div class="type">ID номер</div>
                        <div class="value">{{$auth.user.id}}</div>
                    </div>
                </div>
            </div>
            <div v-if="!$auth.user" class="auth">
                <bigBtn @click.native="$bus.$emit('openLogin')" class="cstBtn">Кіру / Тіркелу</bigBtn>
            </div>
            <div class="navs d-f fd-c">
                <NuxtLink class="nav-item d-f a-c gap-20" :class="{'active':currentRoute == 'profile'}" to="/profile">
                    <div class="rectangle"></div>
                    <div class="d-f a-c">
                        <sidebarProfile />
                        Жеке кабинет
                    </div>
                </NuxtLink>
                <NuxtLink class="nav-item d-f a-c gap-20" :class="{'active':currentRoute == 'menin-kurstarym'}" to="/menin-kurstarym">
                    <div class="rectangle"></div>
                    <div class="d-f a-c">
                        <sidebarTeacher />
                        Менің курстарым
                    </div>
                </NuxtLink>
                <NuxtLink class="nav-item d-f a-c gap-20" :class="{'active':currentRoute == 'menin-olimpiadalarym'}" to="/menin-olimpiadalarym">
                    <div class="rectangle"></div>
                    <div class="d-f a-c">
                        <sidebarCup />
                        Менің олимпиадаларым
                    </div>
                </NuxtLink>
                <NuxtLink class="nav-item d-f a-c gap-20" :class="{'active':currentRoute == 'menin-qmjlarym'}" to="/menin-qmjlarym">
                    <div class="rectangle"></div>
                    <div class="d-f a-c">
                        <sidebarFolder />
                        Менің ҚМЖ-ларым
                    </div>
                </NuxtLink>
                <NuxtLink class="nav-item d-f a-c gap-20" :class="{'active':currentRoute == 'menin-atestacialarym'}" to="/menin-atestacialarym">
                    <div class="rectangle"></div>
                    <div class="d-f a-c">
                        <sidebarBook />
                        Аттестация подписка
                    </div>
                </NuxtLink>
                <NuxtLink class="nav-item d-f a-c gap-20" :class="{'active':currentRoute == 'menin-materialdarym'}" to="/menin-materialdarym">
                    <div class="rectangle"></div>
                    <div class="d-f a-c">
                        <sidebarDoc />
                        Менің материалдарым
                    </div>
                </NuxtLink>
                <NuxtLink class="nav-item d-f a-c gap-20" :class="{'active':currentRoute == 'menin-seminarlarym'}" to="/menin-seminarlarym">
                    <div class="rectangle"></div>
                    <div class="d-f a-c">
                        <sidebarVideo />
                        Менің семинарларым
                    </div>
                </NuxtLink>
                <NuxtLink class="nav-item d-f a-c gap-20" :class="{'active':currentRoute == 'menin-baiqaularym'}" to="/menin-baiqaularym">
                    <div class="rectangle"></div>
                    <div class="d-f a-c">
                        <sidebarMedal />
                        Менің байқауларым
                    </div>
                </NuxtLink>
                <NuxtLink class="nav-item d-f a-c gap-20" :class="{'active':currentRoute == 'menin-turnirlerim'}" to="/menin-turnirlerim">
                    <div class="rectangle"></div>
                    <div class="d-f a-c">
                        <sidebarStar />
                        Менің турнирлерлерім
                    </div>
                </NuxtLink>
                <NuxtLink class="nav-item d-f a-c gap-20" :class="{'active':currentRoute == 'menin-kornekilikterim'}" to="/menin-kornekilikterim">
                    <div class="rectangle"></div>
                    <div class="d-f a-c">
                        <sidebarArchive />
                        Менің көрнекіліктерім
                    </div>
                </NuxtLink>
                <NuxtLink class="nav-item d-f a-c gap-20" :class="{'active':currentRoute == 'menin-zhurnaldarym'}" to="/menin-zhurnaldarym">
                    <div class="rectangle"></div>
                    <div class="d-f a-c">
                        <sidebarBooks />
                        Менің журналдарым
                    </div>
                </NuxtLink>
                <NuxtLink class="nav-item d-f a-c gap-20" :class="{'active':currentRoute == 'menin-testterim'}" to="/menin-testterim">
                    <div class="rectangle"></div>
                    <div class="d-f a-c">
                        <sidebarEqual />
                        Менің тесттерім
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>


<script>
    import bigBtn from '@/components/forms/bigBtn.vue'
    import exitBtn from '@/components/forms/exitBtn.vue'
    import sidebarProfile from '@/components/svg/sidebarProfile.vue'
    import sidebarCup from '@/components/svg/sidebarCup.vue'
    import sidebarTeacher from '@/components/svg/sidebarTeacher.vue'
    import sidebarFolder from '@/components/svg/sidebarFolder.vue'
    import sidebarBook from '@/components/svg/sidebarBook.vue'
    import sidebarDoc from '@/components/svg/sidebarDoc.vue'
    import sidebarVideo from '@/components/svg/sidebarVideo.vue'
    import sidebarMedal from '@/components/svg/sidebarMedal.vue'
    import sidebarStar from '@/components/svg/sidebarStar.vue'
    import sidebarArchive from '@/components/svg/sidebarArchive.vue'
    import sidebarBooks from '@/components/svg/sidebarBooks.vue'
    import sidebarEqual from '@/components/svg/sidebarEqual.vue'
    export default {
        components: {
            bigBtn,
            exitBtn,
            sidebarEqual,
            sidebarBooks,
            sidebarArchive,
            sidebarStar,
            sidebarMedal,
            sidebarVideo,
            sidebarDoc,
            sidebarBook,
            sidebarFolder,
            sidebarTeacher,
            sidebarCup,
            sidebarProfile,
        },
        props: ['sideActive'],
        computed: {
            currentRoute() {
                return this.$route.name
            },
        },

    }

</script>

<style lang="scss" scoped>
    .side {
        position: absolute;
        width: 310px;
        left: 50%;
        transform: translateX(-220%);
        z-index: 17;
        top: 0px;
        bottom: 262.41px;

        &.inp {
            padding-top: 558px;
        }
    }

    .exitBtn {
        display: none;
        position: absolute;
        width: 34px;
        height: 34px;
        right: 0;
        top: 0;
        transform: translate(50%, -50%);
        
    }
    .sidebar {
        background: #fff;
        border: 1px solid rgba(226, 232, 244, 1);
        border-radius: 10px;
        box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.15);
        padding-bottom: 27px;
        position: sticky;
        top: 111.77px;
        // overflow-y: auto;
        // max-height: calc(100vh - 111.77px);
        bottom: 0;
        height: min-content;
        width: 310px;
    }

    .profile {
        padding: 9px 20px;
        background: url(~/assets/images/sidebar_profile_bg.webp) 50% 50% / cover;
    }

    .item {
        height: 35px;
        font-size: 16px;
        line-height: 22.78px;
        font-weight: 500;

        span {
            font-size: 24px;
            line-height: 34.8px;

            b {
                font-weight: 800;
            }
        }
    }

    .auth {
        padding: 30px;
    }

    .cstBtn {
        width: 100%;
        height: 49px;
    }

    .navs {
        margin-top: 10px;
    }

    svg {
        stroke: #AABDE1;
        margin-right: 15px;

    }

    .nav-item {
        font-size: 16px;
        font-weight: 500;
        line-height: 22.78px;
        padding: 7px 0;

        &.active {
            color: #1E63E9;

            .rectangle {
                background: #1E63E9;
            }

            svg {
                stroke: #1E63E9;
            }
        }

        &:hover {
            color: #0045CB;

            .rectangle {
                background: #0045CB;
            }

            svg {
                stroke: #0045CB;
            }
        }

        &:active {
            color: #0037A3;

            .rectangle {
                background: #0037A3;
            }

            svg {
                stroke: #0037A3;
            }
        }
    }

    .rectangle {
        width: 5px;
        height: 30px;
        border-radius: 0 5px 5px 0;
        background: #fff;

    }

    @media all and (max-width: 991px) {
        .sidebar {
            top: 84.77px;
            bottom: 15px;
        }
    }

    @media all and (max-width: 1439px) {
        .side {
            transform: translateX(-184%);
            bottom: 302px;
        }

        .side.inp {
            padding-top: 624px;
        }
    }

    @media all and (max-width: 1199px) {
        .side {
            transform: translateX(-155%);
            bottom: 306px;
        }
        .side.inp {
    padding-top: 636px;
}
        
    }

    @media all and (max-width: 991px) {
        .side {
            transform: translateX(-116%);
            bottom: 404px;
        }
        .side.inp {
    padding-top: 571px;
}
    }

    @media all and (max-width: 767px) {
        .side {
            width: 100%;
            height: 100%;
            position: fixed;
            left: 0;
            top: 0;
            bottom: auto;
            right: auto;
            display: none;
            justify-content: center;
            align-items: flex-start;
            z-index: 20;
            padding: 0 !important;
            transform: none;
            background: rgba(0, 0, 0, 0.6);
            &.active {
                display: flex;
            }
            &.d-fi .p-10 {
                padding: 20px;
            }
            &.d-fi .profile{
                box-shadow: 0px 5px 10px 0px #0000001A;
            }
            &.d-fi .sidebar .navs{
                // max-height: calc(100vh - 210px);
            }
            &.d-fi .exitBtn{
                display: flex;
            }
            
            
        }
        .sidebar {
            top: 20px;
            bottom: auto;
            position: fixed;
            max-width: 360px;
            width: 100%;
            .navs {
                overflow-y: scroll;
                // max-height: calc(100vh - 156px);
            }
        }
    }
    

</style>
