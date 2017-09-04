var _ = require('lodash');
var path = require('path');
var fs = require('fs');
var loopback = require('loopback');
var outputPath = '/home/rahul/Loopback/Helloworld/common/models';
var loopback = require('loopback');
var ds = loopback.createDataSource('mysql', {
  "host": "localhost",
  "port": 3306,
  "database": "C1X-BANNERG",
  "username": "root",
  "password": "root"
});
ds.discoverModelDefinitions({ schema: 'C1X-BANNERG' }, function (err, models) {

    var count = models.length;
  
  _.each(models, function(model){
    //console.log(model.name);
    ds.discoverSchema(model.name, {  associations: false }, function(err, schema){
      //console.log("GG0");
      //console.log("GG"+schema.name);
      var outputName = outputPath + '/' +schema.name + '.json';
      fs.writeFile(outputName, JSON.stringify(schema, null, 2), function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log("JSON saved to " + outputName);
        }
      });
      fs.writeFile(outputPath + '/' + schema.name + '.js', schema.name, function(err) {
        if (err) throw err;
        console.log('Created ' + schema.name + '.json file');
      });
      count = count - 1;
      if (count === 0) {
        console.log("DONE!", count);
        ds.disconnect();
        return;
      }
    });
  })
});