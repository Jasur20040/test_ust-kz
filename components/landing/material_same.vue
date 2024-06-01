<template>
    <div class="materials-list">
        <div class="pdd">
            <div class="list first">
                <div class="head">Ұқсас материалдар</div>
                <block :material="reklama_item" native_link="/qmg" />
                <template v-for='material_item in others'>
                    <block :material="material_item" />
                </template>
                <nuxt-link :to="'/materialdar/'+material.zhanr_lat.lat_name+'.html'" class="barlikbb">
                    <cstBtn imgToRight="arrow-right.svg" status="2" class="authorBtn" radian=1>
                        {{material.zhanr}} пәні бойынша барлық материалдарды көру
                    </cstBtn>
                </nuxt-link>
            </div>
             <div class="list second">
                <div class="head">Іс-шаралар кестесі</div>
                <template v-for="seminar in seminars">
                    <seminarBlock :seminar="seminar" />
                </template>
                <nuxt-link v-if="seminars.length==5" to="/seminar" class="barlikbb">
                    <cstBtn imgToRight="arrow-right.svg" class="authorBtn" status="2" radian=1>
                        Барлығын көру
                    </cstBtn>
                </nuxt-link>
            </div>
            <div class="list second">
                <div class="head">Педагогтардың біліктілігін арттыру курстары</div>
                <template v-for="course in courses">
                    <courseBlock :course="course" />
                </template>
                <nuxt-link v-if="courses.length==3" to="/kurs" class="barlikbb">
                    <cstBtn imgToRight="arrow-right.svg" class="authorBtn" status="2" radian=1>
                        Барлығын көру
                    </cstBtn>
                </nuxt-link>
            </div>
            <div v-if="authors_materials.length > 1" class="list second">
                <div class="head">Автордың материалдары</div>
                <template v-for='material_item in authors_materials'>
                    <block :material="material_item" />
                </template>
                <cstBtn imgToRight="arrow-right.svg" v-if="authors_materials.length == 3" @click.native="more" class="authorBtn barlikbb" status="2" radian=1 >
                    Автордың барлық материалдары
                </cstBtn>
            </div>
        </div>
    </div>
</template>

<script>
    import cstBtn from '@/components/forms/cstBtn2.vue'
    import block from '@/components/materials/forms/block.vue'
    import seminarBlock from '@/components/materials/seminar/block.vue'
    import courseBlock from '@/components/materials/course/courseBlock.vue'

    export default {
        components: {
            cstBtn,
            block,
            seminarBlock,
            courseBlock,
        },
        created() {
            // console.log('material on created2:', this.material);
        },
        mounted() {
          // console.log('material on mounted2:', this.material);
            if (process.client) {
                window.addEventListener('scroll', this.handleScroll);
            }
        },
        props: ['res'],
        data() {
            return {
                material: this.res.material,
                others: [],
                seminars: [],
                courses: [],
                authors_materials: [],
                reklama_item: {
                    title: 'Дайын ҚМЖ. Барлық пәндерден 2022-2023 оқу жылына, жаңа бұйрыққа сай жасалған',
                    sell: 1,
                    author: 'Сертификатталған тренер жасаған',
                    date: '01.01.2023',
                    view: '17 863',
                    raw: 'docx',
                    download: '13 694',
                    description: 'ҚР Білім және Ғылым министірлігінің стандарты бойынша жасалған. 2022-2023 оқу жылына арналған',
                    zhanr: 'Барлық пәндер',
                    zhanr2: 'Барлық материалдар',
                    zhanr3: 'Барлық сыныптар',
                },
            }
        },
        methods: {
            handleScroll() {
                if (!this.beforeLoad) {
                    this.beforeLoad = true
                    window.removeEventListener('scroll', this.handleScroll);
                    this.$axios.$get('/word/showOthers', {
                        params: {
                            id: this.res.material.id,
                            user_id: this.res.material.user_id,
                            zhanr_id: this.res.material.zhanr_id,
                            title: this.res.material.title,
                        }
                    }).then((res) => {
                        this.others = res.others
                        this.authors_materials = res.authors_materials
                        this.seminars = res.seminars
                        this.courses = res.courses
                    })
                    const raw = this.res.material.raw
                    if (raw == 'ppt' || raw == 'pptx') {

                    } else {
                        setTimeout(() => {
                            const iframe = document.querySelector('.framer');
                            iframe.addEventListener('scroll', function() {
                                if (this.scrollTop > 1400) {
                                    document.querySelector('.top_html').classList.add("active");
                                    setTimeout(() => {
                                        document.querySelector('.top_html').classList.add("vision");
                                    }, 100)
                                    this.style.overflow = 'hidden';
                                }
                            });
                        }, 1000)
                    }
                    this.$bus.$emit('reklama', 1)

                }

                console.log('You are not Robot! Welcome!')
            },
        }
    }
</script>

<style lang="scss">
.materials-list {
    @media all and (max-width: 767px) {
        .pdd {
            padding: 0 !important;
            .first {
                margin-top: 70px;
            }
        }
        a.barlikbb {
            display: block;
            margin: 0 20px;
            .authorBtn {
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                text-align: left;
                padding: 12px 20px;
                font-size: 16px;
                line-height: 20px;
                font-weight: 500;
            }
        }
        button.btn.cstBtn.aj-c.gap-10.authorBtn.barlikbb {
            display: flex;
            justify-content: space-between;
            text-align: left;
            width: calc(100% - 40px);
            padding: 12px 20px;
            margin: 0 auto;
            margin-top: 20px;
            font-size: 16px;
            line-height: 20px;
            font-weight: 500;
        }
    }
   .head {
        font-size: 28px;
        color: #172856;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 20px;
        
        @media all and (max-width: 767px) {
            margin: 0px 20px 20px 20px;
            font-size: 22px;
        }
    }
    .authorBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        border-radius: 5px;
        font-size: 14px;
        padding: 12px 0;
        border: 1px solid #E2E8F4;
        background: #EAF1FF;
        color: #1E63E9;
        margin-top: 20px;
        cursor: pointer;

        &:hover {
            background: #0045cb;
            border: 1px solid #0045cb;
            color: #fff;
            svg {
                stroke: #fff;
            }
        }
        svg {
            stroke: #1E63E9;
        }
    }
    .list.second {
        margin: 100px 0;
    } 
}
</style>