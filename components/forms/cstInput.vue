<template>
    <div :class="{danger: danger}">
        <label v-if='stringName' :for="nameWrap">{{stringName}}</label>
        <div v-else></div>
        <input v-if="nameWrap != 'tel_num'" v-model="inputVal" :type="typeName" :id="nameWrap" :name="nameWrap" class="form-control" :placeholder="stringPlaceholder">
        <input v-else @focus="maskedClick" v-model="inputVal" v-mask="'+7(###) ###-##-##'" :type="typeName" :id="nameWrap" :name="nameWrap" class="form-control" :placeholder="stringPlaceholder">
        <span v-show='danger' class="danger_message">{{dangerText}}</span>
    </div>
</template>


<script>
    export default {
        props: ['typeName', 'stringName', 'stringPlaceholder', 'nameWrap', 'value', 'danger', 'dangerText'],
        data() {
            return {
                inputVal: this.value
            }
        },
        methods: {
            clearFeedBack() {
                this.warning = null
                this.warningText = ''
            },
            maskedClick() {
                this.inputVal = this.inputVal ? this.inputVal : '+7('
            }
        },
        watch: {
            inputVal(val) {
                this.$emit('input', val);
            }
        }
    }

</script>


<style scoped lang="scss">
    input {
        border: 0.5px solid #E2E8F4;
        background: #FAFAFA;
        border-radius: 6px;
        min-height: 50px;
        // height: -webkit-fill-available;
        transition: 0.3s;

        &:placeholder {
            color: #888888;
        }

        &:focus {
            background: #ffffff;

            &::placeholder {
                color: #ffffff;
            }
        }
    }

    label {
        display: block;
        margin-bottom: 8px;
        color: #888888;

    }
    
    .aadfff {
        span.danger_message {
            transform: translateY(0) !important;
        }
    }

    .danger input {
        border: 1px solid #FF0000;
    }

    .danger_message {
        font-size: 12px;
        font-weight: 400;
        line-height: 19px;
        position: absolute;
        transform: translateY(-12px);
        color: #dc3545;
    }

</style>
