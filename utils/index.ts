export function isStoreAvailableInDB(db:IDBDatabase,storeName:string){

	return db.objectStoreNames.contains(storeName);

}
