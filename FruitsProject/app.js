//jshitt esversion:6


const mongoose = require ('mongoose') ;

mongoose.connect ("mongodb://localhost:27017/fruitDB")

const fruitSchema = new mongoose.Schema ( { 
	name : {
	type : String,
	required : [ true, "No name,No game!"]
},
	rating : {
	type : Number,
	min : 1,
	max : 10 
},
	review : String
	
});
	
const Fruit = mongoose.model("Fruit", fruitSchema) ;


const fruit = new Fruit ({
	name : "Apple",
	rating : 34,
	review : "Great fruit,i love it"
 });
 
 //fruit.save();
	

//const pineapple  = new Fruit ({
//	name : "Pineapple",
//	rating : 8,
//	review : "Nice one,i like it!"
//});


//pineapple.save();

const mango = new Fruit ({
	name : "Mango",
	rating: 6,
	review : "It's ok."
});

mango.save();




const personSchema = new mongoose.Schema ({
	name : String,
	age: Number,
	review : String,
	favouriteFruit: fruitSchema
});

const Person = mongoose.model( "Person", personSchema) ;



//const person = new Person ({
//	name : "Kleio",
//	age : 23,
//	review : "Best person ever!",
//	favouriteFruit: pineapple
//
//});



Person.updateOne({name : "Othon"},{favouriteFruit : mango},function(err){
	if (err){ 
	console.log(err)
	} else {
	console.log("Succesfully updated document");
}
});
	

//person.save() ;


//const kiwi = new Fruit ({
//	name : "Kiwi",
//	rating : 10 ,
//	review : "The best fruit!"
//});

//const orange= new Fruit ({
//	name : "Orange",
//	rating : 4 , 
//	review : "Too sour for me!"
//});


//const banana= new Fruit ({
//	name : "banana",
//	rating: 3,
//	review : "Weird Texture"
//});


//Fruit.insertMany ( [ kiwi, orange, banana ], function (err) {
//	if (err) {
//	console.log(err);
//	} else {
//		console.log("Succesfully savel all the fruits to fruitsDB");
//	}
// });


Fruit.find(function(err, fruits){
	if (err) {
	console.log(err);
	} else {
	
	mongoose.connection.close()
	
	fruits.forEach(function(fruit){
		console.log(fruit.name);
	
	});
	
	}
});


//Fruit.updateOne( {id: "PUT THE ID HERE DONT PRESS IT OTHERWISE"}, {name : "Peach"}, function(err){
//	if (err){
//		console.log(err);
//	} else { 
//	console.log("Succesfully updated the document.")
//	}
//});


//Fruit.deleteOne({name : "Kiwi"}, function(err){
//	if (err){
//		console.log(err);
//	} else {
//		console.log("Successfully deleted the document " )
//		}
//	});
	
//Person.deleteMany({name: "Othon"}, function(err){
//	if (err) {
//		console.log(err);
//	} else {
//		console.log("Succesfully deleted the documents.") ;
//	}
//}) ;




