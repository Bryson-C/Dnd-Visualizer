export function load(get, or) {
    if (localStorage.getItem(get) !== null)
        return or;
    return localStorage.getItem(get);
}
export function save(set, data) {
    localStorage.setItem(set, data);
}
