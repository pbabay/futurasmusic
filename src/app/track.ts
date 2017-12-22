import { Artist } from './artist';

export class Track {
    public id;

    constructor(public title: string, public artist: Artist, public cover?: string) {}

    getId() {
        return this.id;
    }

    setId(id: string) {
        this.id = id;
    }
}
