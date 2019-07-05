/*
Sharding in MongoDB
--------------------
Sharding is the mechanism of storing data across multiple machines. 
The basic principle of this feature of MongoDB is to support the data growth which is expected any application. 
Because, at one point of time the accessibility of any application will definitely result in increase of the data growth and it would be difficult to accommodate such a growth of data.

Considering the data growth which is really difficult to manage in a single system, it is an ideal way to have a cluster containing the replica set of the data. 
Hence, a horizontal scaling of the data is required and sharding does this in MongoDB.

Sharding in simple just adds more machines to handle the sudden or rapid growth of data in an application.

Need for Sharding in MongoDB :
    1. Vertical scaling is too scaling
    2. In data backup process all the data will be written to the master nodes.
    3. Space in local disk may not be huge enough to handle the data growth.


*/