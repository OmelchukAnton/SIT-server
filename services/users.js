function getUserById(id) {
    return new Promise((resolve, reject) => {
        mongoose.model('users').find({ _id: req.params._id}, function(err, _id) {
            resolve(_id);
        });
    });
}
