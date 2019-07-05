/*

$sum
------------------------
Calculates and returns the sum of numeric values. $sum ignores non-numeric values.
$sum is available in the $group and $project stages.

Non-Numeric or Non-Existent Fields
----------------------------------
If used on a field that contains both numeric and non-numeric values, $sum ignores the non-numeric values and returns the sum of the numeric values.
If used on a field that does not exist in any document in the collection, $sum returns 0 for that field.

Use in $group Stage
-------------------
When used in the $group stage, $sum has the following syntax and returns the collective sum of all the numeric values that result
from applying a specified expression to each document in a group of documents that share the same group by key
In the $group stage, if the expression resolves to an array, $sum treats the operand as a non-numerical value.

{ "_id" : 1, "item" : "abc", "price" : 10, "quantity" : 2, "date" : ISODate("2014-01-01T08:00:00Z") }
{ "_id" : 2, "item" : "jkl", "price" : 20, "quantity" : 1, "date" : ISODate("2014-02-03T09:00:00Z") }
{ "_id" : 3, "item" : "xyz", "price" : 5, "quantity" : 5, "date" : ISODate("2014-02-03T09:05:00Z") }
{ "_id" : 4, "item" : "abc", "price" : 10, "quantity" : 10, "date" : ISODate("2014-02-15T08:00:00Z") }
{ "_id" : 5, "item" : "xyz", "price" : 5, "quantity" : 10, "date" : ISODate("2014-02-15T09:05:00Z") }



db.sales.aggregate(
   [
     {
       $group:
         {
           _id: { day: { $dayOfYear: "$date"}, year: { $year: "$date" } },
           totalAmount: { $sum: { $multiply: [ "$price", "$quantity" ] } },
           count: { $sum: 1 }
         }
     }
   ]
)


The operation returns the following results:

{ "_id" : { "day" : 46, "year" : 2014 }, "totalAmount" : 150, "count" : 2 }
{ "_id" : { "day" : 34, "year" : 2014 }, "totalAmount" : 45, "count" : 2 }
{ "_id" : { "day" : 1, "year" : 2014 }, "totalAmount" : 20, "count" : 1 }



Use in $project Stage
--------------------
When used in the $project stage, $sum returns the sum of the specified expression or list of expressions for each document

In the $project stage:
    1  With a single expression as its operand, if the expression resolves to an array, $sum traverses into the array to operate on the numerical elements of the array to return a single value.
    2. With a list of expressions as its operand, if any of the expressions resolves to an array, $sum does not traverse into the array but instead treats the array as a non-numerical value.

{ "_id": 1, "quizzes": [ 10, 6, 7 ], "labs": [ 5, 8 ], "final": 80, "midterm": 75 }
{ "_id": 2, "quizzes": [ 9, 10 ], "labs": [ 8, 8 ], "final": 95, "midterm": 80 }
{ "_id": 3, "quizzes": [ 4, 5, 5 ], "labs": [ 6, 5 ], "final": 78, "midterm": 70 }


db.students.aggregate([
   {
     $project: {
       quizTotal: { $sum: "$quizzes"},
       labTotal: { $sum: "$labs" },
       examTotal: { $sum: [ "$final", "$midterm" ] }
     }
   }
])


The operation results in the following documents:

{ "_id" : 1, "quizTotal" : 23, "labTotal" : 13, "examTotal" : 155 }
{ "_id" : 2, "quizTotal" : 19, "labTotal" : 16, "examTotal" : 175 }
{ "_id" : 3, "quizTotal" : 14, "labTotal" : 11, "examTotal" : 148 }

*/