<template>
    <div class="_materials">
        <!--
        <transition name="clearInput">
            <reklama8 v-if="openReklama" @close="openReklama=0" />
        </transition>
-->
        <div class="materials pd">
            <material_reklama12 />
            <!--            <reklama class="mt-30" />-->
            <h1 class="h2">{{ title }}</h1>
            <div class="searchBlock">
                <cstBtn :loading="loading" @click.native.prevent="getData()" class="searchBtn">Іздеу</cstBtn>
                <input v-model='search' type="text" class="form-control searchInput" placeholder="Іздеу керек сөзді енгізіңіз" v-on:keyup.enter="getData()">
                <transition name="clearInput">
                    <template v-if="search">
                        <div @click="search = null" class="d-f aj-c clearInput">&#10006;<span>Өшіру</span></div>
                    </template>
                </transition>
            </div>
            <div class="filter">
                <btnGroup class="btnGroups" :category='subjects' :placeholder='cat_text[0]' @entered-category="subjectsSearch" type=3 :active="filterKey[0]" :loading="loadCat" @click.native="getCategory" />
                <btnGroup class="btnGroups" :category='directions' :placeholder='cat_text[1]' @entered-category="directionsSearch" type=3 :active="filterKey[1]" :loading="loadCat" @click.native="getCategory" />
                <btnGroup class="btnGroups" :category='classes' :placeholder='cat_text[2]' @entered-category="classesSearch" type=3 :active="filterKey[2]" :loading="loadCat" @click.native="getCategory" />
                <div class="all">
                    Барлығы: <span>{{materials.total}}</span> материал
                </div>
            </div>
        </div>
        <div class="list pd">
            <div class="list">
                <div v-show="loading" class="loading">
                    <loader />
                </div>
                <native_blick v-if="!loading" :material="reklama_item" :skidka="skidka" native_link="/qmg" />
                <template v-if="!loading" v-for='material_item in materials.data'>
                    <block :material="material_item" :skidka="skidka" />
                </template>
            </div>
            <div class="paginate">
                <pagination :currentPage="materials.current_page" :lastPage="materials.last_page" @set-page="Pageload" :loading="loading" />
            </div>
        </div>
        <div class="adisteme pd">
            <reklama7 />
            <reklama2 :count="COUNT" class="mt-50" />
        </div>
    </div>
</template>


