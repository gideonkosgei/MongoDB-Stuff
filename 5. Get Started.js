/*




show databases or show dbs
show collections

>db
To check your currently selected database, use the command db

>show dbs
If you want to check your databases list, use the command show dbs.



$ use <database name>
This creates a new database if the database doesn't already exist
However, the database isn't actually created until you insert data into it:

$ show databases or show dbs
Lists all databases

$ db.artists.insert({ artistname: "The Tea Party" })
creates a collection and inserts a document into it

$ db.artists.find()
view the contents of your database

Create Collections
------------------
Two ways to Create a Collection
  1.on the fly when inserting a document (using the insert() method.
      db.artists.insert({ artistname: "The Tea Party" })
  2.explicitly, using the createCollection() method
      db.createCollection("producers")


Create Documents
-----------------
Three methods for inserting documents into a database:
1. insert()
  inserts one or more documents into a collection. Each document is provided as a parameter
  db.<collectionName>.insert({ name: "value" }) example
  db.artists.insert({ artistname: "Jorn Lande" })

  Note that MongoDB has created an _id field for the documents
      If you don't specify one, MongoDB will create one for you. 
  However, you can provide this field when doing the insert if you prefer to have control over the value of the _id field

  db.artists.insert({ _id: 1, artistname: "AC/DC" })
  
  _id structure
      a 4-byte value representing the seconds since the Unix epoch,
      a 3-byte machine identifier,
      a 2-byte process id, and
      a 3-byte counter, starting with a random value.

      Multiple Documents
  ------------------
  Documents are provided as an array

      db.artists.insert(
         [
           { artistname: "The Kooks" },
           { artistname: "Bastille" },
           { artistname: "Gang of Four" }
         ]
      )


  Embedded Documents
  ------------------
  A document can contain other documents, arrays, and arrays of documents.
  You can also provide multiple name/value pairs within a document by separating them with a comma.

      db.artists.insert({
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
          })

2. insertOne()
  db.musicians.insertOne({ _id: 1, name: "Ian Gillan", instrument: "Vocals" })
      output is different to when you use the insert() method

  Embedded Documents
  ------------------
  Same with insert(), you can insert embedded documents and arrays of documents:

3. insertMany()
  to insert multiple documents:
  
  db.musicians.insertMany(
     [
       { _id: 2, name: "Ian Paice", instrument: "Drums", born: 1948 },
       { _id: 3, name: "Roger Glover", instrument: "Bass", born: 1945 },
       { _id: 4, name: "Steve Morse", instrument: "Guitar", born: 1954 },
       { _id: 5, name: "Don Airey", instrument: "Keyboards", born: 1948 },
       { _id: 6, name: "Jeff Martin", instrument: "Vocals", born: 1969 },
       { _id: 7, name: "Jeff Burrows", instrument: "Drums", born: 1968 },
       { _id: 8, name: "Stuart Chatwood", instrument: "Bass", born: 1969 },
     ]
  )

      Embedded Documents
  ------------------
  Same with insert(), you can insert embedded documents and arrays of documents:

  */
