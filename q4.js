// db.employees.find({},{})

// db.employees.find({department:"HR"})

// db.employees.find(
//     {department:"HR"},
//     {_id:0,name:1}
// )

db.employees.find(
    {department:"HR",salary:3000},
    {_id:0,name:1,salary:1}
)

db.employees.find().limit(3)

db.employees.find().skip(1)

db.employees.find().limit(3).skip(1)

db.employees.find().sort({name:-1})

db.employees.find().limit(3).skip(1).sort({name:-1})

db.employees.find().count()

