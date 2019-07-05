/*

Equality	
	{<key>:<value>}	
	db.mycol.find({"by":"tutorials point"}).pretty()	
	-- where by = 'tutorials point'


Less Than	
	{<key>:{$lt:<value>}}	
	db.mycol.find({"likes":{$lt:50}}).pretty()	
	-- where likes < 50


Less Than Equals	
	{<key>:{$lte:<value>}}	
	db.mycol.find({"likes":{$lte:50}}).pretty()	
	-- where likes <= 50


Greater Than	
	{<key>:{$gt:<value>}}	
	db.mycol.find({"likes":{$gt:50}}).pretty()	
	-- where likes > 50

Greater Than Equals	
	{<key>:{$gte:<value>}}	
	db.mycol.find({"likes":{$gte:50}}).pretty()	
	-- where likes >= 50

Not Equals	
	{<key>:{$ne:<value>}}	
	db.mycol.find({"likes":{$ne:50}}).pretty()	
	-- where likes != 50


Using AND and OR Together
db.mycol.find({"likes": {$gt:10}, $or: [{"by": "tutorials point"},{"title": "MongoDB Overview"}]})


*/

   