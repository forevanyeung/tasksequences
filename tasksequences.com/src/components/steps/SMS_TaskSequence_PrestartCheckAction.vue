<template>
    <common-properties type="Check Readiness" :name="stepdata.value.name" :description="stepdata.value.description" />

    <p>Select the requirements for this step to succeed.</p>

    <li>
        <input type="checkbox" />
        <label>Minium memory (MB):</label>
        <input type="number" />
    </li>

    <li>
        <input type="checkbox" />
        <label>Minimum processor speed (MHz):</label>
        <input type="number" />
    </li>

    <li>
        <input type="checkbox" />
        <label>Minimum free disk space (MB):</label>
        <input type="number" />
    </li>

    <li>
        <input type="checkbox" />
        <label>Current OS to be refreshed is:</label>
        <select>
            <option>CLIENT</option>
        </select>
    </li>

    <li>
        <input type="checkbox" />
        <label>Architecture of current OS:</label>
        <select>
            <option>64-bit</option>
        </select>
    </li>

    <li>
        <input type="checkbox" />
        <label>Minimum OS version:</label>
        <input type="text" />
    </li>

    <li>
        <input type="checkbox" />
        <label>Maximum OS version:</label>
        <input type="text" />
    </li>

    <li>
        <input type="checkbox" />
        <label>Minium client version:</label>
        <input type="text" />
    </li>

    <li>
        <input type="checkbox" />
        <label>Language of current os:</label>
        <select>
            <option>English (United States)</option>
        </select>
    </li>

    <li>
        <input type="checkbox" />
        <label>AC power plugged in</label>
    </li>

    <li>
        <input type="checkbox" />
        <label>Network adapter connected</label>
        <ul>
            <li>
                <input type="checkbox" />
                <label>Network adapter is not wireless</label>
            </li>
        </ul>
    </li>

</template>

<script>
import CommonProperties from './common.properties.vue'

export default {
    name: 'SMS_TaskSequence_PrestartCheckAction',
    components: {
        CommonProperties
    },
    inject: ['stepdata'],
}
</script>