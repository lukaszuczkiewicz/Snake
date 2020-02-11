export class Record {
  static get(): number {
    return parseInt(JSON.parse(localStorage.getItem('record')));
  }
  static save(record: number): void {
    const current = this.get();
    if (record && record > current) localStorage.setItem('record', JSON.stringify(record));
  }
}