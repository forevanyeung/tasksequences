<template>
    <div class="window">
        <div class="title">{{ tasksequenceid }}::{{ stepid }} - Hosted by TaskSequences.com</div>
        <div class="main">
            <div class="step-list">
                <step-list :steplistdata="steplist_data"/>
            </div>

            <div class="slider" style="width:5px;"></div>

            <div class="content">
                <ul>
                    <dynamic-step-loader v-if="stepid" />
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import DynamicStepLoader from './DynamicStepLoader.vue'
import StepList from './StepList.vue'
import axios from 'axios'
import xml2js from 'xml2js'
import { computed } from 'vue'

export default {
    name: 'TaskSequenceWindow',
    data() {
        return {
            steplist_data: [],
        }
    },
    props: {
        tasksequenceid: String || Number,
        stepid: String || Number,
    },
    components: {
        StepList,
        DynamicStepLoader,
    },
    created() {
        if(!this.stepid) {
            this.$router.replace('/' + this.$route.params.tasksequenceid + '/0')
        }

        let githubURL = 'https://raw.githubusercontent.com/forevanyeung/tasksequences/tspackage-export/tasksequence1/SMS_TaskSequencePackage/RSC002A6/extracted.xml'

        let parser = new xml2js.Parser({
            preserveChildrenOrder: true,
            explicitChildren: true,
        });

        axios.get(githubURL)
            .then(response => {
                parser.parseStringPromise(response.data).then( result => {
                    let sequence = result.sequence.$$.filter( obj => {
                        return obj['#name'] === 'group' ||
                               obj['#name'] === 'step' ||
                               obj['#name'] === 'subtasksequence'
                    })

                    function assignId(node, i=0) {
                        node.forEach(n => {
                            n.id = i

                            if(n['#name'] === 'group' && n.$$) {
                                n.$.type = 'group' //doesn't belong here, but its efficient

                                assignId(n.$$, i+1)
                                i = i + n.$$.length
                            }
                            
                            i++
                        })

                        return node
                    }

                    this.steplist_data = assignId(sequence)
                })
                .catch( error => {
                    console.log(error);
                });
            })
            .catch(error => {
                console.log(error);
            });
    },
    provide() {
        return {
            stepdata: computed(() => {
                const search = (id, arr) => {
                    return arr.reduce((a, item) => {
                        // console.log(item)
                        if (a) return a;
                        if (item.id == id) return item;
                        if (item.$$) return search(id, item.$$);
                    }, null);
                }

                const step = search(this.stepid, this.steplist_data)

                const kvVarList = (varlist) => {
                    let exVarList = {}
                    varlist.forEach(v => {
                        // exVarList[v.$.name] = {
                        //     v,
                        //     value: v._
                        // }
                        exVarList[v.$.name] = v._
                    })
                    return exVarList
                }

                let stepdata
                if(step) {
                    stepdata = {
                        name: step.$.name,
                        type: step.$.type,
                        description: step.$.description,
                        variables: step.$.type === 'group' ? null : kvVarList(step.defaultVarList[0].variable),
                    }
                }

                console.log(stepdata)
                return stepdata ?? {type: 'notype'}
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .window {
        width: 650px;
        border: 2px solid #0078d7;
        color: black;
        font-family: -apple-system,BlinkMacSystemFont,sans-serif;
        font-size: 13px;
    }
    .title {
        height: 20px;
        padding: 2px;
        background: #0078d7;
        color: white;
    }
    .main {
        height: 500px;
        padding: 5px;
        background: #ccc;
        display: flex;
    }
    .step-list {
        min-width: 200px;
        max-width: 200px;
        background: white;
        border: 1px solid black;
        padding: 5px;
        overflow: scroll;
    }
</style>

<style>
    .content {
        border: 1px solid lightgrey;
        padding: 5px;
        flex: 1 1 auto;
        display: flex;
    }
    .content ul hr {
        width: 100%;
    }
    .content ul {
        /* max-width: 800px; */
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        flex: 1 0;
    }
    .content ul li {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    .content ul > li.common:not(:last-child) {
        margin-bottom: 5px;
    }
    .content ul > li:not(:last-child) {
        margin-bottom: 10px;
    }
    .content ul > li > label.short,
    .content ul li p {
        flex: 1 0 50px;
        max-width: 100px;
    }
    .content ul > li > input[type=text] {
        flex: 1 0 100px;
    }
    .break {
        flex-basis: 100%;
        height: 0;
    }

    .content ul li textarea {
        width: 100%;
        resize: none;
    }

    .content ul li.tworows {
        flex: none;
    }

    .content ul li.tworows input[type=checkbox] ~ .break + * {
        margin-left: 20px;
    }

    input[type=number]::-webkit-inner-spin-button {
        opacity: 1
    }
    input[type=text] + button {
        margin-left: 5px;
    }
</style>