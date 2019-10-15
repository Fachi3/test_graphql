'use strict'

const courses = [
    {
        _id: "anyid1",
        title: 'Mi titulo 1',
        teacher: 'Mi profesor',
        description: 'Una descripcion',
        topic: 'Programación'
    },
    {
        _id: "anyid2",
        title: 'Mi titulo 2',
        teacher: 'Mi profesor',
        description: 'Una descripcion',
        topic: 'Programación'
    },
    {
        _id: "anyid3",
        title: 'Mi titulo 3',
        teacher: 'Mi profesor',
        description: 'Una descripcion',
        topic: 'Programación'
    }
]

module.exports = {
    Query: {
        getCourses: () => {
            return courses
        },
        getCourse: (root, args) => {
            const course = courses.filter(course => course._id === args.id)
            return course.pop()
        }
    }
}

