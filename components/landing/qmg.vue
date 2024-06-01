<template>
    <div>
        <div class="main1">
                <div class="cst-ct">
                    <div class="wrapper-side w2">
                        <div class="hotslot"></div>
                        <div class="mein">
 
            <div class="h2">ҚМЖ-ның үлгісі</div>
            <div class="video">
                <template v-if="youtube && load">
                    <vue-plyr>
                        <div class="plyr__video-embed">
                            <iframe :src="'https://www.youtube-nocookie.com/embed/'+transform(youtube)" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </vue-plyr>
                </template>
            </div>
            <div class="ylgi">
                <div class="h3">Дайын ҚМЖ-ны алып қағазбастылықтан құтылыңыз!</div>
                <div class="desc">
                    <p>Біздің мақсатымыз әр ұстаз өз уақытын үнемдеп барлық күшін оқушыларға сабақ беруге жұмсауына мүмкіндік жасау. Біз жүргізген опрос бойынша 80% мұғалім ҚМЖ жасауға 2 сағатын жұмсайды екен. Бұл жылыны 800 сағат немесе 3 ай. Ойлаңызшы осы уақытыңызды қосымша білім алып шығармашылық ізденіске жұмсап 100 білімді шәкірт тәрбиелеуге болады. Сол арқылы еліміздің дамуына өз үлесіңізді қосасыз.</p>
                    <p>Біз ұстаздардың барлық қосымша қағазбастылық жұмыстарын алып оларға жазудан бөлек білім алуына үлес қосқымыз келеді.</p>
                </div>
            </div>
            <div class="ylgi v2">
                <div class="h3">Дайын үлгі ретінде қолданып ҚМЖ жасаудағы шеберлігіңізді арттырыңыз</div>
                <div class="desc">
                    <p>Бізден алған материалдарды еліміздің үздік ұстаздары, ҚМЖ жасау тренерлері жазған. Әр қмж ашып ішіндегі әдіс тәсілдер, блум таксономисы бойынша идея құрылымдарын көріп өзіңіз ары қарай дамытып сабақты қолданыңыз</p>
                    <p>Іздену арқылы сіздің әр сабағыңыз қызықты, әрі әр оқушыға пайдалы болады.</p>
                    <p>Ал біз сапалы материалдар жинап сіздерге тұрақты түрде ұсынып отырамыз</p>
                </div>
            </div>
            <div class="ylgi v3">
                <div class="h3">Жүктеп алған соң қалай қолдану керек?</div>
                <div class="desc">
                    <p>1) Архивті ашып компьютеріңізге көшіріңіз</p>
                    <p>2) ҚМЖ деген папканы ашып тексеріңіз</p>
                    <p>3) Барлығы дұрыс болса сабағыңызға қолдана бастаңыз</p>
                </div>
            </div>
            <div class="comments">
                <div class="d-f j-b">
                    <div class="head">Пікірлер</div>
                    <!-- <div class="d-f gp">
                        <div class="rightIcon rg ">
                            <img src="~assets/images/qmg/arrow-left_comm.png" alt="">
                        </div>
                        <div class="leftIcon">
                            <img src="~assets/images/qmg/arrow-left_comm.png" alt="">
                        </div>

                    </div> -->
                </div>
                <carousel v-bind="options" class="sliderShadow">
                    <template v-for="comment in comments">
                        <slide class="comment-slide">
                            <div class="block">
                                <div class="header">
                                    <div class="avatar"></div>
                                    <div>
                                        <div class="name">{{comment.name}}</div>
                                        <div class="work">{{comment.work}}</div>
                                    </div>
                                </div>
                                <img src="~assets/images/qmg/tt.png" alt="">
                                <div class="body">
                                    <div class="desc">{{comment.text}}</div>
                                </div>
                            </div>
                        </slide>
                    </template>
                </carousel>

            </div>

    </div>
                        </div>
                </div>
            </div>

            <div class="main2">
                <div class="cst-ct ">
                    <div class="wrapper-side ws2">
                        <div class="hotslot"></div>
                        <div class="mein">
                            <div class="faqs">
                <div class="h2 s2">
                    Жиі қойылатын сұрақтар
                </div>
                <div class="questions">
                    <button v-for="(faq,index) in faqs" @click.prevent="openFAQ(index)" class="btn q_block" :class="{active:index==faqsIsOpen}">
                        <div class="d-f a-c j-b">
                            <div class="question">{{faq.question}}</div>
                            <img v-show="index!=faqsIsOpen"  src="~/assets/images/qmg/arrow-up.png" alt="">
                            <img v-show="index==faqsIsOpen" src="~/assets/images/qmg/arrow-down.png" alt="">
                            
                        </div>
                        <transition name="fade">
                            <div v-show="index==faqsIsOpen" class="p">
                                {{faq.answer}}
                            </div>
                        </transition>
                    </button>
                </div>
            </div>
                        </div>
                        
            </div>
                        </div>
                </div>
            </div>

    
