<template>
    <div class="mobileNav d-f j-c w-100">
        <div class="navs">
            <button @click="$emit('menuPopup')" class="btn nav-item aj-c fd-c">
                <img src="~/assets/images/svg/menu-menu.svg" alt="">
                Меню
            </button>
            <NuxtLink class="nav-item aj-c fd-c" to="/habarlama">
                <img src="~/assets/images/svg/menu-notc.svg" alt="">
                Хабарлама
            </NuxtLink>
            <button @click="$emit('sideActive')" class="btn nav-item aj-c fd-c">
                <img src="~/assets/images/svg/menu-profile.svg" alt="">
                Кабинет
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .mobileNav {
        position: fixed;
        bottom: 0;
        background: #fff;
        z-index: 10;
    }
    .navs {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1px;
        background: #E2E8F4;
    }
    .nav-item {
        display: flex;
        background: #fff;
        border-radius: 0;
        height: 70px;
        font-size: 12px;
        line-height: 17.09px;
        margin-top: 2px;
    }
    @media all and (min-width: 768px) {
        .mobileNav {
            display: none;
        }
    }
    
</style>