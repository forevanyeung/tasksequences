<template>
    <CommonProp type="Group" :name="stepdata.value.name" :description="stepdata.value.description" />
    <span>No settings are required for this action.</span>
</template>

<script>
import CommonProp from './common.properties.vue'

export default {
    name: 'GroupProp',
    components: {
        CommonProp
    },
    inject: ['stepdata'],
}
</script>