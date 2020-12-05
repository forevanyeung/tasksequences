<template>
    <common-properties type="Join Domain or Workgroup" :name="stepdata.name" :description="stepdata.description" />

    <p>Enter the information necessary to join a domain or workgroup.</p>

    <li>
        <input type="radio" />
        <label>Join a workgroup:</label>
        <span class="break"></span>
        <input type="text" />
    </li>

    <li>
        <input type="radio" />
        <label>Join a domain:</label>
        <span class="break"></span>
        <input type="text" />
        <button type="button">Browse...</button>
        <span class="break"></span>
        <label>Organizational unit:</label>
        <span class="break"></span>
        <input type="text" />
        <button type="button">Browse...</button>
        <label>Enter the account which has permission to join the domain.</label>
        <span class="break"></span>
        <label>Account</label>
        <input type="text" />
        <button type="button">Set...</button>
    </li>

</template>

<script>
import CommonProperties from './common.properties'

export default {
    name: 'JoinDomain',
    components: {
        CommonProperties
    },
    props: {
        stepdata: Object
    }
}
</script>