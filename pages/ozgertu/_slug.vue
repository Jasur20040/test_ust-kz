<template>
    <div>
       <erezhe :isOpen='erezhe_popup' @closePopup='erezhe_popup=0'/>
       <section class="main-org">
            <div class="cst-ct cst-ct2">
                <div class="wrapper-side">
                    <div class="hotslot"></div>
                    <div class="matozgertt">
                        <header_kroshki :header='header' gotoUrl='/menin-materialdarym' />
                        <div class="main">
                            <div class="cst-ct">
                                <div class="form">
                                    <div class="h3">1.<span>Материал ақпаратын өзгерту</span></div>
                                    <div class="cst-pd">
                                        <div class="block">
                                            <label for="title" class="file_desc">Файлды өзгерте алмайсыз. Қате файлды таңдап қойсаңыз, материалды өшіріп қайта жариялаңыз!</label>
                                            <div class="fileInputSection">
                                                <div class="left">
                                                    <img src="~assets/images/shield-green.svg" alt="">
                                                    {{material.filename}}
                                                </div>
                                                <button @click="download()" class="btn right">
                                                    <img src="~assets/images/download-02.svg" alt="">
                                                    Жүктеу
                                                </button>
                                            </div>
                                        </div>
                                        <div class="block">
                                            <label for="title">Материал тақырыбы</label>
                                            <input type="text" id="title" class="form-control myInput" placeholder="Ашық сабақ Ыбырай Алтынсарин 5 сынып" v-model="material.title">
                                        </div>
                                        <div class="block">
                                            <div class="category">
                                                <btnGroup :category='subjects' class="selectmat" :placeholder='material.zhanr' @entered-category="(e)=>{material.zhanr = subjects[e].name}"/>
                                                <btnGroup :category='directions' class="selectmat" :placeholder='material.zhanr2' @entered-category="(e)=>{material.zhanr2 = directions[e].name}"/>
                                                <btnGroup :category='classes' class="selectmat" :placeholder='material.zhanr3' @entered-category="(e)=>{material.zhanr3 = classes[e].name}"/>
                                            </div>
                                            <div class="info">
                                                <img src="~assets/images/message-question-yellow.svg" alt="">
                                                <div class="body">Егер сізге категория жеткіліксіз болса, бізге 8-771-234-5599 номеріне ватсап арқылы толық ақпаратты жазып жіберіңіз</div>
                                            </div>
                                        </div>
                                        <div class="block">
                                            <label for="description">Материал туралы қысқаша түсінік</label>
                                            <textarea type="text" id="description" class="form-control myInput" placeholder="Қысқаша түсінік ретінде материалдың басқаларға пайдасы, негізгі ойы, форматы туралы ақпарат жазуға болады." v-model="material.description"></textarea>
                                        </div>
                                    </div>
                                    <div class="h3">2.<span>Автор жайлы ақпарат</span></div>
                                    <div class="cst-pd">
                                        <div class="block">
                                            <label for="author">Сертификат алушының толық аты-жөні</label>
                                            <input type="text" id="author" class="form-control myInput" placeholder="мысалы: Досболов Марат Кенесұлы" v-model="material.author">
                                        </div>
                                        <div class="block">
                                            <label>Сертификат алушының жұмыс орны немесе оқу орны</label>
                                            <div>
                                                <button class="btn switch" :class="{active: activework}" @click="activework = !activework, material.work=''"></button>
                                                <div v-show="activework" class="block">
                                                    <input v-model="material.work" type="text" id="work" class="form-control myInput" placeholder="мысалы: Ақмола облысы Астана қаласы №7 жалпы орта мектебі КММ бастауыш сынып мұғалімі">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="block">
                                            <label>Жетекшіні қосу</label>
                                            <div>
                                                <button class="btn switch" :class="{active: activeZhetekshi}" @click="activeZhetekshi = !activeZhetekshi, material.zhetekshi=''"></button>
                                                <div v-show='activeZhetekshi' class="block">
                                                    <label for="zhetekshi">Жетекшінің толық аты-жөні</label>
                                                    <input type="text" id="zhetekshi" class="form-control myInput" placeholder="мысалы: Досболов Марат Кенесұлы" v-model="material.zhetekshi">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="h3">3.<span>Сату</span></div>
                                    <div class="cst-pd">
                                        <div class="block">
                                            <div class="sellBlock">
                                                <div class="header">
                                                    <img src="~assets/images/shield-tick.svg" alt="">
                                                    <div class="rainbow">Ақылы материал</div>
                                                </div>
                                                <div class="body">
                                                    <div style="display: flex;" class="d-flex a-c">
                                                        <button class="btn switch" :class='{active: activeSell}' @click='activeSell = !activeSell,material.sell = 0'></button>
                                                        <span class="aqyly">Материалды ақылы түрде жариялау</span>
                                                    </div>
                                                    <div v-show="activeSell">
                                                        <div class="info">
                                                            <img src="~assets/images/svg/lightbul.svg" alt="">
                                                            250-500 теңге аралығындағы материалдарды көп сатып алады.
                                                        </div>
                                                        <div class="sellTypeSum">
                                                            <button v-for='sellType in sellSumType' class="btn sumBlock" @click='material.sell=sellType' :class='{active: material.sell==sellType}'>
                                                                {{sellType}} ₸
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="zharialau">
                                        <button @click="updateData()" class="btn myBtn">Материал жариялау</button>
                                        <div class="erezhe">Сіз материалды жариялау арқылы <a @click='erezhe_popup=1'>сайттың ережелерімен</a> келіскеніңізді растайсыз.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import btnGroup from '@/components/forms/btnGroup.vue'
    import erezhe from '@/components/popups/erezhe.vue'
    import header_kroshki from '@/components/header_kroshki.vue'

    export default {
        middleware: ['auth'],
        head() {
            return {
                link: [{
                    rel: 'canonical',
                    href: this.$store.state.appUrl + this.$route.path
                }]
            }
        },
        components: {
            btnGroup,
            erezhe,
            header_kroshki
        },
        data() {
            return {
                material: [],
                subjects: [],
                directions: [],
                classes: [],
                activeZhetekshi: false,
                activework: false,
                activeSell: false,
                sellSumType: [250, 450, 700, 900, 1300, 1500, 1900, 2500],
                activeSellSum: null,
                erezhe_popup: 0,
                header: [{
                    name: 'Менің материалдарым',
                    link: '/menin-materialdarym'
                }, {
                    name: 'Материалды өзгерту',
                }],
            }
        },
        methods: {
            async getCategory() {
                let cats = await this.$axios
                    .$get("/word/getCategories")
                    .then((response) => {
                        this.subjects = response.subjects;
                        this.directions = response.directions;
                        this.classes = response.classes;
                    });
            },
            download() {
                this.$axios.$get('/word/'+this.material.id+'/download',{responseType: 'blob'}).then((response)=>{
                      const blob = new Blob([response]);
                      const link = document.createElement('a');
                      link.href = window.URL.createObjectURL(blob);
                      link.download = this.material.filename;
                      link.click();
                })
            },
            validation_file(e) {
                let done_extend_list = ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/pdf'];
                let extend_list = ['doc','docx','ppt','pptx','pdf',];
                for(let n=0; n<done_extend_list.length; n++) {
                    if(done_extend_list[n] == e) return extend_list[n];
                }
                return 'error';
            },
            updateData() {
                this.$api.$post('/menin-materialdarym/'+this.material.id+'/update', this.material,{}).then((res)=>{
                    this.$bus.$emit('successPopup');
                    this.$router.push('/menin-materialdarym');
                })
            }
        },
        async fetch() {
            await this.getCategory();
            await this.$axios.$get('/menin-materialdarym/'+this.$route.params.slug).then((res)=>{
                this.material = res;
                this.activeZhetekshi = res.zhetekshi ? true : false;
                this.activework = res.work ? true : false;
                this.activeSell = res.sell ? true : false;
            });
        },
    }

