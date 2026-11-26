export type DatasetRecord = { id: string; name: string; source: string; rows: number; columns: number; createdAt: string; data: unknown[] };
const DB_NAME = 'dsi-local-db';
const STORE = 'datasets';
function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => { if (!request.result.objectStoreNames.contains(STORE)) request.result.createObjectStore(STORE, { keyPath: 'id' }); };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error('Gagal membuka IndexedDB'));
  });
}
export async function getDatasets(): Promise<DatasetRecord[]> {
  const db = await openDb();
  return new Promise((resolve, reject) => { const req = db.transaction(STORE, 'readonly').objectStore(STORE).getAll(); req.onsuccess = () => resolve(req.result as DatasetRecord[]); req.onerror = () => reject(req.error); });
}
export async function saveDataset(dataset: DatasetRecord): Promise<void> {
  const db = await openDb();
  return new Promise((resolve, reject) => { const req = db.transaction(STORE, 'readwrite').objectStore(STORE).put(dataset); req.onsuccess = () => resolve(); req.onerror = () => reject(req.error); });
}
export async function deleteDataset(id: string): Promise<void> {
  const db = await openDb();
  return new Promise((resolve, reject) => { const req = db.transaction(STORE, 'readwrite').objectStore(STORE).delete(id); req.onsuccess = () => resolve(); req.onerror = () => reject(req.error); });
}
