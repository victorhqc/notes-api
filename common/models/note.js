module.exports = function(Note) {
    Note.observe('before save', function addTimeStamps(ctx, next) {

        let now = new Date();
        if(ctx.instance) {
            ctx.instance.updatedAt = now;
            if( ctx.isNewInstance ) {
                ctx.instance.createdAt = now;
            }
        }

        next();
    });
};
