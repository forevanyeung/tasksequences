<template>
    <common-properties type="Install Application" :name="stepdata.value.name" :description="stepdata.value.description" />
    
    <li>
        <input type="radio" name="staticordynamic" id="static"/>
        <label for="static">Install the following applications</label>
    </li>

    <div class="table">
        <table>
            <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Object ID</th>
                <th>Comments</th>
            </tr>
            <tr>
                <td>Adobe Acrobat</td>
                <td>Valid</td>
                <td>ScopeId_8675309-superduperlong</td>
                <td></td>
            </tr>
        </table>
    </div>

    <li>
        <input type="radio" name="staticordynamic" id="dynamic"/>
        <label for="dynamic">Install applications accoridng to the dynamic variable list</label>
    </li>


    <p>
        The list of applications consists of a series of task sequence varibles with a common base 
        name plus a number suffic starting at 01. Each variable value must contain application name.
    </p>

    <li>
        <label class="short" for="BaseVariableName">Base variable name:</label>
        <input type="string" id="BaseVariableName" />
    </li>

    <hr />

    <li>
        <input type="checkbox" id="ContinueOnInstallError"/>
        <label for="ContinueOnInstallError">If an application installation fails, continue installing other applications in the list</label>
    </li>

    <li>
        <input type="checkbox" id="OSDAppClearCache"/>
        <label for="OSDAppClearCache">Clear application content from cache after installing</label>
    </li>
</template>

<script>
import CommonProperties from './common.properties.vue'

export default {
    name: 'SMS_TaskSequence_InstallApplicationAction',
    components: {
        CommonProperties
    },
    inject: ['stepdata'],
}
</script>

<style scoped>
    div.table {
        height: 200px;
        background: white;
        border: 1px solid lightgrey;
        margin-bottom: 10px;
    }

    div.table table th {
        border-right: 1px solid lightgrey;
        margin: 0 15px 0 5px;
        font-weight: normal;
        text-align: left;
    }

    div.table table td {
        overflow-x: hidden;
        max-width: 100px;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>