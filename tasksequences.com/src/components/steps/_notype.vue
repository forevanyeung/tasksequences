<template>
    <p>Task Sequence type not found: {{type}}</p>
</template>

<script>
export default {
    name: 'notype',
    props: [
        'type'
    ]
}
</script>