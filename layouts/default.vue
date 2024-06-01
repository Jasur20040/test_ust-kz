<template>
    <div>
        <notification />
        <successPopup />
        <transition-group name="fadePopup">
            <loginPopup :key="1" v-if="loginOpen" :loginOpen="loginOpen" @changeStatus="(e)=>{loginOpen = e}" />
            <menuPopup :key="2" v-if="menuPopup" @closePopup="menuPopup=0" />
            <Sidebar :key="3" v-if="sideActive || !isMobileDevice()" :sideActive="sideActive" @closePopup="sideActive = 0" />
        </transition-group>
        <Header />
        <mobileNav @menuPopup="menuPopup=1" @sideActive="sideActive=1" />
        <Nuxt />
        <Footer />
    </div>
</template>


<script>
    import Header from '@/components/Header.vue'
    import Sidebar from '@/components/Sidebar.vue'
    import Footer from '@/components/Footer.vue'
    import mobileNav from '@/components/mobileNav.vue'
    import loginPopup from '@/components/popups/LoginPopup.vue'
    import menuPopup from '@/components/popups/menuPopup.vue'
    import notification from '@/components/notifications/notification.vue'
    import successPopup from '@/components/popups/successPopup.vue'
    export default {
        watch: {
            $route(to, from) {
                if (this.loginOpen || this.menuPopup || this.sideActive) {
                    this.loginOpen = false;
                    this.menuPopup = 0;
                    this.sideActive = 0;
                }
            }
        },
        components: {
            Sidebar,
            menuPopup,
            loginPopup,
            mobileNav,
            Footer,
            Header,
            successPopup,
            notification,
        },
        data() {
            return {
                loginOpen: 0,
                menuPopup: 0,
                sideActive: 0,
            }
        },
        mounted() {
            this.$bus.$on('openLogin', () => {
                // Проверка, если в мобильном режиме и sidebar активен
                if (this.isMobileDevice() && this.sideActive) {
                    this.sideActive = 0;  // Скрываем sidebar
                }
                this.loginOpen = 1; // Открываем попап логина
            });
        },
        methods: {
            isMobileDevice() {
                return process.client && window.innerWidth < 768;
            },
        },
    }
</script>