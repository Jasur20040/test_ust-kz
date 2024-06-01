<template>
    <div class="banner">
        <div class="header">
            <div class="desc">2023-2024 оқу жылына арналған</div>
            <div class="h">қысқа мерзімді сабақ жоспарларын</div>
            <div class="desc">Жүктеп алғыңыз келеді ме?</div>
        </div>
        <div class="foot d-f a-c ">
            <bigBtn class="cstBtn">Үлгісін көру</bigBtn>
            <div class="guard d-f a-c">
                <img src="~/assets/images/material/guard2.png" alt="">
                ҚР Білім және Ғылым министірлігінің стандартымен жасалған
            </div>
        </div>
    </div>
</template>


<script>
    import bigBtn from '@/components/forms/bigBtn.vue'
    export default {
        components: {
            bigBtn,
        },

    }

</script>

<style lang="scss" scoped>
    .banner {
        border-radius: 20px;
        background: url(~/assets/images/material/kitap.png) 90% 20px / 183px #F8F8F8 no-repeat;
        overflow: hidden;

        .header {
            padding: 30px 260px 23px 40px;
        }

        .desc {
            font-size: 20px;
            line-height: 28.2px;
        }

        .h {
            font-size: 30px;
            line-height: 43.17px;
            font-weight: 600;
            text-transform: uppercase;
        }

        .foot {
            gap: 65px;
            padding: 20px 40px 30px;
            background: #E9E9E9;
        }

        .cstBtn {
            width: 250px;
            height: 50px;
        }

        .guard {
            gap: 15px;
            color: #03B113;
            font-size: 16px;
        }
    }

    @media all and (max-width: 1199px) {
        .banner .foot {
            gap: 40px;
        }

        .banner .desc {
            font-size: 18px;
            line-height: 26.2px;
        }

        .banner .h {
            font-size: 26px;
            line-height: 38.17px;
        }
    }

    @media all and (max-width: 991px) {
        .banner .header {
            padding: 30px 30px 130px;
        }

        .banner {
            background-position: 90% 136px;
        }

        .banner .foot {
            gap: 30px;
            flex-direction: column;
            padding: 20px 30px 30px;
            background: #E9E9E9;
        }

        .banner .cstBtn {
            width: 100%;
            height: 50px;
        }
    }

    @media all and (max-width: 767px) {
        .banner {
            background-position: 90% 68px;
        }

        .banner .foot {
            gap: 20px;
        }

        .banner .header {
            padding: 30px 30px 52px;
        }
    }
    
    @media all and (max-width: 500px) {
        .banner .desc {
    font-size: 16px;
    line-height: 23.2px;
}
        .banner .h {
    font-size: 22px;
    line-height: 33.17px;
}
        .banner {
    background-size: 143px;
    background-position: 90% 100px;
}
        .banner .header {
    padding: 30px 30px 76px;
}
        .banner .guard {
    font-size: 14px;
}
        
    }
    
    @media all and (max-width: 445px) {
        .banner {
    background-size: 113px;
}
        .banner .header {
    padding: 30px 20px 70px;
}
        .banner .desc {
    font-size: 14px;
    line-height: 20.2px;
}
        .banner .h {
    font-size: 18px;
    line-height: 27.17px;
}
        .banner .foot {
    padding: 20px;
}
        .banner .guard[data-v-7de4569d] {
    font-size: 12px;
}
    }

</style>
