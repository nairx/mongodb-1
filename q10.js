db.employees.find({ email: "brian@gmail.com" }).explain("executionStats");

db.employees.createIndex({ email: 1 });

db.employees.getIndexes();

db.employees.dropIndex("email_1")

db.employees.insertOne({name:abc})


db.employees.find().collation({ locale: "en", strength: 2 }).sort({ name: 1 });


