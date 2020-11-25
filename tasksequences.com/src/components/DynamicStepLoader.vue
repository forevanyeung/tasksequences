<template>
    <!-- <dynamic-step-component /> -->

    <component :is="getComponentFromType" />
</template>

<script> 
import { defineAsyncComponent } from 'vue';

export default { 
    name: "dynamic-step-loader",
    data() {
        return {
            step_catalog: {
                group: 'Group',
                runcommand: 'Run Command Line',
                runpowershell: 'Run PowerShell Script',
                dynamicvariable: 'Set Dynamic Variables',
                joindomain: 'Join Domain or Workgroup',
                networkfolder: 'Connect to Network Folder',
                restart: 'Restart Computer',
                tasksequencevariable: 'Set Task Sequence Variables',
                checkreadiness: 'Check Readiness',
                runtasksequence: 'Run Task Sequence',
                installapplication: 'Install Application',
                installsoftware: 'Install Software',
                installupdates: 'Install Software Updates',
                downloadpackage: 'Download Package Contents',
                formatdisk: 'Format and Partition Disk',
                convertdynamic: 'Convert Disk to Dynamic',
                enablebitlocker: 'Enable BitLocker',
                disablebitlocker: 'Disable BitLocker',
                provisionbitlocker: 'Pre-provision BitLocker',
            },
            testtype: 'formatdisk.properties'
        }
    },
    computed: {
        getComponentFromType() {
            if(this.$options.components[this.type]) {
                return this.type
            } else {
                return '_typenotfound'
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

        _typenotfound: defineAsyncComponent( () => import('./steps/_notype') ),
        group: defineAsyncComponent( () => import('./steps/group.properties') ),
        formatdisk: defineAsyncComponent( () => import('./steps/formatdisk.properties') ),
        runcommand: defineAsyncComponent( () => import('./steps/runcommand.properties') ),
        runpowershell: defineAsyncComponent( () => import('./steps/runpowershell.properties') ),
        dynamicvariables: defineAsyncComponent( () => import('./steps/dynamicvariables.properties') ),
        joindomain: defineAsyncComponent( () => import('./steps/joindomain.properties')),
        networkfolder: defineAsyncComponent( () => import('./steps/networkfolder.properties')),
        restart: defineAsyncComponent( () => import('./steps/restart.properties')),
        tasksequencevariable: defineAsyncComponent( () => import('./steps/tasksequencevariable.properties'))
    },
}; 
</script>