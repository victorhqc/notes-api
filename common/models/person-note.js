module.exports = function(PersonNote) {
    PersonNote.observe('before save', function addTimeStamps(ctx, next) {

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
