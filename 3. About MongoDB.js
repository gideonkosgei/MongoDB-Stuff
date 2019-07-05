/*

MongoDB is an open source database management system (DBMS) 
It uses a document-oriented data model. 
It is considered a NoSQL database, as it doesn't use the relational model
It doesn't use SQL as its query language

The document-oriented model enables MongoDB to store semi-structured data which doesn't require a fixed schema. 
It can achieve this through the use of JSON documents.
MongoDB is used by some of the largest companies in the world, including Facebook, Google, Nokia, MTV Networks, Cisco, Forbes


MongoDB is also a cross platform DBMS, currently supporting 
	Windows,
	Mac, 
	Linux

In the document-oriented model, data is stored within documents of a collection. 
In the relational model, data is stored within rows of a table


RDBMS           MongoDB
------------    -------------------
Database        Database
Table           Collection
Tuple/Row       Document
column          Field
Table Join      Embedded Documents
Primary Key     Primary Key


The Collections
---------------
A collection is a group of documents. 
A collection typically contains documents that have a similar topic (like Users, Products, Posts, etc).
Collections are therefore, in many ways, similar to tables from the relational model


The Documents
-------------
Documents are stored as JSON documents. 
JSON (JavaScript Object Notation) is a standard that facilitates data interchange. 
JSON documents are similar to XML documents in that data can be presented in a hierarchical way, and can be read by humans and computers alike.
The _id field is the unique identifier for a document.

{
    artistname : "Deep Purple",
    albums : [
                {
                    album : "Machine Head",
                    year : 1972,
                    genre : "Rock"
                }, 
                {
                    album : "Stormbringer",
                    year : 1974,
                    genre : "Rock"
                }
            ]
}



Schemaless
----------
Each JSON document in a collection can contain its own structure. 
There is no fixed schema that limits the type of data that can be entered into a MongoDB database

This is in contrast to a relational database where, you must create the schema first 
(i.e. define the tables, columns, data types, etc), before entering any data. 
If data doesn't adhere to the schema, it doesn't go into the database

*/
