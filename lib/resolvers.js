'use strict'

const courses = [
    {
        _id: 'anyid',
        title: 'Mi titulo 1',
        teacher: 'Mi profesor',
        description: 'Una descripcion',
        topic: 'Programación'
    },
    {
        _id: 'anyid',
        title: 'Mi titulo 2',
        teacher: 'Mi profesor',
        description: 'Una descripcion',
        topic: 'Programación'
    },
    {
        _id: 'anyid',
        title: 'Mi titulo 3',
        teacher: 'Mi profesor',
        description: 'Una descripcion',
        topic: 'Programación'
    }
]

module.exports = {
    getCourses: () => {
        return courses
    }
}

