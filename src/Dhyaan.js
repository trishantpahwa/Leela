class Dhyaan {
    constructor() {
        this.middleware = {};
    }
    add(middleware, func) {
        this.middleware[middleware] = func;
    }
    addMultiple(middlewares, funcs) {
        if (middlewares.length != funcs.length) return;
        for (let middleware in middlewares) {
            this.middleware[middlewares[middleware]] = funcs[middleware];
        }
    }
}

module.exports = {
    Dhyaan: Dhyaan
};