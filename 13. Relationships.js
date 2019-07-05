/*
You can create a relationship using one of the following two methods:
	1. Embedded documents.
	2. Referenced documents.
The method you use will depend on the data, and how you intend to query that data

Embedded Relationships
=====================
You can embed documents within documents. 
Therefore, a single document can contain its own relationships

One-to-One Relationship
-----------------------
A one-to-one relationship is where the parent document has one child, and the child has one parent.
For example, a business rule might say that an artist can only have one address and that the address can only belong to one artist.

	db.artists.insert(
	    {
	        _id : 2,
	        artistname : "Prince",
	        address :   {
	                        street : "Audubon Road",
	                        city : "Chanhassen",
	                        state : "Minnesota",
	                        country : "United States"
	                    }
	    }
	)

One-to-Many Relationship
------------------------
A one-to-many relationship is where the parent document can have many child documents, but the child documents can only have one parent document.

	db.artists.insert(
	    {
	        _id : 3,
	        artistname : "Moby",
	        albums : [
	                    {
	                        album : "Play",
	                        year : 1999,
	                        genre : "Electronica"
	                    }, 
	                    {
	                        album : "Long Ambients 1: Calm. Sleep.",
	                        year : 2016,
	                        genre : "Ambient"
	                    }
	                ]
	    }
	)




Document Referenced Relationships
================================
You can use a document reference to create a relationship. 
Rather than embedding the child document into the parent document, you separate the child document out into to its own stand alone document.


Parent Document

	db.artists.insert(
 	   {
 	       _id : 4,
	        artistname : "Rush"
	    }
	)


Child Documents
We'll insert 3 child documents � one for each band member:


	db.musicians.insert(
	    {
  	       _id : 9,
 	       name : "Geddy Lee",
 	       instrument : [ "Bass", "Vocals", "Keyboards" ],
               artist_id : 4
    }
)

db.musicians.insert(
    {
        _id : 10,
        name : "Alex Lifeson",
        instrument : [ "Guitar", "Backing Vocals" ],
        artist_id : 4
    }
)

db.musicians.insert(
    {
        _id : 11,
        name : "Neil Peart",
        instrument : "Drums",
        artist_id : 4
    }
)




Querying the Relationship
===========================
use $lookup to perform a left outer join on the two collections.
This, in conjunction with the aggregate() method, and $match to specify the specific artist you're interested in, 
will return parent and child documents in one.

db.artists.aggregate([
    {
      $lookup:
        {
          from: "musicians",
          localField: "_id",
          foreignField: "artist_id",
          as: "band_members"
        }
   },
   { $match : { artistname : "Rush" } }
]).pretty()


When to use Embedded Relationships
==================================
One of the main benefits of using the embedded relationship method is performance. 
When the relationship is embedded within the document, queries will run faster than if they were spread out over multiple documents
Embedded relationships also make queries easier to write.


When to use Referenced Relationships
===================================
For data that needs to be repeated across many documents

*/
