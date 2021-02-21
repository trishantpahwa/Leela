/**
 * Middlewares handler.
 * Dhyaan The class that manages the list of middlewares of a
 * particular category.
*/
class Dhyaan {
  /**
   * Create new Dhyaan
  */
  constructor() {
    this.middleware = {};
  }
  /**
   * Add a middleware function to the handler list.
   * @param {string} middleware Name of the middleware function.
   * @param {function} func The middleware function.
  */
  add(middleware, func) {
    this.middleware[middleware] = func;
  }
  /**
   * Add multiple middleware functions to the handler list.
   * @param {list} middlewares List of names of the middleware functions.
   * @param {list} funcs The list middleware functions.
  */
  addMultiple(middlewares, funcs) {
    if (middlewares.length != funcs.length) return;
    for (const middleware in middlewares) {
      if (Object.prototype.hasOwnProperty.call(middlewares, middleware)) {
        this.middleware[middlewares[middleware]] = funcs[middleware];
      }
    }
  }
}

module.exports = {
  Dhyaan: Dhyaan,
};
