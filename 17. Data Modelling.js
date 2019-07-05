/*
The key challenge in data modeling is balancing the needs of the application, the performance characteristics of the database engine, and the data retrieval patterns
The key decision in designing data models for MongoDB applications revolves around the structure of documents and how the application represents relationships between data.
MongoDB allows related data to be embedded within a single document.

Embedded documents capture relationships between data by storing related data in a single document structure. 
These denormalized data models allow applications to retrieve and manipulate related data in a single database operation.



Some considerations while designing Schema in MongoDB
-----------------------------------------------------
1.Design your schema according to user requirements.
2.Combine objects into one document if you will use them together. Otherwise separate them (but make sure there should not be need of joins).
3.Duplicate the data (but limited) because disk space is cheap as compare to compute time.
4.Do joins while write, not on read.
5.Optimize your schema for most frequent use cases.
6.Do complex aggregation in the schema.



Example
Suppose a client needs a database design for his blog/website and see the differences between RDBMS and MongoDB schema design. Website has the following requirements.

1. Every post has the unique title, description and url.
2. Every post can have one or more tags.
3. Every post has the name of its publisher and total number of likes.
4. Every post has comments given by users along with their name, message, data-time and likes.
5. On each post, there can be zero or more comments.


In RDBMS schema, design for above requirements will have minimum three tables.

RDBMS Schema Design
--------------------

comments            post                Tag List
--------            ----------          -----------
comment_id          id                  id
post_id             title               post_id
by_user             description         tag
message             url
date_time           likes
likes               post_by



MongoDB schema
---------------

design will have one collection post and the following structure −

{
   _id: POST_ID
   title: TITLE_OF_POST, 
   description: POST_DESCRIPTION,
   by: POST_BY,
   url: URL_OF_POST,
   tags: [TAG1, TAG2, TAG3],
   likes: TOTAL_LIKES, 
   comments: [	
      {
         user:'COMMENT_BY',
         message: TEXT,
         dateCreated: DATE_TIME,
         like: LIKES 
      },
      {
         user:'COMMENT_BY',
         message: TEXT,
         dateCreated: DATE_TIME,
         like: LIKES
      }
   ]
}
So while showing the data, in RDBMS you need to join three tables and in MongoDB, data will be shown from one collection only.

There are 2 ways in which the relationships between the data can be established in MongoDB:
    1. Reference Documents
    2.  Documents


Referenced Documents
--------------------
A reference to the data in one collection will be used in connecting the data between the collections.

Consider 2 collections books and authors as shown below:

{
   title: "Java in action",
   author: "author1",
   language: "English",
   publisher: {
              name: "My publications",
              founded: 1990,
              location: "SF"
            }
}

{
   title: "Hibernate in action",
   author: "author2",
   language: "English",
   publisher: {
              name: "My publications",
              founded: 1990,
              location: "SF"
            }
}



In the above example, the publisher data is repeated. In order to avoid this repetition, 
we can add references of the book to the publisher data instead of using entire data of publisher in every book entry, as shown below:

{
   name: "My Publciations",
   founded: 1980,
   location: "CA",
   books: [111222333, 444555666, ..]
}

{
    _id: 111222333,
    title: "Java in action",
    author: "author1",
    language: "English"
}

{
   _id: 444555666,
   title: "Hibernate in action",
   author: "author2",
   language: "English"
}


Embedded Documents
-----------------------
In this, one collection will be embedded into another collection. 
Consider 2 collections student and address. Let us see how the address can be embedded into student collection. 
Below is an example embedding single address to student data.

{
   _id: 123,
   name: "Student1"
}

{
   _studentId: 123,
   street: "123 Street",
   city: "Bangalore",
   state: "KA"
}

{
   _studentId: 123,
   street: "456 Street",
   city: "Punjab",
   state: "HR"
}

Embedding multiple addresses can also be done. See the below example :

{
   _id: 123,
   name: "Student1"
   addresses: [
      	{
            street: "123 Street",
            city: "Bangalore",
            state: "KA"
        },

        {
            street: "456 Street",
            city: "Punjab",
            state: "HR"
        }
    ]
}




*/