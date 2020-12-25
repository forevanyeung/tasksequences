<template>
    <common-properties type="Connect to Network Folder" :name="stepdata.value.name" :description="stepdata.value.description"/>

    <li>
        <label class="short">Path:</label>
        <input type="text" :value="stepdata.value.variables?.SMSConnectNetworkFolderPath"/>
        <button type="button">Browse...</button>
    </li>

    <li>
        <label class="short">Drive</label>
        <select>
            <option>{{ stepdata.value.variables?.SMSConnectNetworkFolderDriveLetter }}</option>
        </select>
    </li>

    <li>
        <label class='short'>Account:</label>
        <input type="text" :value="stepdata.value.variables?.SMSConnectNetworkFolderAccount" />
        <button type="button">Set...</button>
    </li>
</template>

<script>
import commonProperties from './common.properties.vue'

export default {
    name: 'NetworkFolder',
    components: {
        commonProperties
    },
    inject: ['stepdata'],
}
</script>