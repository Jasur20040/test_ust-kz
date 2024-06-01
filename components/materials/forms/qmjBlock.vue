<template>
    <div class="block">
        <div class="image" :style="{ backgroundImage: `url(${imageUrl})` }"></div>

        <div class="wrap">
            <div class="title">
            {{material.title}}
        </div>
        <cstBtn text="Үлгісін көру" class="myBtn" imgToRight="qmg/arrow-right.png" />
        </div>
        
    </div>
    
</template>

<script>
import cstBtn from '@/components/forms/btn.vue'

export default {
  components: {
    cstBtn
  },
  props: {
    material: {
      type: Object,
      required: true
    }
  },
  computed: {
  imageUrl() {
    if (this.material && this.material.path) {
      return `${this.$store.state.apiUrl}/storage/files/${this.material.path}`
    } else {
      return require('@/assets/images/qmg/default.png')
    }
  }
}

}
</script>


<style scoped lang="scss">
    .block {

        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        gap: 20px;
        width: 100%;
        background: #FFFFFF;
        border-radius: 6px;

        .image {
            width:  100%;
            height: 247px;
            background-position: 50% 50%;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 10px;
            
        }

        .title {
            font-family: Atyp Text;
            font-size: 16px;
            font-weight: 600;
            line-height: 22.78px;
            text-align: left;
            color: rgba(23, 40, 86, 1);
        }

        .myBtn {
            height: 40px;
            background: rgba(30, 99, 233, 1);
            border-radius: 5px;
            
        }
        .myBtn:hover{
            background: var(--Hover, rgba(0, 69, 203, 1));
            animation-timing-function: ease-out;
            animation-duration: 300ms;


        }
        

        &:hover {
            cursor: pointer;
            box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
            transition: .3s linear;
        }
        .wrap{
            
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 20px;
        }
    }

    @media all and (max-width: 1439px) {
        .block .image {
           height: 300px;
        }
        .block .title {
            line-height: 20px;
            // height: 100px;
        }
    }

    @media all and (max-width: 1199px) {
        
        .block .title {
            // height: 130px;
        }
    }
    @media all and (max-width: 1099px) {
        .block .image {
            height: 319px;
        }
        .block .title {
            // height: 70px;
        }
    }

    @media all and (max-width: 991px) {
        .block{
            padding: 10px;
            gap: 10px;
        }
        .block .image {
            height: 280px;
        }
        .block .title {
            font-size: 14px;
            line-height: 18px;
        }
    }

    @media all and (max-width: 767px) {
        .block .image {
            height: 209px;
        }
    }

    @media all and (max-width: 500px) {
        .block .image {
            height: 32vw;
        }
        .cst_btn{
            font-size: 12px;
        }

        .block[data-v-768ccabd] {
            max-width: 100%;
            
        }
        

    }

    @media all and (max-width: 350px) {
        .block .image {
            height: 82vw;
        }

        

    }

</style>
