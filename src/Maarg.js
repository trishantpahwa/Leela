const router = require('express').Router();

class Maarg {
    constructor(raasta, aastha, dhyaan = [], bhakti) {
        switch (raasta) {
            case 'ALL':
                if (dhyaan && dhyaan.length)
                    router.use(aastha, ...dhyaan, ...bhakti);
                else router.use(aastha, ...bhakti);
                break;
            case 'CONNECT':
                if (dhyaan && dhyaan.length)
                    router.connect(aastha, ...dhyaan, ...bhakti);
                else router.connect(aastha, ...bhakti);
                break;
            case 'DELETE':
                if (dhyaan && dhyaan.length)
                    router.delete(aastha, ...dhyaan, ...bhakti);
                else router.delete(aastha, ...bhakti);
                break;
            case 'GET':
                if (dhyaan && dhyaan.length)
                    router.get(aastha, ...dhyaan, ...bhakti);
                else router.get(aastha, ...bhakti);
                break;
            case 'HEAD':
                if (dhyaan && dhyaan.length)
                    router.head(aastha, ...dhyaan, ...bhakti);
                else router.head(aastha, ...bhakti);
                break;
            case 'OPTIONS':
                if (dhyaan && dhyaan.length)
                    router.options(aastha, ...dhyaan, ...bhakti);
                else router.options(aastha, ...bhakti);
                break;
            case 'PATCH':
                if (dhyaan && dhyaan.length)
                    router.patch(aastha, ...dhyaan, ...bhakti);
                else router.patch(aastha, ...bhakti);
                break;
            case 'POST':
                if (dhyaan && dhyaan.length)
                    router.post(aastha, ...dhyaan, ...bhakti);
                else router.post(aastha, ...bhakti);
                break;
            case 'PUT':
                if (dhyaan && dhyaan.length)
                    router.put(aastha, ...dhyaan, ...bhakti);
                else router.put(aastha, ...bhakti);
                break;
            case 'TRACE':
                if (dhyaan && dhyaan.length)
                    router.trace(aastha, ...dhyaan, ...bhakti);
                else router.trace(aastha, ...bhakti);
                break;
            default:
                console.warn('Invalid method')
                break;
        }
        return router;
    }
}

module.exports = {
    Maarg
};