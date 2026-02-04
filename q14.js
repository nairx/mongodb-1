db.employees.find({}, { name: 1, dept: "$department" });

db.users.insertOne({
  name: "Ria",
  age: 21,
  address: { addr1: "25 Dr lane", city: "Jax", state: "FL" },
});

db.users.find({}, { name: 1, age: 1, "address.city": 1 });

db.users.find({},{
   name:1,
   age:1,
   city:"$address.city",
   state:"$address.state"
})

//Add Skills array for all users
//and populate Java, Python

db.users.updateMany(
   {},
   {$set:{Skills:["Java","Python"]}}
)

db.users.updateOne(
   {name:"Ria"},
   {$addToSet:{Skills:".NET"}}
)


db.users.find({},{
   _id:0,
   name:1,
   Skills:1
})

db.users.aggregate([
   {$project:{
      _id:0,
      name:1,
      Skills:1
   }},
   {$unwind:"$Skills"}
])