</template>

<script>
    import cstBtn from '@/components/forms/btn.vue'

    export default {
        components: {
            cstBtn
        },
        props: ['youtube'],
        data() {
            return {
                options: {
                    perPage: 1,
                    perPageCustom: [
                        [884, 2]
                    ],
                    paginationSize: 15,
                    paginationPadding: 0,
                    paginationColor: '#ffffff',
                    paginationActiveColor: '#1E63E9',
                    paginationPosition: 'bottom-overlay',
                },
                faqsIsOpen: null,
                load: false,
                faqs: [
                    {
                        question: 'Мен сатып алсам, жаңа оқу жылында қолдана аламын ба?',
                        answer: 'Ия, біздің орталық жасаған барлық ҚМЖ-лар жаңа оқу жылына арналып жасалған. Жаңа оқу жылында 472-бұйрыққа сай жасалған. ҚМЖ-лар тексерістен өтіп, мектепте бірден қолдануға ыңғайлы етіп жасалынды. Сондықтан сатып алған соң өзіңіздің аты-жөніңізді жазып бірден сабақта қолдана аласыз.',
                    },
                    {
                        question: 'Үлгісін қайдан көруге болады?',
                        answer: 'Үлгісін осы беттің жоғары жағында фото, видео түрінде салынған. Сол жерден толық көре аласыз.',
                    },
                    {
                        question: 'Сатып алған соң қанша уақытта ҚМЖ-ны жібересіздер?',
                        answer: 'Сатып алған соң, ҚМЖ-ларды бірден осы сайттан жүктеп алуыңызға болады. Почтаңызға қосымша жүктеу сілтемесін жібереміз. Сатып алған соң кез-келген уақытта сайттағы жеке кабинетіңізден жүктеп алуыңызға болады. Біздің сайтта 1 жыл бойы сақталады.',
                    },
                    {
                        question: 'Мен әріптестеріммен бірігіп, ұжым болып алсақ, жеңілдіктер бар ма?',
                        answer: 'Ия, бар. Жеңілдікті көру үшін бірнеше сыныпты таңдасаңыз жеңілдіктің мөлшері шығады. Қазіргі уақытта 20-50 пайызға дейін жеңілдіктер беріледі.',
                    },
                    {
                        question: 'Барлық ҚМЖ-лар Білім және Ғылым министірлігінің стандарты бойынша жазылған ба?',
                        answer: 'Ия, ҚМЖ-ның барлығын біздің тренер мұғалімдер тексеріп дұрыстарын ғана сайтқа салады. Біздің орталық 3 жылдан аса уақыттан бері сапалы курстар, конференциялар, қмж-лар дайындап келеді. Сондықтан біз сапасына өте қатты назар аударамыз.',
                    },
                    {
                        question: 'Мен сатып алған соң алған ҚМЖ-ларым сайтта қанша уақыт сақталады?',
                        answer: 'Сатып алған файлдар сайтта 1 жыл бойы сақталады. Сондықтан сіз өзіңіз өшіріп алсаңыз, сайтқа кіріп қайта жүктеп алуыңызға болады. Барлық тоқсан бойынша сайтта бөліп, қолдануға ыңғайлы етіп сақталынған.',
                    },


                ],
                comments: [
                    {
                        name: 'Әбішева Жанар',
                        work: '№12 орта-мектебінің Қазақ тілім пәнінің мұғалімі',
                        text: 'Құрметті ұстаз тілегі ұжымы, сіздерге үлкен алғысымды айтқым келеді. Мен алған Қысқа мерзімді сабақ жоспарларым маған өте пайдасын тигізді. Жаңа оқу жылында өте көп уақытымды үнемдедім. Барлық тақырыптары сәйкес жазылған екен. Алдағы уақытта барлық сыныптардан презентацияларын да сатып аламын. Ұстаздардың жұмысын жеңілдетіп сапалы жұмыстарыңыз үшін рақмет.',
                    },
                    {
                        name: 'Қарабаева Дана',
                        work: '№46 орта мектебінің қазақ тілі пәні мұғалімі',
                        text: 'Мен өзімнің алған қмж-ма дән ризамын. Мемлекет бекіткен стандарт бойынша құрастырылған. Еш жерін өзгертудің де қажеті жоқ болып шықты. Сабағыма алам да кіре берем. Қмж-ға қоса презентацияларды алған едім. Олар жұмысымды тіптен жеңілдетті. Бар күшім мен уақытымды оқушылармен айналысуға жұмсап жатырмын.',
                    },
                    {
                        name: 'Арухан Айкерім',
                        work: '№85 орта мектебінің математика пәні мұғалімі',
                        text: 'Рақмет Ұстаз тілегі қауымы. Шынымды айтсам осындай сападағы қмж аламын деп ойламадым да. Ішіндегі сапалы сабақ жоспарын көргенде бағасының қандай арзан екенін түсіндім. Басқа адамдардың пікірлерін көріп, презентациясын да ала салу керек еді деп отырмын. Алдағы тоқсандарда тек сіздердің орталықтан аламын деп шештім.',
                    },
                    {
                        name: 'Тлеухан Батыр',
                        work: '№98 мектебінің физика пәні мұғалімі',
                        text: 'Керемет қмж, құнды ақпаратқа толы презентациялар. Осының бәрін жақсы бағаға ала алдым. Ал үнемдеген уақытым деген көп! Қағазбастылықтан арылту деген мақсаттарына Ұстаз тілегі орталығы жетті деп ойлаймын. Бұл әрине жеке пікірім. Алайда осы орталықтан қмж алған өзге де мұғалімдер осындай пікірде деп ойлаймын.',
                    },
                    {
                        name: 'Бактияр Гулдана',
                        work: '№18 мектебінің химия пәні мұғалімі',
                        text: 'Ұстаз тілегі, Сіздерге шығармашылық табыс тілеймін! Үлкен рақмет. Сіздер дайындаған қмж қаншама уақытымды үнемдеді. Бастысы, сабақ жоспарлары бұйрыққа сай жасалған. Өзгертіп немесе қайта құрастырып отырудың еш қажеті жоқ. Презентациясы мен дидактикасы да өте пайдалы болды. Болашақ қмж-ларымның бәрін Ұстаз тілегінен аламын!',
                    },
                    {
                        name: 'Абзал Мади',
                        work: '№191 мектебінің технология пәні мұғалімі',
                        text: 'Ұстаз тілегі орталығында барлық пән қмж-сы бар сияқты. Мен өзіме керекті ұлдарға арналған технология пәнінің қмж-сын іздеп жүріп, осы Ұстаз тілегінен таптым. Сапалы, жақсы мәліметтер. Бастысы ендігәрі уақытым тек оқушыларға арналмақ. Осыған қатты қуанып отырмын. Себебі, жақсы білім мен тәрбие беру біздің, мұғалімдердің негізгі міндеті.',
                    },
                    {
                        name: 'Талғатұлы Талапхан',
                        work: '№32 мектебінің алгебра пәні мұғалімі',
                        text: 'Өте жоғарғы деңгейде жасалған қмж. Алып қосар ештеңе болмады ішіне. Соған ризамын. Уақытымды қатты үнемдедім. Презентациясы мен дидактикасын алып, толық комплект жинап алдым. Бағасы қымбат деген әріптестерімді мүлдем түсінбедім. Мұндай бағаға осындай сапалы деңгейде жасалған қмж мен презентацияларды табу мүмкін емес деп ойлаймын. Ұстаз тілегіне өз басым шығармашылық табыс тілеймін!',
                    },
                    {
                        name: 'Ерболқызы Каделя',
                        work: '№122 мектебінің орыс тілі пәні мұғалімі',
                        text: 'Сәлеметсіздер ме! Өзімнің пәнім бойынша алған қмж-ым өте жақсы екен. Ұстаз тілегін бұрыннан білемін. Өзге де пәндердің қмж-лары сапалы жасалғанына сенімдімін. ҚМЖ алғысы келіп отырған адамдарға айтарым, мүлдем ойланбай ала беріңіздер. Презентациясы мен дидактикасын да қоса алыңыздар. Өте көп уақыттарыңыз үнемделетін болады. Шынымен, қағазбастылық дегеннен арылдым. 130 бұйрыққа сай ма деп уайымдамаймын енді. Ұстаз тілегі орталығы барлығын стандартқа сай жасапты. Олардың ұжымына тек жақсылық пен сәттілік тілеймін!',
                    },

                ],
            }
        },
        methods: {
            openFAQ(index) {
                this.faqsIsOpen = this.faqsIsOpen == index ? null : index
                
            },
            transform(e) {
                return e.slice(17)
            }
        },
        mounted(){
            this.load = true
        }
    }

