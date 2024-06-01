<template>
    <div class="loginPopup" @mousedown.self="close()">
        <div class="loginBlock">
            <div class="header d-f j-b">
                <div>Кабинетке кіру</div>
                <exitDefaultBtn @click.native="close()" class="closeBtn" />
            </div>
            <div v-if="loginOpen == 1" class="form">
                <cstInput v-model="form.phone" type-name="text" name-wrap="tel_num" string-name="Телефон нөмірі:" string-placeholder="+7 (7__) - ___ - __ - __" class="mt-15" :danger="errors.phone" @click.native="errors.phone = null" v-on:keyup.enter.native="checkPhone" />
                <div v-if="errors.phone" class="danger_text mt-20">{{errors.phone}}</div>
                <cstBtn v-if="loading" class="cstBtn">
                    <div class="spinner-border" role="status"></div>
                </cstBtn>
                <cstBtn v-else class="cstBtn" @click.native="checkPhone">Жалғастыру</cstBtn>
            </div>
            <div v-if="loginOpen == 2" class="form">
                <cstInputDisabled @openLogin="loginOpen = 1" class="mt-15" :text="form.phone" string-name="Телефон номер:" :danger="errors.password" />
                <cstPasswordInput v-model="form.password" type-name="password" name-wrap="password" string-name="Құпиясөз:" string-placeholder="•••••••••••••••••" :danger="errors.password" @click.native="errors.password = null" class="mt-10" v-on:keyup.enter.native="login" />
                <div v-if="errors.password" class="danger_text mt-10">{{errors.password}}</div>
                <cstBtn class="cstBtn" @click.native="login">Кіру</cstBtn>
                <div class="mt-20 t-c">
                    <div class="danger">{{errors.sendSms}}</div>
                    <div v-if="!isSend">
                        <button @click="sendSms" class="btn cst_btn_sms">{{errors.sendSms ? 'Қайтадан көру' : 'Смс арқылы құпия сөзді еске салу'}}</button>
                    </div>
                    <div v-else>
                        <span class="timer_span">Сіздің номеріңізге құпия сөз жіберілді</span>
                        <div class="timer">SMS-ті {{cT.minuts}}:{{cT.seconds}} секундттан кейін қайта жібере аласыз</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import cstInput from '@/components/forms/cstInput.vue'
    import cstInputDisabled from '@/components/forms/cstInputDisabled.vue'
    import cstPasswordInput from '@/components/forms/cstPasswordInput.vue'
    import exitDefaultBtn from '@/components/forms/exitDefaultBtn.vue'
    import cstBtn from '@/components/forms/cstBtn.vue'
    export default {
        components: {
            cstInput,
            cstPasswordInput,
            exitDefaultBtn,
            cstInputDisabled,
            cstBtn,
        },
        props: ['loginOpen'],
        data() {
            return {
                form: {
                    phone: null,
                    password: null,
                },
                errors: {
                    phone: null,
                    password: null,
                    sendSms: null,
                },
                loading: 0,
                cT: {
                    currentTime: 0,
                    minuts: 0,
                    seconds: 59,
                },
                timer: null,
                isSend: false,
            }
        },
        methods: {
            close() {
                this.$emit('changeStatus', 0)
            },
            startTimer() {
                this.cT.currentTime = 59
                this.timer = setInterval(() => {
                    this.cT.currentTime--;
                    let s = this.cT.currentTime;
                    this.cT.minuts = Math.floor(s / 60);
                    this.cT.seconds = Math.floor(s % 60);
                    if (s < 1) this.stopTimer()
                }, 1000)
            },
            stopTimer() {
                this.isSend = false
                clearTimeout(this.timer)
                this.cT.minuts = 0;
                this.cT.seconds = 59;
            },
            checkPhone() {
                this.loading = 1
                this.$axios.post('/auth/login/check-phone', this.form).then((res) => {
                    this.loading = 0
                    this.$emit('changeStatus', 2)
                    if (res.data.loginOpen != 2) {
                        this.isSend = true
                        this.startTimer()
                    }
                    this.errors.sendSms = null
                }).catch((error) => {
                    this.loading = 0
                    const data = error.response.data.errors;
                    for (let [key, value] of Object.entries(this.errors)) {
                        this.errors[key] = data[key] !== undefined ? data[key].join() : null;
                    }
                })
            },
            login() {
                this.loading = 1
                this.$auth.options.redirect = false
                this.$auth.loginWith('laravelJWT', {
                    data: {
                        phone: this.form.phone,
                        password: this.form.password
                    }
                }).then((res) => {
                    this.errors.sendSms = null
                    localStorage.setItem('access_token', res.data.access_token);
                    this.close()

                }).catch((error) => {
                    this.loading = 0
                    const data = error.response.data.errors;
                    for (let [key, value] of Object.entries(this.errors)) {
                        this.errors[key] = data[key] !== undefined ? data[key].join() : null;
                    }
                });
            },
            sendSms() {
                this.loading = 1
                this.$api.post('/auth/reset-password/send-sms', this.form).then((res) => {
                    this.loading = 0
                    this.errors.sendSms = null
                    if (res.data.loginOpen == 3) {
                        this.isSend = true
                        this.startTimer()
                    } else this.errors.sendSms = 'Серверлік ақай пайда болды'
                }).catch((error) => {
                    this.loading = 0
                    this.errors.sendSms = error.response.data.errors.sendSms[0]
                })
            }
        },
    }

</script>
<style lang="scss" scoped>
    .loginPopup {
        font-size: 16px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0em;
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 20;
        background: rgba(0, 0, 0, 0.6);

        .loginBlock {
            width: 360px;
            background: #FFFFFF;
            border-radius: 20px;
            height: auto;

            .header {
                background: #F2F5FA;
                padding: 20px 15px 20px 30px;
                border-radius: 20px 20px 0 0;
                font-size: 24px;
                font-weight: 600;
                line-height: 35px;
                color: #1B2849;
                box-shadow: 0px 5px 10px 0px #0000001A;
            }

            .cst_btn_sms {
                font-size: 16px;
                font-weight: 600;
                line-height: 23px;
                color: #3464E7;
                padding: 0;
            }

            .timer_span {
                font-size: 16px;
                font-weight: 600;
                line-height: 23px;
                color: #363636;
            }

            .timer {
                font-size: 14px;
                line-height: 20px;
                color: #363636;

            }

            .danger_text {
                font-size: 14px;
                font-weight: 400;
                line-height: 20px;
                text-align: center;
                color: #B10303;

            }
        }

        .form {
            padding: 25px 30px 40px;

            .cstBtn {
                margin-top: 10px;
                height: 50px;
                width: 100%;
            }
        }
    }

</style>
