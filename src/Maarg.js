const express = require('express');
const router = new express.Router();

/**
 * Routes handler.
 * Maarg The class that manages the routes and methods.
*/
class Maarg {
  /**
   * Create new Maarg
   * @param {string} raasta The HTTP method of the route.
   * @param {string} aastha The path of the route.
   * @param {string} dhyaan The list of middlewares used by ther route.
   * @param {string} tapasya The list of controllers used by ther route.
  */
  constructor(raasta, aastha, dhyaan = [], tapasya) {
    switch (raasta) {
      case 'ALL':
        if (dhyaan && dhyaan.length) {
          router.use(aastha, ...dhyaan, ...tapasya);
        } else router.use(aastha, ...tapasya);
        break;
      case 'CONNECT':
        if (dhyaan && dhyaan.length) {
          router.connect(aastha, ...dhyaan, ...tapasya);
        } else router.connect(aastha, ...tapasya);
        break;
      case 'DELETE':
        if (dhyaan && dhyaan.length) {
          router.delete(aastha, ...dhyaan, ...tapasya);
        } else router.delete(aastha, ...tapasya);
        break;
      case 'GET':
        if (dhyaan && dhyaan.length) {
          router.get(aastha, ...dhyaan, ...tapasya);
        } else router.get(aastha, ...tapasya);
        break;
      case 'HEAD':
        if (dhyaan && dhyaan.length) {
          router.head(aastha, ...dhyaan, ...tapasya);
        } else router.head(aastha, ...tapasya);
        break;
      case 'OPTIONS':
        if (dhyaan && dhyaan.length) {
          router.options(aastha, ...dhyaan, ...tapasya);
        } else router.options(aastha, ...tapasya);
        break;
      case 'PATCH':
        if (dhyaan && dhyaan.length) {
          router.patch(aastha, ...dhyaan, ...tapasya);
        } else router.patch(aastha, ...tapasya);
        break;
      case 'POST':
        if (dhyaan && dhyaan.length) {
          router.post(aastha, ...dhyaan, ...tapasya);
        } else router.post(aastha, ...tapasya);
        break;
      case 'PUT':
        if (dhyaan && dhyaan.length) {
          router.put(aastha, ...dhyaan, ...tapasya);
        } else router.put(aastha, ...tapasya);
        break;
      case 'TRACE':
        if (dhyaan && dhyaan.length) {
          router.trace(aastha, ...dhyaan, ...tapasya);
        } else router.trace(aastha, ...tapasya);
        break;
      default:
        console.warn('Invalid method');
        break;
    }
    return router;
  }
}

module.exports = {
  Maarg,
};
