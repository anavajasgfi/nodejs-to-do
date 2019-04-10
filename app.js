const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const colors = require('colors');

let command = argv._[0];

switch (command) {
    case 'create':
        let task = toDo.create(argv.description);

        console.log('Task added: ', task);
        break;

    case 'list':
        let taskList = toDo.getList();

        for (let task of taskList) {
            console.log('========= To do ========='.green);
            console.log('Task: ', task.description);
            console.log('Status: ', task.completed);
            console.log('========================='.green);
        }
        break;

    case 'updateTask':
        let updated = toDo.updateTask(argv.description, argv.completed);
        console.log(updated);
        break;

    case 'deleteTask':
        let deleted = toDo.deleteTask(argv.description);
        console.log(deleted);
        break;
    default:
        console.log('Unknowm command.');
        break;
}