<script>
    import cstBtn from '@/components/forms/cstBtn.vue'
    import btnGroup from '@/components/forms/btnGroup.vue'
    import pagination from '@/components/pagination.vue'
    import block from '@/components/materials/forms/block.vue'
    import native_blick from '@/components/materials/forms/native_blick.vue'
    import loader from '@/components/Lottie/loader.vue'
    import material_reklama12 from '@/components/landing/material_reklama12.vue'

    //    import reklama from '@/components/landing/material_reklama.vue'
    import reklama2 from '@/components/landing/material_reklama2.vue'
    import reklama7 from '@/components/landing/material_reklama7.vue'
    import reklama8 from '@/components/landing/material_reklama8.vue'
    export default {
        components: {
            cstBtn,
            btnGroup,
            //            reklama,
            pagination,
            reklama2,
            reklama7,
            reklama8,
            block,
            native_blick,
            material_reklama12,
            loader,
        },
        head() {
            return {
                title: this.headTitle,
                meta: [{
                    hid: 'description',
                    name: 'description',
                    content: this.headDescription
                }, {
                    hid: 'keywords',
                    name: 'keywords',
                    content: this.headKeyword
                }, ],
                link: [{
                    rel: 'canonical',
                    href: this.$store.state.appUrl + this.headCanonical,
                }]
            }
        },
        data() {
            return {
                headTitle: 'Ұстаздарға материалдар, ашық сабақтар, сабақ жоспарлары',
                headDescription: 'Мұғалімдерге ашық сабақтар, сабақ жоспарлары, тәрбие сағаттары, омж, қмж құжаттарды тегін жүктеп сабақта қолдануға болады. Ашық сабақтар сайты',
                headKeyword: 'ашық сабақтар, сабақ жоспарлары, тәрбие сағаттары, қысқа мерзімді жоспар, орта мерзімді жоспар, олимпиада сұрақтар, қмж, омж, сабақтар',
                headCanonical: this.$route.path,
                //                head: [{
                //                    link: '/material',
                //                    name: 'Материалдар',
                //                }, {
                //                    link: '/menin-materialdarym',
                //                    name: 'Менің материалдарым',
                //                }],
                reklama_item: {
                    title: 'Дайын ҚМЖ. Барлық пәндерден 2022-2023 оқу жылына, жаңа бұйрыққа сай жасалған',
                    sell: 1,
                    author: 'Сертификатталған тренер жасаған',
                    date: '01.01.2024',
                    view: '17 863',
                    download: '13 694',
                    description: 'ҚР Білім және Ғылым министірлігінің стандарты бойынша жасалған. 2022-2023 оқу жылына арналған',
                    description: 'ҚР Білім және Ғылым министірлігінің стандарты бойынша жасалған. 2022-2023 оқу жылына арналған',
                    zhanr: 'Барлық пәндер',
                    zhanr2: 'Барлық материалдар',
                    zhanr3: 'Барлық сыныптар',
                },
                title: 'Оқу әдістемелік материалдар',
                classes: [],
                classesInner: null,
                subjects: [],
                subjectsInner: null,
                directions: [],
                directionsInner: null,
                filterKey: [null, null, null],
                cat_text: ['Пән', 'Бағыт', 'Сынып'],
                search: null,
                loadCat: 1,
                COUNT: 0,
                skidka: 0,
                materials: [],
                loading: true,
                openReklama: 0,
            }
        },
        methods: {
            subjectsSearch(e) {
                this.subjectsInner = this.subjects[e]
                this.clearFeedBack()
            },
            directionsSearch(e) {
                this.directionsInner = this.directions[e]
                this.clearFeedBack()
            },
            classesSearch(e) {
                this.classesInner = this.classes[e]
                this.clearFeedBack()
            },
            clearFeedBack() {
                this.materials.current_page = 1
                this.changeUrlState(1)
                this.getData()
            },
            changeUrlState(e) {
                var s = null
                var d = null
                var c = null
                if (e > 0) {
                    var can = null
                    c = this.classesInner ? this.classesInner.lat_name : null
                    d = this.directionsInner ? this.directionsInner.lat_name :
                        (c ? 'barlik_materialdar' : null)
                    s = this.subjectsInner ? this.subjectsInner.lat_name :
                        (d ? 'barlyk_pander' : (c ? 'barlyk_pander' : null))
                    can = '/materialdar/' + s + (d ? '/' + d : '') + (c ? '/' + c : '') + '.html'
                    this.addHashToLocation(can)
                    this.headCanonical = can
                }
                c = this.classesInner ? this.classesInner.name : null
                d = this.directionsInner ? this.directionsInner.name :
                    (c ? 'Барлық материалдар' : null)
                s = this.subjectsInner ? this.subjectsInner.name :
                    (d ? 'Барлық пәндер' : (c ? 'Барлық пәндер' : null))
                this.headTitle = s + (d ? ' - ' + d : '') + (c ? ' - ' + c : '')
                this.title = s + (d ? ' ' + d : '') + ' бойынша оқу-әдістемелік материалдар'
                this.headDescription = s + (d ? ' ' + d : '') + (c ? ' ' + c : '') + ' бойынша өзіңізге керек материалды таңдап, тегін жүктеп, сабақ барысында қолдануға болады. Ұстаз тілегі сайтында ' + s + ' материалдарын жүктеу тегін'
                this.headKeyword = ''
            },
            addHashToLocation(params) {
                console.log('asd111')
                console.log(this.$store.state.appUrl + params)
                history.pushState({},
                    null,
                    this.$store.state.appUrl + params
                )
            },
            getCategory() {
                if (this.loadCat)
                    this.$axios.$get("/word/getCategories").then((res) => {
                        this.subjects = res.subjects
                        if (this.$route.params.subject) {
                            this.subjectsInner = res.subjects.find((el, index) => el.lat_name == this.$route.params.subject.replace('.html', ''))
                            this.filterKey[0] = res.subjects.indexOf(this.subjectsInner)
                        }
                        this.directions = res.directions
                        if (this.$route.params.direction) {
                            this.directionsInner = res.directions.find((el, index) => el.lat_name == this.$route.params.direction.replace('.html', ''))
                            this.filterKey[1] = res.directions.indexOf(this.directionsInner)
                        }
                        this.classes = res.classes
                        if (this.$route.params.class) {
                            this.classesInner = res.classes.find((el, index) => el.lat_name == this.$route.params.class.replace('.html', ''))
                            this.filterKey[2] = res.classes.indexOf(this.classesInner)
                        }
                        this.loadCat = 0
                    }).catch((err) => {
                        console.log(err.response)
                    })
            },
            getData() {
                this.loading = true
                this.$axios.$get('/word', {
                    params: {
                        title: this.search ?? null,
                        subject: this.subjectsInner ? this.subjectsInner.id : null,
                        direction: this.directionsInner ? this.directionsInner.id : null,
                        class: this.classesInner ? this.classesInner.id : null,
                        page: this.materials.current_page,
                    }
                }).then((res) => {
                    this.materials = res.materials
                    this.loading = false
                }).catch((err) => {
                    console.log(err)
                    //                    this.$nuxt.error({
                    //                        statusCode: 404
                    //                    })
                })
            },
            async firstGetData() {
                var path = this.$route.path.split('.')
                await this.$axios.$get(path[0]).then((res) => {
                    this.COUNT = res.COUNT
                    this.skidka = 1 - res.skidka.skidka / 100
                    this.materials = res.materials
                    if (res.subject)
                        this.subjectsInner = this.subjects[0] = res.subject
                    if (res.direction)
                        this.directionsInner = this.directions[0] = res.direction
                    if (res.class)
                        this.classesInner = this.classes[0] = res.class
                    this.filterKey = [res.subject ? 0 : null, res.direction ? 0 : null, res.class ? 0 : null]
                    if (this.subjectsInner || this.directionsInner || this.classesInner)
                        this.changeUrlState(0)
                    this.loading = false
                }).catch((err) => {
                    console.log(err)
                    //                    this.$nuxt.error({
                    //                        statusCode: 404
                    //                    })
                })
            },
            Pageload(n) {
                this.materials.current_page = n
                this.getData()
            },
            handleScroll() {
                window.removeEventListener('scroll', this.handleScroll);
                this.$bus.$emit('reklama', 1)
                setTimeout(() => {
                    this.openReklama = 1
                }, 2000)

            },
        },
        created() {
            if (process.client) {
                window.addEventListener('scroll', this.handleScroll);
            }
        },
        async fetch() {
            await this.firstGetData()
        },
    }

</script>

<style scoped lang="scss" src="@/assets/materials.scss"></style>
