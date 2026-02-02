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

