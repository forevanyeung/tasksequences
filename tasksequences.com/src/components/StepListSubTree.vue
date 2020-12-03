<template>
    <li v-for="step in list" :key="step.id">
        <router-link 
            :to="'/' + $route.params.tasksequenceid + '/' + step.id" 
            exact-active-class="current">
                {{ step.$.name }}
                {{ step.id }}
        </router-link>
        

        <ul v-if="step['#name'] == 'group'">
            <step-list-sub-tree :list="step.$$" />
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