<template>
    <common-properties :type="stepdata.type" :name="stepdata.name" :description="stepdata.description"/>

    <p>Specify what to run after restart</p>

    <li>
        <input type="radio" />
        <label>The boot image assinged to this task sequence</label>
    </li>

    <li>
        <input type="radio" />
        <label>The current installed default operating system</label>
    </li>

    <hr />

    <li>
        <input type="checkbox" />
        <label>Notify the user before restarting</label>
    </li>

    <li>
        <label>Notification message:</label>
        <textarea></textarea>
    </li>

    <li>
        <label>Message display time-out (seconds):</label>
        <input type="number" />
    </li>
</template>

<script>
import commonProperties from './common.properties.vue'
export default {
    name: 'restart',
    components: { commonProperties },
    props: {
        stepdata: Object
    }
}
</script>