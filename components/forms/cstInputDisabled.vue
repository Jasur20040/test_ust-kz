<template>
    <div>
        <label v-if='stringName'>{{stringName}}</label>
        <div class="disabled-input d-f a-c j-b">
            <div class="text">{{text}}</div>
            <button @click="$emit('openLogin')" class="btn aj-c">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.227 6.6703L9.32971 3.77301M1 15L3.45137 14.7276C3.75087 14.6943 3.90062 14.6777 4.04059 14.6324C4.16477 14.5922 4.28295 14.5354 4.39191 14.4635C4.51473 14.3826 4.62127 14.276 4.83436 14.0629L14.4 4.49734C15.2 3.69727 15.2 2.40011 14.4 1.60005C13.5999 0.799985 12.3027 0.799984 11.5027 1.60005L1.93707 11.1656C1.72399 11.3787 1.61745 11.4853 1.53646 11.6081C1.4646 11.7171 1.4078 11.8352 1.3676 11.9594C1.32229 12.0994 1.30565 12.2491 1.27237 12.5486L1 15Z" stroke="#1E63E9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    </div>
</template>


<script>
    export default {
        props: ['text', 'stringName'],
    }

</script>


<style scoped lang="scss">
    label {
        margin-bottom: 5px;
        color: #888888;
        font-size: 16px;
        line-height: 23px;
    }

    .disabled-input {
        padding: 5px 6px 5px 15px;
        background: #F5F6F8;
        border: 1px solid #03B113;
        border-radius: 5px;
        .text {
            color: #03B113;
            font-size: 16px;
            font-weight: 500;
            line-height: 23px;
        }

        button {
            background: #EAF1FF;
            border-radius: 10px;
            padding: 0;
            width: 34px;
            height: 34px;
            display: flex;
        }
    }

</style>
