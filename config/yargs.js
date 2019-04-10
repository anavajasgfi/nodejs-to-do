const description = {
    demand: true,
    alias: 'd',
    desc: `Task's description.`
};

const argv = require('yargs')
    .command('create', 'Add a task to do.', { description })
    .command('updateTask', 'Update a task.', {
        description,
        completed: {
            alias: 'c',
            default: true,
            desc: `Is the task done? ("true" by default).`
        }
    })
    .command('list', 'Show all the tasks.')
    .command('deleteTask', 'Delete a task.', { description })
    .help()
    .argv;

module.exports = {
    argv
};