<template>
    <common-properties type="Run Task Sequence" :name="stepdata.value.name" :description="stepdata.value.description" />

    <li>
        <label>Select task sequence to run:</label>

    </li>

    <li>
        <input type="text" />
        <button type="button">Browse...</button>
    </li>
</template>

<script>
import CommonProperties from './common.properties.vue'

export default {
    name: 'SMS_TaskSequence_SubTasksequence',
    components: {
        CommonProperties
    },
    inject: ['stepdata'],
}
</script>