const store = window.localStorage;

function getCatObject (key) {
    if(!key) return;

    const cat = store.getItem(key)
    return cat;
}

export default getCatObject ;