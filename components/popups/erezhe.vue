<template>
    <transition name="fadePopup">
        <div v-show='isOpen' class="popupBg" @click="$emit('closePopup')">
            <transition name="fade">
                <div v-show='isOpen' class="popupBlock" @click.stop>
                    <div class="exitBtn">
                       <exitBtn @click.native="$emit('closePopup')" />
                    </div>
                    <div class="cst-pd">
                        <div class="h2">Материал жариялау ережесі</div>
                        <ol>
                            <li>Жарияланатын материал авторлық болуы шарт. Яғни, жариялап отырған материал ол сіздің өзіңіз жазған материалыңыз және осы материал бұрын соңды басқа сайттарға жарияланбаған және басқа сайттардан көшіріп алынбаған болуы керек.</li>
                            <li>Егер материал бұрын басқа сайтта жарияланған болса немесе авторы басқа екені анықталса, материал сайттан өшіріледі. Сертификат күшін жояды.</li>
                            <li>Материалды өзіңіз жазған болсаңыз бірақ ол материалды бұрын басқа сайттарда жариялаған болсаңыз, ондай материалды жариялауға болмайды. Тек жаңадан жазылған авторлық материал жариялауға болады.</li>
                            <li>Материалды жариялаудан алдын жеке кабинетте өзіңіз туралы ақпаратты толық толтырып алыңыз. Сертификатта жеке кабинеттегі ақпарат бойынша жазылады.</li>
                            <li>Кез-келген материалды жарияламас бұрын, материал басқа сайтта жарияланбаған болуы керек. Оны https://text.ru (сілтеме болады) сайты арқылы тексеруге болады. Уникальность 65% асуы керек.</li>
                            <li>Материал тақырыбы материал туралы түсіндіріп үлкен әріптен басталып, материал туралы толық ақпарат беруі керек. Мысалы: Ашық сабақ "Зат есім" 7 сынып. Тәрбие сағаты "Елін сүйген елбасы" 6 сынып</li>
                            <li>Егер материал бірнеше файлдан тұрса (ворд, презентация), әр файлды жеке жариялау керек. Әр жарияланған материалға Ашық сабақ "Ыбырай Алтынсарин" 5 сынып және Презентация "Ыбырай Алтынсарин" 5 сынып деп толық жазу керек.</li>
                            <li>Материал туралы қысқаша түсінікке өз ойыңызды бұл материал кімге пайдалы, неге пайдалы толық жазылуы керек.</li>
                            <li>Бір материалды сайтқа екі рет жариялауға, бірдей тақырыптағы материалды екі рет жариялауға болмайды.</li>
                            <li>Материалды сайтта жариялаған соң бұл материалды басқа сайттарға жариялауға қатаң тиым салынады. Егер бұл жағдай анықталса материал сайттан өшіріледі. Сертификат жойылады.</li>
                            <li>Жарияланған материалда қателіктер болса, тақырып немесе авторы қате болса қолданушы жеке өзі өзгерте алмайды. Бұл жағдайда сайт әкімшілігіне хабарласып материалды сайттан өшіріп, немесе әкімшілік өзгертіп береді. Сайт әкімшілігімен хабарласу admin@ust.kz</li>
                            <li>Сайтқа 10мб артық материал жариялауға болмайды. Егер материалыңыз 10мб үлкен болса ішіндегі суреттерді, таблицалар мен графикалық ақпаратты өшіріп жариялай аласыз. Материалдың размерін білу үшін материалға барып мышкамен свойства бөліміне өтіп көре аласыз.</li>
                        </ol>
                        <div class="cst_btn_size">
                            <cstBtn class="kessse" text="Келісемін" @click.native="$emit('closePopup')"  />
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>


<script>
    import cstBtn from '@/components/forms/btn.vue'
    import exitBtn from '@/components/forms/exitDefaultBtn.vue'

    export default {
        components: {
            cstBtn,
            exitBtn,
        },
        props: ['isOpen']
    }

</script>


<style scoped lang="scss">
    .fade-enter-active,
    .fade-leave-active {
        transition: .5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
        transform: translateY(-15%);
        transition: 0.5s;
    }

    .fadePopup-enter-active,
    .fadePopup-leave-active {
        transition: .5s;
    }

    .fadePopup-enter,
    .fadePopup-leave-to {
        opacity: 0;
        transition: 0.3s;
    }
    .cst_btn_size{
        width: 100%;
        max-width: 250px;
        height: 50px;
    }
    .popupBg {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 20;
        background: rgba(0, 0, 0, 0.6);

        .popupBlock {
            width: 90%;
            max-width: 700px;
            background: #ffffff;
            max-height: 80vh;
            overflow-y: scroll;
            border-radius: 6px;
            .exitBtn {
                display: flex;
                justify-content: flex-end;
                width: 100%;
                padding: 10px 10px 0 0;

                .exit {
                    padding: 0;
                }
            }

            .h2 {
                font-size: 24px;
                font-weight: 800;
                line-height: 29px;
                @media all and (max-width: 767px) {
                    font-size: 20px;
                    font-weight: 800;
                    line-height: 24px;
                }
            }

            .cst-pd {
                padding: 0 50px 50px;

                @media all and (max-width: 767px) {
                    padding: 0 30px 50px;
                }

                .kessse {
                    border-radius: 5px;
                }
            }

            ol{
                padding-left: 15px;
            }
        }
    }

</style>
