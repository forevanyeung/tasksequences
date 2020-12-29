<template>
    <common-properties type="Set Dynamic Variables" :name="stepdata.value.name" :description="stepdata.value.description" />

    <select name="cars" id="cars" multiple>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
    </select>

    <div class="conditions">
        <ul class="tree">
            <li>SET SMSTSVariable = "Something"</li>
        </ul>
    </div>
</template>

<script>
import CommonProperties from './common.properties'

export default {
    name: 'SMS_TaskSequence_SetDynamicVariablesAction',
    components: {
        CommonProperties
    },
    inject: ['stepdata'],
}
</script>

<style scoped>
.conditions {
    background: white;
    flex: 1 0;
}
</style>