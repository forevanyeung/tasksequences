<template>
    <!-- <dynamic-step-component /> -->

    <!-- <typenotfound v-if="getComponentFromType=='typenotfound'" :type="type" :name="name" :description="description" :data="data"/> -->
    <!-- <component v-else :is="getComponentFromType" /> -->
    <component :is="getComponentFromType" />
</template> 

<script> 
import { defineAsyncComponent } from 'vue';

export default { 
    name: "dynamic-step-loader",
    computed: {
        getComponentFromType() {
            if(this.$options.components[this.stepdata.value.type]) {
                return this.stepdata.value.type
            } else {
                return 'typenotfound'
            }
        }
    },
    inject: ['stepdata'],
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

        SMS_TaskSequence_RunCommandLineAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_RunCommandLineAction.vue')),
        SMS_TaskSequence_RunPowerShellScriptAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_RunPowerShellScriptAction.vue')),
        SMS_TaskSequence_SetDynamicVariablesAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_SetDynamicVariablesAction.vue')),
        SMS_TaskSequence_JoinDomainWorkgroupAction : defineAsyncComponent(() => import('./steps/SMS_TaskSequence_JoinDomainWorkgroupAction.vue')),
        SMS_TaskSequence_ConnectNetworkFolderAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_ConnectNetworkFolderAction.vue')),
        SMS_TaskSequence_RebootAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_RebootAction.vue')),
        SMS_TaskSequence_SetVariableAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_SetVariableAction.vue')),
        SMS_TaskSequence_PrestartCheckAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_PrestartCheckAction.vue')),
        SMS_TaskSequence_SubTasksequence: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_SubTasksequence.vue')),
        
        // SMS_TaskSequence_InstallApplicationAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_InstallApplicationAction.vue')),
        // SMS_TaskSequence_InstallSoftwareAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_InstallSoftwareAction.vue')),
        // SMS_TaskSequence_InstallUpdateAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_InstallUpdateAction.vue')),
        // SMS_TaskSequence_DownloadPackageContentAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_DownloadPackageContentAction.vue')),
        
        // SMS_TaskSequence_PartitionDiskAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_PartitionDiskAction.vue')),
        // SMS_TaskSequence_ConvertDiskAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_ConvertDiskAction.vue')),
        // SMS_TaskSequence_EnableBitLockerAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_EnableBitLockerAction.vue')),
        // SMS_TaskSequence_DisableBitLockerAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_DisableBitLockerAction.vue')),
        // SMS_TaskSequence_OfflineEnableBitLockerAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_OfflineEnableBitLockerAction.vue')),
        
        // SMS_TaskSequence_RequestStateStoreAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_RequestStateStoreAction.vue')),
        // SMS_TaskSequence_CaptureUserStateAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_CaptureUserStateAction.vue')),
        // SMS_TaskSequence_RestoreUserStateAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_RestoreUserStateAction.vue')),
        // SMS_TaskSequence_ReleaseStateStoreAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_ReleaseStateStoreAction.vue')),
        
        // SMS_TaskSequence_ApplyOperatingSystemAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_ApplyOperatingSystemAction.vue')),
        // SMS_TaskSequence_ApplyDataImageAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_ApplyDataImageAction.vue')),
        // SMS_TaskSequence_SetupWindowsAndSMSAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_SetupWindowsAndSMSAction.vue')),
        // SMS_TaskSequence_UpgradeOperatingSystemAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_UpgradeOperatingSystemAction.vue')),
        // SMS_TaskSequence_InstallDeployToolsAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_InstallDeployToolsAction.vue')),
        // SMS_TaskSequence_PrepareSMSClientAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_PrepareSMSClientAction.vue')),
        // SMS_TaskSequence_PrepareOSAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_PrepareOSAction.vue')),
        // SMS_TaskSequence_CaptureSystemImageAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_CaptureSystemImageAction.vue')),
        
        // SMS_TaskSequence_AutoApplyAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_AutoApplyAction.vue')),
        // SMS_TaskSequence_ApplyDriverPackageAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_ApplyDriverPackageAction.vue')),
        
        // BDD_UsePackage: defineAsyncComponent(() => import('./steps/BDD_UsePackage.vue')),
        // BDD_InstallLanguagePacksOffline: defineAsyncComponent(() => import('./steps/BDD_InstallLanguagePacksOffline.vue')),
        // BDD_InstallLanguagePacksOnline: defineAsyncComponent(() => import('./steps/BDD_InstallLanguagePacksOnline.vue')),
        // BDD_RunPowerShellAction: defineAsyncComponent(() => import('./steps/BDD_RunPowerShellAction.vue')),
        // BDD_ExecuteRunbook: defineAsyncComponent(() => import('./steps/BDD_ExecuteRunbook.vue')),
        // BDD_Gather: defineAsyncComponent(() => import('./steps/BDD_Gather.vue')),
        // BDD_Validate: defineAsyncComponent(() => import('./steps/BDD_Validate.vue')),
        // BDD_InstallRoles: defineAsyncComponent(() => import('./steps/BDD_InstallRoles.vue')),
        // BDD_UninstallRoles: defineAsyncComponent(() => import('./steps/BDD_UninstallRoles.vue')),
        // BDD_ConfigureADDS: defineAsyncComponent(() => import('./steps/BDD_ConfigureADDS.vue')),
        // BDD_ConfigureDNS: defineAsyncComponent(() => import('./steps/BDD_ConfigureDNS.vue')),
        // BDD_ConfigureDHCP: defineAsyncComponent(() => import('./steps/BDD_ConfigureDHCP.vue')),
        // BDD_InstallUpdatesOffline: defineAsyncComponent(() => import('./steps/BDD_InstallUpdatesOffline.vue')),
        
        // SMS_TaskSequence_CaptureNetworkSettingsAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_CaptureNetworkSettingsAction.vue')),
        // SMS_TaskSequence_CaptureWindowsSettingsAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_CaptureWindowsSettingsAction.vue')),
        // SMS_TaskSequence_ApplyNetworkSettingsAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_ApplyNetworkSettingsAction.vue')),
        // SMS_TaskSequence_ApplyWindowsSettingsAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_ApplyWindowsSettingsAction.vue')),
        // SMS_TaskSequence_ApplyWindowsSettingsAction: defineAsyncComponent(() => import('./steps/SMS_TaskSequence_ApplyWindowsSettingsAction.vue')),
    },
}; 
</script>