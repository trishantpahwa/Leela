class Tapasya {
    constructor(resourceName) {
        this.resourceName = resourceName;
        this.control = {};
    }
    add(control, func) {
        this.control[control] = func;
    }
    addMultiple(controls, funcs) {
        if (controls.length != funcs.length) return;
        for (let control in controls) {
            this.control[controls[control]] = funcs[control];
        }
    }
}

module.exports = {
    Tapasya: Tapasya
};