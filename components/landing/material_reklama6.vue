<template>
    <div class="reklama2 d-f a-c j-b">

        <div class="wrap d-f gap-10">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 9C19 10.45 18.57 11.78 17.83 12.89C16.75 14.49 15.04 15.62 13.05 15.91C12.71 15.97 12.36 16 12 16C11.64 16 11.29 15.97 10.95 15.91C8.96 15.62 7.25 14.49 6.17 12.89C5.43 11.78 5 10.45 5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9Z" fill="#FF8B0D" />
                <path d="M21.2511 18.4699L19.6011 18.8599C19.2311 18.9499 18.9411 19.2299 18.8611 19.5999L18.5111 21.0699C18.3211 21.8699 17.3011 22.1099 16.7711 21.4799L12.0011 15.9999L7.23106 21.4899C6.70106 22.1199 5.68106 21.8799 5.49106 21.0799L5.14106 19.6099C5.05106 19.2399 4.76106 18.9499 4.40106 18.8699L2.75106 18.4799C1.99106 18.2999 1.72106 17.3499 2.27106 16.7999L6.17106 12.8999C7.25106 14.4999 8.96106 15.6299 10.9511 15.9199C11.2911 15.9799 11.6411 16.0099 12.0011 16.0099C12.3611 16.0099 12.7111 15.9799 13.0511 15.9199C15.0411 15.6299 16.7511 14.4999 17.8311 12.8999L21.7311 16.7999C22.2811 17.3399 22.0111 18.2899 21.2511 18.4699Z" fill="white" />
                <path d="M12.5819 5.98L13.1719 7.15999C13.2519 7.31999 13.4619 7.48 13.6519 7.51L14.7219 7.68999C15.4019 7.79999 15.5619 8.3 15.0719 8.79L14.2419 9.61998C14.1019 9.75998 14.0219 10.03 14.0719 10.23L14.3119 11.26C14.5019 12.07 14.0719 12.39 13.3519 11.96L12.3519 11.37C12.1719 11.26 11.8719 11.26 11.6919 11.37L10.6919 11.96C9.97193 12.38 9.54193 12.07 9.73193 11.26L9.97193 10.23C10.0119 10.04 9.94193 9.75998 9.80193 9.61998L8.97193 8.79C8.48193 8.3 8.64193 7.80999 9.32193 7.68999L10.3919 7.51C10.5719 7.48 10.7819 7.31999 10.8619 7.15999L11.4519 5.98C11.7419 5.34 12.2619 5.34 12.5819 5.98Z" fill="white" />
            </svg>
            <div>
                <a href="/turnir" class="head">
                    <span class="uppercase">Тегін турнир</span> Мұғалімдер мен Тәрбиешілерге</a><br>
                Дипломдар мен сертификаттарды алып үлгеріңіз!
            </div>
        </div>
        <nuxt-link class="cst_size" to="/turnir">
            <emptyBtn imgToRight="arrow-right.svg" class="cst_size empty">Қатысу</emptyBtn>.
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
    .reklama2 {
        background: linear-gradient(118deg, #292D32 75.72%, rgba(93, 92, 102), #292D32 91.57%) #0045CB;
        background-size: 150%;
        background-position: 0% 50%;
        animation: anime 3s infinite linear;
        border-radius: 20px;
        color: #ffffff;
        padding: 20px 20px 20px 30px;
        font-size: 16px;
        line-height: 22.56px;

        @media all and (max-width: 991px) {
            flex-direction: column;
            align-items: flex-start;
        }
        @media all and (max-width: 767px) {
            padding: 20px;
            font-size: 14px;
        }

        a {
            display: inline-block;
            height: auto;
            color: #FF8B0D;
            font-size: 20px;
            font-weight: 400;
            line-height: 28.2px;
            @media all and (max-width: 767px) {
                font-size: 16px;
                line-height: normal;
                span {
                    display: block;
                }
            }
        }
        .cst_size {
            width: 150px;
            height: 50px;
            @media all and (max-width: 991px) {
                margin-top: 10px;
                margin-bottom: 20px;
            }
            @media all and (max-width: 767px) {
                width: 100%;
            }
        }
        .empty {
            border: 1px solid #FFFFFF;
            color: #fff;
        }
    }

    @keyframes anime {
        0% {
            background-position: 290% 50%;
        }

        75% {
            background-position: 290% 50%;
        }

        100% {
            background-position: 0% 50%;
        }
    }

</style>
