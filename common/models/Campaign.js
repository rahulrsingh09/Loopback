'use strict';

module.exports = function(mediaplan) {

	  
    mediaplan.beforeRemote('find', function(ctx, instance, next) {
		
	if(!ctx.args.filter || !ctx.args.filter.limit) {
			 if(!ctx.args.filter) ctx.args.filter = {};
			ctx.args.filter.limit = 10;
		}
		next();
	});

	mediaplan.observe('impression', function (ctx, next) {
		console.log("mohan");
		if (ctx.instance) {
		  var sum = 0;
	  
		  mediaplan.app.models.mediaplanline.find({
			where: {
			  mediaplan: ctx.instance.id
			},
			fields: {
			  givenNumericProperty: true
			}
		  }, function (err, mediaplanline) {
			if (err) return next(err);
	  
			if (mediaplanline.length) {
			  mediaplanline.forEach(function (model2) {
				sum += mediaplanline.givenNumericProperty;
			  });
	  
			  ctx.instance.calculatedProperty = sum;
			}
	  
			return next();
		  });
	  
		} else {
		  return next();
		}
	  });

	
};


