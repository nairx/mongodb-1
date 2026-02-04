db.orders.aggregate([
    {$project:{
        _id:0,
        empid:1,
        orderValue:1
    }}
])

db.orders.aggregate([
    {$lookup:{
        from:"employees",
        localField:"empid",
        foreignField:"_id",
        as:"users"
    }}
])

db.employees.aggregate([
    {$lookup:{
        from:"orders",
        localField:"_id",
        foreignField:"empid",
        as:"orders"
    }}
])


db.employees.aggregate([
    {$lookup:{
        from:"orders",
        localField:"_id",
        foreignField:"empid",
        as:"orders"
    }},
    {$unwind:"$orders"},
    {$project:{
        name:1,
        product:"$orders.product",
        orderValue:"$orders.orderValue"
    }}
])