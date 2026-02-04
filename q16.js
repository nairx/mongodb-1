db.orders.aggregate([
  {
    $project: {
      _id: 0,
      empid: 1,
      orderValue: 1,
    },
  },
]);

db.orders.aggregate([
  {
    $lookup: {
      from: "employees",
      localField: "empid",
      foreignField: "_id",
      as: "users",
    },
  },
]);

db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empid",
      as: "orders",
    },
  },
]);

db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empid",
      as: "orders",
    },
  },
  { $unwind: "$orders" },
  {
    $project: {
      name: 1,
      product: "$orders.product",
      orderValue: "$orders.orderValue",
    },
  },
]);

db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      let: { uid: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$empid", "$$uid"] },
          },
        },
      ],
      as: "orders",
    },
  },
  {
    $project: {
      name: 1,
      product: "$orders.product",
      orderValue: "$orders.orderValue",
    },
  },
]);

db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      let: { uid: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$empid", "$$uid"] },
          },
        },
      ],
      as: "orders",
    },
  },
  { $unwind: "$orders" },
  {
    $project: {
      name: 1,
      product: "$orders.product",
      orderValue: "$orders.orderValue",
    },
  },
]);

db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      let: { uid: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$empid", "$$uid"] },
          },
        },
        {
          $project: {
            _id: 0,
            empid: 1,
            product: 1,
            orderValue: 1,
          },
        },
      ],
      as: "orders",
    },
  },
]);

db.empDetails.insertOne({
    empid:ObjectId("6980355671d308ebb027caa5"),
    city:"Hyderabad",
    State:"Telangana"
})

db.employees.aggregate([
    {$lookup:{
        from:"orders",
        localField:"_id",
        foreignField:"empid",
        as:"orders"
    }},
    {$lookup:{
        from:"empDetails",
        localField:"_id",
        foreignField:"empid",
        as:"empDetails"
    }}
])