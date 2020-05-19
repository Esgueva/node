const boom = require('@hapi/boom');

function scopesValidationHandler(allowedScopes) {
  return (req, res, next) => {
    if (!req.user || (req.user && !req.user.scopes))
      next(boom.unauthorized('Missing scopes'));

    const hasAccess = allowedScopes
      .map(allowedScopes => req.user.scopes.includes(allowedScopes))
      .find(allowed => Boolean(allowed));

    if (!hasAccess) {
      next(boom.unauthorized('Insufficient scopes'));
    } else {
      next();
    }
  };
}

module.exports = scopesValidationHandler;
