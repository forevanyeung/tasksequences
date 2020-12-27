<template>
    <common-properties type="Set Task Sequence Variable" :name="stepdata.value.name" :description="stepdata.value.description"/>

    
</template>
<script>
import commonProperties from './common.properties'

export default {
    name: 'tasksequencevariable',
    components: {
        commonProperties
    },
    inject: ['stepdata'],
}
</script>