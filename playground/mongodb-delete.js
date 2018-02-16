// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
  return  console.log('Unable to connect to mongo db server');
}
console.log('Conmected to mongo DB server');

//deleteMany
// db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) =>{
// console.log(result);
// });
//deleteOne
// db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
//     console.log(result);
// })

//findOneAndDelete

// db.collection('Todos').findOneAndDelete({completed:false}).then((result) =>{
// console.log(result);
// });
// db.collection('Users').deleteMany({name:'Pranal'}).then((result) =>{
//      console.log(result);
// });
db.collection('Users').findOneAndDelete({
    _id:new ObjectID("5a82928d1feafb0fc4e4cf83")
}).then((results)=>{
    console.log(JSON.stringify(results,undefined,2));
});

// db.collection('Users').findOneAndDelete({name:'Pranal'}).then((result) =>{
//     console.log(result);
// });

// db.close();
});