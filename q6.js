db.employees.find(
    {department:"HR"}
)

db.employees.find(
    {department:"HR",salary:{$gt:3000}}
)

db.employees.find(
    {$and:[{department:"HR"},{salary:{$gt:3000}}]}
)

db.employees.find(
    {$or:[{department:"HR"},{salary:{$gt:3000}}]},
    {name:1,email:1,department:1}
)