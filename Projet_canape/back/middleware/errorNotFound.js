export function errorNotFound(req, res, next) {
    res.status(404).render('error', {
        statusCode: 404,
        message: ` 🔍 La page ${req.originalUrl} que vous cherchez n'existe pas.`
    });
}