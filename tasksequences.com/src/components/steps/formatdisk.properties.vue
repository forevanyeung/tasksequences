<template>
    <CommonProp />
    <p>Select the physical disk to format and partition. Specify the partition layout to use in the list below. This action overwrites any data on the disk.</p>

    <label for="disknumber">Disk number:</label>
    <input type="text" id="disknumber" name="disknumber"> <br />

    <label for="disktype">Disk type:</label>
    <input type="text" id="disktype" name="disknumber"> <br />

    <hr />

    <label for="volume">Volume:</label> <br />
    <select name="cars" id="cars" multiple>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
    </select>
</template>

<script>
import CommonProp from './common.properties.vue'

export default {
    name: 'FormatDisk',
    components: {
        CommonProp
    }
}
</script>