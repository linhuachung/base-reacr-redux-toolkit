export const SessionStore = {
    set: (key, value) => sessionStorage.setItem(key, JSON.stringify(value)),
    get: (key) => JSON.parse(sessionStorage.getItem(key)),
    remove: (key) => sessionStorage.removeItem(key),
    isExist: (key) => localStorage.getItem(key) !== null
}

export const LocalStore = {
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
    get: (key, noParse) => (noParse ? localStorage.getItem(key) : JSON.parse(localStorage.getItem(key))),
    remove: (key) => localStorage.removeItem(key),
    isExist: (key) => localStorage.getItem(key) !== null
}
