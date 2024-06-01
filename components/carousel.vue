<template>
    <div class="carousel d-f fd-c a-c j-c">
        <div class="slides d-f aj-c">
            <div class="img">
                <img v-for="(slide, index) in slides" :src="getImgUrl(slide.image)" :key="index" :class="{ active: index === currentIndex , prev: index === currentIndex-1 , next: index === currentIndex+1 }" alt="Slide">
            </div>
        </div>
        <div class="controls d-f a-c j-b">
            <button @click.prevent="prevSlide" class="btn cstBtn d-f aj-c">
                <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.08985 1.08004L1.56984 7.60004C0.799844 8.37004 0.799844 9.63004 1.56984 10.4L8.08984 16.92" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <button @click.prevent="nextSlide" class="btn cstBtn d-f aj-c">
                <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.910156 16.92L7.43016 10.4C8.20016 9.62996 8.20016 8.36996 7.43016 7.59996L0.910156 1.07996" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
        <div class="paginate d-f j-c gap-10">
            <button v-for="(slide, index) in slides" class="btn paginate-item" :class="{ active: index === currentIndex }"></button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentIndex: 0,
                slides: [{
                    image: 'certificate.webp',
                }, {
                    image: 'certificate2.webp',
                }]
            };
        },
        methods: {
            nextSlide() {
                this.currentIndex = (this.currentIndex + 1) % this.slides.length;
            },
            prevSlide() {
                this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
            },
            getImgUrl(pet) {
                var images = require.context('@/assets/images/sliders/', false)
                return images('./' + pet)
            },
        }
    };

</script>

<style scoped lang="scss">
    .carousel {
        position: relative;
        width: 328px;
    }
    .slides {
        height: 340px;
        width: 268px;
        background: url(~/assets/images/sliderbox.webp) 50% 50% / cover;
        box-shadow: 0px 10px 14px 0px #00000033;
        .img {
            width: 218px;
            height: 278px;
            overflow: hidden;
            display: flex;
            position: relative;
        }
        img {
            position: absolute;
            width: 218px;
            height: 278px;
            transition: 0.2s;
            &.active {
                right: 0;
            }
            &.next {
                right: -100%;
            }
            &.prev {
                right: 100%;
            }
        }
    }
    .controls {
        position: absolute;
        padding-bottom: 15px;
        top: 50%;
        width: 100%;
        transform: translateY(-50%);
    }
    .cstBtn {
        width: 44px;
        height: 44px;
        background: #1E63E9;
        box-shadow: 0px 5px 10px 0px #0000000D;
        border-radius: 50%;
    }
    button {
        cursor: pointer;
    }
    .paginate {
        margin-top: 20px;
    }
    .paginate-item {
        padding: 0;
        width: 30px;
        height: 5px;
        background: #AABDE1;
        border-radius: 10px;
        transition: 0.2s;
        &.active {
            width: 80px;
            background: #172856;
        }
    }

</style>
