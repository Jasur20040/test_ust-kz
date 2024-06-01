<template>
    <div class="btn-group" :class="{danger:danger}" v-click-outside="hide">
        <button type="button" class="btn myBtn" :class="{'active': isOpen, 'isActive':active!=null||isActive!=null}" data-bs-toggle="dropdown" aria-expanded="false" @click="openedMenu">
            <template v-if="isActive!=null">
                {{category[isActive] ? category[isActive].name : 'Жүктелуде...'}}
            </template>
            <template v-else-if='active!=null'>
                {{category[active] ? category[active].name : 'Жүктелуде...'}}
            </template>
            <template v-else>
                {{placeholder}}
            </template>
            <arrowLeft />
        </button>
        <ul v-show="isOpen" class="dropdown-menu">
            <li v-if="!category.length" class="dropdown-item text-center">
                Жүктелуде...
            </li>
            <template v-else>
                <li v-for='(cat, index) in category'><a class="dropdown-item" @click="sendRes(index)">{{cat.name}}</a></li>
            </template>
        </ul>
    </div>
</template>


<script>
    import ClickOutside from 'vue-click-outside'
    import arrowLeft from '@/components/svg/arrowLeftCopy.vue'

    export default {
        components: {
            arrowLeft
        },
        data() {
            return {
                isOpen: false,
                isActive: null,
            }
        },
        props: ['category', 'placeholder', 'type', 'active', 'danger'],
        methods: {
            openedMenu() {
                this.isOpen ? this.isOpen = false : this.isOpen = true
                this.$emit('clearDanger')
            },
            hide() {
                // console.log('btnGroup')
                this.isOpen = false
            },
            sendRes(e) {
                this.isActive = e;
                this.$emit('entered-category', this.isActive);
                setTimeout(() => {
                    this.hide()
                }, 150)
            }
        },
        directives: {
            ClickOutside
        },

    }

</script>


<style scoped lang="scss">
    .btn-group {
        display: inline-flex;
        position: relative;
        &.white {
            .myBtn {
                background: #ffffff;
            }
        }
        // .dropdown-menu {
        //     padding: 0;
        // }
    }
    .sssfg {
        .btn-group {
            button.btn.myBtn {
                display: flex;
                padding: 10px 15px;
                align-items: center;
                gap: 30px;
                border-radius: 5px;
                border: 0.5px solid #E2E8F4;
                background: #FFF;
                box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
                color: #172856;

                &.isActive {
                    background: #0045CB !important;
                    color: #ffffff;

                    svg {
                        stroke: #ffffff;
                    }
                }
            }
        }
    }

    .danger .myBtn {
        border: 1px solid #dc3545 !important;
    }

    .selectmat {
        height: 50px;
        .myBtn {
            background: #F5F6F8;
            border: 1px solid #E2E8F4;
            font-weight: 500;
            color: #172856;
            font-size: 14px;
        }
    }

    .myBtn {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #F5F6F8;
        border: 1px solid #E2E8F4;
        border-radius: 6px !important;
        padding: 0 15px 0 20px;
        height: 100%;
        min-height: 40px;
        gap: 3.5px;

        svg {
            width: 16px;
            height: 16px;
            transform: rotate(-90deg);
            stroke: #000;
        }

        &.isActive {
            background: #0045CB !important;
            color: #ffffff;

            svg {
                stroke: #ffffff;
            }
        }

        svg {
            transition: 0.15s;
        }

        &.active {
            border: 1px solid #0045CB;

            svg {
                transform: rotate(90deg) scale(1, -1);
            }
        }
    }

    .dropdown-menu {
        position: absolute;
        display: block;
        left: auto;
        transform: translateX(0);
        min-width: 100%;
        max-height: 240px;
        overflow-y: auto;
        padding: 0;
        border-radius: 6px;

        @media all and (max-width: 693px) {
            width: 100%;
        }
        
        .dropdown-item {
            padding: 15px 20px;
            transition: 0.05s;
            border-bottom: 1px solid #D6D6D6;
            white-space: normal;

            @media all and (max-width: 767px) {
                padding: 10px 5px;
                font-size: 14px;
            }

            &:hover {
                background: #0045CB;
                color: #ffffff;
                cursor: pointer;
            }

            &.text-center:hover {
                background: white;
                cursor: default;
            }

            .spinner-border {
                width: 1.2rem;
                height: 1.2rem;
            }
        }

        &::-webkit-scrollbar {
            width: 6px;
        }

        &::-webkit-scrollbar-track {
            background: #F0F0F0;
        }

        &::-webkit-scrollbar-thumb {
            background: #888888;
            border-radius: 30px;
        }
    }

</style>