</script>

<style scoped lang="scss">
    .main-org {
        @media all and (max-width: 767px){
            .cst-ct {
                padding: 0;
            }
        }
    }
    @keyframes example {
        0% {background-position: 0% 100%}
        50% {background-position: 100% 0%}
        100% {background-position: 0% 100%}
    }
    .otstup {
        padding-bottom: 66px;
        @media all and (max-width: 767px) {padding-bottom: 132px;}
    }
    .main_header {
        .back {
            border: 1px solid #3E6CED;
            border-radius: 4px;
            font-weight: 600;
            line-height: 20px;
            color: #3E6CED;
            @media all and (max-width: 883px){span{display: none;}}
        }
        .kroshki {
            margin-left: 15px;
            line-height: 20px;
            color: #888888;
            a{
                color: #1E63E9;
                &:hover{
                    color: #1E63E9;
                }
            }
        }
    }
    .main {
        padding: 0 30px 150px 30px;
        @media all and (max-width: 767px) {
            padding: 0 20px 150px 20px;

            .cst-ct {
                padding: 0;
            }
        }


    }
    .form {
        margin-top: 40px;
        .h3 {
            font-size: 32px;
            font-weight: 600;
            text-transform: uppercase;
            line-height: 28px;
            margin-top: 70px;
            @media all and (max-width: 991px){
                font-size: 22px;
                line-height: 26px;
            }
            @media all and (max-width: 693px){
                font-size: 20px;
                line-height: 24px;
            }
            @media all and (max-width: 575px){
                font-size: 18px;
                line-height: 22px;
            }
            &:first-child {
                margin: 0;
            }
            span {
                margin-left: 20px;
                @media all and (max-width: 991px) {
                    margin-left: 10px;
                }
            }
        }
        .cst-pd {
            padding: 0 50px;
            @media all and (max-width: 991px) {
                padding: 0;
            }
        }
        .block {
            margin-top: 24px;
            &:first-child {
                margin-top: 30px;
            }

            .form-control {
                color: #172856;
                font-weight: 500;
            }

            label {
                font-size: 16px;
                display: block;
                font-weight: 500;
                line-height: 19px;
                color: #172856;
                margin-bottom: 10px;
                @media all and (max-width: 575px){
                    font-size: 14px;
                    line-height: 17px;
                }
            }

            textarea.myInput {
                height: 140px;
                ;
            }
            .myInput {
                background: #F5F6F8;
                border: 1px solid #E2E8F4;
                border-radius: 6px;
                padding: 15px 20px;
                height: auto;
                @media all and (max-width: 575px){
                    padding: 15px;
                }
                &::placeholder {
                    font-size: 14px;
                    font-weight: 400;
                    color: #8B8B8B;
                }

                &:hover, &:focus, &:active{
                    border: 1px solid #0045CB;
                    box-shadow: none;
                }
            }
            // .file_desc{
            //     font-size: 15px;
            // }
            .category {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 40px;
                grid-gap: 10px;

                @media all and (max-width: 991px) {
                    grid-template-columns: 1fr;
                    grid-template-rows: 40px 40px 40px;
                    gap: 20px;
                }
            }

            .info {
                display: flex;
                align-items: center;
                margin-top: 25px;
                font-weight: 500;

                img {
                    margin-right: 10px;
                }

                .body {
                    // max-width: 480px;
                    font-weight: 300;
                    color: #888888;

                    @media all and (max-width: 575px) {
                        font-size: 12px;
                        line-height: 1.4;
                    }
                }
            }
            .switch {
                width: 60px;
                height: 30px;
                background: #E2E8F4;
                border-radius: 26px;
                display: flex;
                align-items: center;
                justify-content: center;

                &.active {
                    background: #03B113;
                    &::after {
                        transform: translateX(60%);
                        background: #E2E8F4;
                    }
                }

                &::after {
                    content: '';
                    display: block;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background: #172856;
                    transition: all 0.3s;
                    transform: translateX(-60%);
                }
            }
            .zharnama {
                font-size: 16px;
                font-weight: 600;
                line-height: 23px;
                margin-left: 25px;
            }
            .sellBlock {
                border-radius: 5px;
                border: 1px solid var(--Line-color, #E2E8F4);
                background: #FFF;
                box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.15);
                .header {
                    padding: 20px 30px;
                    display: flex;
                    align-items: center;
                    border-radius: 5px 5px 0px 0px;
                    background: #F5F6F8;
                    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.10);
                    img {
                        margin-right: 10px;
                    }
                    .rainbow {
                        font-size: 20px;
                        font-weight: 600;
                        line-height: 29px;
                        background: linear-gradient(61.13deg, #9C1EE9 32.51%, #6398FF 91.27%);
                        background-size: 200%;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        text-fill-color: transparent;
                        animation-name: example;
                        animation-duration: 4s;
                        animation-iteration-count: infinite;
                        @media all and (max-width: 883px) {
                            font-size: 16px;
                        }
                    }
                }

                .body {
                    padding: 30px;

                    .aqyly {
                        font-size: 16px;
                        font-weight: 400;
                        color: #363636;
                        margin-left: 20px;
                    }

                    .sellTypeSum {
                        display: flex;
                        // grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                        grid-gap: 10px;
                        // max-width: 440px;
                        margin-top: 20px;
                        flex-wrap: wrap;

                        @media all and (max-width: 883px) {
                            grid-template-columns: 1fr 1fr 1fr 1fr;
                        }

                        @media all and (max-width: 442px) {
                            grid-template-columns: 1fr 1fr 1fr;
                        }

                        @media all and (max-width: 364px) {
                            grid-gap: 5px;
                        }

                        .sumBlock {
                            padding: 8px 20px;
                            background: #E2E8F4;
                            border-radius: 6px;
                            width: auto;
                            font-size: 16px;
                            font-weight: 500;
                            line-height: 23px;
                            color: #172856;

                            &.active {
                                color: #FFFFFF;
                                background: #0045CB;
                            }
                        }
                    }
                }

            }
            .fileInputSection{
                background: #F5F6F8;
                border: 1px solid #E2E8F4;
                border-radius: 4px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 20px 0 15px;
                .left {
                    display: flex;
                    align-items: center;
                    img {
                        margin-right: 10px;
                        width: 24px;
                    }
                }
                .right{
                    display: flex;
                    align-items: center;
                    img{
                        margin-right: 5px;
                        width: 20px;
                    }
                    color: #1E63E9;
                    padding: 0;
                    font-size: 16px;
                    font-weight: 500;
                }
            }
        }
        .zharialau{
            margin-top: 70px;
            display: grid;
            grid-template-columns: 270px auto;
            grid-gap: 30px;
            align-items: center;
            @media all and (max-width: 883px){
                grid-gap: 15px;
                grid-template-columns: 235px auto;
            }
            @media all and (max-width: 767px){
                grid-template-columns: 1fr;
                grid-gap: 25px;
            }
            .myBtn {
                height: 50px;
                border-radius: 5px;
                background: #1E63E9;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 14px;
                font-weight: 500;
                line-height: 16px;
                color: #fff;
                &:hover {
                    background: #0045CB;
                }
            }
            .erezhe {
                font-size: 16px;
                line-height: 19px;
                color: #858A97;
                // max-width: 350px;

                @media all and (max-width: 767px) {
                    max-width: 100%;
                    text-align: center;
                }

                a {
                    color: #1E63E9;
                    cursor: pointer;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }

</style>
