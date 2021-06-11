"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStoreAvailableInStore = void 0;
function isStoreAvailableInStore(db, storeName) {
    return db.objectStoreName.contains(storeName);
}
exports.isStoreAvailableInStore = isStoreAvailableInStore;
