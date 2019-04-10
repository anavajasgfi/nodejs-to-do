const fs = require('fs');
// const colors = require('colors/safe');

let listToDo = [];

const saveData = () => {
    let data = JSON.stringify(listToDo);

    fs.writeFile('tasks/data.json', data, (err) => {
        if (err) throw new Error(`It couldn't save the file.`);
    });
};

const loadData = () => {
    try {
        listToDo = require('../tasks/data.json');
    } catch (error) {
        listToDo = [];
    }
};

const create = (description) => {
    loadData();

    let toDo = {
        description,
        completed: false
    };

    listToDo.push(toDo);
    saveData();

    return toDo;
};

const getList = () => {
    loadData();

    return listToDo;
};

const updateTask = (description, completed) => {
    loadData();

    let index = listToDo.findIndex(task => task.description === description);

    if (index < 0) {
        return false;
    } else {
        listToDo[index].completed = completed;
        saveData();

        return true;
    }
};

const deleteTask = (description) => {
    loadData();

    let index = listToDo.findIndex(task => task.description === description);

    if (index < 0) {
        return false;
    } else {
        listToDo.splice(index);
        saveData();

        return true;
    }

    // Otra manera de hacerlo:
    // loadData();
    // let newList = listToDo.filter(task => task.description !== description);

    // if (listToDo.length === newList.length) {
    //     return false;
    // } else {
    //     listToDo = newList;
    //     saveData();
    // }
};

module.exports = {
    create,
    getList,
    updateTask,
    deleteTask
};