<template>
    <common-properties :type="stepdata.type" :name="stepdata.name" :description="stepdata.description"/>

    
</template>
<script>
import commonProperties from './common.properties'

export default {
    name: 'tasksequencevariable',
    components: {
        commonProperties
    },
    props: {
        stepdata: Object
    }
}
</script>