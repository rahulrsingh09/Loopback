'use strict';

module.exports = function(mediaplan) {

	  
  mediaplan.beforeRemote('find', function(ctx, instance, next) {
		if(!ctx.args.filter || !ctx.args.filter.limit) {
			 if(!ctx.args.filter) ctx.args.filter = {};
			ctx.args.filter.limit = 10;
		}
		next();
	});



	



	
};


