<template>
    <li class="common">
        <label for="type" class="short">Type:</label>
        <input type="text" id="type" name="type" :value="type" disabled />
    </li>

    <li class="common">
        <label for="name" class="short">Name:</label>
        <input type="text" id="name" name="name" :value="name" readonly />
    </li>

    <li class="common">
        <label for="description" class="short">Description:</label>
        <input type="text" id="description" name="description" :value="description" readonly />
    </li>

    <hr />
</template>

<script>
export default {
    name: 'CommonProp',
    props: [
        'type',
        'name',
        'description'
    ]
}
</script>