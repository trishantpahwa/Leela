/**
 * Controllers handler.
 * Dhyaan The class that manages the list of controllers of a
 * particular category.
*/
class Tapasya {
  /**
   * Create new Dhyaan
   * @param {string} resourceName Name of the resource of controller.
  */
  constructor(resourceName) {
    this.resourceName = resourceName;
    this.control = {};
  }
  /**
   * Add a middleware function to the handler list.
   * @param {string} control Name of the controller function.
   * @param {function} func The controller function
  */
  add(control, func) {
    this.control[control] = func;
  }
  /**
   * Add multiple middleware functions to the handler list.
   * @param {list} controls List of names of the controller functions.
   * @param {list} funcs The list controller functions.
  */
  addMultiple(controls, funcs) {
    if (controls.length != funcs.length) return;
    for (const control in controls) {
      if (Object.prototype.hasOwnProperty.call(controls, control)) {
        this.control[controls[control]] = funcs[control];
      }
    }
  }
}

module.exports = {
  Tapasya: Tapasya,
};
