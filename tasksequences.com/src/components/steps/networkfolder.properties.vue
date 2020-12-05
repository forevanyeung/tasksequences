<template>
    <common-properties type="Connect to Network Folder" :name="stepdata.name" :description="stepdata.description"/>

    <li>
        <label class="short">Path:</label>
        <input type="text" />
        <button type="button">Browse...</button>
    </li>

    <li>
        <label class="short">Drive</label>
        <select>
            <option></option>
        </select>
    </li>

    <li>
        <label class='short'>Account:</label>
        <input type="text" />
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
    props: {
        stepdata: Object
    }
}
</script>