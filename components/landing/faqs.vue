<template>
    <div class="FAQ">
        <div class="list">
            <div v-for="(FAQ,index) in FAQS" class="li" :class="{'active':FAQ.active}" @click="faqActivate(index)">
                <div class="d-f a-c j-b pd">
                    <div class="text">{{FAQ.question}}</div>
                    <img src="~assets/images/svg/vector-down.svg" alt="">
                </div>
                <div class="content" v-html="FAQ.answer"></div>
            </div>
        </div>
    </div>
</template>



<script>
    export default {
        data() {
            return {
                FAQS: [{
                        question: 'Турнирге қалай қатысуға болады?',
                        answer: `Турнирге қатысу үшін ұнаған Турнирді таңдап, өзіңіздің толық аты-жөніңізді жазып, жарнасын төлеп қатысуға болады. 
<br><br>
Берілетін уақыт: 60 минут<br>
Сұрақтар саны: 20 сұрақ
<br><br>
Турнир нәтижесі бірден шығады. Жетекшіге және оқушы ата-анасына алғыс хат тегін беріледі. Турнир біткен соң қатемен жұмысты жасап, жауаптарға анализ жасауға болады. Сұрақтар кездейсоқ форматта беріледі, бір немесе бірнеше дұрыс жауапты сұрақтар болады.`,
                        active: false,
                    },
                    {
                        question: 'Турнирге қатысқан соң бонусты қалай аламыз?',
                        answer: `Турнирге төлем жасаған соң әр қатысушыдан 10% бонус беріледі. Ол ақшаны картаға шығарып алуға немесе сайттағы қызметтерге жұмсауға болады. Жеке кабинетке кірсеңіз бонусты шығару деген кнопка бар.`,
                        active: false,
                    },
                    {
                        question: 'Турнир нәтижесі қанша уақытта дайын болады?',
                        answer: `Турнир нәтижесі тест біткен соң бірден шығады. Тест біткен соң сізді нәтижесін көрсететін бетке жібереді. Сол бетте марапаттарды жүктеп алуға болады. Менің турнирлерім бетінде де нәтижесі сақталады. Менің турнирлерім бетіне өтіп тізімнен өзіңіз қатысқан Турнирге кіріп марапаттарды жүктеп алуға болады.`,
                        active: false,
                    },
                ],
            }
        },
        methods: {
            faqActivate(index) {
                this.FAQS[index].active = this.FAQS[index].active ? false : true;
            },
        }

    }

</script>



<style scoped lang="scss">

    .FAQ {
        box-shadow: 0px 5px 10px 0px #0000000D;
        margin-top: 20px;
        .list {
            .li {
                margin-top: 10px;
                width: 100%;
                font-size: 18px;
                font-weight: 400;
                line-height: 25.9px;
                cursor: pointer;
                border-radius: 5px;
                transition: all 0.4s linear;

                &:hover {
                    outline: 1px solid #0045CB;
                }

                &.active {
                    img {
                        transform: rotate(180deg);
                    }

                    background: #F8F8F8;
                    border: 1px solid #f2f2f2;

                    .content {
                        max-height: 250px;
                        padding: 0 25px 12px;
                    }
                }

                img {
                    width: 20px;
                    height: 20px;
                }
                
                .pd {
                    padding: 12px 25px;
                }

                .content {
                    padding: 0px 25px;
                    max-height: 0px;
                    overflow: hidden;
                    margin-top: 0px;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 19px;
                    transition: all 0.4s ease;
                    color: #505050;

                    b {
                        font-weight: 600;
                    }
                }

            }
        }
    }

    @media all and (max-width: 992px) {
        .FAQ .list .li {
            font-size: 16px;
            line-height: 19px;
        }

        .FAQ .list .li .content {
            font-size: 14px;
            line-height: 17px;
        }
    }
    
    @media all and (max-width: 545px) {
        .FAQ .list .li {
            font-size: 14px;
            line-height: 17px;
        }

        .FAQ .list .li .content {
            font-size: 12px;
            line-height: 15px;
        }
    }
    
    
    
    

</style>
