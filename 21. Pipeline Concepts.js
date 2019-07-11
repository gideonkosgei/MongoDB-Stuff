/*
Pipeline Concept
------------------
In UNIX command, shell pipeline means the possibility to execute an operation on some input and use the
output as the input for the next command and so on. 

MongoDB also supports same concept in aggregation framework.

Following are the possible stages in aggregation framework −

1. $project − Used to select some specific fields from a collection.
2. $match − This is a filtering operation and thus this can reduce the amount of documents that are given as input to the next stage.
3. $group − This does the actual aggregation as discussed above.
4. $sort − Sorts the documents.
5. $skip − With this, it is possible to skip forward in the list of documents for a given amount of documents.
6. $limit − This limits the amount of documents to look at, by the given number starting from the current positions.
7. $unwind − This is used to unwind document that are using arrays. When using an array, the data is
            kind of pre-joined and this operation will be undone with this to have individual documents again. Thus
            with this stage we will increase the amount of documents for the next stage.


*/
