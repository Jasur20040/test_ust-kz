<template>
    <div>
        <section class="other">
            <div class="cst-ct">
                <div class="wrapper-side">
                    <div class="hotslot"></div>
                    <div class="content">
                        <material_slug :res="res" />
                    </div>
                </div>
            </div>
        </section>

        <material_search />
        
        <section class="other">
            <div class="cst-ct">
                <div class="wrapper-side">
                    <div class="hotslot"></div>
                    <div class="content contentsame">
                        <material_same :res="res" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import material_slug from '@/components/materials/material_slug.vue'
    import material_search from '@/components/landing/material_search.vue'
    import material_same from '@/components/landing/material_same.vue'
    
    export default {
        components: {
            material_slug,
            material_search,
            material_same,
        },
        created() {
          console.log('material on created:', this.res);
        },
        mounted() {
          console.log('material on mounted:', this.res);
        },
        head() {
            return {
                title: this.headTitle,
                meta: [{
                    hid: 'description',
                    name: 'description',
                    content: this.headDescription,
                }, ],
                link: [{
                    rel: 'canonical',
                    href: this.headCanonical
                }]
            }
        },
        async asyncData({
            $axios,
            params,
            error,
            store
        }) {
            let slug = params.slug.split('.');
            if (slug[1] != 'html') error({
                statusCode: 404
            })
            return await $axios.$get('/word/' + slug[0]).then((res) => {
                    if (res.status == 404) error({
                        statusCode: 404
                    })
                    else {
                        let raw = 'word'
                        if (res.material.raw == 'ppt' || res.material.raw == 'pptx') raw = 'powerpoint'
                        else raw = 'word'
                        return {
                            res: res,
                            headTitle: res.material.title,
                            headDescription: res.material.title + ' - атты ' + res.material.zhanr2 + ', пәні - ' + res.material.zhanr + '. Ұстаз тілегі ust.kz сайтынан жүктеп алыңыз',
                            headCanonical: store.state.appUrl + '/' + raw + '/' + res.material.lat_title + '-' + res.material.id + '.html',
                        }
                    }
                })
                .catch((err) => {
                    error({
                        statusCode: 404
                    })
                });
        },
    }

</script>
<style style="scss" scoped>
    .content {
        overflow: hidden;
    }
    .contentsame {
        padding: 0 30px;
        @media all and (max-width: 767px) {
            padding: 0;
            width: 100%;
        }
    }
    section.other {
        padding-bottom: 100px;
        @media all and (max-width: 991px) {
            /*padding-top: 70px;*/
        }
        .cst-ct {
            @media all and (max-width: 767px) {
                padding: 0;
                .content {
                    width: 100%;
                }
            }
        }


    }
</style>
