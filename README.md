# Loopback
Learning LoopBack

Make sure you have a version of Node (6+) . It may throw error for any version below 6 . 

To use this repository do a git clone https://github.com/rahulrsingh09/Loopback.git 

After Cloning the repository do a  npm install

This will install all the dev dependencies for loopback and custom functionality . 

In order for this repository to function out of the box  there are certain settings that need to be done on the local machine.

There are two different datasources i am using for this the first one is just for learning loopback (localmysql) in outs nad other is for our custom functionality (usermysql).

Go to mysql and create a local schema named loopback and C1X-BANNERG, add the dependencies in datasources.json file in server folder , better keep the same and just replicate that in local db as there are dependecies assocaited with the datasource.

For the user table of C1X-BANNERG refrer to platform db user table with out associations. Just replicate that table in local

After this open server -> boot -> create-sample-model.js and run the file using node this will create all the tables for the datasource loopback and can be used for testing.

After this go to the root folder and run node . this will start the server  and you can see all the api's in https://localhost:3000/explorer

To turn the debug mode on do a DEBUG=* node . which will log all the values when server starts.


Official loopback documentation - http://loopback.io/doc/en/lb3/index.html


