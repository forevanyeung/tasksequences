const axios = require('axios');
const xml2js = require('xml2js');

let githubURL = 'https://raw.githubusercontent.com/forevanyeung/tasksequences/tspackage-export/tasksequence1/SMS_TaskSequencePackage/RSC002A6/extracted.xml'

let parser = new xml2js.Parser({
    preserveChildrenOrder: true,
    explicitChildren: true,
});

axios.get(githubURL)
    .then(response => {
        parser.parseStringPromise(response.data).then( result => {
            let sequence = result.sequence.$$.filter( obj => {
                return obj['#name'] === 'group' ||
                        obj['#name'] === 'step' ||
                        obj['#name'] === 'subtasksequence'
            })

            function getTSTypes(node) {
                node.forEach(n => {
                    console.log(n.$.type);

                    if(n['#name'] === 'group' && n.$$) {
                        getTSTypes(n.$$)
                    }
                })
            }

            getTSTypes(sequence);
        })
        .catch( error => {
            console.log(error);
        });
    })
    .catch(error => {
        console.log(error);
    });

const allTypes = [
    'SMS_TaskSequence_RunCommandLineAction',
    'SMS_TaskSequence_RunPowerShellScriptAction',
    'SMS_TaskSequence_SetDynamicVariablesAction',
    'SMS_TaskSequence_JoinDomainWorkgroupAction ',
    'SMS_TaskSequence_ConnectNetworkFolderAction',
    'SMS_TaskSequence_RebootAction',
    'SMS_TaskSequence_SetVariableAction',
    'SMS_TaskSequence_PrestartCheckAction',
    'SMS_TaskSequence_SubTasksequence',

    'SMS_TaskSequence_InstallApplicationAction',
    'SMS_TaskSequence_InstallSoftwareAction',
    'SMS_TaskSequence_InstallUpdateAction',
    'SMS_TaskSequence_DownloadPackageContentAction',

    'SMS_TaskSequence_PartitionDiskAction',
    'SMS_TaskSequence_ConvertDiskAction',
    'SMS_TaskSequence_EnableBitLockerAction',
    'SMS_TaskSequence_DisableBitLockerAction',
    'SMS_TaskSequence_OfflineEnableBitLockerAction',

    'SMS_TaskSequence_RequestStateStoreAction',
    'SMS_TaskSequence_CaptureUserStateAction',
    'SMS_TaskSequence_RestoreUserStateAction',
    'SMS_TaskSequence_ReleaseStateStoreAction',

    'SMS_TaskSequence_ApplyOperatingSystemAction',
    'SMS_TaskSequence_ApplyDataImageAction',
    'SMS_TaskSequence_SetupWindowsAndSMSAction',
    'SMS_TaskSequence_UpgradeOperatingSystemAction',
    'SMS_TaskSequence_InstallDeployToolsAction',
    'SMS_TaskSequence_PrepareSMSClientAction',
    'SMS_TaskSequence_PrepareOSAction',
    'SMS_TaskSequence_CaptureSystemImageAction',

    'SMS_TaskSequence_AutoApplyAction',
    'SMS_TaskSequence_ApplyDriverPackageAction',

    'BDD_UsePackage',
    'BDD_InstallLanguagePacksOffline',
    'BDD_InstallLanguagePacksOnline',
    'BDD_RunPowerShellAction',
    'BDD_ExecuteRunbook',
    'BDD_Gather',
    'BDD_Validate',
    'BDD_InstallRoles',
    'BDD_UninstallRoles',
    'BDD_ConfigureADDS',
    'BDD_ConfigureDNS',
    'BDD_ConfigureDHCP',
    'BDD_InstallUpdatesOffline',

    'SMS_TaskSequence_CaptureNetworkSettingsAction',
    'SMS_TaskSequence_CaptureWindowsSettingsAction',
    'SMS_TaskSequence_ApplyNetworkSettingsAction',
    'SMS_TaskSequence_ApplyWindowsSettingsAction',
    'SMS_TaskSequence_ApplyWindowsSettingsAction',
]

allTypes.forEach( n => {
    //SMS_TaskSequence_PartitionDiskAction: defineAsyncComponent( () => import('./steps/formatdisk.properties') ),
    console.log(`${n}: defineAsyncComponent(() => import('./steps/${n}.vue')),`);

    //copyfile.js
    const fs = require('fs');

    // destination will be created or overwritten by default.
    fs.copyFile('./src/components/steps/group.properties.vue', `./src/components/steps/${n}.vue`, (err) => {
    if (err) throw err;
    // console.log('File was copied to destination');
    });
})