export class Record {
    static get() {
        return parseInt(JSON.parse(localStorage.getItem('record')));
    }
    static save(record) {
        const current = this.get();
        if (record && record > current)
            localStorage.setItem('record', JSON.stringify(record));
    }
}
