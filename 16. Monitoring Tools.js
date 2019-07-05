/*

To monitor your deployment, MongoDB provides some of the following commands −

1. mongostat
-------------------
This command checks the status of all running mongod instances and return counters of database operations.
These counters include inserts, queries, updates, deletes, and cursors. 
Command also shows when you’re hitting page faults, and showcase your lock percentage. 
This means that you're running low on memory, hitting write capacity or have some performance issue.

To run the command, start your mongod instance. In another command prompt, go to bin directory of your mongodb installation and type mongostat.

D:\set up\mongodb\bin>mongostat


2. mongotop
------------------
This command tracks and reports the read and write activity of MongoDB instance on a collection basis. 
By default, mongotop returns information in each second, which you can change it accordingly. 
You should check that this read and write activity matches your application intention, and you’re not firing too many writes to the database at a time, 
reading too frequently from a disk, or are exceeding your working set size.

To run the command, start your mongod instance. In another command prompt, go to bin directory of your mongodb installation and type mongotop.

D:\set up\mongodb\bin>mongotop


To change mongotop command to return information less frequently, specify a specific number after the mongotop command.

D:\set up\mongodb\bin>mongotop 30
The above example will return values every 30 seconds.



*/