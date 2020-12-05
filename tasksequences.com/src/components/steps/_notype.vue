<template>
    <p>Step template not available: {{ stepdata.type }}</p>
    <p>{{ stepdata.variables }}</p>
</template>

<script>
export default {
    name: 'notype',
    props: {
        stepdata: Object
    }
}
</script>