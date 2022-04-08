
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://narsa9633:adwith2016@cluster0.l8uq6.mongodb.net/human?retryWrites=true&w=majority');

const fruitShema = new mongoose.Schema({
  name:{
    type:String,
    required:[true, "place check your name"]
  },
  rating:{
    type:Number,
    min:1,
    max:10
  },
  review :String,
});
const Fruit = mongoose.model("Fruit", fruitShema)
const fruit = new Fruit({
  rating:10,
  review:"good for health"
})
fruit.save();


const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person",personSchema);

const person = new Person({
  name : "ajay",
  age : 31
});

//person.save();


const ornge = new Fruit({
  name:"Ornge",
  score:3,
  review:"its gives vitimin c"
})
const apple = new Fruit({
  name:"Apple",
  score:3,
  review:"its gives vitimin c"
})
/*Fruit.insertMany([ornge, apple], function(err){
  if(err){
    console.log(err);
  }else{
    console.log("success");
  }
*/

Fruit.find(function(err, fruits){
  if(err){
    console.log(err)
  }else{
    mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name)
    })
  }
})

Person.deleteMany({name:"ajay"},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("successfully deleted");
  }
});
