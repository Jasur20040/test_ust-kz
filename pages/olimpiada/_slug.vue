<template>
    <section class="other">
        <confirmedPopup />
        <oplataPopup :price="oplataSell" :oplataOpen="oplataPopup" @closePopup="oplataPopup=0" @setPopup="($event)=>{oplataPopup=$event}" @buyThisMaterial="olimpTolem(oplataIndex)" :material_id="oplataIndex" />
        <div class="cst-ct">
            <div class="wrapper-side">
                <div class="hotslot"></div>
                <div class="content">
                    <header_kroshki :header="header" gotoUrl="/olimpiada" />
                    <div class="dengei_block">
                        <div class="title">
                            {{bagyt.o_bagyty}}
                        </div>
                        <div class="turnir_info">
                            <div class="backgroundText">Блиц турнир</div>
                            <div class="d-f a-c gap-50">
                                <div class="item d-f a-c gap-10">
                                    <img src="~assets/images/turnir/calendar.svg" alt="">
                                    <div class="info">
                                        <div class="name">Уақыты:</div>
                                        <div class="value">1-{{bagyt.lastDayInMonth}} {{getMonth(bagyt.month)}} аралығында</div>
                                    </div>
                                </div>
                                <div class="item d-f a-c gap-10">
                                    <img src="~assets/images/turnir/wallet.svg" alt="">
                                    <div class="info">
                                        <div class="name">Қатысу жарнасы:</div>
                                        <div class="value">{{oplataSell}} тг.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="turnir grid-3 gap-20">
                            <div class="item d-f">
                                <div class="icon d-f aj-c">
                                    <img src="~assets/images/turnir/flag.svg" alt="">
                                </div>
                                <div>
                                    <div class="name">Олимпиада атауы:</div>
                                    <div class="value">{{bagyt.bagyt}}</div>
                                </div>
                            </div>
                            <div class="item d-f">
                                <div class="icon d-f aj-c">
                                    <img src="~/assets/images/turnir/profile-2user.svg" alt="">
                                </div>
                                <div>
                                    <div class="name">Қатысушы:</div>
                                    <div class="value">{{get_qatysushi_text()}}</div>
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
                        <template v-for="(o_user, index) in o_users">
                            <div v-if="userEdit==index" class="block edit">
                                <div class="num">{{index+1}}</div>
                                <div class="head">
                                    <div class="">
                                        <div class="grid-2 w-100 gap-10 nobody" :class="{'grid-3':bagyt.o_katysushy_idd == 3}">
                                            <cstInput class="cstInput" stringPlaceholder="Есіміңіз" v-model="o_user.o_katysushy_name" @click.native="errors.name = false" :danger="errors.name" />
                                            <cstInput class="cstInput" stringPlaceholder="Тегіңіз (Фамилия)" v-model="o_user.o_katysushy_fname" @click.native="errors.fname = false" :danger="errors.fname" />
                                            <div v-if="bagyt.o_katysushy_idd == 3" @click="errors.classes=false">
                                                <btnGroup class="cst-size-btn" :category='classes' :placeholder="o_user.o_tury.synyp+' сынып'" @entered-category="(e)=>{enteredEditClass(index, e)}" :danger="errors.classes" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                                <div class="body">
                                    <div class="grid-2" :class="{'grid-3':bagyt.o_katysushy_idd == 3}">
                                        <cstInput class="cstInput" stringPlaceholder="Есіміңіз" v-model="o_user.o_katysushy_name" @click.native="errors.name = false" :danger="errors.name" />
                                        <cstInput class="cstInput" stringPlaceholder="Тегіңіз (Фамилия)" v-model="o_user.o_katysushy_fname" @click.native="errors.fname = false" :danger="errors.fname" />
                                        <div v-if="bagyt.o_katysushy_idd == 3" @click="errors.classes=false">
                                            <btnGroup class="cst-size-btn" :category='classes' :placeholder="o_user.o_tury.synyp+' сынып'" @entered-category="(e)=>{enteredEditClass(index, e)}" :danger="errors.classes" />
                                        </div>
                                    </div>
                                </div>
                                <div class="smbody"></div>
                                <checkbox v-model="work_check" class="zi mt-20" :text="o_user.o_mekeme ? textWork()+' орнын өзгерту' : textWork()+' орнын қосу'" idName="mekeme" type=1 />
                                <div></div>
                                <div v-if="work_check == 1" class="input-wrap grid-3 mt-20 gap-20" @click="errors.work=false">
                                    <btnGroup :category='oblys' :placeholder="userWork[0] ? userWork[0] : 'Облысты таңдаңыз'" @entered-category="(e)=>{enteredOblys(index, e)}" class="cst_input_40 zi" :danger="errors.work" />
                                    <btnGroup v-show="userWork[0]" :category='audan' :placeholder="userWork[1] ? userWork[1] : 'Ауданы таңдаңыз'" @entered-category="(e)=>{enteredAudan(index, e)}" class="cst_input_40 zi" :danger="errors.work" />
                                    <btnGroup v-show="userWork[1]" :category='mektep' :placeholder="userWork[2] ? userWork[2] : 'Мектепті таңдаңыз'" @entered-category="(e)=>{enteredMektep(index, e)}" class="cst_input_40 zi" :danger="errors.work" />
                                </div>
                                <div v-if="work_check==1"></div>
                                <template v-if="checkBagyt()">
                                    <checkbox v-model="zhetekshiChec" class="mt-20" :text="o_user.o_zhetekshi ? 'Жетекшіні өзгерту' : 'Жетекшіні қосу'" idName="zhetekshi" type=1 />
                                    <div></div>
                                    <div v-if="zhetekshiChec==1" class="input-wrap mt-20">
                                        <cstInput v-if="o_user.o_zhetekshi" class="cst_input_40 cst_fix_span_input" stringPlaceholder="Жетекшінің толық аты-жөні" v-model="o_user.o_zhetekshi.name" @click="errors.zhetekshi=false" :danger="errors.zhetekshi" />
                                        <cstInput v-else class="cst_input_40 cst_fix_span_input" stringPlaceholder="Жетекшінің толық аты-жөні" v-model="newUsersZhetekshi" @click="errors.zhetekshi=false" :danger="errors.zhetekshi" />
                                    </div>
                                    <div v-if="zhetekshiChec==1"></div>
                                </template>
                                <div v-if="!startDate" class="foot d-f a-c gap-10">
                                    <cstBtn v-if="o_user.loading" class="editBtn success">
                                        <span class="spinner-border"></span>
                                    </cstBtn>
                                    <cstBtn v-else @click.native="editUser(index)" class="editBtn success">Сақтау</cstBtn>
                                    <cstBtn @click.native="clearFeedBack()" class="editBtn danger">Болдырмау</cstBtn>
                                </div>
                            </div>
                            <div v-else class="block">
                                <div class="head d-f j-b">
                                    <div class="d-f gap-20">
                                        <div class="num">{{index+1}}</div>
                                        <div class="name">
                                            {{o_user.o_katysushy_fio}}
                                            <div v-if="o_user.o_mekeme || o_user.o_zhetekshi" class="work"><span v-if="o_user.o_mekeme">{{o_user.o_mekeme}}</span> <span v-if="o_user.o_zhetekshi">Жетекші: {{o_user.o_zhetekshi.name}}</span></div>
                                        </div>
                                    </div>
                                    <div class="buttons d-f gap-20">
                                        <glassBtn @click.native="setEditUser(index)" class="glassBtn">
                                            <edit /> Өзгерту
                                        </glassBtn>
                                        <glassBtn @click.native="confirmDeleteUser(index)" class="glassBtn">
                                            <destroy /> Жою
                                        </glassBtn>
                                    </div>
                                </div>
                                <div class="body">
                                    <div class="name">
                                        {{o_user.o_katysushy_fio}}
                                        <div v-if="o_user.o_mekeme || o_user.o_zhetekshi" class="work"><span v-if="o_user.o_mekeme">{{o_user.o_mekeme}}</span> <span v-if="o_user.o_zhetekshi">Жетекші: {{o_user.o_zhetekshi.name}}</span></div>
                                    </div>
                                </div>
                                <div v-if="o_user.bari_tapsirdy" class="foot d-f a-c j-b">
                                    <div class="d-f a-c gap-10">
                                        Балл: 20/{{o_user.o_tizim.result}}
                                        <nuxt-link :to="'/olimpiada/test/'+o_user.idd+'/result'">
                                            <glassBtn class="glassBtn">
                                                <info /> Нәтижесі
                                            </glassBtn>
                                        </nuxt-link>
                                    </div>
                                    <cstBtn @click.native="getCertificate(o_user.idd)" class="cstBtn">
                                        <download /> {{certCalc(o_user.o_tizim.result)+' жүктеу'}}
                                    </cstBtn>
                                    <cstBtn v-if="checStudent(index) && o_user.o_zhetekshi_id" @click.native="getAlgys(0, index)" class="cstBtn">
                                        <download /> Жетекші алғыс хатын жүктеу
                                    </cstBtn>
                                    <cstBtn v-if="o_user.o_katysushy_idd == 3" @click.native="getAlgys(1, index)" class="cstBtn">
                                        <download /> Ата-ана алғыс хатын жүктеу
                                    </cstBtn>
                                </div>
                                <div v-else class="foot d-f a-c gap-30">
                                    <successBtn v-if="o_user.loading">
                                        <span class="spinner-border"></span>
                                    </successBtn>
                                    <successBtn v-else-if="o_user.success" @click.native="startTest(index)">Тест тапсыру</successBtn>
                                    <successBtn v-else @click.native="olimpTolem(index)">{{'Тест тапсыру - '+oplataSell+' тг'}}</successBtn>
                                    <div class="code">
                                        Қатысу коды: <b>{{o_user.obwcode}}</b>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <div v-if="addNewUser" class="block edit">
                            <div class="num">{{o_users.length+1}}</div>
                            <div class="head">
                                <div class="">
                                    <div class="grid-2 w-100 gap-10" :class="{'grid-3':bagyt.o_katysushy_idd == 3}">
                                        <cstInput class="cstInput" stringPlaceholder="Есіміңіз" v-model="newUserName" @click.native="errors.name=false" :danger="errors.name" />
                                        <cstInput class="cstInput" stringPlaceholder="Тегіңіз (Фамилия)" v-model="newUserFname" @click.native="errors.fname=false" :danger="errors.fname" />
                                        <div v-if="bagyt.o_katysushy_idd == 3" @click="errors.classes=false">
                                            <btnGroup class="cst-size-btn" :category='classes' placeholder='Сыныбы' @entered-category="enteredClass" :danger="errors.classes" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                            <div class="body">
                                <div class="grid-2" :class="{'grid-3':checkBagyt()}">
                                    <cstInput class="cstInput" stringPlaceholder="Есіміңіз" v-model="newUserName" @click.native="errors.name=false" :danger="errors.name" />
                                    <cstInput class="cstInput" stringPlaceholder="Тегіңіз (Фамилия)" v-model="newUserFname" @click.native="errors.fname=false" :danger="errors.fname" />
                                    <div v-if="bagyt.o_katysushy_idd == 3" @click="errors.classes=false">
                                        <btnGroup class="cst-size-btn" :category='classes' placeholder='Сыныбы' @entered-category="enteredClass" :danger="errors.classes" />
                                    </div>
                                </div>
                            </div>
                            <div class="smbody"></div>
                            <checkbox v-model="newUserWorkCheck" class="zi mt-3" :text="textWork()+' орнын қосу'" idName="newmekeme" type=1 />
                            <div></div>
                            <div v-if="newUserWorkCheck==1" class="input-wrap grid-3 mt-20 gap-20" @click="errors.work = false">
                                <btnGroup :category='oblys' :placeholder="newUserWork[0] ? newUserWork[0] : 'Облысты таңдаңыз'" @entered-category="(e)=>{newuserEnteredOblys(e)}" class="cst_input_40 zi" :danger="errors.work" />
                                <btnGroup v-show="newUserWork[0]" :category='audan' :placeholder="newUserWork[1] ? newUserWork[1] : 'Ауданы таңдаңыз'" @entered-category="(e)=>{newuserEnteredAudan(e)}" class="cst_input_40 zi" :danger="errors.work" />
                                <btnGroup v-show="newUserWork[1]" :category='mektep' :placeholder="newUserWork[2] ? newUserWork[2] : 'Мектепті таңдаңыз'" @entered-category="(e)=>{newuserEnteredMektep(e)}" class="cst_input_40 zi" :danger="errors.work" />
                            </div>
                            <div v-if="newUserWorkCheck==1"></div>
                            <template v-if="checkBagyt()">
                                <checkbox v-model="newUsersZhetekshiCheck" class="mt-20" text="Жетекшіні қосу" idName="newUsersZhetekshiCheck" type=1 />
                                <div></div>
                                <div v-if="newUsersZhetekshiCheck==1" class="input-wrap mt-20">
                                    <cstInput class="cst_input_40 cst_fix_span_input" stringPlaceholder="Жетекшінің толық аты-жөні" v-model="newUsersZhetekshi" @click.native="errors.zhetekshi=false" :danger="errors.zhetekshi" />
                                </div>
                                <div v-if="newUsersZhetekshiCheck==1"></div>
                            </template>
                            <div class="foot d-f a-c gap-10">
                                <cstBtn v-if="loading" class="editBtn success">
                                    <span class="spinner-border"></span>
                                </cstBtn>
                                <cstBtn v-else @click.native="saveNewUser()" class="editBtn success">Сақтау</cstBtn>
                                <cstBtn @click.native="clearFeedBack()" class="editBtn danger">Болдырмау</cstBtn>
                            </div>
                        </div>
                        <div v-else-if="!startDate" class="addNewUser d-f mt-30 gap-20 a-c">
                            <bigBtn @click.native="addNewUser=1" img="add.svg" class="addBtn">Қатысушы қосу</bigBtn>
                            <div class="info">
                                Бірнеше қатысушыны қосуға болады
                            </div>
                        </div>
                    </div>
