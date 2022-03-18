<template>
  <div>
    <p>
      {{ msgStr }}
    </p>
    <el-button @click="changeMsg">默认按钮</el-button>
  </div>
</template>

<script>
import isArray from 'lodash/isArray';
import dayjs from 'dayjs';

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            msgStr: this.msg
        };
    },
    created() {
        let me = this;
        this.test();
    },
    watch: {
        'msgStr': function (newVal, oldVal) {
            console.log(newVal, oldVal);
        }
    },
    methods: {
        test() {
            console.log(isArray([]));
        },
        changeMsg() {
            this.msgStr = dayjs().format();
        }
    }
};
</script>

<style scoped>

</style>
