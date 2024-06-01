<template>
    <section class="other">
       <confirmedPopup />
       <oplataPopup :price="turnir.price" :oplataOpen="oplataPopup" @closePopup="oplataPopup=0" @next="oplataPopup++" @setPopup="($event)=>{oplataPopup=$event}" @buyThisMaterial="getCertificate(oplataIndex)" material_id="oplataIndex" />
        <div class="cst-ct">
            <div class="wrapper-side">
                <div class="hotslot"></div>
                <div class="content">
                    <header_kroshki :header="header" gotoUrl="/turnir" />
                    <div class="dengei_block">
                        <div class="title">
                            {{turnir.month}} айының Республикалық {{turnir.name}} {{turnir.cat_name}} турнирі
                        </div>
                        <div class="turnir_info">
                            <div class="backgroundText">Блиц турнир</div>
                            <div class="d-f a-c gap-50">
                                <div class="item d-f a-c gap-10">
                                    <img src="~/assets/images/turnir/calendar.svg" alt="">
                                    <div class="info">
                                        <div class="name">Уақыты:</div>
                                        <div class="value">1-{{turnir.lastDayInMonth}} {{turnir.month}} аралығында</div>
                                    </div>
                                </div>
                                <div class="item d-f a-c gap-10">
                                    <img src="~/assets/images/turnir/wallet.svg" alt="">
                                    <div class="info">
                                        <div class="name">Қатысу жарнасы:</div>
                                        <div class="value">{{turnir.price}} тг.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="turnir grid-3 gap-20">
                            <div class="item d-f">
                                <div class="icon d-f aj-c">
                                    <img src="~/assets/images/turnir/flag.svg" alt="">
                                </div>
                                <div>
                                    <div class="name">Турнир атауы:</div>
                                    <div class="value">{{turnir.name}}</div>
                                </div>
                            </div>
                            <div class="item d-f">
                                <div class="icon d-f aj-c">
                                    <img src="~/assets/images/turnir/profile-2user.svg" alt="">
                                </div>
                                <div>
                                    <div class="name">Қатысушы:</div>
                                    <div class="value">{{turnir.cat_name}}</div>
                                </div>
                            </div>
                            <div class="item d-f">
                                <div class="icon d-f aj-c">
                                    <img src="~/assets/images/turnir/bonus.png" alt="">
                                </div>
                                <div>
                                    <div class="value green">Бонус: 10%</div>
                                    <div class="name">Әр қатысушыдан 42тг сіздің бонустық шотыңызға аударылады, сол арқылы келесі олимпиадаға жеңілдікпен қатыса аласыз.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cst-ct mb">
            <div class="wrapper-side">
                <div class="hotslot"></div>
                <div class="content">
                    <div class="qatysushy">
                        <div class="pre">Қатысушылар</div>
                        <template v-for="(form, index) in forms">
                            <div v-if="form.editUser && selected == index" class="block edit">
                                <div class="num">{{index+1}}</div>
                                <div class="head">
                                    <div class="">
                                        <div class="grid-2 w-100 gap-10 nobody">
                                            <cstInput class="cstInput" stringPlaceholder="Есіміңіз" v-model="form.name" @click.native="errors.name = false" :danger="errors.name" />
                                            <cstInput class="cstInput" stringPlaceholder="Тегіңіз (Фамилия)" v-model="form.fname" @click.native="errors.fname = false" :danger="errors.fname" />
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                                <div class="body">
                                    <div class="grid-2">
                                        <cstInput class="cstInput" stringPlaceholder="Есіміңіз" v-model="form.name" @click.native="errors.name = false" :danger="errors.name" />
                                        <cstInput class="cstInput" stringPlaceholder="Тегіңіз (Фамилия)" v-model="form.fname" @click.native="errors.fname = false" :danger="errors.fname" />
                                    </div>
                                </div>
                                <div class="smbody"></div>
                                <checkbox v-model="work_check" class="zi mt-20" :text="form.work_user ? textWork()+' орнын өзгерту' : textWork()+' орнын қосу'" idName="mekeme" type=1 />
                                <div></div>
                                <div v-if="work_check==1" class="input-wrap grid-3 mt-20 gap-20" @click="errors.work=false">
                                    <btnGroup :category='oblys' :placeholder="newUserWork[0] ? newUserWork[0] : 'Облысты таңдаңыз'" @entered-category="(e)=>{newuserEnteredOblys(e)}" class="cst_input_40 zi" :danger="errors.work" />
                                    <btnGroup v-show="newUserWork[0]" :category='audan' :placeholder="newUserWork[1] ? newUserWork[1] : 'Ауданы таңдаңыз'" @entered-category="(e)=>{newuserEnteredAudan(e)}" class="cst_input_40 zi" :danger="errors.work" />
                                    <btnGroup v-show="newUserWork[1]" :category='mektep' :placeholder="newUserWork[2] ? newUserWork[2] : 'Мектепті таңдаңыз'" @entered-category="(e)=>{newuserEnteredMektep(e)}" class="cst_input_40 zi" :danger="errors.work" />
                                </div>
                                <div v-if="work_check==1"></div>
                                <template v-if="checkBagyt()">
                                    <checkbox v-model="zhetekshi_check" class="mt-20" :text="form.zh_name ? 'Жетекшіні өзгерту' : 'Жетекшіні қосу'" idName="zhetekshi" type=1 />
                                    <div></div>
                                    <div v-if="zhetekshi_check==1" class="input-wrap mt-20">
                                        <cstInput class="cst_input_40 cst_fix_span_input" stringPlaceholder="Жетекшінің толық аты-жөні" v-model="form.zh_name" @click.native="errors.zhetekshi=false" :danger="errors.zhetekshi" />
                                    </div>
                                    <div v-if="zhetekshi_check==1"></div>
                                </template>
                                <div class="foot d-f a-c gap-10">
                                    <cstBtn v-if="form.loading" class="editBtn success">
                                        <span class="spinner-border"></span>
                                    </cstBtn>
                                    <cstBtn v-else @click.native="fio_update(index)" class="editBtn success">Сақтау</cstBtn>
                                    <cstBtn @click.native="fio_update_cencel(index)" class="editBtn danger">Болдырмау</cstBtn>
                                </div>
                                
                            </div>
                            <div v-else class="block">
                                <div class="head d-f j-b">
                                    <div class="d-f gap-20">
                                        <div class="num">{{index+1}}</div>
                                        <div class="name">
                                            {{form.fio_user}}
                                            <div v-if="form.work_user || form.zh_name" class="work"><span v-if="form.work_user">{{form.work_user}}</span> <span v-if="form.zh_name">Жетекші: {{form.zh_name}}</span></div>
                                        </div>
                                    </div>
                                    <div class="buttons d-f gap-20">
                                        <glassBtn @click.native="setEditUser(index)" class="glassBtn">
                                            <edit /> Өзгерту
                                        </glassBtn>
                                        <glassBtn @click.native="deleteUser(form.id,index)" class="glassBtn">
                                            <destroy /> Жою
                                        </glassBtn>
                                    </div>
                                </div>
                                <div class="body">
                                    <div class="name">
                                        {{form.fio_user}}
                                        <div v-if="form.work_user || form.zh_name" class="work"><span v-if="form.work_user">{{form.work_user}}</span> <span v-if="form.zh_name">Жетекші: {{form.zh_name}}</span></div>
                                    </div>
                                </div>
                                <div v-if="form.go" class="foot d-f a-c j-b">
                                    <div class="d-f a-c gap-10">
                                        Балл: {{form.durys+form.kate}}/{{form.durys}}
                                        <nuxt-link :to="'/turnir/test/'+form.id+'/result'">
                                            <glassBtn class="glassBtn">
                                                <info /> Нәтижесі
                                            </glassBtn>
                                        </nuxt-link>
                                    </div>
                                    <cstBtn @click.native="getCertificate(index)" class="cstBtn">
                                        <download /> {{certCalc(form.diplom)+(form.success ? '' : ' - '+turnir.price+' тг')}}
                                    </cstBtn>
                                </div>
                                <div v-if="!form.success" class="foot">
                                    <successBtn @click.native="testTapsyru(form.id, index)">Тест тапсыру</successBtn>
                                </div>
                            </div>
                        </template>
                        <div v-if="addUser && selected == forms.length" class="block edit">
                            <div class="num">{{forms.length+1}}</div>
                            <div class="head">
                                <div class="">
                                    <div class="grid-2 w-100 gap-10">
                                        <cstInput class="cstInput" stringPlaceholder="Есіміңіз" v-model="newName" @click.native="errors.newName=false" :danger="errors.newName" />
                                        <cstInput class="cstInput" stringPlaceholder="Тегіңіз (Фамилия)" v-model="newFname" @click.native="errors.newFname=false" :danger="errors.newFname" />
                                    </div>
                                </div>
                            </div>
                            <div></div>
                            <div class="body">
                                <div class="grid-2">
                                    <cstInput class="cstInput" stringPlaceholder="Есіміңіз" v-model="newName" @click.native="errors.newName=false" :danger="errors.newName" />
                                    <cstInput class="cstInput" stringPlaceholder="Тегіңіз (Фамилия)" v-model="newFname" @click.native="errors.newFname=false" :danger="errors.newFname" />
                                </div>
                            </div>
                            <div class="smbody"></div>
                            <checkbox v-model="newUserWorkCheck" class="zi mt-3" :text="textWork()+' орнын қосу'" idName="newmekeme" type=1 />
                            <div></div>
                            <div v-if="newUserWorkCheck==1" class="input-wrap grid-3 mt-20 gap-20" @click="errors.newWork = false">
                                <btnGroup :category='oblys' :placeholder="newUserWork[0] ? newUserWork[0] : 'Облысты таңдаңыз'" @entered-category="(e)=>{newuserEnteredOblys(e)}" class="cst_input_40 zi" :danger="errors.newWork" />
                                <btnGroup v-show="newUserWork[0]" :category='audan' :placeholder="newUserWork[1] ? newUserWork[1] : 'Ауданы таңдаңыз'" @entered-category="(e)=>{newuserEnteredAudan(e)}" class="cst_input_40 zi" :danger="errors.newWork" />
                                <btnGroup v-show="newUserWork[1]" :category='mektep' :placeholder="newUserWork[2] ? newUserWork[2] : 'Мектепті таңдаңыз'" @entered-category="(e)=>{newuserEnteredMektep(e)}" class="cst_input_40 zi" :danger="errors.newWork" />
                            </div>
                            <div v-if="newUserWorkCheck==1"></div>
                            <template v-if="checkBagyt()">
                                <checkbox v-model="newUsersZhetekshiCheck" class="mt-20" text="Жетекшіні қосу" idName="newzhetekshi" type=1 />
                                <div></div>
                                <div v-if="newUsersZhetekshiCheck==1" class="input-wrap mt-20">
                                    <cstInput class="cst_input_40 cst_fix_span_input" stringPlaceholder="Жетекшінің толық аты-жөні" v-model="newUsersZhetekshi" @click.native="errors.newZhetekshi=false" :danger="errors.newZhetekshi" />
                                </div>
                                <div v-if="newUsersZhetekshiCheck==1"></div>
                            </template>
                            <div class="foot d-f a-c gap-10">
                                <cstBtn v-if="loading" class="editBtn success">
                                    <span class="spinner-border"></span>
                                </cstBtn>
                                <cstBtn v-else @click.native="addNewuser()" class="editBtn success">Сақтау</cstBtn>
                                <cstBtn @click.native="cencelNewAddUser()" class="editBtn danger">Болдырмау</cstBtn>
                            </div>
                        </div>
                        <div v-else class="addNewUser d-f mt-30 gap-20 a-c">
                            <bigBtn @click.native="addUser=1; selected = forms.length" img="add.svg" class="addBtn">Қатысушы қосу</bigBtn>
                            <div class="info">
                                Бірнеше қатысушыны қосуға болады
                            </div>
                        </div>
                    </div>
                    <turnirLanding @videoOpen="videoOpen = 1" :turnirs="myTurnirs" :thisYear="thisYear" />
                </div>
            </div>
        </div>
    </section>
