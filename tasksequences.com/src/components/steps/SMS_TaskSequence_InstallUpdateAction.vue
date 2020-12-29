<template>
    <common-properties type="Install Software Updates" :name="stepdata.value.name" :description="stepdata.value.description" />
    
    <p>Install software updates based on the types of software update deployment</p>

    <li>
        <input type="radio" v-model="stepdata.value.variables.SMSInstallUpdateTarget" value="Mandatory" id="SMSInstallUpdateTarget_Mandatory" />
        <label for="SMSInstallUpdateTarget_Mandatory">Required for installation - Mandatory software updates only</label>
    </li>

    <li>
        <input type="radio" v-model="stepdata.value.variables.SMSInstallUpdateTarget" value="All" id="SMSInstallUpdateTarget_All" />
        <label for="SMSInstallUpdateTarget_All">Available for installation - All software updates</label>
    </li>

    <hr />

    <li>
        <input type="checkbox" v-model="stepdata.value.variables.SMSTSSoftwareUpdateScanUseCache" id="SMSTSSoftwareUpdateScanUseCache" />
        <label for="SMSTSSoftwareUpdateScanUseCache">Evalue software updates from cached scan results</label>
    </li>
</template>

<script>
import CommonProperties from './common.properties.vue'

export default {
    name: 'SMS_TaskSequence_InstallUpdateAction',
    components: {
        CommonProperties
    },
    inject: ['stepdata'],
}
</script>