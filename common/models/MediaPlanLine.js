'use strict';

module.exports = function(mediaplan) {
    mediaplan.beforeRemote('find', function(ctx, instance, next) {
		console.log(ctx.args.filter);
		if(!ctx.args.filter || !ctx.args.filter.limit) {
			console.log('forcing limit!');
			if(!ctx.args.filter.limit){
				ctx.args.filter.limit
			}else if(!ctx.args.filter) ctx.args.filter = {};
			ctx.args.filter.limit = 10;
		}
		next();
	});
};
