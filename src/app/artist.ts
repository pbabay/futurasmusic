export class Artist {
    public id;

    constructor(public name: string) {}

    getId() {
        return this.id;
    }

    setId(id: string) {
        this.id = id;
    }
}
