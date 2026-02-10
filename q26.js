//user management
//use admin
db.createUser({
  user: "admin",
  pwd: "admin",
  roles: [{ role: "root", db: "admin" }],
});


db.createUser({
  user: "user2",
  pwd: "user2",
  roles: [{ role: "read", db: "lpu26a" }],
});

//connection string
//mongosh "mongodb://user1:user1@localhost:27017/lpu26a"

