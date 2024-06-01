<template>
    <div>
        <section class="main">
            <div class="cst-ct cst-ct2">
                <div class="wrapper-side">
                    <div class="hotslot"></div>
                    <div class="content-menin">
                        <div class="left_bar">
                            <headerprofile :head='head' active=0 />
                            <div class="profile-content">
                                <div class="name">Баланс беті жақында іске қосылады</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
    import headerprofile from '@/components/header_profile.vue'
    import logoutSvg from '@/components/svg/logout.vue'

    export default {
        middleware: ['auth'],
        components: {
            headerprofile,
            logoutSvg,
        },
        data() {
            return {
                title: 'Ustaz tilegi - Ұстаз тілегі Республикалық ұастаздар сайты',
                head: [{
                    link: '/profile',
                    name: 'Жеке кабинет',
                }, {
                    link: '/profile/balance',
                    name: 'Баланс',
                }, {
                    link: '/profile/bonus',
                    name: 'Бонус',
                }],
                avatar: ''
            }
        },
        fetch() {
            this.avatar = this.$auth.user.img1 != '' ? this.$auth.user.img1 : 'userDefault.png'
        },
        methods: {
            // getImgUrl(pet) {
            //     var images = require.context('@/assets/images/', false)
            //     return images('./' + pet)
            // },
            getApiImgUrl(pet) {
                var images = this.$store.state.apiUrl+'/storage/files/images/avatars/'+pet;
                console.log(images)
                return images
            },
            logout() {
                this.$auth.logout().then(() => {
                    this.router.push('/')
                });
            }
        },
        head() {
            return {
                title: this.title,
                link: [{
                    rel: 'canonical',
                    href: this.$store.state.appUrl + this.$route.path
                }]
            }
        }
    }

</script>


<style scoped lang="scss">
.main {
    background: linear-gradient(140deg, #DBF4FF 0.93%, #F3E7FF 82.61%);
}
.content-menin {
    width: 100%;
    height: 800px;
    font-size: 16px;
    line-height: 20px;
    padding-top: 30px;

    .left_bar {
        // padding: 30px 45px;
        background: #fff;
        border-radius: 10px 10px 0px 0px;
        padding: 0;

        .profile-content {
            font-size: 18px;
            font-weight: 500;
            padding: 25px 45px;
            padding-bottom: 200px;
        }
    }
}
@media(max-width: 991px) {
    .cst-ct {
        padding: 0!important;
    }
}
@media(max-width: 767px) {
    .content-menin {
        padding: 0;
        .profile-content {
            font-size: 16px!important;
            padding: 25px 20px!important;
            padding-bottom: 200px!important;
        }
    }
}

</style>
