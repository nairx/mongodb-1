db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      grade: {
        $cond: [{ $gt: ["$salary", 4500] }, "Grade A", "Grade B"],
      },
    },
  },
]);

db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      grade: {
        $cond: {
          if: { $gt: ["$salary", 4500] },
          then: "Grade A",
          else: "Grade B",
        },
      },
    },
  },
]);

db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      grade: {
        $switch: {
          branches: [
            { case: { $gt: ["$salary", 4500] }, then: "Grade A" },
            { case: { $gt: ["$salary", 3000] }, then: "Grade B" },
          ],
          default: "Grade C",
        },
      },
    },
  },
]);
