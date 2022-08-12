module.exports = function(req, res, next) {
    if (!req.user) {
        return next(res.status(401).send('Вы не авторизованы'));
    }
    next();
};