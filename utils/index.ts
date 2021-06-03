export function isStoreAvailableInStore(db:IDBDatabase,storeName:String){

	return db.objectStoreName.contains(storeName);

}
