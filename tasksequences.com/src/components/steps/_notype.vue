<template>
    <p>Task Sequence type not found: {{ stepdata.type }}</p>
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