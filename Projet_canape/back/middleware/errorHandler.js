export function errorHandler(err, req, res, next) {
  const statusCode = err.status || 500;
  const message = err.message || 'Une erreur est survenue sur notre serveur';

  res.status(err.status || 500).render('erreur', {
    statusCode: statusCode,
    message: message,
  });
}
