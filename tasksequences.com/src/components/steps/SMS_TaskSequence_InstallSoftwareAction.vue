<template>
    <common-properties type="Install Package" :name="stepdata.value.name" :description="stepdata.value.description" />

    <li>
        <input type="radio" />
        <label for="">Install a single software package</label>
    </li>

    <li>
        <span>Select the software package to install </span>
        <span class="break"></span>

        <label for="" class="short">Package:</label>
        <input type="text" name="" id="" />
        <button>Browse...</button>

        <span class="break"></span>

        <label for="" class="short">Program</label>
        <select name="" id="">
            <option value=""></option>
        </select>
    </li>

    <li>
        <input type="radio" name="" id="" />
        <label for="">Install software packages accoridng to dynmaic variable list</label>
    </li>

    <p>
        The list of software packages to install consists of a series of task sequence varibles with a 
        common base name plus a numberic suffix starting at 01. Each variable value must contain a package
        ID and program name separated by a colon. 
    </p>

    <li>
        <label for="BaseVariableName">Base variable name</label>
        <input type="text" name="" id="BaseVariableName" />
    </li>

    <li>
        <input type="checkbox" name="" id="ContinueOnInstallError" />
        <label for="ContinueOnInstallError">If installation of a software pcakge fails, continue installing other packages in the list</label>
    </li>
</template>

<script>
import CommonProperties from './common.properties.vue'

export default {
    name: 'SMS_TaskSequence_InstallSoftwareAction',
    components: {
        CommonProperties
    },
    inject: ['stepdata'],
}
</script>