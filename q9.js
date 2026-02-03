db.employees.find(
    {location:"FL"}
)

db.employees.updateOne(
    {email:"mike@gmail.com"},
    {$push:{location:"AZ"}}
)

db.employees.updateOne(
    {email:"mike@gmail.com"},
    {$pop:{location:1}}
)

// Create a new field skills 
// and add Python as array

db.employees.updateMany(
    {},
    {$push:{skills:"Java"}}
 )

 db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$push:{skills:".NET"}}
 )

  db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$push:{skills:"Python"}}
 )

   db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$pop:{skills:1}}
 )

  db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$addToSet:{skills:"Java"}}
 )

  db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$pull:{skills:"Python"}}
 )



