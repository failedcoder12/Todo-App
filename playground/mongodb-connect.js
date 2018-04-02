
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);
// var user = {name: 'Divyansh', age: 25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017', (err, client)=> {
	if (err){
		return console.log('Unable to connect to MongoDB server');
	}

	var db = client.db('TodoApp');

	console.log('Connected to MongoDB server');

	//DB insert----------------------------------------------------------------------

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err,result)=>{
	// 	if(err){
	// 		return console.log('Unable to connect to server,err');
	// 	}
	// 	//result.ops is the complete array od documents
	// 	console.log(JSON.stringify(result.ops,undefined,2));
	// 	console.log(result.ops[0]._id.getTimestamp());
	// });

	//DB find --------------------------------------------------------------------------

	// db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs,undefined,2));
	// },(err) => {
	// 	console.log('Unable to fetch todos',err);
	// });

	// db.collection('Todos').find({_id: new ObjectID('5ac229b6bce7030e2b9d33ce')}).toArray().then((docs)=>{
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs,undefined,2));
	// },(err) => {
	// 	console.log('Unable to fetch todos',err);
	// });

	//DB count ---------------------------------------------------------------------------

	// db.collection('Todos').find().count().then((count)=>{
	// 	console.log('Todos count: ',count);
	// },(err) => {
	// 	console.log('Unable to fetch todos',err);
	// });
	// client.close();

	// DB delete-------------------------------------------------------------------------

	//delete many

	// db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result)=>{
	// 	console.log(result);
	// });

	//delete one
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
	// 	console.log(result);
	// });

	//findONe and delete
	db.collection('Todos').findOneAndDelete({completed: true}).then((result)=>{
		console.log(result);
	});
});

