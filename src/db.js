import { openDB } from "idb";
const DB_VERSION = 1;
const DB_NAME = "stockTrackerDb";
const DB_STORE_NAME = "stockData";
const DB_STORE_KEY = "stockPrices";

export const openDatabase = async () => {
  let db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      db.createObjectStore(DB_STORE_NAME);
    },
  });
  return db;
};

const fetchFromNetwork = async () => {
  let response = await fetch("/.netlify/functions/stocks");
  let stockData = response.json().then((json) => json.body);
  return stockData;
};

export const fetchAndSaveToDB = async (dbPromise) => {
  const stockData = await fetchFromNetwork();
  if (!stockData) return Promise.resolve([]);
  await dbPromise
    .transaction(DB_STORE_NAME, "readwrite")
    .objectStore(DB_STORE_NAME)
    .put(stockData, DB_STORE_KEY);
  return Promise.resolve(stockData);
};

export const getDataFromDB = async (dbPromise) => {
  const newResultsPromise = fetchAndSaveToDB(dbPromise);
  const dbResults = await dbPromise
    .transaction(DB_STORE_NAME, "readwrite")
    .objectStore(DB_STORE_NAME)
    .get(DB_STORE_KEY);
  return Promise.resolve({ dbResults, newResultsPromise });
};
