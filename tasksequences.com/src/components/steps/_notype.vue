<template>
    <p>Step template not available: {{ stepdata.value.type }}</p>
    <p>{{ stepdata.value.variables }}</p>
</template>

<script>
export default {
    name: 'notype',
    inject: ['stepdata'],
}
</script>