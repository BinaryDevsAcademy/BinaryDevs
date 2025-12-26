// authDB.js

let dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open("AuthDB", 1);

    request.onerror = (event) => reject(event.target.error);

    request.onsuccess = (event) => resolve(event.target.result);

    request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains("tokens")) {
            db.createObjectStore("tokens", { keyPath: "id" });
        }
    };
});

// Save tokens and role
export async function saveAuthData(accessToken, refreshToken, role) {
    const db = await dbPromise;
    const transaction = db.transaction("tokens", "readwrite");
    const store = transaction.objectStore("tokens");

    return new Promise((resolve, reject) => {
        const request = store.put({
            id: "authData",
            accessToken,
            refreshToken,
            role
        });

        request.onsuccess = () => resolve(true);
        request.onerror = (event) => reject(event.target.error);
    });
}

// Get tokens and role
export async function getAuthData() {
    const db = await dbPromise;
    const transaction = db.transaction("tokens", "readonly");
    const store = transaction.objectStore("tokens");

    return new Promise((resolve, reject) => {
        const request = store.get("authData");
        request.onsuccess = (event) => resolve(event.target.result || null);
        request.onerror = (event) => reject(event.target.error);
    });
}

// Clear tokens and role
export async function clearAuthData() {
    const db = await dbPromise;
    const transaction = db.transaction("tokens", "readwrite");
    const store = transaction.objectStore("tokens");

    return new Promise((resolve, reject) => {
        const request = store.delete("authData");
        request.onsuccess = () => resolve(true);
        request.onerror = (event) => reject(event.target.error);
    });
}
