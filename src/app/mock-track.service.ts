import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class MockTrackService {

  items: Observable<any[]>;

  // [
  //   new Track('Izany vehivay zany', new Artist('Jeneraly'), 'https://i.ytimg.com/vi/f8Xe_N4g59k/hqdefault.jpg'),
  //   new Track('Tsiky sy tomany', new Artist('Raboussa'),
  //     'http://www.malagasyclubdefrance.com/wp-content/uploads/2015/03/RABOUSSA-300x300.jpg'),
  //   new Track('Mimoza', new Artist('Mahaleo'),
  //     'https://upload.wikimedia.org/wikipedia/en/1/17/Mahaleo_super_group_of_musicians_from_Madagascar_in_2007.jpg'),
  //   new Track('Voa mitsiry', new Artist('Voangy'), 'https://png.icons8.com/color/100/ddd/music-record.png'),
  //   new Track('Hafahafa', new Artist('Martiora'), 'http://popmuse.mg/wp-content/uploads/2015/05/martiora-freedom.jpg'),
  //   new Track('Ilazao izy', new Artist('Lôla'),
  //     'https://www.madatsara.com/media/cache/my_thumb/assets/flyers/suisse_lola_au_grand_complet.jpeg'),
  // ];

  artists = [
    {
      name: 'Lôla',
      tracks : [
        {title: 'Ilazao Izy', cover: 'https://www.madatsara.com/media/cache/my_thumb/assets/flyers/suisse_lola_au_grand_complet.jpeg'}
      ]
    },
    {
      name: 'Martiora',
      tracks: [
        {title: 'Hafahafa', cover: 'http://popmuse.mg/wp-content/uploads/2015/05/martiora-freedom.jpg'}
      ]
    },
    {
      name: 'Voangy',
      tracks: [
        {title: 'Fitia vao mitsiry', cover: 'https://png.icons8.com/color/100/ddd/music-record.png'}
      ]
    },
    {
      name: 'Mahaleo',
      tracks: [
        {title: 'Mimoza',
          cover: 'https://upload.wikimedia.org/wikipedia/en/1/17/Mahaleo_super_group_of_musicians_from_Madagascar_in_2007.jpg'}
      ]
    },
    {
      name: 'Raboussa',
      tracks: [
        {title: 'Tsiky sy tomany', cover: 'http://www.malagasyclubdefrance.com/wp-content/uploads/2015/03/RABOUSSA-300x300.jpg'}
      ]
    },
    {
      name: 'Jeneraly',
      tracks: [
        {title: 'Izany vehivavy izany', cover: 'https://i.ytimg.com/vi/f8Xe_N4g59k/hqdefault.jpg'}
      ]
    }
  ];

  constructor(public db: AngularFirestore) {}

  syncArtists() {
    const artistCollection = this.db.collection('artists');
    this.artists.forEach(element => {
      artistCollection.add({name: element.name}).then(value => {
        element.tracks.forEach(track => {
          this.db.collection('tracks').add({title: track.title, cover: track.cover, artistId: value.id});
        });
      });
    });
  }

}
