import { Injectable } from '@angular/core';
import { Track } from './track';
import { Artist } from './artist';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/RX';

@Injectable()
export class TrackService {

  constructor(public db: AngularFirestore) { }

  public getTop4() {
    return [
      new Track('Asa enao ra mba mahatsiaro ahy', new Artist('Odyai'), 'https://i.ytimg.com/vi/Adn4-ecLlhc/maxresdefault.jpg'),
      new Track('Mifameno izaho sy ianao', new Artist('Mr Saida'),
        'http://popmuse.mg/wp-content/uploads/2015/11/mr_sayda_popmuse_mini.jpg'),
      new Track('Boto Love', new Artist('Skaiz'),
        'http://s2.hulkshare.com/song_images/original/8/c/6/8c61a4ba4226389d3ffdfa69d04b6d4b.jpg?dd=1388552400'),
      new Track('Miady varotra', new Artist('Tsota'),
        'http://tononkira.serasera.org/media/tononkira/o/1743599_1452742484961567_284466375_n.jpg'),
    ];
  }

  public getTracks(): Observable<Track[]> {
    const tracks = [];
    const trackSubject = new Subject<Track[]>();
    const trackCollection = this.db.collection<Track>('tracks', ref => ref.limit(6));

    trackCollection.snapshotChanges().map(actions => {
      actions.map(a => {
        const data = a.payload.doc.data() as Track;
        const id = a.payload.doc.id;
        this.db.doc('artists/' + a.payload.doc.data().artistId).snapshotChanges().map(action => {
          const artist = action.payload.data() as Artist;
          data.artist = artist;
          tracks.push(data);
        }).subscribe(res => {
          trackSubject.next(tracks);
        });
      });
    }).subscribe(data => {
      trackSubject.complete();
    }, (error) => {
      trackSubject.error(error);
    }, () => trackSubject.complete());

    return trackSubject;
  }

  public getArtist(id) {
    return this.db.collection<Artist>('artists').ref(id).map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Track;
        return { id, ...data };
      });
    });
  }

}