</script>

<style scoped lang="scss">



.main2{
    background: var(--Background, #F5F6F8);
}
    .fade-enter-active,
    .fade-leave-active {
        transition: .2s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
        transform: translateY(-25%);
        transition: 0.2s;
    }

    .faqs {

        }
        .h2 {
            font-size: 36px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
        }

        .questions {
            margin-top: 50px;
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 5px;

            .question {
                text-align: left;

            }

            .q_block {
                padding: 15px 20px;
                max-width: 950px;
                align-items: center;
                gap: 550px;
                background: #FFFFFF;
                color: var(--Text-color-1, #172856);
                font-family: "Atyp Text";
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;

                &:hover {
                    background: #F8F8F8;
                }

                &.active {
                    background: #FFFFFF;
                }

                .p {
                    margin-top: 14px;
                    text-align: left;
                    color: var(--Text-color-1, #172856);
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;

                }
            }
        }

    .mein {
        padding: 100px 0 ;
        width: 100%;


        .cstBtnSize {
            margin-top: 20px;
            width: 225px;
            height: 50px;
        }

        .h2 {
            font-size: 36px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
        }

        .video {
            position: relative;
            margin-top: 30px;
            max-width: 700px;
        
            iframe {
                width: 10%;
            }
        }

        .ylgi {
            margin-top: 50px;

            .h3 {
                font-size: 24px;
                font-style: normal;
                font-weight: 600;
                line-height: normal;
            }

            .desc {
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;

            }

            &.v2,
            &.v3 {
                margin-top: 50px;
            }

            &.v2 {
                .h3 {
                    font-weight: 600;
                }
            }
        }

        .comments {
            margin-top: 100px;

            .head {
                font-size: 40px;
                font-weight: 800;
                line-height: 47px;
                text-align: center;
                margin-bottom: 30px;
                

            }

            .sliderShadow {
                padding-bottom: 20px;
            }
            .VueCarousel-slide{
                width: 0px;
            }

            .block {
                display: flex;
                flex-direction: column;
                margin: 0 10px;

                .header {
                    background: rgba(245, 246, 248, 1);
                    display: flex;
                    gap: 20px;
                    padding: 10px;
                    align-items: center;
                    border-radius: 50px;
                    font-family: "Atyp Text";

                    .avatar {
                        width: 80px;
                        height: 80px;
                        background-position: 50% 50%;
                        background-size: cover;
                        background-image: url(~@/assets/images/qmg/Avatar.png);
                        border-radius: 50%;
                        stroke-width: 5px;
                        stroke: var(--White, #FFF);
                        filter: drop-shadow(0px 5px 10px rgba(163, 172, 189, 0.60));
                    }

                    .name {
                        color: var(--Text-color-1, #172856);
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 600;
                        line-height: normal;

                    }

                    .work {
                        color: var(--Text-color-2, #858A97);
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                    }
                }

                img{
                    position: absolute;
                    top: 160px;
                }

                .body {
                    margin-top: -50px;
                    margin-left:  20px;
                    background: #fff;
                    border-radius: 0px 0px 20px 20px;
                    border: 3px solid var(--Line-color, #E2E8F4);
                    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.15);
                    padding: 85px 20px 38px 40px;
                    position: relative;
                    z-index: -1;
                    .desc{
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                    }
                }
            }
            .gp{
                gap: 10px;
            }

            .leftIcon,
            .rightIcon {
                background: #1E63E9;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0px 3px 19px rgba(30, 99, 233, 0.5);

                &:hover{
                    cursor: pointer;
                }
     
            }
            .rg{
                    transform: rotate(180deg);
        
                }
        }

        
    }

    @media all and (max-width: 1439px) {
        .mein {
            padding: 100px 0px;
    
            .video{
                width: 85%;
            }
            .cst-ct .h2 {
            font-size: 36px;
            line-height: 43px;
        }
        }
   


    }

    @media all and (max-width: 1199px) {
        .mein .comments {
            .block {
                .header {
                    gap: 10px;
                    .avatar{
                    width: 50px;
                    height: 50px;
                }
                }
                .body{
                padding: 50px 20px 38px 40px;
            }
            }
        }

    }

    @media all and (max-width: 1099px) {
        .mein .h2 {
            font-size: 36px;
            line-height: 43px;
        }

      
    }

    @media (min-width: 884px) and (max-width: 991px) {
        .mein {
            .comments{
                .block {
                    img{
                        display: none;
                    }
                .header {
                    padding: 20px;
                  .avatar{
                    display: none;
                  }
                  
                }
                .body{
                    padding: 50px 10px 5px 10px;

                    .desc{
                        font-size: 12px;
                    }
                }
       
            }
        }

            .ylgi{
                .desc {
                    font-size: 17px;
                    font-weight: 400;
                    line-height: 20px;
                    } 
                .h3 {
                    font-size: 22px;
                    font-weight: 700;
                    line-height: 26px;
                    }
        }

        
    }
    }

    @media all and (max-width: 883px) {
        .mein .video {
            padding: 0;
        }

        .mein .h2.s2 {
            font-size: 32px;
            line-height: 40px;
        }


    }

    @media all and (max-width: 767px) {
 
        .mein .h2.s2 {
            font-size: 28px;
            line-height: 36px;
        }

        .mein {
            max-width: 540px;
            width: 100%;
            padding: 50px 10px;
        }
    }

    @media all and (max-width: 500px) {
        .mein .h2.s2 {
            font-size: 26px;
            line-height: 34px;
        }
     
    }


  

</style>
<style>
    .VueCarousel-dot {
        outline: 1px solid #1E63E9 !important;
        margin: 0 7.5px !important;
    }

    .VueCarousel-dot-container {
        transform: translateY(50px);
    }
    .VueCarousel-inner{
        padding: 15px 0;
    }

   
    
</style> 

