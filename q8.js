db.employees.find(
    {
        department:{$in:["HR","IT"]}
    }
);

db.employees.find(
    {
        department:{$nin:["HR","IT"]}
    }
);

db.employees.updateOne(
    {email:"mike@gmail.com"},
    {$set:{department:"Admin"}}
);

db.createCollection("students")

db.students.renameCollection("mystudents")

db.mystudents.drop()

db.dropDatabase("lpu26a")