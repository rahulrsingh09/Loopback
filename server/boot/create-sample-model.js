var async = require('async');
module.exports = function(app) {
  //data sources
  var mongoDs = app.dataSources.localmysql; // 'name' of your mongo connector, you can find it in datasource.json
  var mysqlDs = app.dataSources.localmysql;
  //create all models
  async.parallel({
   // reviewers: async.apply(createReviewers),
   // coffeeShops: async.apply(createCoffeeShops),
  }, function(err, results) {
    if (err) throw err;
   // createReviews(results.reviewers, results.coffeeShops, function(err) {
      console.log('> models created sucessfully');
   // });
  });
  
  
};