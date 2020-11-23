<template>
    <li class="common">
        <label for="type" class="short">Type:</label>
        <input type="text" id="type" name="type" />
    </li>

    <li class="common">
        <label for="name" class="short">Name:</label>
        <input type="text" id="name" name="name" />
    </li>

    <li class="common">
        <label for="description" class="short">Description:</label>
        <input type="text" id="description" name="description" />
    </li>

    <hr />
</template>

<script>
export default {
    name: 'CommonProp'
}
</script>