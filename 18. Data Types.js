/*

Datatypes in MongoDB
---------------------
It is known that the MongoDB stores the JSON data in a binary encoded format called BSON, 
where JSON data model actually extends the BSON in order to provide more flexibility with the additional data types and helps in easily
encoding and decoding the data across various programming languages. 

By default, there is no support for the datatypes like date in JSON. But, BSON provides that feature.

MongoDB supports the below list of datatypes. Each datatype in MongoDB possess a unique number.


Datatype	            Number	    Description
---------               -------     -----------------------------------
Double	                1	        Used to stored floating point values
String	                2	        Commonly used datatype and it is UTF-8 valid
Object	                3	        Used for storing embedded objects
Array	                4	        Used for storing embedded objects
Binary Data	            5	        Used to store binary data
Undefined	            6	        Used to store undefined value
Object Id	            7	        Used to store document's ID
Boolean	                9	        Used to store Boolean value
Date	                10	        Used to store current date time in UNIX format.
Null	                11	        Used to store null value
Regular Expression	    12	        Used to store regex
Javascript	            13	        Used to store JavaScript data without scope
Symbol	                14	        Basically used to store string, but reserved for languages that use specific symbol
Javascript with scope	15	        Used to store JavaScript data with scope
Integer	                16 & 18	    Used to store numerical value
Timestamp	            10	        Used to track when a document is modified.
Min/Max Key	            255/127 	Used to compare value against lowest and highest BSON elements


*/