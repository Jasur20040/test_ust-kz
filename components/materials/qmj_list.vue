<template>
    <div>
        <div v-show="loading" class="loading">
            <loader />
        </div>
        <div class="list">
            <template v-if="!loading" v-for="(material, index) in materials">
               <nuxt-link :to="'/qmg/'+material.lat_title+'-'+material.id+'.html'">
                   <qmjBlock :material="material" />
               </nuxt-link>
            </template>
        </div>
    </div>
</template>


<script>
    import qmjBlock from '@/components/materials/forms/qmjBlock.vue'
    import loader from '@/components/Lottie/loader.vue'

    export default {
        components: {
            qmjBlock,
            loader,
        },
        props: ['loading', 'materials'],
    }

</script>


<style scoped lang="scss">
    .list {
        
        margin-top: 40px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px ;
        a{
            width: 100%;
        }
    }
    .loading {
        display: flex;
        justify-content: center;
        margin-top: 100px;
        padding-bottom: 40vh;
    }
    
    @media all and (max-width: 1439px) {
        .list {
           max-width: 800px;
           grid-template-columns: 1fr 1fr;
            
        }
    }

    @media all and (max-width: 992px) {
        .list {
            grid-template-columns: 1fr ;

            .block{
                padding-bottom: 15px;
            }
        }
    }

    @media all and (max-width: 767px) {
        .list {
           grid-template-columns: 1fr 1fr;
            
        }
    }
    @media all and (max-width: 500px) {
        .list {
            
            gap: 5px;
            margin-top: 10px;
        }
    }

    

    @media all and (max-width: 350px) {
        .list {
            grid-template-columns: 1fr;
            gap: 10px;

        }
    }

</style>
