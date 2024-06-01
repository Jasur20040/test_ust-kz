<template>
    <transition name="fadePopup">
        <div v-show='isOpen' class="popupBg d-f aj-c" @mousedown.self="$emit('closePopup')">
            <transition name="fade">
                <div v-show='isOpen' class="popupBlock">
                    <div class="exitBtn">
                        <exitBtn @click.native="$emit('closePopup')" />
                    </div>
                    <div class="body">
                        <div class="h2">Қате түрін таңдаңыз</div>
                        <div class="types">
                            <label class="answer">
                                <input v-model="appeals.variable" value=0 type="radio"><span>Сұрақта грамматикалық қате бар</span>
                            </label>
                            <label class="answer">
                                <input v-model="appeals.variable" value=1 type="radio"> <span>Жауабы қате</span>
                            </label>
                            <label class="answer">
                                <input v-model="appeals.variable" value=2 type="radio"> <span>Сұрақтың мазмұнында қателік бар</span>
                            </label>
                            <label class="answer">
                                <input v-model="appeals.variable" value=3 type="radio"> <span>Жауап нұсқалары бірдей</span>
                            </label>
                            <label class="answer">
                                <input v-model="appeals.variable" value=4 type="radio"> <span>Басқа қателер</span>
                            </label>
                        </div>
                        <transition name="fadeGrade">
                            <cstTextarea placeholder="Сұрақта қандай қате бар, толық жазуыңыз керек." v-show="appeals.variable == 4" class="textarea" v-model="appeals.text" />
                        </transition>
                        <cstBtn @click.native="$emit('sendAppeals', appeals.variable, appeals.text)" class="cst_btn">Жіберу</cstBtn>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>


<script>
    import exitBtn from '@/components/forms/exitBtn.vue'
    import cstBtn from '@/components/forms/cstBtn.vue'
    import cstTextarea from '@/components/forms/cstTextarea.vue'

    export default {
        components: {
            exitBtn,
            cstBtn,
            cstTextarea
        },
        props: ['isOpen', 'surak', 'katysushyCode'],
        data() {
            return {
                appeals: {
                    variable: null,
                    text: '',
                }
            }
        },

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
    

    .fadeGrade-enter-active,
    .fadeGrade-leave-active {
        transition: .3s;
    }

    .fadeGrade-enter,
    .fadeGrade-leave-to {
        opacity: 0;
        transform: translateY(-15%);
        transition: 0.3s;
    }


    .popupBg {
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 20;
        background: rgba(0, 0, 0, 0.6);

        .popupBlock {
            position: relative;
            width: 100%;
            max-width: 400px;
            background: #FFFFFF;
            border-radius: 6px;
            padding: 40px 50px 50px;

            .exitBtn {
                position: absolute;
                top: 0;
                right: 0;
                transform: translate(-5px, 5px);
            }

            .cst_btn {
                width: 100%;
                height: 50px;
            }

            .h2 {
                
                font-size: 20px;
                font-weight: 800;
                line-height: 26px;
            }

            .types {
                margin: 15px 0;
            }

            .answer {
                padding: 7px 5px;
                display: flex;
                gap: 10px;
                align-items: center;
                border-radius: 5px;
                font-size: 16px;
                line-height: 19px;

                margin: 0;

                &.bg {
                    background: #EAF1FF;
                }

                &:hover {
                    background: #F9FBFF;
                    cursor: pointer;
                }

                input {
                    position: absolute;
                    opacity: 0;
                    z-index: -1;
                }

                span {
                    display: inline-flex;
                    align-items: center;
                    user-select: none;
                }

                span::before {
                    content: '';
                    display: inline-block;
                    position: relative;
                    flex-shrink: 0;
                    flex-grow: 0;
                    margin-right: 10px;
                    background-position: 55% 50%;
                    background-size: 55%;
                    background-repeat: no-repeat;
                    width: 22px;
                    height: 22px;
                    background: #fff;
                    border: 1px solid #1E63E9;
                    border-radius: 50%;
                }

                input:checked+span::before {
                    background: #3464E7;
                    outline: 2px solid #fff;
                    outline-offset: -3px;
                }
            }

            .textarea {
                margin-bottom: 20px;
            }

        }

    }

    @media all and (max-width: 400px) {
        .popupBg .popupBlock {
            padding: 40px 25px 50px;
        }
    }

</style>
