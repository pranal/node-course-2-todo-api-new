// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
  return  console.log('Unable to connect to mongo db server');
}
console.log('Conmected to mongo DB server');

// db.collection('Todos').find({
//     _id:new ObjectID('5a829135d9186e14606c2ce9')
// }).toArray().then((docs) =>{
// console.log('Todos');
// console.log(JSON.stringify(docs,undefined,2));

// },(err)=>{
// console.log('Unable to fetch',err);
// });
db.collection('Users').find({name:'Pranal'}).toArray().then((docs) =>{
console.log('Todos');
console.log(JSON.stringify(docs,undefined,2));

});






// db.close();
});