//use lms

//users collection
db.users.insertOne({
  _id: "u1",
  name: "Rahul Dev",
  email: "rahul@gmail.com",
  password: "1234",
  role: "student", // student | instructor | admin
});

db.users.insertOne({
  _id: "u2",
  name: "Aryan",
  email: "aryan@gmail.com",
  password: "1234",
  role: "instructor", // student | instructor | admin
});

db.users.insertOne({
  _id: "u3",
  name: "admin",
  email: "admin@gmail.com",
  password: "1234",
  role: "admin", // student | instructor | admin
});

//course collection
db.courses.insertOne({
  _id: "c1",
  title: "MongoDB for Beginners",
  description: "Learn MongoDB from scratch",
  instructorId: "u2",
  price: 1999,
});

db.courses.insertOne({
  _id: "c2",
  title: "Nodejs for Beginners",
  description: "Learn Nodejs",
  instructorId: "u2",
  price: 2000,
});

//modules collection
db.modules.insertOne({
  _id: "m1",
  courseId: "c1",
  title: "Introduction to MongoDB",
  order: 1,
});

db.modules.insertOne({
  _id: "m2",
  courseId: "c1",
  title: "CRUD Operation",
  order: 2,
});

db.modules.insertOne({
  _id: "m3",
  courseId: "c1",
  title: "Aggregate Pipelines",
  order: 3,
});

//lesson collection
db.lessons.insertOne({
  _id: "l1",
  moduleId: "m1",
  title: "What is MongoDB?",
  description: "MongoDB is a document database.",
  order: 1,
});

//enrollment collection
db.enrollments.insertOne({
  studentId: "u1",
  courseId: "c1",
});

//lesson progress collection
db.lessonProgress.insertOne({
  studentId: "u1",
  lessonId: "l1",
  isCompleted: true,
});

//quizzes collection
db.quizzes.insertOne({
  _id: ObjectId,
  lessonId: "l1",
  questions: [
    {
      question: "MongoDB is?",
      options: ["SQL DB", "NoSQL DB", "File System"],
      correctAnswer: "NoSQL DB",
    },
  ],
});
