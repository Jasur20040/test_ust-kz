<template>
    <div class="v-notification">
        <transition-group name="v-transition-animate" class="messages_list">
            <template v-for="(message, index) in messages">
                <div v-if="message.active" class="v-notification__content" :key="index" @click="addMessage" :class="{'red':message.status=='failer'}">
                    <div class="wrap">
                        <img v-if="message.status == 'success'" src="~assets/images/success.svg" alt="">
                        {{message.text}}
                    </div>
                    <button @click.stop @click="deleteMessage(index)" class="btn exbtn"><img src="~assets/images/ex_op.svg" alt=""></button>
                </div>
            </template>
        </transition-group>
    </div>
</template>


<script>
    export default {
        components: {

        },
        data() {
            return {
                messages: [],
            }
        },
        methods: {
            addMessage(text, status) {
                
                this.messages.push({
                    text: text,
                    status: status,
                    active: 1,
                })
                this.deleteMessage(this.messages.length-1)
                
            },
            deleteMessage(index) {
                setTimeout(()=>{
                    this.messages[index].active = 0
                },5000)
            },
        },
        mounted(){
            this.$bus.$on('notification', (e)=>{
                this.addMessage(e.text, e.status)
            });
        }
    }

</script>


<style scoped lang="scss">
    .v-transition-animate {
        &-enter {
            transform: translateX(120px);
            opacity: 0;
        }

        &-enter-active {
            transition: all 0.6s ease;
        }

        &-enter-to {
            opacity: 1;
        }

        &-leave {
            opacity: 1;
        }

        &-leave-active {
            transition: all 0.6s ease;
            opacity: 0;
            transform: translateX(120px);
        }
    }

    .v-notification {
        position: fixed;
        right: 20px;
        top: 96px;
        z-index: 15;
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-end;

        .messages_list {
            display: flex;
            flex-direction: column-reverse;
            align-items: flex-end;
        }

        &__content {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            justify-content: space-between;
            padding: 10px 15px;
            background: #03B113;
            border-radius: 12px;
            font-size: 15px;
            font-weight: 500;
            line-height: 18px;
            color: #fff;
            margin-bottom: 10px;

            .wrap {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .exbtn {
                padding: 0px 5px;
            }

            &.red {
                background: #FF0000;
            }

        }
    }

</style>