</template>


<script>
    import header_kroshki from '@/components/header_kroshki.vue'
    import oplataPopup from '@/components/popups/oplataPopup.vue'
    import confirmedPopup from '@/components/popups/confirmedPopup.vue'
    import btnGroup from '@/components/forms/btnGroup.vue'
    import cstInput from '@/components/forms/cstInput.vue'
    import checkbox from '@/components/forms/checkbox.vue'
    import glassBtn from '@/components/forms/glassBtn.vue'
    import cstBtn from '@/components/forms/cstBtn.vue'
    import bigBtn from '@/components/forms/bigBtn.vue'
    import successBtn from '@/components/forms/successBtn.vue'
    import edit from '@/components/svg/turnir/edit.vue'
    import destroy from '@/components/svg/turnir/destroy.vue'
    import info from '@/components/svg/turnir/info.vue'
    import download from '@/components/svg/download.vue'
    import turnirLanding from '@/components/landing/turnirLanding.vue'
    import '@/assets/dengei.scss'
    export default {
        components: {
            header_kroshki,
            cstInput,
            successBtn,
            bigBtn,
            cstBtn,
            checkbox,
            download,
            info,
            destroy,
            edit,
            glassBtn,
            btnGroup,
            confirmedPopup,
            oplataPopup,
            turnirLanding,
        },
        data() {
            return {
                videoOpen: 0,
                youtubeLink: 'https://www.youtube.com/watch?v=Ty45im3fty0',
                oplataPopup: 0,
                oplataIndex: 0,
                selected: null,
                newName: '',
                newFname: '',
                addUser: 0,
                loading: 0,
                audan: [],
                mektep: [],
                newUserWork: ['', '', ''],
                newUserWorkDanger: null,
                work_check: false,
                zhetekshi_check: false,
                newUserWorkCheck: null,
                newUsersZhetekshiCheck: null,
                newUsersZhetekshi: '',
                errors: {},
                myTurnirs: [],
                thisYear: '2023',
                tuser: {
                    fio_user: "",
                    dengei: 'Республикалық',
                    cat_name: '',
                    durys: null,
                    date: "",
                    kate: null,
                    success: null,
                }
            }
        },
        methods: {
            certCalc(id) {
                if (id == 4) {
                    return 'Сертификатты жүктеу'
                } else {
                    return id + ' дәрежелі дипломды жүктеу'
                }
            },
            checkBagyt() {
                switch (this.turnir.category) {
                    case 1:
                    case 2:
                        return false;
                    case 3:
                    case 4:
                        return true;
                }
            },
            textWork() {
                switch (this.turnir.category) {
                    case 1:
                    case 2:
                        return 'Жұмыс'
                    case 3:
                    case 4:
                        return 'Оқу'
                }
            },
            getCertificate(index) {
                var id = this.forms[index].id
                this.$api.get('/turnirs/' + id + '/certificate', {
                    responseType: 'blob'
                }).then((res) => {
                    var fileURL = window.URL.createObjectURL(new Blob([res.data]));
                    var fileLink = document.createElement('a');
                    fileLink.href = fileURL;
                    var d = new Date();
                    fileLink.setAttribute('download', d.toLocaleString() + '.pdf');
                    document.body.appendChild(fileLink);
                    fileLink.click();
                }).catch((err) => {
                    if (err.response.status == 422) {
                        this.oplataPopup = 6
                        this.oplataIndex = index
                        this.oplataToGetCertificate(index)
                    }
                })
            },
            newuserEnteredOblys(e) {
                this.newUserWork[0] = this.oblys[e].name
                this.$api.get('olimpiada/oblys/' + this.oblys[e].id).then((res) => {
                    this.audan = res.data.audan
                })
            },
            newuserEnteredAudan(e) {
                this.newUserWork[1] = this.audan[e].name
                this.$api.get('olimpiada/oblys/' + this.oblys[e].id + '/audan/' + this.audan[e].id).then((res) => {
                    this.mektep = res.data.mektep
                })
            },
            newuserEnteredMektep(e) {
                this.newUserWork[2] = this.mektep[e].name
            },
            oplataToGetCertificate(index) {
                var id = this.forms[index].id
                this.oplataIndex = index
                this.$api.get('/turnirs/' + id + '/purchase').then((res) => {
                    if (res.data.success) {
                        this.oplataPopup = 7
                        this.forms[index].success = 1
                    }
                }).catch((err) => {
                    if (err.response.data.errors.no_balance) {
                        this.oplataPopup = 5
                    }
                })
            },
            setEditUser(index) {
                this.fio_update_cencel(index)
                this.cencelNewAddUser()
                this.forms[index].editUser=1;
                this.selected = index
            },
            validator(index = null) {
                let check = true;
                if(this.addUser) {
                    let newName = false;
                    let newFname = false;
                    let newWork = false;
                    let newZhetekshi = false;
                    if(this.newName.trim() === '') {
                        check = false;
                        newName = true;
                    }
                    if(this.newFname.trim() === '') {
                        check = false;
                        newFname = true;
                    }
                    var work_user = null;
                    if (this.newUserWorkCheck == 1) {
                        if (this.newUserWork.some(item => item == '')) {
                            newWork = true;
                            check = false;
                        }
                    }
                    if (this.newUsersZhetekshiCheck == 1) {
                        if (this.newUsersZhetekshi == null || this.newUsersZhetekshi.trim() === '') {
                            newZhetekshi = true;
                            check = false;
                        }
                    }
                    
                    
                    this.errors = {
                        newName: newName,
                        newFname: newFname,
                        newWork: newWork,
                        newZhetekshi: newZhetekshi,
                    }
                    return check;
                }
                else {
                    let name = false;
                    let fname = false;
                    let work = false;
                    let zhetekshi = false;
                    if(this.forms[index].name.trim() === '') {
                        check = false;
                        name = true;
                    }
                    if(this.forms[index].fname.trim() === '') {
                        check = false;
                        fname = true;
                    }
                    if (this.newUserWorkCheck == 1) {
                        if (this.newUserWork.some(item => item == '')) {
                            work = true;
                            check = false;
                        }
                    }
                    if (this.newUsersZhetekshiCheck == 1) {
                        if (this.forms[index].zh_name == null || this.forms[index].zh_name.trim() === '') {
                            zhetekshi = true;
                            check = false;
                        }
                    }
                    this.errors = {
                        name: name,
                        fname: fname,
                        work: work,
                        zhetekshi: zhetekshi,
                    }
                    return check;
                }
            },
            fio_update(index) {
                if(this.validator(index)) {
                    this.forms[index].loading = 1
                    const form = {
                        name: this.forms[index].name,
                        fname: this.forms[index].fname,
                        work_user: this.newUserWork.join(' '),
                        zh_name: this.forms[index].zh_name,
                    }
                    this.$api.$post('/turnirs/user/' + this.forms[index].id + '/update', form).then((res) => {
                        this.forms[index].fio_user = res.turnir_user.fio_user
                        this.forms[index].work_user = res.turnir_user.work_user
                        this.forms[index].editUser = 0
                        this.forms[index].loading = 0
                    }).catch((err) => {
                        this.forms[index].loading = 0
                        this.setNotification('Барлық бағандарды толтырыңыз', 'failer')
                    })
                } else this.setNotification('Барлық бағандарды толтырыңыз', 'failer')
            },
            fio_update_cencel(index) {
                this.errors = {}
                this.forms[index].editUser = 0
                this.work_check = false
                this.zhetekshi_check = 0
                this.newUserWork = ['', '', '']
            },
            cencelNewAddUser() {
                this.newName = ''
                this.newFname = ''
                this.addUser = 0
                this.newUserWorkCheck = 0
                this.newUserWork = ['', '', '']
                this.newUsersZhetekshiCheck = 0
            },
            testTapsyru(id, index) {
                this.forms[index].loading = 1
                this.$router.push({
                    name: 'turnir-test',
                    query: {
                        tuser_id: id
                    },
                });
            },
            setNotification(text, status) {
                this.$bus.$emit('notification', {
                    text: text,
                    status: status,
                })
            },
            addNewuser() {
                if(this.validator()) {
                    this.loading = 1
                    const form = {
                        name: this.newName,
                        fname: this.newFname,
                        work_user: this.newUserWork.join(' '),
                        zh_name: this.newUsersZhetekshi,
                        turnir_id: this.turnir.id,
                        turnir_name: this.turnir.name
                    }
                    this.$api.$post('/turnirs/user/store', form).then((res) => {
                        console.log(res);
                        const user = res.turnir_user
                        user['editUser'] = 0
                        user['loading'] = 0
                        this.loading = 0
                        this.forms.push(user)
                        //                    this.$bus.$emit('successPopup')  соңында косамын
                        this.cencelNewAddUser()
                    })
                } else this.setNotification('Барлық бағандарды толтырыңыз', 'failer')

            },
            deleteUser(id, index) {
                this.$dialog.open({
                    message: 'Әрекетіңізді растайсыз ба?',
                    resolver: (async (result) => {
                        try {
                            const res = await result;
                            this.$api.$get('/turnirs/user/' + id + '/delete').then((res) => {
                                this.forms.splice(index, 1);
                                this.$bus.$emit('successPopup')
                            })
                        } catch (error) {
                            console.warn(error);
                        }
                    }),
                });
            },
            getMyOlimps() {
                this.$api.$get('/turnirs/my_turnirs/active', {
                    params: {
                        limit: 3,
                        current_id: this.turnir.id,
                    }
                }).then((res) => {
                    this.thisYear = res.thisYear
                    if (res.tuser.length) {
                        var mySet = new Array();
                        res.tuser.forEach((tuser) => {
                            tuser.turnir.user_count = 0
                        })
                        res.tuser.forEach((tuser) => {
                            if (!mySet.includes(tuser.turnir.id)) {
                                this.myTurnirs.push(tuser.turnir)
                                mySet.push(tuser.turnir.id)
                            }
                            this.myTurnirs[mySet.indexOf(tuser.turnir.id)].user_count++;
                        })
                        this.loading = 0
                    }


                })
            }
        },
        async asyncData({
            $axios,
            params
        }) {
            let data = await $axios.$get('/turnirs/' + params.slug);
            let turnir = data.turnir
            console.log(data)
            return {
                turnir: turnir,
                forms: data.turnir_users,
                zhetekshi: data.zhetekshi,
                oblys: data.oblys,
                header: [{
                    name: 'Турнир',
                    link: '/turnir'
                }, {
                    name: turnir.month + ' айының Республикалық ' + turnir.name + ' ' + turnir.cat_name + ' турнирі',
                }],
            }
        },
        mounted() {
            var q = this.$route.query.buy
            if (q) this.getCertificate(q)
            this.getMyOlimps()
        },

    }

</script>
