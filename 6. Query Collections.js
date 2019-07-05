/*

The db.<collection_name>.find() method to query documents within a collection.

Return all Documents
-------------------
	db.musicians.find()

Add Filtering Criteria
----------------------
You can filter the results down by providing only the criteria that you're interested in.
For example, if we're only interested in Deep Purple from the artists collection:

	db.artists.find({ artistname : "Deep Purple" })


Format the Results
------------------
You might find the above results a bit hard to read. The document is returned as one long line of text.
You can use the pretty() method to format the results so that they're a bit easier to read.
Just append pretty() to the end, like this:

	db.artists.find({ artistname : "Deep Purple" }).pretty()

Specify AND Conditions
----------------------
You can specify that only documents containing two or more specified values should be returned.
In this example, we specify that only musicians who play drums and where born before 1950 should be returned. 
Only documents that match both criteria will be returned.

	db.musicians.find( { instrument: "Drums", born: { $lt: 1950 } } )

                         or

      db.musicians.find({ $and: [ {instrument: Drums}, {born:1950}] })

      db.sales.find({$and:[{_id:3},{price:5}]}).pretty()




Specify OR Conditions
---------------------
You can also specify that either one or the other value should be true. As long as one of the conditions are true, the document will be returned.
In this example, we want documents that contain musicians that either play drums, or were born before 1950.

	db.musicians.find(
   	{
 	    $or: [ { instrument: "Drums" }, { born: { $lt: 1950 } } ]
	   }
	)

        db.sales.find({$or:[{_id:3},{price:5}]}).pretty()

The $in Operator
-----------------
The $in operator allows you to provide a list of values. If a document contains any of those values, it will be returned.
	db.musicians.find({ instrument: { $in: [ "Vocals", "Guitar" ] } })



Query an Array of Documents
--------------------------

This example queries an array of documents. 
It finds albums that were released after the year 2000.

db.artists.find(
 {
	 albums: { $elemMatch: {year: { $gt: 2000 } }  }  
	} 
   ).pretty()


The db.collection.findOne() Method
-----------------------------------
You can use the db.collection.findOne() method to return one document that satisfies the specified query criteria.
db.musicians.findOne( )
               

Projection Queries
====================
A projection query is a query where you specify which fields should be returned
let's use projection to display just the name field:
the _id field is automatically included, even if you don't specify it. You can exclude this field by using a 0 against it:

db.person.find({},{firstname=1, _id:0}) // return only the firstname
db.musicians.find( { instrument: "Vocals" }, { name: 1 } ) // name & _id will be displayed
db.musicians.find( { instrument: "Vocals" }, { _id: 0, name: 1 } ) // only name will be displayed.


Mixing Inclusions and Exclusions
================================
You can't mix 1s and 0s (with the exception of the _id field). If you try to mix inclusions and exclusions, like this:

	db.musicians.find( { instrument: "Vocals" }, { name: 1, born: 0 } ) =======> this will result to an error
        db.musicians.find( { instrument: "Vocals" }, { _id: 0, instrument: 0 } ) =====> works fine

Limit the Results of a Query
============================
use the limit() method to specify a maximum number of documents for a cursor to return.
 db.artists.find( { albums: { $exists: false }} ).limit(3)

Add the skip() Method
=========================
You can use the skip() method to skip to a document within the cursor. 
In other words, you can control where MongoDB begins returning the results.

	db.artists.find( { albums: { $exists: false }} ).limit(3).skip(1)
	db.artists.find( { albums: { $exists: false }} ).skip(3)
	
db.mycol.find({},{"title":1,_id:0}).limit(1).skip(1) //display only the second document.


Sort the Results of a Query
============================
you can append the sort() method to specify how the results should be sorted. 
The sort() method specifies a sort order for the cursor.
When using the sort() method, you must provide the sort order as a parameter.
Value :1 ===> ascending
Value :-1 ===> Descending

	db.musicians.find().sort( { name: 1 } )  =====> Ascending
    db.musicians.find().sort( { name: -1 } ) =====> Descending


Multiple Fields Sort
=====================
You can sort by multiple fields. Just separate each field by a comma. 
If two or more musicians play the same instrument, the born field determines how they are sorted relative to each other.
	db.musicians.find().sort( { name: 1, born: 1 } )
	db.musicians.find().sort( { name: 1, born: -1 } )

Sort with Limit
===============
	db.musicians.find().limit(3).sort( { name: 1, born: -1 } )
	db.musicians.find().limit(3).sort( { name: -1, born: -1 } )


*/                     
                
    
 
