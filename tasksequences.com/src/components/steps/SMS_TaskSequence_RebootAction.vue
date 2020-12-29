<template>
    <common-properties type="Restart Computer" :name="stepdata.value.name" :description="stepdata.value.description"/>

    <p>Specify what to run after restart</p>

    <li>
        <input type="radio"
               name="SMSRebootTarget"
               :checked="stepdata.valuevariables?.SMSRebootTarget === 'WinPE'" />
        <label>The boot image assinged to this task sequence</label>
    </li>

    <li>
        <input type="radio" 
               name="SMSRebootTarget"
               :checked="stepdata.value.variables?.SMSRebootTarget === 'OS'" />
        <label>The current installed default operating system</label>
    </li>

    <hr />

    <li>
        <input type="checkbox" />
        <label>Notify the user before restarting</label>
    </li>

    <li>
        <label>Notification message:</label>
        <!-- Need to fix null propagation -->
        <textarea v-model="stepdata.value.variables.SMSRebootMessage"></textarea>
    </li>

    <li>
        <label>Message display time-out (seconds):</label>
        <input type="number" :value="stepdata.value.variables?.SMSRebootTimeout" />
    </li>
</template>

<script>
import commonProperties from './common.properties.vue'
export default {
    name: 'SMS_TaskSequence_RebootAction',
    components: { commonProperties },
    inject: ['stepdata'],
}
</script>