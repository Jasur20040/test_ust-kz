<template>
    <div class="filter d-f gap-20 mt-20 f-wrap">
        <btnGroup class="btnGroup white" :category='subjects' :placeholder='cat_text[0]' @entered-category='subjectsSearch($event)' @click.native="getCategory" type=4 />
        <btnGroup class="btnGroup white" :category='directions' :placeholder='cat_text[1]' @entered-category='directionsSearch($event)' @click.native="getCategory" type=4 />
        <btnGroup class="btnGroup white" :category='classes' :placeholder='cat_text[2]' @entered-category='classesSearch($event)' @click.native="getCategory" type=4 />

        <cstBtn class="cstBtn" @click.native="search">
            <img src="~/assets/images/material/search-normal.svg" alt="">
            Іздеу
        </cstBtn>
    </div>
</template>


<script>
    
    import btnGroup from '@/components/forms/btnGroup.vue'
    import cstBtn from '@/components/forms/bigBtn.vue'
    export default {
        components: {
            cstBtn,
            btnGroup
        },
        data() {
            return {
                classes: [],
                classesInner: null,
                subjects: [],
                subjectsInner: null,
                directions: [],
                directionsInner: null,
                categoryLoading: 1,
                cat_text: ['Пән', 'Бағыт', 'Сынып'],
            }
        },
        methods: {
            subjectsSearch(e) {
                this.subjectsInner = this.subjects[e]
            },
            directionsSearch(e) {
                this.directionsInner = this.directions[e]
            },
            classesSearch(e) {
                this.classesInner = this.classes[e]
            },
            getCategory() {
                if (this.categoryLoading) this.$axios
                    .$get("/word/getCategories")
                    .then((response) => {
                        this.subjects = response.subjects
                        this.directions = response.directions
                        this.classes = response.classes
                        this.categoryLoading = 0
                    }).catch((err) => {
                        console.log(err.response)
                    });
            },
            search() {
                var s = null
                var d = null
                var c = null
                var can = null
                c = this.classesInner ? this.classesInner.lat_name : null
                d = this.directionsInner ? this.directionsInner.lat_name :
                    (c ? 'barlik_materialdar' : null)
                s = this.subjectsInner ? this.subjectsInner.lat_name :
                    (d ? 'barlyk_pander' : (c ? 'barlyk_pander' : null))
                if (s || d || c)
                    can = '/materialdar/' + s + (d ? '/' + d : '') + (c ? '/' + c : '') + '.html'
                else can = '/material'
                this.$router.push(can)
            },
        }
        
    }

</script>

<style lang="scss" scoped>
    .btnGroup {
        width: 220px;
        height: 50px;
        border: 1px solid #E2E8F4;
        background: #FFFFFF;
        @media all and (max-width: 500px) {
            width: auto;
            min-width: 31%;
        }
    }
    .cstBtn {
        width: 174px;
        height: 50px;
    }

    @media all and (max-width: 500px) {
        .filter {
            gap: 7px !important;
            // justify-content: space-between;
        }
    }
</style>
