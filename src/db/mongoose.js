const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false,
})






// const todo = new Task({
//     description: 'Learn MONGODB',
// })

// todo.save().then(() => {
//     console.log(todo)
// }).catch((error) => {
//     console.log(error)
// })
// const me = new User({
//     name: 'Ben',
//     age:41,
//     password:'1234567',
//     enail:'ben@gmail.com'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })

