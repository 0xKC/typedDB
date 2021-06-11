export function isStoreAvailableInDB(db:IDBDatabase,storeName:String){

	return db.objectStoreName.contains(storeName);

}
