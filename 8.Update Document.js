/*

Use the update() method or save() method to update documents
The update() method updates values in an existing document or documents, 
The save() method replaces a document with the document passed in as a parameter.

However, the update() method can also replace the whole document, depending on the parameter that's passed in.

The update() Method
===================
db.musicians.update(
        { _id: 6 }, 
        { $set:{ instrument : [ "Vocals", "Guitar", "Sitar" ] } }
    )
	
Following example will set the new title 'New MongoDB Tutorial' of the documents whose title is 'MongoDB Overview'.

>db.mycol.update({'title':'MongoDB Overview'},{$set:{'title':'New MongoDB Tutorial'}})	

Some more options:

If the field does not exist, the $set operator will add a new field with the specified value, provided that the new field does not violate a type constraint.
You can also use { upsert: true } to create a new document when no document matches the query.
You can use { multi: true } to update multiple documents that meet the query criteria. 
By default, this option is set to false, so only one document is updated if you don't set it to true.

The save() Method
=================
The save() method is a cross between update() and insert(). 
When you use the save() method, if the document exists, it will be updated. If it doesn't exist, it will be created.

If you don't specify an _id field, MongoDB will create a document with an _id that contains a ObjectId value (as per an insert()).
If you specify an _id field, it performs an update with { upsert: true }, meaning, it creates a new document if no document matches the query.
    db.producers.save({ _id: 1, name: "Bob Rock" })
    

*/