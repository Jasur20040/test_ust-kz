<template>
    <div>
        <successPopup />
        <confirmedPopup />
        <Nuxt />
    </div>
</template>


<script>
    //import Header from '@/components/Header.vue'
    import successPopup from '@/components/popups/successPopup.vue'
    import confirmedPopup from '@/components/popups/confirmedPopup.vue'
    export default {
        components: {
            //Header,
            successPopup,
            confirmedPopup,
        },
        
    }
</script>