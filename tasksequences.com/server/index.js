import express from 'express';

const app = express()


const tasksequencedata = {
    name: 'Fancy Task Sequence 1',
    author: 'should I have this',
    date: '',
    viewcount: 100,
    steps: [
        {
            id: 1,
            name: 'General',
            type: 'group',
            data: {
                description: 'asdf'
            },
            children: [
                {
                    id: 2,
                    name: 'Run Command Line',
                    type: 'runcommand',
                    data: {
                        description: 'a very informative description',
                        command: 'asdf',
                        disable64redirect: true,
                        startin: 'some/folder/',
                        isPackage: true,
                        package: 'package001',
                        isTimeout: true,
                        timeout: 15,
                        runasaccount: true,
                        account: 'contoso/admin'
                    }
                },
                {
                    id: 3,
                    name: 'Run PowerShell Script',
                    type: 'runpowershell',
                },
                {
                    id: 4,
                    name: 'Set Dynamic Variables',
                    type: 'dynamicvariables',
                },
                {
                    id: 5,
                    name: 'Join Domain or Workgroup',
                    type: 'joindomain',
                },
                {
                    id: 10,
                    name: 'Connect to Network Folder',
                    type: 'networkfolder',
                },
                {
                    id: 11,
                    name: 'Restart Computer',
                    type: 'restart',
                },
                {
                    id: 12,
                    name: 'Set Task Sequence Variable',
                    type: 'tasksequencevariable',
                },
                {
                    id: 13,
                    name: 'Check Readiness',
                    type: 'checkreadiness',
                },
                {
                    id: 14,
                    name: 'Run Task Sequence',
                    type: 'runtaskseqeunce',
                },
            ]
        },
        {
            id: 6,
            name: 'Software',
            children: [
                {
                    id: 7,
                    name: 'Install Application'
                },
                {
                    id: 8,
                    name: 'Install Software'
                },
                {
                    id: 15,
                    name: 'Install Software Updates'
                },
                {
                    id: 16,
                    name: 'Download Package Content'
                },
            ]
        },
        {
            id: 17,
            name: 'Disks',
            children: [
                {
                    id: 18,
                    name: 'Format and Partition Disk'
                },
                {
                    id: 19,
                    name: 'Convert Disk to Dynamic'
                },
                {
                    id: 20,
                    name: 'Enable BitLocker'
                },
                {
                    id: 21,
                    name: 'Disable BitLocker'
                },
                {
                    id: 22,
                    name: 'Pre-provision BitLocker'
                },
            ]
        },
        {
            id: 9,
            name: 'Disabled Group',
            disabled: true,
            children: [
                {
                    id: 23,
                    name: 'Sub-Group',
                    children: [
                        {
                            id: 24,
                            name: 'Sub-Sub-Group'
                        }
                    ]
                }
            ]
        }
    ]
}


// app.get('/', (req, res) => {
//     res.send('Hellsdfo World')
// })

app.get('/:tasksequenceid', (req, res) => {


    res.json(tasksequencedata.steps)
})

app.get('/:tasksequenceid/:stepid', (req, res) => {
    const search = (id, arr) => {
        return arr.reduce((a, item) => {
            // console.log(item)
            if (a) return a;
            if (item.id == id) return item;
            if (item.children) return search(id, item.children);
        }, null);
    }

    res.json(search(req.params.stepid, tasksequencedata.steps))
})

// app.post('/upload', (req, res) => {
//
// })

app.listen(8081, () => {
    console.log('Listening on port http://localhost:8081')
})