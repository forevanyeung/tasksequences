<template>
    <ul class="tree">
        <step-list-sub-tree :list="steplistdata" />
    </ul>
</template>

<script>
import StepListSubTree from './StepListSubTree'

export default {
    name: 'StepList',
    components: {
        StepListSubTree
    },
    props: ['steplistdata']
}
</script>

<style>
    ul.tree {
        display: inline-block;
        white-space: nowrap;
    }
    ul.tree,
    ul.tree ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    ul.tree ul {
        margin-left: 10px;
    }
    ul.tree li {
        margin: 0;
        padding: 0 7px;
        line-height: 20px;
        color: #369;
        font-weight: bold;
        border-left: 1px dotted rgb(100, 100, 100);
    }
    ul.tree li a {
        color: black;
        text-decoration: none;
    }
    ul.tree li a.current {
        background: black;
        color: white;
    }
    ul.tree li.disabled a {
        color: darkgrey;
    }
    ul.tree li:last-child {
        border-left: none;
    }
    ul.tree li:before {
        position: relative;
        top: -0.3em;
        height: 1em;
        width: 12px;
        color: white;
        border-bottom: 1px dotted rgb(100, 100, 100);
        content: "";
        display: inline-block;
        left: -7px;
    }
    ul.tree li:last-child:before {
        border-left: 1px dotted rgb(100, 100, 100);
    }
</style>