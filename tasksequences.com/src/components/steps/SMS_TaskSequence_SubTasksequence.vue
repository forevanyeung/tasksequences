<template>
    <CommonProp type="Run Task Sequence" :name="stepdata.value.name" :description="stepdata.value.description" />

    <li>
        <label>Select task sequence to run:</label>

    </li>

    <li>
        <input type="text" />
        <button type="button" />
    </li>
</template>

<script>
import CommonProp from './common.properties.vue'

export default {
    name: 'RunTaskSequenceProp',
    components: {
        CommonProp
    },
    inject: ['stepdata'],
}
</script>