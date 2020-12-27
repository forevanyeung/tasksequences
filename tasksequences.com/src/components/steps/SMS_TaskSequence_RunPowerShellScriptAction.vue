<template>
    <common-properties type="Run PowerShell Script" :name="stepdata.value.name" :description="stepdata.value.description" />

    <li>
        <input type="radio" name="scriptsource"/>
        <label>Select a package with a PowerShell script</label>
    </li>

    <li class="tworows">
        <label>Package:</label>
        <span class="break"></span>
        <input type="text" />
        <button type="button">Browse...</button>
    </li>

    <li>
        <label>Script name:</label>
        <span class="break"></span>
        <input type="text" />
    </li>

    <li>
        <input type="radio" name="scriptsource">
        <label>Enter or paste a PowerShell script:</label>
    </li>

    <li>
        <textarea rows="7" v-model="pssourceDecoded"></textarea>
    </li>

    <li>
        <label>Parameters:</label>
        <span class="break"></span>
        <input type="text" />
    </li>

    <li>
        <label>PowerShell execution policy:</label>
        <span class="break"></span>
        <select>
            <option>{{ stepdata.value.variables?.OSDRunPowerShellScriptExecutionPolicy }}</option>
        </select>
    </li>

    <p>PowerShell v1.0 does not support Undefined or Bypass execution policies</p>
</template>

<script>
import CommonProperties from './common.properties'

export default {
    name: 'run-powershell',
    components: {
        CommonProperties
    },
    inject: ['stepdata'],
    computed: {
        pssourceDecoded() {
            // return this.stepdata.variables.OSDRunPowerShellScriptSourceScript
            // return decodeURIComponent(escape(window.atob( this.stepdata.variables.OSDRunPowerShellScriptSourceScript )))
            // getting close, need to remove the LOB character
            if(this.stepdata.value.variables?.OSDRunPowerShellScriptSourceScript) {
                return atob(this.stepdata.value.variables?.OSDRunPowerShellScriptSourceScript)
            } else {
                return null
            }
        }
    }
}
</script>