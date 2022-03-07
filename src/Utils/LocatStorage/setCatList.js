const store = window.localStorage

function setCatObject (key, value) {
    if(!key) return;

    store.removeItem(key);

    store.setItem(key, value)
}

export default setCatObject ;
