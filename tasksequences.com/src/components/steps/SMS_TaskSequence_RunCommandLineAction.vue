<template>
    <common-properties type="Run Command Line" :name="stepdata.value.name" :description="stepdata.value.description" />

    <li>
        <label for="commandline">Command Line:</label> <br />
        <span class="break"></span>
        <textarea rows="5" v-model="stepdata.value.variables.CommandLine"></textarea>
    </li>

    <li>
        <input type="checkbox" name="disable64" v-model="stepdata.value.variables.SMSTSDisableWow64Redirection" />
        <label for="disable64" class="fullsize">Disable 64-bit file system redirection</label>
    </li>

    <li>
        <label class="short">Start in:</label>
        <input type="text" />
        <button type="button">Browse...</button>
    </li>

    <li class="tworows">
        <input type="checkbox" />
        <label>Package:</label>
        <span class="break"></span>
        <input type="text">
        <button type="button">Browse...</button>
    </li>

    <li>
        <input type="checkbox" />
        <label>Time-out (minutes):</label>
        <input type="number" />
    </li>

    <li class="tworows">
        <input type="checkbox" v-model="stepdata.value.variables._SMSTSRunCommandLineAsUser" />
        <label class="fullsize">Run this step as the following account:</label>
        <span class="break"></span>
        <label class="short">Account:</label>
        <input type="text">
        <button type="button">Set...</button>
    </li>
</template>

<script>
import CommonProperties from './common.properties.vue'

export default {
    name: 'SMS_TaskSequence_RunCommandLineAction',
    components: {
        CommonProperties
    },
    inject: ['stepdata'],
}
</script>