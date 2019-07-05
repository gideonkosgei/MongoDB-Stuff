/*
Aggregation process documents and return computed results. 
Aggregation operations group values from multiple documents together, and can perform a variety of operations on the grouped data to return a single result. 
i.e  the total number(sum), average(avg), minimum(min), maximum(max), etc. out of the group selected.
The aggregate() is the function to be used. 

Syntax
------
db.collection_name.aggregate(aggregate_operation)


pipeline
--------
In Mongo, aggregations work as a pipeline, or a list of operators/filters applied to the data. 
Operators come in three varieties: 
	1. stages 
	2. expressions
	3. accumulators
When calling aggregate on a collection, we pass a list of stage operators. 
Documents are processed through the stages in sequence, with each stage applying to each document individually.



db.stocks.insertMany([
   { name: "Infosys", qty: 100, price: 800 },
   { name: "TCS", qty: 100, price: 2000 },
   { name: "Wipro", qty: 2500, price: 300 }
])

$match (where)
--------------
$match is a stage operator with this definition: { $match: { <query> } }
This allows to filter out the documents so that we are only manipulating the documents that we care about. 
The matching expression looks and acts much like the MongoDB find function or the SQL WHERE clause.

In effect, with $match Mongo will filter the collection according to the query parameters, and only pass through 
the documents matching the query, to the next stage of the pipeline


Once we’ve filtered out the records we don’t want, we can start grouping together the ones that we do into useful subsets. 

db.stocks.aggregate([{$group : {_id : "$qty", same_qty : {$sum : 1}}}])

In the above query, we will group those documents which have the same quantities. 
So it will give us the total number of documents which has the same quantities.

The equivalent SQL is following.
---------------------------------

SELECT qty, SUM(qty) AS total
       FROM stocks
       GROUP BY same_qty



db.stocks.aggregate([
  { $match: { "price": 2000 } }
])

This will return the array of stocks that has price 2000.


We can apply other conditions and constraints by using an expression operator
For example, we can pass $or to $match and then provide a list of matchable queries, one of which must be true in order for the document to be included by the filter


db.articles.aggregate(
    [{ $match: { 
          $or: [{ 
            score: { $gt: 90 } 
          }, { 
            author: "dave" 
          }}] 
    }}]
);



db.restaurants.aggregate(
   [
		{ $match: { "borough": "Brooklyn"} },
     	{ $group: { "_id": "$cuisine", "No_of_Times": { $sum: 1 } } }
   ]
);


$skip + $limit
---------------
$skip and $limit both accept a positive integer — and do what you expect them to do: skip documents, and limit the number returned.

db.articles.aggregate([
  { $match: { score: { $gt: 60 }}},
  { $limit: 2},
  { $skip: 1 }
])

First we’re filtering the collection for documents with a field called score with a value greater than 60.
Next, we limit the number of documents to two, and then return the second one by skipping the first.




$lookup (join)
---------------
$lookup kind of functions the way a join does — it matches each document in the pipeline stage to a set of documents from another collection, 
and then returns those documents as an attribute on the current one to the next stage of the pipeline. You can even match arrays.

The syntax of this operation looks like:

{ $lookup: {
  from: <collection to join>,
  localField: <field from the input documents>,
  foreignField: <field from the documents of the "from" collection>,
  as: <output array field>
} }


// A collection Orders contains the following documents:
{ "_id" : 1, "item" : "abc", "price" : 12, "quantity" : 2 }
{ "_id" : 2, "item" : "jkl", "price" : 20, "quantity" : 1 }
{ "_id" : 3  }

// Another collection Inventory contains the following documents:
{ "_id" : 1, "sku" : "abc", description: "product 1", "instock" : 120 }
{ "_id" : 2, "sku" : "def", description: "product 2", "instock" : 80 }
{ "_id" : 3, "sku" : "ijk", description: "product 3", "instock" : 60 }
{ "_id" : 4, "sku" : "jkl", description: "product 4", "instock" : 70 }
{ "_id" : 5, "sku": null, description: "Incomplete" }
{ "_id" : 6 }


// The following aggregation operation on the orders collection joins the documents from orders with the documents from the inventory collection
 using the fields item from the orders collection and the sku field from the inventory collection:
db.orders.aggregate([
    {
      $lookup:
        {
          from: "inventory",
          localField: "item",
          foreignField: "sku",
          as: "inventory_docs"
        }
   }
])

// Returns these documents
{
  "_id" : 1,
   "item" : "abc",
  "price" : 12,
  "quantity" : 2,
  "inventory_docs" : [
    { "_id" : 1, "sku" : "abc", description: "product 1", "instock" : 120 }
  ]
}
{
  "_id" : 2,
  "item" : "jkl",
  "price" : 20,
  "quantity" : 1,
  "inventory_docs" : [
    { "_id" : 4, "sku" : "jkl", "description" : "product 4", "instock" : 70 }
  ]
}
{
  "_id" : 3,
  "inventory_docs" : [
    { "_id" : 5, "sku" : null, "description" : "Incomplete" },
    { "_id" : 6 }
  ]
}




$project (select)
-----------------------
Naturally, we’re going to want to reduce the documents into smaller objects — returning just the fields we want, or aliasing their names. 
In the SQL paradigm, this sounds like a SELECT , for Mongo it’s $project .
The $project function in MongoDB passes along the documents with only the specified fields to the next stage in the pipeline. 
This may be the existing fields from the input documents or newly computed fields.

$project: {
  _id: "$_id",
  total_books_written: "$total_books_written",
  city: "$_id"
}


or

{
        $project: {
            myyear: {$year: "$ending_date"}
        }
    },
    { 
        $match: { 
            carer_id : req.params.carer_id,
            status : 3,
            $myyear : "2015"
        }
    }




-------------------------------------------------------------------------------------------------------------------------------------------------------------

db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : 1}}}])



$sum	
	Sums up the defined value from all documents in the collection.	
	db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : "$likes"}}}])

$avg	
	Calculates the average of all given values from all documents in the collection.	
	db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$avg : "$likes"}}}])

$min	
	Gets the minimum of the corresponding values from all documents in the collection.	
	db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$min : "$likes"}}}])

$max	
	Gets the maximum of the corresponding values from all documents in the collection.	
	db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$max : "$likes"}}}])

$push	
	Inserts the value to an array in the resulting document.
	db.mycol.aggregate([{$group : {_id : "$by_user", url : {$push: "$url"}}}])

$addToSet	
	Inserts the value to an array in the resulting document but does not create duplicates.	
	db.mycol.aggregate([{$group : {_id : "$by_user", url : {$addToSet : "$url"}}}])

$first	
	Gets the first document from the source documents according to the grouping. 
	Typically this makes only sense together with some previously applied �$sort�-stage.	
	db.mycol.aggregate([{$group : {_id : "$by_user", first_url : {$first : "$url"}}}])

$last	
	Gets the last document from the source documents according to the grouping. 
	Typically this makes only sense together with some previously applied �$sort�-stage.	
	db.mycol.aggregate([{$group : {_id : "$by_user", last_url : {$last : "$url"}}}])
	
	*/