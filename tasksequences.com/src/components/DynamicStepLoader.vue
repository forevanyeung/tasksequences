<template>
    <!-- <dynamic-step-component /> -->

    <typenotfound v-if="getComponentFromType=='typenotfound'" :type="type" />
    <component v-else :is="getComponentFromType" />
</template>

<script> 
import { defineAsyncComponent } from 'vue';

export default { 
    name: "dynamic-step-loader",
    computed: {
        getComponentFromType() {
            if(this.$options.components[this.type]) {
                return this.type
            } else {
                return 'typenotfound'
            }
        }
    },
    props: { type: String },
    components: { 
        // read into asyncomponent, https://labs.thisdot.co/blog/async-components-in-vue-3
        // DynamicStepComponent: defineAsyncComponent({
        //     loader: () => {
        //         console.log($options)
        //         // import(`./steps/${this?.type}.properties`)

        //         return import(`./steps/group.properties`)
        //     }
        //     // loader: () => import(`./steps/${this?.type}.properties`)
        //     // loader: () => import(`./steps/group.properties.vue`)
        // }),

        typenotfound: defineAsyncComponent( () => import('./steps/_notype') ),
        group: defineAsyncComponent( () => import('./steps/group.properties') ),
        SMS_TaskSequence_PartitionDiskAction: defineAsyncComponent( () => import('./steps/formatdisk.properties') ),
        SMS_TaskSequence_RunCommandLineAction: defineAsyncComponent( () => import('./steps/runcommand.properties') ),
        SMS_TaskSequence_RunPowerShellScriptAction: defineAsyncComponent( () => import('./steps/runpowershell.properties') ),
        SMS_TaskSequence_SetDynamicVariablesAction: defineAsyncComponent( () => import('./steps/dynamicvariables.properties') ),
        SMS_TaskSequence_JoinDomainWorkgroupAction: defineAsyncComponent( () => import('./steps/joindomain.properties')),
        SMS_TaskSequence_ConnectNetworkFolderAction: defineAsyncComponent( () => import('./steps/networkfolder.properties')),
        SMS_TaskSequence_RebootAction: defineAsyncComponent( () => import('./steps/restart.properties')),
        SMS_TaskSequence_SetVariableAction: defineAsyncComponent( () => import('./steps/tasksequencevariable.properties'))
    },
}; 
</script>