const {ObjectID}= require('mongodb');

const {mongoose}= require('./../server/db/mongoose');
const {Todo}= require('./../server/models/todo');
const{User}= require('./../server/models/user')


// Todo.remove({}).then((result)=>{
 
//     console.log(result);
// });

// Todo.findOneAndRemove({_id:'5a9a3f34b735f5c3cdaa9f00'}).then
Todo.findByIdAndRemove('5a9a3f34b735f5c3cdaa9f00').then((todo)=>{
console.log(todo);
});