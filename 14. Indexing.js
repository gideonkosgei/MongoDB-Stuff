/*

Indexes support the efficient resolution of queries. 
Without indexes, MongoDB must scan every document of a collection to select those documents that match the query statement. 
This scan is highly inefficient and require MongoDB to process a large volume of data.

Indexes are special data structures, that store a small portion of the data set in an easy-to-traverse form. 
The index stores the value of a specific field or set of fields, ordered by the value of the field as specified in the index.

The ensureIndex() Method
------------------------
To create an index you need to use ensureIndex() method of MongoDB.

Syntax
The basic syntax of ensureIndex() method is as follows().

> b.COLLECTION_NAME.ensureIndex({KEY:1})
Here key is the name of the field on which you want to create index and 1 is for ascending order. To create index in descending order you need to use -1.

Example
>db.mycol.ensureIndex({"title":1})
>
In ensureIndex() method you can pass multiple fields, to create index on multiple fields.

>db.mycol.ensureIndex({"title":1,"description":-1})
>



*/