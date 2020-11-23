<template>
    <li v-for="step in list" :key="step.id" :class="{disabled: step.disabled}">
        <router-link :to="'/' + $route.params.tasksequenceid + '/' + step.id" exact-active-class="current">{{ step.name }}</router-link>

        <ul v-if="step.children">
            <step-list-sub-tree :list="step.children" />
        </ul>
    </li>
</template>

<script>
import StepListSubTree from './StepListSubTree'

export default {
    name: 'StepListSubTree',
    props: {
        list: Array
    },
    components: {
        StepListSubTree
    }
}
</script>