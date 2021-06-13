"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStoreAvailableInDB = void 0;
function isStoreAvailableInDB(db, storeName) {
    return db.objectStoreNames.contains(storeName);
}
exports.isStoreAvailableInDB = isStoreAvailableInDB;
