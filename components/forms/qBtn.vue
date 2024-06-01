<template>
    <button class="btn cst_btn aj-c" :class="{
           success: mode == 1,
           danger: mode == 2,
           focus: mode == 3
       }">
        {{num}}
    </button>
</template>


<script>
export default {
    props: ['mode', 'num'],
}
</script>


<style scoped lang="scss">
    .cst_btn{
        min-width: 40px;
        width: 40px;
        height: 40px;
        background: #F9F9F9;
        border: 1px solid #E7ECF3;
        border-radius: 50%;
        color: #1B2849;
        font-size: 16px;
        font-weight: 500;
        line-height: 22px;
        padding: 0;
        transition: 0.3s;
        box-shadow: 0px 4px 6px 0px #1C306433;

        &:hover{
            border: 1px solid #fff;
        }
        &.success, &.danger, &.focus{
            color: #FFFFFF;
        }
        &.success{
            background: #03B113;
        }
        &.danger{
            background: #FF0000;
        }
        &.focus{
            background: #3464E7;
        }
    }
</style>
