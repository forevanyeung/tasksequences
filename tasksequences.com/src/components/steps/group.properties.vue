<template>
    <CommonProp :type="stepdata.type" :name="stepdata.name" :description="stepdata.description" />
    <span>No settings are required for this action.</span>
</template>

<script>
import CommonProp from './common.properties.vue'

export default {
    name: 'GroupProp',
    components: {
        CommonProp
    },
    props: {
        stepdata: Object
    }
}
</script>