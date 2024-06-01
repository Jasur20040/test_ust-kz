<template>
    <div class="menuPopup" @mousedown.self="$emit('closePopup')">
        <div class="menuBlock">
            <div class="header d-f a-c j-b">
                <img class="logo" src="~/assets/images/logo.svg" alt="">
                <exitDefaultBtn @click.native="$emit('closePopup')" class="closeBtn" />
            </div>
            <div class="body">
                <div class="navs d-f fd-c">
                    <NuxtLink v-for="route in routes" :key="'route-'+route.route" class="nav-item" :to="route.route">
                        {{route.name}}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import exitDefaultBtn from '@/components/forms/exitDefaultBtn.vue'
    export default {
        components: {
            exitDefaultBtn,
        },
        data() {
            return {
                routes: [
                    {
                        route: '/kurs',
                        name: 'Курс'
                    },
                    {
                        route: '/olimpiada',
                        name: 'Олимпиада'
                    },
                    {
                        route: '/qmg',
                        name: 'Дайын ҚМЖ'
                    },
                    {
                        route: '/atest',
                        name: 'Аттестация'
                    },
                    {
                        route: '/material',
                        name: 'Материалдар'
                    },
                    {
                        route: '/seminar',
                        name: 'Семинарлар'
                    },
                    {
                        route: '/baiqau',
                        name: 'Байқау'
                    },
                    {
                        route: '/turnir',
                        name: 'Турнир'
                    },
                    {
                        route: '/kornekilik',
                        name: 'Көрнекіліктер'
                    },
                    {
                        route: '/zhurnal',
                        name: 'Журнал'
                    },
                    {
                        route: '/test',
                        name: 'Тест'
                    },
                    {
                        route: '/news',
                        name: 'Жаңалықтар'
                    },
                    {
                        route: '/kenes',
                        name: 'Жеке кеңестер'
                    },
                    {
                        route: '/calculator',
                        name: 'Айлық есептеу калькуляторы'
                    },
                ]
            }
        },
        
    }

</script>
<style lang="scss" scoped>
    .menuPopup {
        font-size: 16px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0em;
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        z-index: 20;
        background: rgba(0, 0, 0, 0.6);

        .menuBlock {
            width: 360px;
            background: #FFFFFF;
            border-radius: 10px;
            margin-top: 20px;

            .header {
                background: #F2F5FA;
                padding: 20px 15px 20px 30px;
                border-radius: 20px 20px 0 0;
                font-size: 24px;
                font-weight: 600;
                line-height: 35px;
                color: #1B2849;
                box-shadow: 0px 5px 10px 0px #0000001A;
            }
            
            .body {
                padding: 20px 30px;
                overflow-y: scroll;
                max-height: calc(100vh - 96px);
            }
            .nav-item {
                width: 100%;
                padding: 6px 0;
                border-bottom: 1px solid #EEF4FF;
            }
            
        }
    }

</style>
