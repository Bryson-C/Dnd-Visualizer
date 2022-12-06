
export function load(get: string, or: any): any {
    if (localStorage.getItem(get) !== null) return or;
    return localStorage.getItem(get);
}
export function save(set: string, data: any) {
    localStorage.setItem(set, data)
}