/*
Three methods for deleting documents:
	db.collection.deleteOne()
	db.collection.deleteMany()
	db.collection.remove()

The db.collection.deleteOne() Method
------------------------------------
Deletes only one document, even if more than one document matches the criteria.
	db.artists.deleteOne( { artistname: { $in: [ "The Kooks", "Gang of Four", "Bastille" ] } } )

The db.collection.deleteMany() Method
-------------------------------------
Deletes all documents that match the criteria.
	db.artists.deleteMany( { artistname: { $in: [ "The Kooks", "Gang of Four", "Bastille" ] } } )

The db.collection.remove() Method
------------------------------------
Deletes a single document or all documents that match the specified criteria.
	db.artists.remove({ artistname: "AC/DC" })		
	db.person.remove({firstname:'gideon'})
*/
	
	
