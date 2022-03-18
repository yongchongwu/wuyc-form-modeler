<template>
    <div id="app">
        <hello-world :msg="msg"></hello-world>
    </div>
</template>

<script>

import is from '@form-create/utils/lib/type';
import formCreate from '@form-create/element-ui';

export default {
    name: 'app',
    data() {
        return {
            msg:'Start by not writing any code.'
        };
    },
    watch: {
    },
    methods: {
    }
};


</script>

<style>

</style>
