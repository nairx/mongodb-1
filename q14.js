 db.users.insertMany([{name: "abc",email:"abc@gmail.com",password:"123456"},
    {name: "xyz", email:"xyz@gmail.com",password: "abc"},
     {name: "pqr", email:"pqr@gmail.com",password: "pqr"}
    
 ])

 db.users.aggregate([
    {$project: {_id: 0,name: 1,email:1}},
    { $sort: {name:1}}
 ])
 db.users.getIndexes()

 db.users.createIndex(
    {email:1}
 )

 db.users.findOne({
    email:"abc@gmail.com"
 })

 db.users.find({
    email:"pqr@gmail.com"
 })
 db.users.aggregate([
    {$match: {email:"pqr@gmail.com"}},
    {$project: {_id:0,email:1}}
 ])