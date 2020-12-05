<template>
    <common-properties type="Restart Computer" :name="stepdata.name" :description="stepdata.description"/>

    <p>Specify what to run after restart</p>

    <li>
        <input type="radio"
               name="SMSRebootTarget"
               :checked="stepdata.variables.SMSRebootTarget === 'WinPE'" />
        <label>The boot image assinged to this task sequence</label>
    </li>

    <li>
        <input type="radio" 
               name="SMSRebootTarget"
               :checked="stepdata.variables.SMSRebootTarget === 'OS'" />
        <label>The current installed default operating system</label>
    </li>

    <hr />

    <li>
        <input type="checkbox" />
        <label>Notify the user before restarting</label>
    </li>

    <li>
        <label>Notification message:</label>
        <textarea>{{ stepdata.variables.SMSRebootMessage }}</textarea>
    </li>

    <li>
        <label>Message display time-out (seconds):</label>
        <input type="number" :value="stepdata.variables.SMSRebootTimeout" />
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