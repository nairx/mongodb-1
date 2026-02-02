db.employees.find(
    {department:"HR"}
)

db.employees.find(
    {department:{$eq:"HR"}}
)

db.employees.find(
    {salary:{$eq:3000}}
)

db.employees.find(
    {salary:{$gt:3000}}
)
db.employees.find(
    {salary:{$gte:3000}}
)

db.employees.find(
    {salary:{$ne:3000}}
)

db.employees.find(
    {salary:{$lt:3000}}
)

db.employees.find(
    {salary:{$lte:3000}}
)