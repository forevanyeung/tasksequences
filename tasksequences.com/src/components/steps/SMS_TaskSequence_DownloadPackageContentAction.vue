<template>
    <common-properties type="Download Package COntent" :name="stepdata.value.name" :description="stepdata.value.description" />
    
    <div style="height:300px;background:white;">
        <table>
        </table>
    </div>

    <p>Place into the following location:</p>

    <li>
        <input type="radio" name="" id="" />
        <label for="">Task sequence working directory</label>
    </li>

    <li>
        <input type="radio" name="" id="" />
        <label for="">Configuration Manager client cache</label>
    </li>

    <li>
        <input type="radio" name="" id="" />
        <label for="">Custom path:</label>
        <input type="text" name="" id="">
    </li>

    <li>
        <input type="checkbox" name="" id="" />
        <label for="">Save path as a variable:</label>
        <input type="text" name="" id="" />
    </li>

    <p>
        Refer to the variable in subsequent steps, using %mycontent02% or %mycontent03%, where the number
        corresponds to the order this Download Package Content step lists the package.
    </p>

    <li>
        <input type="checkbox" name="" id="" />
        <label for="">If a package download fails, continue downloading other packages in the list</label>
    </li>
</template>

<script>
import CommonProperties from './common.properties.vue'

export default {
    name: 'SMS_TaskSequence_DownloadPackageContentAction',
    components: {
        CommonProperties
    },
    inject: ['stepdata'],
}
</script>