<!--                                        <turnirLanding @videoOpen="videoOpen = 1" :turnirs="myTurnirs" :thisYear="thisYear" />-->
                   <olimpiadaLanding v-if="!startDate" @videoOpen="videoOpen = 1" :olimps="myOlimps" :thisYear="thisYear" />
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
    import olimpiadaLanding from '@/components/landing/olimpiadaLanding.vue'
    import Lottie from 'vue-lottie/src/lottie.vue'
    import notFoundData from "@/assets/lottie_files/info_2/animation_kqc42oh6.json"
    import '@/assets/dengei.scss'
    export default {
        components: {
            header_kroshki,
            oplataPopup,
            confirmedPopup,
            btnGroup,
            cstInput,
            checkbox,
            glassBtn,
            cstBtn,
            bigBtn,
            successBtn,
            edit,
            destroy,
            info,
            olimpiadaLanding,
            download,
            Lottie,
        },
        data() {
            return {
                classes: [],
                loading: 0,
                active: 0,
                preload: 0,
                go: 0,
                videoOpen: 0,
                youtubeLink: 'https://www.youtube.com/watch?v=Ka0lRluiGmk',
                addNewUser: 0,
                oplataPopup: 0,
                oplataIndex: 1,
                newUserName: '',
                newUserFname: '',
                work_check: 0,
                newUserWorkCheck: 0,
                newUserWork: ['', '', ''],
                userWork: ['', '', ''],
                userEdit: null,
                errors: {},
                newUserWork: ['', '', ''],
                audan: [],
                mektep: [],
                newClassSet: null,
                newUsersZhetekshiCheck: 0,
                errorZhetekshi: '',
                newUsersZhetekshi: '',
                zhetekshiChec: 0,
                myOlimps: [],
                thisYear: 2021,
                thisMonth: '',
                notFoundOption: {
                    animationData: notFoundData
                },
                animationSpeed: 1,
                o_katysushy: {},
                test: {
                    active: 0,
                    katysushy: null,
                },
                katysushy_type: null,
                form: {
                    edit: 0
                },
            }
        },
        async asyncData({
            $axios,
            params,
            query
        }) {
            let seed = ''
            if (query.year && query.month) seed = '?year=' + query.year + '&month=' + query.month
            let title = params.slug.split('-');
            let id = title[1]
            let data = await $axios.$get(`olimpiada/${id}${seed}`)
            let classes = []
            data.classes.forEach((e) => {
                let synyp = {
                    name: e + ' сынып',
                    value: e
                }
                classes.push(synyp)
            })
            let user = params.status == 'result' ? params.katysushy : {}
            return {
                bagyt: data.bagyt,
                o_users: data.o_users,
                zhetekshiler: data.zhetekshiler,
                oblys: data.oblys,
                classes: classes,
                o_user: user,
                oplataSell: data.bagyt.is_free == 1 ? 0 : data.bagyt_price,
                startDate: data.startDate,
                endDate: data.endDate,
                header: [{
                    name: 'Олимпиадалар',
                    link: '/olimpiada'
                }, {
                    name: data.bagyt.o_bagyty,
                }],
            }
        },
        methods: {
            openPopup(index) {
                this.o_katysushy = this.o_users[index];
                this.active = 1;
            },
            checkBagyt() {
                switch (this.bagyt.o_katysushy_idd) {
                    case 1:
                    case 4:
                        return false;
                    case 3:
                    case 2:
                        return true;
                }
            },
            certCalc(val) {
                if (val >= 19) return '1 дәрежелі дипломды';
                else if (val >= 16) return '2 дәрежелі дипломды';
                else if (val >= 13) return '3 дәрежелі дипломды';
                else return 'Сертификатты';
            },
            get_qatysushi_text() {
                switch (this.bagyt.o_katysushy_idd) {
                    case 1:
                        return 'Ұстаздар арасында';
                    case 2:
                        return 'Студенттер арасында';
                    case 3:
                        return this.bagyt.first_child.synyp + '-' + this.bagyt.last_child.synyp + ' сынып оқушылары арасында';
                    case 4:
                        return 'Тәрбиешілер арасында';
                }
            },
            handleAnimation: function(anim) {
                this.anim = anim;
            },
            startTest(index) {
                var code = this.o_users[index].obwcode
                this.$router.push({
                    name: 'olimpiada-test-erezhe',
                    query: {
                        code: code
                    },
                });
            },
            getCertificate(id) {
                this.$api.get('/olimpiada/' + id + '/certificate', {
                    responseType: 'blob'
                }).then((response) => {
                    var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                    var fileLink = document.createElement('a');
                    fileLink.href = fileURL;
                    var d = new Date();
                    fileLink.setAttribute('download', d.toLocaleString() + '.pdf');
                    document.body.appendChild(fileLink);
                    fileLink.click();
                })
            },
            getAlgys(e, index) {
                let id = e ? this.o_users[index].idd : this.o_users[index].o_zhetekshi_id
                this.$api.get('/olimpiada/' + id + '/thankLetter', {
                    responseType: 'blob',
                    params: {
                        type: e
                    }
                }).then((response) => {
                    var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                    var fileLink = document.createElement('a');
                    fileLink.href = fileURL;
                    var d = new Date();
                    fileLink.setAttribute('download', d.toLocaleString() + '.pdf');
                    document.body.appendChild(fileLink);
                    fileLink.click();
                })
            },
            textWork() {
                switch (this.bagyt.o_katysushy_idd) {
                    case 1:
                        return 'Жұмыс'
                    case 2:
                        return 'Оқу'
                    case 3:
                        return 'Оқу'
                    case 4:
                        return 'Жұмыс'
                }
            },
            checStudent(index) {
                return this.o_users[index].o_katysushy_idd == 2 ? true : this.o_users[index].o_katysushy_idd == 3 ? true : false;
            },
            setEditUser(index) {
                this.clearFeedBack()
                this.userEdit = index
            },
            confirmDeleteUser(index) {
                this.$dialog.open({
                    message: 'Әрекетіңізді растайсыз ба?',
                    resolver: (async (result) => {
                        try {
                            this.deleteUser(index);

                        } catch (error) {
                            console.warn('Б');
                        }
                    }),
                });
            },
            editUser(index) {
                
                if(this.validator(index)) {
                    this.o_users[index].loading = 1;
                    this.$api.post('/olimpiada/user/update', {
                        id: this.o_users[index].idd,
                        name: this.o_users[index].o_katysushy_name,
                        fname: this.o_users[index].o_katysushy_fname,
                        o_mekeme: this.work_check ? this.userWork.join(' ') : this.o_users[index].o_mekeme,
                        synyp: this.o_users[index].o_tury.synyp,
                        zhetekshi: this.o_users[index].o_zhetekshi ? this.o_users[index].o_zhetekshi.name : this.newUsersZhetekshi
                    }).then((res) => {
                        this.o_users[index].loading = 0;
                        if (res.data.success == true) {
                            this.o_users[index] = res.data.katysushy
                            this.o_users[index].addWork = 0
                            this.userEdit = null
                            this.setNotification('Өзгеріс сақталды', 'success')
                        }
                        this.clearFeedBack()
                    }).catch((err) => {
                        
                        this.setNotification('Серверде ақау пайда болды', 'failer')
                    })
                    
                } else this.setNotification('Барлық бағандарды толтырыңыз', 'failer')

                // АПИ ИЗМЕНЕНИЕ ИМЕНИ ДОДЕЛАТЬ
            },
            deleteUser(index) {
                let user = this.o_users[index]
                console.log(user)
                this.$api.get('/olimpiada/user/' + user.idd + '/destroy').then((res) => {
                    if (res.data.success == true) {
                        this.o_users.splice(index, 1);
                        this.setNotification('Сәтті жойылды', 'success')
                    }
                })
            },
            olimpTolem(index) {
                this.o_users[index].loading = 1
                this.oplataPopup = 6
                this.oplataIndex = index
                this.$api.post('/olimpiada/test/tolem-zhasau', {
                    id: this.o_users[index].idd,
                    nomer: index + 1,
                    price: this.oplataSell,
                }).then((res) => {
                    this.o_users[index].loading = 0
                    if (res.data.success == true) {
                        this.o_users[index].success = 1
                        this.o_users[index].o_tizim = res.data.o_tizim
                        this.oplataPopup = 7
                        this.setNotification('Төлем жасалынды', 'success')
                        this.setNotification(res.data.price + ' тг сіздің бонустың шотыңызға аударылды')
                    } else if (res.data.success == false) {
                        this.oplataPopup = 5
                    }
                }).catch((err) => {
                    this.o_users[index].loading = 0
                    console.log(err);
                })
            },
            getMonth(e) {
                switch (e) {
                    case '1':
                        return 'қаңтар';
                    case '2':
                        return 'ақпан';
                    case '3':
                        return 'наурыз';
                    case '4':
                        return 'сәуір';
                    case '5':
                        return 'мамыр';
                    case '6':
                        return 'маусым';
                    case '7':
                        return 'шілде';
                    case '8':
                        return 'тамыз';
                    case '9':
                        return 'қыркүйек';
                    case '10':
                        return 'қазан';
                    case '11':
                        return 'қараша';
                    case '12':
                        return 'желтоқсан';
                }
            },
            enteredClass(e) {
                this.newClassSet = this.classes[e].value
            },
            enteredEditClass(index, e) {
                this.o_users[index].o_tury.synyp = this.classes[e].value
            },
            enteredOblys(index, e) {
                this.userWork[0] = this.oblys[e].name
                this.$api.get('olimpiada/oblys/' + this.oblys[e].id).then((res) => {
                    this.audan = res.data.audan
                })
            },
            enteredAudan(index, e) {
                this.userWork[1] = this.audan[e].name
                this.$api.get('olimpiada/oblys/' + this.oblys[e].id + '/audan/' + this.audan[e].id).then((res) => {
                    this.mektep = res.data.mektep
                })
            },
            enteredMektep(index, e) {
                this.userWork[2] = this.mektep[e].name
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
            setNotification(text, status) {
                this.$bus.$emit('notification', {
                    text: text,
                    status: status,
                })
            },
            validator(index = null) {
                let check = true;
                if(index == null) {
                    let name = false;
                    let fname = false;
                    let classes = false;
                    let work = false;
                    let zhetekshi = false;
                    if(this.newUserName.trim() === '') {
                        check = false;
                        name = true;
                    }
                    if(this.newUserFname.trim() === '') {
                        check = false;
                        fname = true;
                    }
                    
                    if(this.bagyt.o_katysushy_idd == 3 && this.newClassSet == null) {
                        check = false;
                        classes = true;
                    }
                    
                    if (this.newUserWorkCheck == 1) {
                        if (this.newUserWork.some(item => item == '')) {
                            check = false;
                            work = true;
                        }
                    }
                    if (this.newUsersZhetekshiCheck == 1) {
                        if (this.newUsersZhetekshi == null || this.newUsersZhetekshi.trim() === '') {
                            zhetekshi = true;
                            check = false;
                        }
                    }
                    
                    this.errors = {
                        name: name,
                        fname: fname,
                        classes: classes,
                        work: work,
                        zhetekshi: zhetekshi,
                    }
                    return check;
                } else {
                    let name = false;
                    let fname = false;
                    let classes = false;
                    let work = false;
                    let zhetekshi = false;
                    if(this.o_users[index].o_katysushy_name.trim() === '') {
                        check = false;
                        name = true;
                    }
                    if(this.o_users[index].o_katysushy_fname.trim() === '') {
                        check = false;
                        fname = true;
                    }
                    if (this.work_check == 1) {
                        if (this.userWork.some(item => item == '')) {
                            work = true;
                            check = false;
                        }
                    }
                    let userzhetekshi = this.o_users[index].o_zhetekshi ? this.o_users[index].o_zhetekshi.name : this.newUsersZhetekshi;
                    if (this.zhetekshiChec == 1) {
                        if (userzhetekshi == null || userzhetekshi.trim() === '') {
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
            saveNewUser() {
                if(this.validator()) {
                    this.loading = 1;
                    this.$api.post('/olimpiada/user/create', {
                        bagyt_id: this.bagyt.idd,
                        type_id: this.bagyt.type,
                        name: this.newUserName,
                        fname: this.newUserFname,
                        katysushy_id: this.bagyt.o_katysushy_idd,
                        class: this.newClassSet,
                        nomer: this.o_users.length + 1,
                        zhetekshi: this.newUsersZhetekshi,
                        o_mekeme: this.newUserWork.join(' ')
                    }).then((res) => {
                        this.clearFeedBack()
                        res.data.katysushy.addWork = 0
                        this.o_users.push(res.data.katysushy)
                        this.setNotification('Сәтті сақталды', 'success')
                    }).catch((error) => {
                        this.loading = 0
                        this.setNotification('Серверде ақау пайда болды', 'failer')
                    })
                } else this.setNotification('Барлық бағандарды толтырыңыз', 'failer')
            },
            clearFeedBack() {
                this.loading = 0
                this.addNewUser = 0
                this.work_check = 0
                this.newUserName = ''
                this.newUserFname = ''
                this.newUserWork = ['', '', '']
                this.newUserWorkCheck = 0
                this.zhetekshiChec = 0
                this.newUsersZhetekshi = ''
                this.newUsersZhetekshiCheck = 0
                this.errors = {}
                this.userEdit = null
                //                this.userWork = ['', '', '']
            },
            moreResults(index) {
                let id = this.o_users[index].idd;
                this.$router.push({
                    name: 'olimpiada-test-id-result',
                    params: {
                        id: id,
                    }
                })
            },
            getMyOlimps() {
                this.$api.$get('/olimpiada/olimpiadalarym/active', {
                    params: {
                        limit: 3,
                        bagytId: this.bagyt.idd,
                    }
                }).then((res) => {
                    this.thisYear = res.thisYear
                    this.thisMonth = res.thisMonth
                    let count = 0
                    this.myOlimps = res.tuser
                    this.loading = 0;
                })
            }
        },
        mounted() {
            var q = this.$route.query.buy
            if (q) this.olimpTolem(q)
            this.getMyOlimps()

        },

    }

</script>

